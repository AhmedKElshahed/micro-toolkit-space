import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { blogContent } from "@/data/blogContent";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const content = slug ? blogContent[slug] : null;

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
      
      <main className="flex-1 pt-24">
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
                  {content ? (
                    <div dangerouslySetInnerHTML={{ __html: content.content }} />
                  ) : (
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  )}
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
