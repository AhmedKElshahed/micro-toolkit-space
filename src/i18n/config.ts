export const languages = [
  { code: "en", name: "English", flag: "🇺🇸", dir: "ltr" },
  { code: "es", name: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "fr", name: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "it", name: "Italiano", flag: "🇮🇹", dir: "ltr" },
  { code: "pt", name: "Português", flag: "🇵🇹", dir: "ltr" },
  { code: "zh", name: "中文", flag: "🇨🇳", dir: "ltr" },
  { code: "ja", name: "日本語", flag: "🇯🇵", dir: "ltr" },
  { code: "ar", name: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "he", name: "עברית", flag: "🇮🇱", dir: "rtl" },
] as const;

export type LanguageCode = typeof languages[number]["code"];
export const defaultLanguage: LanguageCode = "en";

export const getLanguageDir = (lang: LanguageCode): "ltr" | "rtl" => {
  const language = languages.find(l => l.code === lang);
  return language?.dir || "ltr";
};
