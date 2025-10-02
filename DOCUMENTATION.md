# MicroTools - Multilingual Tools Website Documentation

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Adding a New Language](#adding-a-new-language)
3. [Adding a New Tool](#adding-a-new-tool)
4. [Adding a New Blog Post](#adding-a-new-blog-post)
5. [URL Structure](#url-structure)
6. [SEO Best Practices](#seo-best-practices)
7. [RTL Language Support](#rtl-language-support)

## Architecture Overview

### Key Features
- **Flat URL Structure**: Tools live at root or `/tools/` level (e.g., `/pdf-to-word`, `/es/pdf-to-word`)
- **Full i18n Support**: 20+ languages with localized content, slugs, and UI
- **SEO Optimized**: hreflang tags, canonical URLs, sitemaps per locale
- **Blog with Multilingual Posts**: Localized slugs, tags, and content
- **RTL Support**: Automatic dir="rtl" for Arabic, Hebrew, etc.

### Directory Structure
```
src/
├── i18n/
│   ├── config.ts           # Language configuration
│   └── translations/       # Translation files (en.json, es.json, etc.)
├── data/
│   ├── toolsRegistry.ts    # Tools configuration with localized slugs
│   ├── blogPosts.ts        # Blog posts with canonicalId for cross-language linking
│   └── blogContent.ts      # Blog post full content per language
├── hooks/
│   └── useTranslation.ts   # Translation hook
├── components/
│   ├── SEOHead.tsx         # SEO meta tags and hreflang
│   └── LanguageSwitcher.tsx # Language selection
└── pages/                   # Page components
```

## Adding a New Language

### Step 1: Update Language Configuration
Edit `src/i18n/config.ts`:

```typescript
export const languages = [
  // ... existing languages
  { code: "fr", name: "Français", flag: "🇫🇷", dir: "ltr" },
] as const;
```

For RTL languages (Arabic, Hebrew, etc.), set `dir: "rtl"`.

### Step 2: Create Translation File
Create `src/i18n/translations/fr.json` (copy from `en.json` and translate):

```json
{
  "common": {
    "viewAllTools": "Voir Tous les Outils",
    "readMore": "Lire Plus",
    ...
  },
  "header": {
    "tools": "Outils",
    "blog": "Blog",
    ...
  },
  ...
}
```

### Step 3: Import Translation File
Update `src/hooks/useTranslation.ts`:

```typescript
import frTranslations from '@/i18n/translations/fr.json';

const translations: Record<string, any> = {
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations, // Add new language
};
```

### Step 4: Add Localized Slugs to Tools
Update `src/data/toolsRegistry.ts` to add French slugs:

```typescript
{
  id: 'pdf-to-word',
  slug: {
    en: 'pdf-to-word',
    es: 'pdf-a-word',
    fr: 'pdf-vers-word', // Add French slug
    ...
  },
  ...
}
```

### Step 5: Create Blog Posts in New Language
Add posts to `src/data/blogPosts.ts` with the same `canonicalId`:

```typescript
{
  canonicalId: "pdf-productivity-tips", // Same ID links translations
  language: "fr",
  slug: "meilleurs-outils-pdf-word",
  title: "Les 10 Meilleurs Convertisseurs PDF vers Word",
  ...
}
```

## Adding a New Tool

### Step 1: Register the Tool
Add to `src/data/toolsRegistry.ts`:

```typescript
{
  id: 'word-to-pdf',
  slug: {
    en: 'word-to-pdf',
    es: 'word-a-pdf',
    // Add for all supported languages
  },
  category: 'text-tools',
  i18nKey: 'tools.wordToPdf',
  isActive: true,
}
```

### Step 2: Add Translations
Update all translation files (e.g., `src/i18n/translations/en.json`):

```json
{
  "tools": {
    "wordToPdf": {
      "title": "Word to PDF Converter",
      "description": "Convert Word documents to PDF format",
      "metaDescription": "Free online Word to PDF converter...",
      "howToUse": "How to Convert Word to PDF",
      "step1": "Upload your Word document",
      "step2": "Click Convert to PDF",
      "step3": "Download your PDF file",
      "seoContent": {
        "title": "Professional Word to PDF Conversion",
        "content": "Long SEO-optimized content (200-300 words)..."
      }
    }
  }
}
```

### Step 3: Create Tool Page Component
Create `src/pages/WordToPdf.tsx`:

```tsx
import { useTranslation } from "@/hooks/useTranslation";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";

const WordToPdf = () => {
  const { t, currentLanguage } = useTranslation();
  
  const baseUrl = "https://yourdomain.com";
  const currentPath = currentLanguage === 'en' 
    ? '/word-to-pdf' 
    : `/${currentLanguage}/word-a-pdf`;
  
  const alternates = [
    { lang: 'en', url: `${baseUrl}/word-to-pdf` },
    { lang: 'es', url: `${baseUrl}/es/word-a-pdf` },
    // Add all languages
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title={t('tools.wordToPdf.title') + " - MicroTools"}
        description={t('tools.wordToPdf.metaDescription')}
        canonical={`${baseUrl}${currentPath}`}
        alternates={alternates}
      />
      <Header />
      
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <h1 className="text-4xl font-bold mb-6">
            {t('tools.wordToPdf.title')}
          </h1>
          
          {/* Tool UI */}
          <div className="mb-12">
            {/* Add your tool functionality here */}
          </div>

          {/* SEO Content Block */}
          <section className="prose max-w-none">
            <h2>{t('tools.wordToPdf.seoContent.title')}</h2>
            <p>{t('tools.wordToPdf.seoContent.content')}</p>
          </section>

          {/* Ads */}
          <div className="mt-12">
            <AdPlaceholder size="leaderboard" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WordToPdf;
```

### Step 4: Add Routes
Update `src/App.tsx`:

```tsx
import WordToPdf from "./pages/WordToPdf";

// In Routes:
<Route path="/word-to-pdf" element={<WordToPdf />} />
<Route path="/es/word-a-pdf" element={<WordToPdf />} />
<Route path="/fr/word-vers-pdf" element={<WordToPdf />} />
// Add for all languages
```

## Adding a New Blog Post

### Step 1: Upload Cover Image
Add image to `src/assets/` (e.g., `blog-new-post.jpg`)

### Step 2: Create Post Entries for Each Language
Update `src/data/blogPosts.ts`:

```typescript
import blogNewPost from "@/assets/blog-new-post.jpg";

// English version
{
  canonicalId: "new-post-2024",
  language: "en",
  slug: "how-to-do-something-amazing",
  title: "How to Do Something Amazing",
  excerpt: "Learn the secrets to...",
  date: "2024-03-20",
  readTime: "5 min read",
  category: "Tutorial",
  tags: ["Tutorial", "Tips", "Productivity"],
  image: blogNewPost,
  imageAlt: "Amazing tutorial screenshot"
},

// Spanish version
{
  canonicalId: "new-post-2024", // Same ID!
  language: "es",
  slug: "como-hacer-algo-increible",
  title: "Cómo Hacer Algo Increíble",
  excerpt: "Aprende los secretos para...",
  date: "2024-03-20",
  readTime: "5 min de lectura",
  category: "Tutorial",
  tags: ["Tutorial", "Consejos", "Productividad"],
  image: blogNewPost,
  imageAlt: "Captura de pantalla del tutorial increíble"
}
```

### Step 3: Add Full Content
Update `src/data/blogContent.ts`:

```typescript
export const blogContent: Record<string, { content: string; language: string }> = {
  "how-to-do-something-amazing": {
    language: "en",
    content: `
      <h2>Introduction</h2>
      <p>Full blog content with HTML formatting...</p>
      
      <h2>Main Section</h2>
      <p>More content...</p>
    `
  },
  "como-hacer-algo-increible": {
    language: "es",
    content: `
      <h2>Introducción</h2>
      <p>Contenido completo del blog con formato HTML...</p>
    `
  }
};
```

### Step 4: Add Localized Tags (Optional)
If you want localized tag pages, create a mapping in your blog component.

## URL Structure

### Tools
- **English (default)**: `https://yourdomain.com/pdf-to-word`
- **Spanish**: `https://yourdomain.com/es/pdf-a-word`
- **French**: `https://yourdomain.com/fr/pdf-vers-word`

### Blog Posts
- **English**: `https://yourdomain.com/blog/best-free-pdf-tools`
- **Spanish**: `https://yourdomain.com/es/blog/mejores-herramientas-pdf-gratis`

### Blog Index
- **English**: `https://yourdomain.com/blog`
- **Spanish**: `https://yourdomain.com/es/blog`

## SEO Best Practices

### 1. Use SEOHead Component
Always wrap pages with `<SEOHead>`:

```tsx
<SEOHead 
  title="Page Title - MicroTools"
  description="Meta description (max 160 characters)"
  canonical="https://yourdomain.com/current-path"
  alternates={[
    { lang: 'en', url: 'https://yourdomain.com/en-path' },
    { lang: 'es', url: 'https://yourdomain.com/es/es-path' },
  ]}
  ogImage="https://yourdomain.com/image.jpg"
/>
```

### 2. Add SEO Content Blocks
Every tool page should have 200-300 words of SEO-optimized content explaining the tool's benefits.

### 3. Use Semantic HTML
- Single `<h1>` per page (main title)
- Proper heading hierarchy (`<h2>`, `<h3>`)
- Use `<section>`, `<article>`, `<aside>`, etc.

### 4. Alt Text for Images
Always provide descriptive alt text in the user's language:

```tsx
<img 
  src={image} 
  alt={t('tools.pdfToWord.imageAlt')} 
/>
```

### 5. Canonical URLs
Set canonical to the current language version (not always English).

### 6. hreflang Tags
List all available language versions + `x-default` for unmatched languages.

## RTL Language Support

### Automatic Direction
The `<SEOHead>` component automatically sets `dir="rtl"` for Arabic, Hebrew, etc.

### CSS Considerations
Use logical properties in Tailwind where possible:
- `ml-4` → `ms-4` (margin-inline-start)
- `mr-4` → `me-4` (margin-inline-end)
- `text-left` → `text-start`

### Testing RTL
Switch to Arabic or Hebrew in the language switcher to test layout.

## Fallback Handling

When a translation is missing:
1. The `useTranslation` hook falls back to English
2. Display a banner: "This content is not yet available in [language]"
3. Provide a link to the English version

## CLI Tools (Future Enhancement)

Consider creating scripts for:
1. **Validation**: Check for missing translations across languages
2. **Sitemap Generation**: Auto-generate sitemaps per locale
3. **RSS Feed Generation**: Create localized RSS feeds

## Performance Tips

1. **Lazy Load Images**: Use `loading="lazy"` on images
2. **Code Splitting**: Use React.lazy() for large components
3. **Static Generation**: Pre-render pages where possible
4. **Caching**: Cache translation files in production

## Maintenance Checklist

When updating the site:
- [ ] Update all translation files for new features
- [ ] Add localized slugs for new tools
- [ ] Create blog posts in all active languages
- [ ] Test language switcher on all pages
- [ ] Verify hreflang tags are correct
- [ ] Check RTL layout for Arabic/Hebrew
- [ ] Update sitemaps
- [ ] Test mobile responsiveness

---

## Quick Reference

### Translation Key
```tsx
const { t } = useTranslation();
t('common.search')           // "Search"
t('tools.pdfToWord.title')   // "PDF to Word Converter"
```

### Get Current Language
```tsx
const { currentLanguage } = useTranslation();
// currentLanguage = 'en', 'es', 'fr', etc.
```

### Check if RTL
```tsx
import { getLanguageDir } from '@/i18n/config';
const dir = getLanguageDir(currentLanguage); // 'ltr' or 'rtl'
```

---

For questions or issues, refer to the source code or create an issue in the project repository.
