import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero" role="region" aria-labelledby="cta-heading">
      <div className="container mx-auto max-w-4xl text-center space-y-8 animate-fade-in">
        <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold">
          Ready to Boost Your
          <span className="block bg-gradient-primary bg-clip-text text-transparent">
            Productivity?
          </span>
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join thousands of users who trust MicroTools for their daily tasks. 
          Start using our free utilities today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link to="/tools/pdf-to-word">
            <Button size="lg" className="shadow-elegant group">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Browse All Tools
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground pt-4">
          No credit card required • No sign-up needed • 100% Free
        </p>
      </div>
    </section>
  );
};

export default CTA;
