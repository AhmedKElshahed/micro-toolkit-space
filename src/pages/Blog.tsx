import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import blogPdfProductivity from "@/assets/blog-pdf-productivity.jpg";
import blogFileFormats from "@/assets/blog-file-formats.jpg";
import blogRemoteWork from "@/assets/blog-remote-work.jpg";
import blogPrivacySecurity from "@/assets/blog-privacy-security.jpg";
import blogUpdates from "@/assets/blog-updates.jpg";
import blogKeyboardShortcuts from "@/assets/blog-keyboard-shortcuts.jpg";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    document.title = "Blog - MicroTools | Tips, Guides & Updates";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore MicroTools blog for helpful tips, tool guides, productivity hacks, and the latest updates on our free online utilities."
      );
    }
  }, []);

  const blogPosts = [
    {
      id: "pdf-productivity",
      title: "10 Ways PDF to Word Conversion Can Boost Your Productivity",
      excerpt: "Discover how converting PDFs to Word documents can streamline your workflow and save you hours of manual work.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Productivity",
      image: blogPdfProductivity
    },
    {
      id: "file-formats",
      title: "Understanding File Formats: A Complete Guide",
      excerpt: "Learn about different file formats, when to use them, and how to convert between them efficiently.",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Guide",
      image: blogFileFormats
    },
    {
      id: "remote-work-tools",
      title: "Top 5 Online Tools Every Remote Worker Needs",
      excerpt: "Essential free online tools that can help you stay productive while working from anywhere.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Remote Work",
      image: blogRemoteWork
    },
    {
      id: "privacy-security",
      title: "How to Protect Your Privacy When Using Online Tools",
      excerpt: "Best practices for maintaining your privacy and security when using web-based utilities.",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Security",
      image: blogPrivacySecurity
    },
    {
      id: "february-updates",
      title: "MicroTools February Update: New Features & Improvements",
      excerpt: "Check out the latest features we've added and improvements we've made based on your feedback.",
      date: "February 20, 2024",
      readTime: "4 min read",
      category: "Updates",
      image: blogUpdates
    },
    {
      id: "keyboard-shortcuts",
      title: "Keyboard Shortcuts to Speed Up Your Workflow",
      excerpt: "Master these keyboard shortcuts to navigate our tools faster and boost your efficiency.",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Tips",
      image: blogKeyboardShortcuts
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              MicroTools <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tips, guides, and updates to help you get the most out of our free online tools.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="flex-1">
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  <Input
                    type="search"
                    placeholder="Search blog posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                    aria-label="Search blog posts"
                  />
                </div>
              </div>

              <section aria-labelledby="blog-posts-heading">
                <h2 id="blog-posts-heading" className="sr-only">Blog Posts</h2>
                <div className="space-y-6">
                  {filteredPosts.map((post, index) => (
                    <Link key={index} to={`/blog/${post.id}`}>
                      <Card 
                        className="border-border shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in group cursor-pointer"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <Badge variant="secondary" className="w-fit mb-3">{post.category}</Badge>
                          <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground">{post.excerpt}</p>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" aria-hidden="true" />
                              <time dateTime={post.date}>{post.date}</time>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" aria-hidden="true" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <Button variant="ghost" className="group-hover:gap-2 transition-all p-0">
                            Read More 
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
                
                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No blog posts found matching your search.</p>
                  </div>
                )}
                
                {filteredPosts.length > 0 && filteredPosts.length === blogPosts.length && (
                  <div className="mt-8 text-center">
                    <Button variant="outline" size="lg" className="shadow-card">
                      Load More Posts
                    </Button>
                  </div>
                )}
              </section>
            </div>

            <aside className="lg:w-80">
              <div className="sticky top-24 space-y-6">
                <Card className="border-border shadow-card">
                  <CardHeader>
                    <CardTitle>Subscribe to Updates</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Get the latest posts and updates delivered directly to your inbox.
                    </p>
                    <div className="space-y-2">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background"
                        aria-label="Email address for newsletter subscription"
                      />
                      <Button className="w-full">Subscribe</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <AdPlaceholder size="banner" />
                <AdPlaceholder size="banner" />
              </div>
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

export default Blog;
