import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service - MicroTools";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read MicroTools terms of service to understand the rules and regulations for using our free online tools."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-24">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: March 2024</p>
          </div>

          <Card className="border-border shadow-card">
            <CardContent className="prose prose-slate dark:prose-invert max-w-none p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using MicroTools, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Use of Services</h2>
                <p className="text-muted-foreground mb-2">
                  Our services are provided free of charge for personal and commercial use. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use our services in compliance with all applicable laws and regulations</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                  <li>Not attempt to interfere with or disrupt our services</li>
                  <li>Not use automated systems to access our services excessively</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, features, and functionality on MicroTools, including but not limited to text, graphics, logos, and software, are owned by MicroTools and protected by copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">User Content</h2>
                <p className="text-muted-foreground">
                  You retain all rights to any files or content you process using our tools. We do not claim ownership of your content. Files processed in your browser are not stored on our servers unless explicitly required for the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
                <p className="text-muted-foreground">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, secure, or error-free.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, MicroTools shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any reason, including breach of these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us through our Contact page.
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

export default Terms;
