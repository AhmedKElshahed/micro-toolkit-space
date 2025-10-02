export interface Tool {
  id: string;
  slug: Record<string, string>; // Localized slugs
  category: string;
  i18nKey: string;
  isActive: boolean;
}

export const toolsRegistry: Tool[] = [
  {
    id: 'pdf-to-word',
    slug: {
      en: 'pdf-to-word',
      es: 'pdf-a-word',
      fr: 'pdf-vers-word',
      de: 'pdf-zu-word',
      it: 'pdf-a-word',
      pt: 'pdf-para-word',
      zh: 'pdf-zhuan-word',
      ja: 'pdf-kara-word',
      ar: 'pdf-ila-word',
      he: 'pdf-le-word',
    },
    category: 'text-tools',
    i18nKey: 'tools.pdfToWord',
    isActive: true,
  },
  {
    id: 'image-compressor',
    slug: {
      en: 'image-compressor',
      es: 'compresor-de-imagenes',
      fr: 'compresseur-image',
      de: 'bild-kompressor',
      it: 'compressore-immagini',
      pt: 'compressor-de-imagens',
      zh: 'tupian-yasuo',
      ja: 'gazou-asshuku',
      ar: 'daght-alsuwar',
      he: 'medakhed-tmunot',
    },
    category: 'image-tools',
    i18nKey: 'tools.imageCompressor',
    isActive: true,
  },
];

export const getToolBySlug = (slug: string, lang: string): Tool | undefined => {
  return toolsRegistry.find(tool => tool.slug[lang] === slug);
};

export const getToolById = (id: string): Tool | undefined => {
  return toolsRegistry.find(tool => tool.id === id);
};
