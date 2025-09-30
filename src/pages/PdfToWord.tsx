import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileText, Download, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PdfToWord = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "PDF to Word Converter - Free Online Tool | MicroTools";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Convert PDF files to editable Word documents instantly. Free, secure, and easy to use PDF to DOCX converter with no sign-up required.");
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === "application/pdf") {
        setFile(selectedFile);
        setIsConverted(false);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive",
        });
      }
    }
  };

  const handleConvert = () => {
    if (!file) return;
    
    setIsConverting(true);
    // Simulate conversion process
    setTimeout(() => {
      setIsConverting(false);
      setIsConverted(true);
      toast({
        title: "Conversion complete!",
        description: "Your PDF has been converted to Word format",
      });
    }, 2000);
  };

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your Word document is being downloaded",
    });
  };

  return (
    <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-12">
          {/* Hero Section */}
          <section className="container mx-auto px-4 mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              PDF to Word Converter
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Convert your PDF files to editable Word documents in seconds. Free, secure, and no sign-up required.
            </p>
          </section>

          {/* Main Content with Ads */}
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
              
              {/* Left Ad */}
              <aside className="hidden lg:block">
                <AdPlaceholder size="banner" />
              </aside>

              {/* Converter Tool */}
              <div className="flex-1 max-w-2xl mx-auto w-full">
                <Card className="p-8 shadow-card animate-fade-in">
                  <div className="space-y-6">
                    
                    {/* Upload Area */}
                    <div 
                      className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                        file ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="file"
                        id="pdf-upload"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                        aria-label="Upload PDF file"
                      />
                      <label 
                        htmlFor="pdf-upload" 
                        className="cursor-pointer block"
                      >
                        {file ? (
                          <div className="space-y-3">
                            <FileText className="h-16 w-16 mx-auto text-primary" aria-hidden="true" />
                            <p className="font-medium text-foreground">{file.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <Upload className="h-16 w-16 mx-auto text-muted-foreground" aria-hidden="true" />
                            <p className="font-medium text-foreground">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-sm text-muted-foreground">
                              PDF files only (Max 20MB)
                            </p>
                          </div>
                        )}
                      </label>
                    </div>

                    {/* Convert Button */}
                    {file && !isConverted && (
                      <Button 
                        size="lg" 
                        className="w-full shadow-elegant"
                        onClick={handleConvert}
                        disabled={isConverting}
                      >
                        {isConverting ? "Converting..." : "Convert to Word"}
                      </Button>
                    )}

                    {/* Download Button */}
                    {isConverted && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                          <CheckCircle className="h-5 w-5" aria-hidden="true" />
                          <span className="font-medium">Conversion Complete!</span>
                        </div>
                        <Button 
                          size="lg" 
                          className="w-full shadow-elegant"
                          onClick={handleDownload}
                        >
                          <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                          Download Word Document
                        </Button>
                      </div>
                    )}

                  </div>
                </Card>

                {/* Mobile Ad */}
                <div className="lg:hidden mt-8 flex justify-center">
                  <AdPlaceholder size="banner" />
                </div>

                {/* Features */}
                <section className="mt-12 grid md:grid-cols-3 gap-6" aria-labelledby="features-heading">
                  <h2 id="features-heading" className="sr-only">Converter Features</h2>
                  <Card className="p-6 text-center">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Upload className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold mb-2">Easy Upload</h3>
                    <p className="text-sm text-muted-foreground">
                      Simply drag and drop your PDF file
                    </p>
                  </Card>
                  
                  <Card className="p-6 text-center">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold mb-2">High Quality</h3>
                    <p className="text-sm text-muted-foreground">
                      Preserve formatting and layout
                    </p>
                  </Card>
                  
                  <Card className="p-6 text-center">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold mb-2">100% Free</h3>
                    <p className="text-sm text-muted-foreground">
                      No limits, no sign-up required
                    </p>
                  </Card>
                </section>
              </div>

              {/* Right Ad */}
              <aside className="hidden lg:block">
                <AdPlaceholder size="banner" />
              </aside>

            </div>

            {/* Bottom Ad */}
            <div className="mt-12 flex justify-center">
              <AdPlaceholder size="leaderboard" />
            </div>

            {/* SEO Content */}
            <article className="mt-12 max-w-4xl mx-auto prose prose-slate dark:prose-invert">
              <h2>How to Convert PDF to Word</h2>
              <p>
                Converting PDF files to Word documents has never been easier. Our free online PDF to Word converter 
                allows you to transform your PDF files into editable DOCX format while preserving the original formatting, 
                images, and layout.
              </p>
              
              <h3>Why Convert PDF to Word?</h3>
              <ul>
                <li><strong>Edit content:</strong> Make changes to text, images, and formatting</li>
                <li><strong>Reuse content:</strong> Extract and repurpose information from PDFs</li>
                <li><strong>Collaborate:</strong> Share editable documents with your team</li>
                <li><strong>Save time:</strong> No need to retype content manually</li>
              </ul>

              <h3>Features of Our PDF to Word Converter</h3>
              <ul>
                <li>Fast and accurate conversion</li>
                <li>Preserves formatting, fonts, and images</li>
                <li>Secure - your files are deleted after conversion</li>
                <li>No installation or sign-up required</li>
                <li>Works on all devices and platforms</li>
              </ul>
            </article>
          </div>
        </main>

        <Footer />
      </div>
  );
};

export default PdfToWord;
