import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Target, Zap } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Us - MicroTools | Free Online Utilities";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about MicroTools' mission to provide free, accessible online utilities for everyone. Discover our story, values, and commitment to the community."
      );
    }
  }, []);

  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "Built by users, for users. We listen to feedback and continuously improve our tools based on your needs."
    },
    {
      icon: Heart,
      title: "Always Free",
      description: "No hidden fees, no premium tiers. All our tools are completely free and accessible to everyone."
    },
    {
      icon: Target,
      title: "Quality Focus",
      description: "We prioritize quality over quantity, ensuring each tool is well-crafted, tested, and reliable."
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "No unnecessary features or bloat. Just simple, fast tools that get the job done."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">MicroTools</span>
              </h1>
              
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground animate-fade-in">
                <p>
                  Welcome to MicroTools, your one-stop destination for free, accessible online utilities. 
                  We believe that essential digital tools should be available to everyone, without barriers 
                  or subscriptions.
                </p>
                
                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Mission</h2>
                <p>
                  Our mission is simple: provide high-quality, easy-to-use online tools that help people 
                  work smarter and faster. Whether you're converting files, calculating formulas, or 
                  manipulating data, we've got you covered.
                </p>
                
                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why MicroTools?</h2>
                <p>
                  In a world filled with complicated software and expensive subscriptions, we wanted to 
                  create something different. MicroTools is designed with three core principles: simplicity, 
                  accessibility, and reliability. Every tool is carefully crafted to be intuitive, fast, 
                  and available to everyone.
                </p>
                
                <p>
                  We're committed to maintaining the highest standards of privacy and security. Your files 
                  and data are processed locally in your browser whenever possible, and we never store your 
                  personal information without your explicit consent.
                </p>
              </div>
            </div>
            
            <aside className="lg:w-80">
              <div className="sticky top-24 space-y-6">
                <AdPlaceholder size="banner" />
                <AdPlaceholder size="banner" />
              </div>
            </aside>
          </div>
          
          <section className="mt-16" aria-labelledby="values-heading">
            <h2 id="values-heading" className="text-3xl font-bold text-center mb-12">
              Our Core <span className="bg-gradient-primary bg-clip-text text-transparent">Values</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="border-border shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          <div className="mt-12 flex justify-center">
            <AdPlaceholder size="leaderboard" />
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
