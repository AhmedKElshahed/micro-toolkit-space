import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Wrench className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MicroTools
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 flex-shrink-0">
          <Link to="/tools" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
            Tools
          </Link>
          <Link to="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
            Blog
          </Link>
          <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <LanguageSwitcher />
          <Link to="/tools">
            <Button variant="default" size="sm" className="shadow-elegant whitespace-nowrap">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
