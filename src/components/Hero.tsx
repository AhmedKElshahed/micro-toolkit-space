import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-hero" role="banner">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-primary">100% Free Forever</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Essential
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                MicroTools
              </span>
              for Everyone
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Access a comprehensive collection of free online utilities. Convert files, edit images, 
              analyze data, and boost your productivity with our accessible web tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-elegant group">
                Explore Tools
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Free Tools</p>
              </div>
              <div className="h-12 w-px bg-border" aria-hidden="true"></div>
              <div>
                <p className="text-3xl font-bold text-foreground">100K+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="h-12 w-px bg-border" aria-hidden="true"></div>
              <div>
                <p className="text-3xl font-bold text-foreground">★ 4.9</p>
                <p className="text-sm text-muted-foreground">User Rating</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full animate-float" aria-hidden="true"></div>
            <img 
              src={heroImage} 
              alt="Visualization of modern digital microtools interface with floating UI elements"
              className="relative rounded-2xl shadow-elegant w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
