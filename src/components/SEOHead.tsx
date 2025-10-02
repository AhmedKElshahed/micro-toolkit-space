import { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  alternates?: Array<{ lang: string; url: string }>;
  ogImage?: string;
}

const SEOHead = ({ title, description, canonical, alternates, ogImage }: SEOHeadProps) => {
  const { currentLanguage } = useTranslation();

  useEffect(() => {
    // Set title
    document.title = title;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set language
    document.documentElement.lang = currentLanguage;

    // Remove existing hreflang and canonical tags
    document.querySelectorAll('link[rel="alternate"]').forEach(el => el.remove());
    document.querySelectorAll('link[rel="canonical"]').forEach(el => el.remove());

    // Set canonical
    if (canonical) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonical;
      document.head.appendChild(link);
    }

    // Set hreflang alternates
    if (alternates && alternates.length > 0) {
      alternates.forEach(alt => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = alt.lang;
        link.href = alt.url;
        document.head.appendChild(link);
      });

      // Add x-default
      const defaultLink = document.createElement('link');
      defaultLink.rel = 'alternate';
      defaultLink.hreflang = 'x-default';
      defaultLink.href = alternates.find(a => a.lang === 'en')?.url || alternates[0].url;
      document.head.appendChild(defaultLink);
    }

    // Set og:image
    if (ogImage) {
      let ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (!ogImageMeta) {
        ogImageMeta = document.createElement('meta');
        ogImageMeta.setAttribute('property', 'og:image');
        document.head.appendChild(ogImageMeta);
      }
      ogImageMeta.setAttribute('content', ogImage);
    }

    // Set og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // Set og:description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

  }, [title, description, canonical, alternates, ogImage, currentLanguage]);

  return null;
};

export default SEOHead;
