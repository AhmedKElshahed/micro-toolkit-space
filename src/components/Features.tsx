import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Palette, Code, Globe, Gauge } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "All tools run instantly in your browser. No waiting, no delays, just results."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data never leaves your device. Everything processes locally for maximum security."
  },
  {
    icon: Palette,
    title: "Beautiful Interface",
    description: "Clean, modern design that's easy to use and accessible for everyone."
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Built with modern web technologies and open standards for reliability."
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Access from any device with a browser. Desktop, tablet, or mobile."
  },
  {
    icon: Gauge,
    title: "Always Available",
    description: "No sign-up required. No limits. Just pure, uninterrupted productivity."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-gradient-subtle" role="region" aria-labelledby="features-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">MicroTools?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of simplicity, power, and accessibility in every tool we offer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
