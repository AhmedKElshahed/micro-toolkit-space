import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <div className="flex items-center gap-2">
          <Wrench className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MicroTools
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#tools" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Tools
          </a>
          <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </a>
        </div>

        <Button variant="default" size="sm" className="shadow-elegant">
          Get Started
        </Button>
      </nav>
    </header>
  );
};

export default Header;
