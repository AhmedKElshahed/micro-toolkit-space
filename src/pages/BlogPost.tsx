import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogPdfProductivity from "@/assets/blog-pdf-productivity.jpg";
import blogFileFormats from "@/assets/blog-file-formats.jpg";
import blogRemoteWork from "@/assets/blog-remote-work.jpg";
import blogPrivacySecurity from "@/assets/blog-privacy-security.jpg";
import blogUpdates from "@/assets/blog-updates.jpg";
import blogKeyboardShortcuts from "@/assets/blog-keyboard-shortcuts.jpg";

const blogPosts = [
  {
    id: "pdf-productivity",
    title: "10 Ways PDF to Word Conversion Can Boost Your Productivity",
    excerpt: "Discover how converting PDFs to Word documents can streamline your workflow and save you hours of manual work.",
    content: `Converting PDFs to Word documents has become an essential skill in today's digital workplace. Whether you're a student, professional, or business owner, the ability to quickly transform static PDF files into editable Word documents can significantly improve your productivity.

In this comprehensive guide, we'll explore ten powerful ways that PDF to Word conversion can revolutionize your workflow and help you work smarter, not harder.

## 1. Edit Documents Without Starting From Scratch

One of the most obvious benefits of converting PDFs to Word is the ability to edit existing documents without having to retype everything. This saves countless hours when you need to update contracts, modify proposals, or revise reports.

## 2. Reuse Content Across Multiple Documents

When you convert PDFs to Word, you can easily copy and paste content into other documents. This is particularly useful when you're creating presentations, reports, or marketing materials that build upon existing content.

## 3. Collaborate More Effectively

Word documents support track changes and comments, making collaboration much easier than working with static PDFs. Convert your PDFs to Word to enable real-time collaboration with your team.

## 4. Customize Formatting and Design

Once your PDF is in Word format, you have complete control over fonts, colors, spacing, and layout. This flexibility allows you to maintain brand consistency and create professional-looking documents.

## 5. Extract and Organize Data

Converting PDFs to Word makes it easier to extract tables, lists, and other structured data. You can then reorganize this information or import it into spreadsheets and databases.`,
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Productivity",
    image: blogPdfProductivity
  },
  {
    id: "file-formats",
    title: "Understanding File Formats: A Complete Guide",
    excerpt: "Learn about different file formats, when to use them, and how to convert between them efficiently.",
    content: `File formats can be confusing, but understanding them is crucial for anyone working with digital documents. In this comprehensive guide, we'll demystify the most common file formats and help you choose the right one for your needs.`,
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Guide",
    image: blogFileFormats
  },
  {
    id: "remote-work-tools",
    title: "Top 5 Online Tools Every Remote Worker Needs",
    excerpt: "Essential free online tools that can help you stay productive while working from anywhere.",
    content: `Remote work has become the new normal for millions of people worldwide. Having the right tools can make all the difference in your productivity and work-life balance. Here are five essential online tools every remote worker should have in their toolkit.`,
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Remote Work",
    image: blogRemoteWork
  },
  {
    id: "privacy-security",
    title: "How to Protect Your Privacy When Using Online Tools",
    excerpt: "Best practices for maintaining your privacy and security when using web-based utilities.",
    content: `In today's digital age, protecting your privacy when using online tools is more important than ever. This guide will walk you through essential security practices to keep your data safe.`,
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Security",
    image: blogPrivacySecurity
  },
  {
    id: "february-updates",
    title: "MicroTools February Update: New Features & Improvements",
    excerpt: "Check out the latest features we've added and improvements we've made based on your feedback.",
    content: `We're excited to share the latest updates to MicroTools! This month, we've been hard at work implementing new features and improvements based on your valuable feedback.`,
    date: "February 20, 2024",
    readTime: "4 min read",
    category: "Updates",
    image: blogUpdates
  },
  {
    id: "keyboard-shortcuts",
    title: "Keyboard Shortcuts to Speed Up Your Workflow",
    excerpt: "Master these keyboard shortcuts to navigate our tools faster and boost your efficiency.",
    content: `Keyboard shortcuts are one of the best ways to speed up your workflow and become more efficient. In this guide, we'll cover the most useful shortcuts for MicroTools and general productivity.`,
    date: "February 15, 2024",
    readTime: "5 min read",
    category: "Tips",
    image: blogKeyboardShortcuts
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.id === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - MicroTools Blog`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.excerpt);
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8 animate-fade-in">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-border shadow-card">
                <CardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">
                  {post.content.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                    }
                    if (paragraph.trim()) {
                      return <p key={index} className="text-muted-foreground mb-4">{paragraph}</p>;
                    }
                    return null;
                  })}
                </CardContent>
              </Card>
            </div>

            <aside className="space-y-6">
              <Card className="border-border shadow-card sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold">Share this post</h3>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Share on Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      Share on LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <AdPlaceholder size="sidebar" />
            </aside>
          </div>

          <div className="mt-12 flex justify-center">
            <AdPlaceholder size="leaderboard" />
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
