import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, FileText, Image as ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const allTools = [
  {
    category: "text-tools",
    categoryName: "Text Tools",
    tools: [
      { name: "PDF to Word", description: "Convert PDF documents to editable Word files", link: "/tools/pdf-to-word", icon: FileText },
      { name: "Word to PDF", description: "Convert Word documents to PDF format", link: "#", icon: FileText },
      { name: "Text Formatter", description: "Format and clean up text content", link: "#", icon: FileText }
    ]
  },
  {
    category: "image-tools",
    categoryName: "Image Tools",
    tools: [
      { name: "Image Compressor", description: "Reduce image file sizes", link: "/tools/image-compressor", icon: ImageIcon },
      { name: "Image Resizer", description: "Resize images to any dimension", link: "#", icon: ImageIcon },
      { name: "Format Converter", description: "Convert between JPG, PNG, WEBP", link: "#", icon: ImageIcon }
    ]
  }
];

const Tools = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const categoryName = allTools.find(c => c.category === categoryParam)?.categoryName || "All Tools";
    document.title = `${categoryName} - Free Online Tools | MicroTools`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        `Explore our collection of free online ${categoryName.toLowerCase()}. Fast, secure, and easy to use utilities for your daily tasks.`
      );
    }
  }, [categoryParam]);

  const filteredTools = allTools
    .filter(cat => !categoryParam || cat.category === categoryParam)
    .map(cat => ({
      ...cat,
      tools: cat.tools.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(cat => cat.tools.length > 0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-24">
        <article className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {categoryParam ? allTools.find(c => c.category === categoryParam)?.categoryName : "All Tools"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our collection of free online tools designed to make your work easier.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  <Input
                    type="search"
                    placeholder="Search tools..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                    aria-label="Search for tools"
                  />
                </div>
              </div>

              {filteredTools.map((category, catIndex) => (
                <section key={catIndex} className="mb-12" aria-labelledby={`category-${category.category}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <h2 id={`category-${category.category}`} className="text-2xl font-bold">
                      {category.categoryName}
                    </h2>
                    <Badge variant="secondary">{category.tools.length} tools</Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.tools.map((tool, toolIndex) => (
                      <Link key={toolIndex} to={tool.link}>
                        <Card className="border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group h-full">
                          <CardHeader>
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                              <tool.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {tool.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{tool.description}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}

              {filteredTools.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No tools found matching your search.</p>
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <AdPlaceholder size="sidebar" />
              <AdPlaceholder size="sidebar" />
            </aside>
          </div>

          <div className="flex justify-center">
            <AdPlaceholder size="leaderboard" />
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tools;
