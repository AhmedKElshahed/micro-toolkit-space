import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - MicroTools";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read MicroTools privacy policy to understand how we collect, use, and protect your personal information."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: March 2024</p>
          </div>

          <Card className="border-border shadow-card">
            <CardContent className="prose prose-slate dark:prose-invert max-w-none p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  At MicroTools, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                <p className="text-muted-foreground">
                  We may collect personal information that you voluntarily provide to us when you use our services, such as your name and email address when you subscribe to our newsletter or contact us.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-4">Usage Data</h3>
                <p className="text-muted-foreground">
                  We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, pages visited, and time spent on our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>To provide and maintain our services</li>
                  <li>To improve and optimize our website</li>
                  <li>To send you newsletters and marketing communications (with your consent)</li>
                  <li>To respond to your inquiries and support requests</li>
                  <li>To detect and prevent fraud or abuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">File Processing</h2>
                <p className="text-muted-foreground">
                  All file processing (PDF conversions, image compression, etc.) happens directly in your browser. Your files are never uploaded to our servers unless explicitly required for the service. Files processed locally are automatically deleted from your browser's memory when you close or refresh the page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to improve your experience on our website. You can control cookie preferences through your browser settings. For more information, see our Cookie Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground">
                  We may use third-party services such as Google Analytics and advertising networks. These services may collect information about your use of our website. Please refer to their respective privacy policies for more information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-2">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your information</li>
                  <li>The right to object to processing</li>
                  <li>The right to data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us through our Contact page.
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

export default Privacy;
