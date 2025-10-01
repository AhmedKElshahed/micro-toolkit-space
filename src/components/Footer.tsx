import { Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-gradient-subtle" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Wrench className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                MicroTools
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Essential free online utilities for everyone. Built with care and accessibility in mind.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#text-tools" className="hover:text-primary transition-colors">Text Tools</a></li>
              <li><a href="#image-tools" className="hover:text-primary transition-colors">Image Tools</a></li>
              <li><a href="#calculators" className="hover:text-primary transition-colors">Calculators</a></li>
              <li><a href="#data-tools" className="hover:text-primary transition-colors">Data Tools</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#cookies" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#accessibility" className="hover:text-primary transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} MicroTools. All rights reserved.</p>
            <p>Made with ❤️ for the community</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
