import blogPdfProductivity from "@/assets/blog-pdf-productivity.jpg";
import blogFileFormats from "@/assets/blog-file-formats.jpg";
import blogRemoteWork from "@/assets/blog-remote-work.jpg";
import blogPrivacySecurity from "@/assets/blog-privacy-security.jpg";
import blogUpdates from "@/assets/blog-updates.jpg";
import blogKeyboardShortcuts from "@/assets/blog-keyboard-shortcuts.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  language: 'en' | 'es';
}

export const blogPosts: BlogPost[] = [
  {
    id: "pdf-productivity",
    title: "10 Ways PDF to Word Conversion Can Boost Your Productivity",
    excerpt: "Discover how converting PDFs to Word documents can streamline your workflow and save you hours of manual work.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Productivity",
    image: blogPdfProductivity,
    language: 'en'
  },
  {
    id: "pdf-productivity-es",
    title: "10 Formas en que la Conversión de PDF a Word Puede Aumentar Tu Productividad",
    excerpt: "Descubre cómo convertir PDFs a documentos Word puede optimizar tu flujo de trabajo y ahorrarte horas de trabajo manual.",
    date: "15 de Marzo, 2024",
    readTime: "5 min de lectura",
    category: "Productividad",
    image: blogPdfProductivity,
    language: 'es'
  },
  {
    id: "file-formats",
    title: "Understanding File Formats: A Complete Guide",
    excerpt: "Learn about different file formats, when to use them, and how to convert between them efficiently.",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Guide",
    image: blogFileFormats,
    language: 'en'
  },
  {
    id: "remote-work-tools",
    title: "Top 5 Online Tools Every Remote Worker Needs",
    excerpt: "Essential free online tools that can help you stay productive while working from anywhere.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Remote Work",
    image: blogRemoteWork,
    language: 'en'
  },
  {
    id: "privacy-security",
    title: "How to Protect Your Privacy When Using Online Tools",
    excerpt: "Best practices for maintaining your privacy and security when using web-based utilities.",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Security",
    image: blogPrivacySecurity,
    language: 'en'
  },
  {
    id: "february-updates",
    title: "MicroTools February Update: New Features & Improvements",
    excerpt: "Check out the latest features we've added and improvements we've made based on your feedback.",
    date: "February 20, 2024",
    readTime: "4 min read",
    category: "Updates",
    image: blogUpdates,
    language: 'en'
  },
  {
    id: "keyboard-shortcuts",
    title: "Keyboard Shortcuts to Speed Up Your Workflow",
    excerpt: "Master these keyboard shortcuts to navigate our tools faster and boost your efficiency.",
    date: "February 15, 2024",
    readTime: "5 min read",
    category: "Tips",
    image: blogKeyboardShortcuts,
    language: 'en'
  }
];
