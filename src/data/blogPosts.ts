import blogPdfProductivityImage from "@/assets/blog-pdf-productivity.jpg";
import blogFileFormatsImage from "@/assets/blog-file-formats.jpg";
import blogRemoteWorkImage from "@/assets/blog-remote-work.jpg";
import blogPrivacySecurityImage from "@/assets/blog-privacy-security.jpg";
import blogUpdatesImage from "@/assets/blog-updates.jpg";
import blogKeyboardShortcutsImage from "@/assets/blog-keyboard-shortcuts.jpg";

export interface BlogPost {
  canonicalId: string;
  language: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
}

export const blogPosts: BlogPost[] = [
  // English posts
  {
    canonicalId: "pdf-productivity-tips",
    language: "en",
    slug: "best-free-pdf-to-word-tools",
    title: "10 Best Free PDF to Word Converters in 2024",
    excerpt: "Discover the top free tools for converting PDF documents to editable Word files with our comprehensive guide.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Productivity",
    tags: ["PDF", "Word", "Conversion", "Tools"],
    image: blogPdfProductivityImage,
    imageAlt: "PDF to Word conversion tools comparison"
  },
  {
    canonicalId: "image-compression-guide",
    language: "en",
    slug: "ultimate-image-compression-guide",
    title: "The Ultimate Guide to Image Compression",
    excerpt: "Learn how to optimize your images for web and mobile without sacrificing quality.",
    date: "2024-03-10",
    readTime: "7 min read",
    category: "Guides",
    tags: ["Images", "Optimization", "Web Performance"],
    image: blogFileFormatsImage,
    imageAlt: "Image compression optimization techniques"
  },
  {
    canonicalId: "remote-work-tools",
    language: "en",
    slug: "essential-tools-remote-work",
    title: "10 Essential Tools for Remote Work Success",
    excerpt: "Boost your productivity with these must-have online tools for remote teams.",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Remote Work",
    tags: ["Remote Work", "Productivity", "Collaboration"],
    image: blogRemoteWorkImage,
    imageAlt: "Remote work productivity tools"
  },

  // Spanish posts
  {
    canonicalId: "pdf-productivity-tips",
    language: "es",
    slug: "los-mejores-conversores-pdf-a-word-gratis",
    title: "Los 10 Mejores Convertidores Gratuitos de PDF a Word en 2024",
    excerpt: "Descubre las mejores herramientas gratuitas para convertir documentos PDF a archivos Word editables con nuestra guía completa.",
    date: "2024-03-15",
    readTime: "5 min de lectura",
    category: "Productividad",
    tags: ["PDF", "Word", "Conversión", "Herramientas"],
    image: blogPdfProductivityImage,
    imageAlt: "Comparación de herramientas de conversión de PDF a Word"
  },
  {
    canonicalId: "image-compression-guide",
    language: "es",
    slug: "guia-definitiva-compresion-imagenes",
    title: "La Guía Definitiva para Comprimir Imágenes",
    excerpt: "Aprende cómo optimizar tus imágenes para web y móvil sin sacrificar calidad.",
    date: "2024-03-10",
    readTime: "7 min de lectura",
    category: "Guías",
    tags: ["Imágenes", "Optimización", "Rendimiento Web"],
    image: blogFileFormatsImage,
    imageAlt: "Técnicas de optimización de compresión de imágenes"
  },
  {
    canonicalId: "remote-work-tools",
    language: "es",
    slug: "herramientas-esenciales-trabajo-remoto",
    title: "10 Herramientas Esenciales para el Éxito del Trabajo Remoto",
    excerpt: "Aumenta tu productividad con estas herramientas online imprescindibles para equipos remotos.",
    date: "2024-03-05",
    readTime: "6 min de lectura",
    category: "Trabajo Remoto",
    tags: ["Trabajo Remoto", "Productividad", "Colaboración"],
    image: blogRemoteWorkImage,
    imageAlt: "Herramientas de productividad para trabajo remoto"
  },
];
