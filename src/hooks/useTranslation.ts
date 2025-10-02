import { useState, useEffect } from 'react';
import { LanguageCode, defaultLanguage } from '@/i18n/config';
import enTranslations from '@/i18n/translations/en.json';
import esTranslations from '@/i18n/translations/es.json';

const translations: Record<string, any> = {
  en: enTranslations,
  es: esTranslations,
};

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem("selectedLanguage");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.code || defaultLanguage;
      } catch {
        return defaultLanguage;
      }
    }
    return defaultLanguage;
  });

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLanguage(event.detail.code);
    };

    window.addEventListener("languageChange" as any, handleLanguageChange);
    return () => window.removeEventListener("languageChange" as any, handleLanguageChange);
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage] || translations[defaultLanguage];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }
    
    // Fallback to English if translation not found
    if (value === undefined) {
      value = translations[defaultLanguage];
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) break;
      }
    }
    
    return value || key;
  };

  return { t, currentLanguage };
};
