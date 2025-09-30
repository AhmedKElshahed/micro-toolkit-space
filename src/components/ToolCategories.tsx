import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Image, Calculator, Database, Lock, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: FileText,
    title: "Text Tools",
    description: "Word counters, text converters, and formatters",
    count: "12 tools",
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950"
  },
  {
    icon: Image,
    title: "Image Tools",
    description: "Resize, compress, convert, and edit images",
    count: "8 tools",
    color: "text-purple-600 bg-purple-50 dark:bg-purple-950"
  },
  {
    icon: Calculator,
    title: "Calculators",
    description: "Financial, unit, and specialized calculators",
    count: "15 tools",
    color: "text-green-600 bg-green-50 dark:bg-green-950"
  },
  {
    icon: Database,
    title: "Data Tools",
    description: "JSON formatters, CSV converters, and validators",
    count: "10 tools",
    color: "text-orange-600 bg-orange-50 dark:bg-orange-950"
  },
  {
    icon: Lock,
    title: "Security Tools",
    description: "Hash generators, password tools, encryption",
    count: "6 tools",
    color: "text-red-600 bg-red-50 dark:bg-red-950"
  },
  {
    icon: FileCode,
    title: "Developer Tools",
    description: "Code formatters, regex testers, minifiers",
    count: "9 tools",
    color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950"
  }
];

const ToolCategories = () => {
  return (
    <section id="tools" className="py-20 px-4" role="region" aria-labelledby="tools-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 id="tools-heading" className="text-4xl md:text-5xl font-bold">
            Explore Tool <span className="bg-gradient-primary bg-clip-text text-transparent">Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect tool for your needs across multiple categories.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`h-14 w-14 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">{category.description}</p>
                <p className="text-sm font-medium text-primary">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="shadow-card">
            View All Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToolCategories;
