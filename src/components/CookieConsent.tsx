import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <Card className="max-w-4xl mx-auto border-border shadow-elegant bg-card">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-lg">We Use Cookies</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDecline}
                  className="h-8 w-8 p-0"
                  aria-label="Close cookie banner"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                We use cookies to improve your experience on our website, analyze site traffic, and deliver personalized content and advertisements. 
                By clicking "Accept All", you consent to our use of cookies. You can manage your preferences at any time.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button onClick={handleAccept} size="sm">
                  Accept All
                </Button>
                <Button onClick={handleDecline} variant="outline" size="sm">
                  Decline
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="/cookie-policy">Cookie Policy</a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
