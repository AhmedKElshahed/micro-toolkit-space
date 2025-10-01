import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const CookiePolicy = () => {
  useEffect(() => {
    document.title = "Cookie Policy - MicroTools";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about how MicroTools uses cookies and similar tracking technologies to improve your experience."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-24">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: March 2024</p>
          </div>

          <Card className="border-border shadow-card">
            <CardContent className="prose prose-slate dark:prose-invert max-w-none p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files that are placed on your device when you visit a website. They help websites remember your preferences and provide a better user experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
                <p className="text-muted-foreground mb-2">
                  MicroTools uses cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are strictly necessary for the operation of our website. They enable core functionality such as security, network management, and accessibility.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-4">Analytics Cookies</h3>
                <p className="text-muted-foreground">
                  We use Google Analytics to collect information about how visitors use our website. This helps us improve our services and user experience.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-4">Advertising Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing and ensuring that ads are properly displayed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
                <p className="text-muted-foreground">
                  Some cookies on our website are placed by third-party services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Google Analytics for website analytics</li>
                  <li>Google AdSense for advertising</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
                <p className="text-muted-foreground mb-2">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                  <li>Cookie preference center: Use our cookie consent banner to manage your preferences</li>
                  <li>Third-party opt-out: Visit third-party websites to opt-out of their cookies</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Please note that blocking certain cookies may impact your experience on our website and limit the functionality available to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about our use of cookies, please contact us through our Contact page.
                </p>
              </section>
            </CardContent>
          </Card>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
