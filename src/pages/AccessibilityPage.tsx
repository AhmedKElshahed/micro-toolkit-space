import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const AccessibilityPage = () => {
  useEffect(() => {
    document.title = "Accessibility Statement - MicroTools";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "MicroTools is committed to ensuring digital accessibility for people with disabilities. Learn about our accessibility features and compliance."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-24">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Statement</h1>
            <p className="text-muted-foreground">Our commitment to digital accessibility</p>
          </div>

          <Card className="border-border shadow-card">
            <CardContent className="prose prose-slate dark:prose-invert max-w-none p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                <p className="text-muted-foreground">
                  MicroTools is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Standards and Guidelines</h2>
                <p className="text-muted-foreground">
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
                <p className="text-muted-foreground mb-2">
                  Our website includes the following accessibility features:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Semantic HTML structure for screen reader compatibility</li>
                  <li>Keyboard navigation support throughout the website</li>
                  <li>Alternative text for images and icons</li>
                  <li>Sufficient color contrast ratios</li>
                  <li>Readable and scalable font sizes</li>
                  <li>Clear focus indicators for interactive elements</li>
                  <li>ARIA labels and landmarks for improved navigation</li>
                  <li>Responsive design that works across devices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Assistive Technology Compatibility</h2>
                <p className="text-muted-foreground">
                  Our website is designed to be compatible with common assistive technologies, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                  <li>Speech recognition software</li>
                  <li>Screen magnification tools</li>
                  <li>Keyboard-only navigation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Known Limitations</h2>
                <p className="text-muted-foreground">
                  While we strive for full accessibility, we acknowledge that some areas may have limitations. We are actively working to address these issues and appreciate your patience as we continue to improve.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Third-Party Content</h2>
                <p className="text-muted-foreground">
                  Some content on our website may be provided by third parties (such as advertisements). While we encourage all third parties to provide accessible content, we cannot guarantee the accessibility of content outside our control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Feedback and Contact</h2>
                <p className="text-muted-foreground">
                  We welcome your feedback on the accessibility of MicroTools. If you encounter any accessibility barriers or have suggestions for improvement, please contact us through our Contact page. We will make every effort to respond promptly and work towards a solution.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Ongoing Improvements</h2>
                <p className="text-muted-foreground">
                  Accessibility is an ongoing effort. We regularly review our website and services to identify and address accessibility issues. Our development team receives training on accessibility best practices to ensure new features and updates maintain high accessibility standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Assessment and Testing</h2>
                <p className="text-muted-foreground">
                  This website has been tested using various accessibility evaluation tools and methods, including automated testing tools, manual testing with assistive technologies, and user testing with people with disabilities.
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

export default AccessibilityPage;
