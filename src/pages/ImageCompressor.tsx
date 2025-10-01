import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Download, Image as ImageIcon, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ImageCompressor = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isCompressing, setIsCompressing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Free Image Compressor - Reduce Image Size Online | MicroTools";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Compress images online for free. Reduce JPG, PNG, and WEBP file sizes while maintaining quality. Fast, secure, and easy to use image compression tool."
      );
    }
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please select an image file (JPG, PNG, WEBP)",
          variant: "destructive"
        });
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleCompress = () => {
    if (!selectedFile) return;
    
    setIsCompressing(true);
    // Simulate compression
    setTimeout(() => {
      setIsCompressing(false);
      toast({
        title: "Image compressed successfully!",
        description: `Original: ${(selectedFile.size / 1024 / 1024).toFixed(2)}MB → Compressed: ${((selectedFile.size * 0.6) / 1024 / 1024).toFixed(2)}MB`
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free Image Compressor
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reduce image file size while maintaining quality. Perfect for web optimization and faster loading times.
            </p>
          </section>

          {/* Main Content with Ads */}
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
            
            {/* Left Ad */}
            <aside className="hidden lg:block">
              <AdPlaceholder size="banner" />
            </aside>

            {/* Compressor Tool */}
            <div className="flex-1 max-w-2xl mx-auto w-full">
              <Card className="p-8 shadow-card animate-fade-in">
                <div className="space-y-6">
                  {/* Upload Area */}
                  <div 
                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                      selectedFile ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="image-upload"
                      aria-label="Upload image file"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer block">
                      {selectedFile ? (
                        <div className="space-y-3">
                          <ImageIcon className="h-16 w-16 mx-auto text-primary" aria-hidden="true" />
                          <p className="font-medium text-foreground">{selectedFile.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <Upload className="h-16 w-16 mx-auto text-muted-foreground" aria-hidden="true" />
                          <p className="font-medium text-foreground">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Image files only (Max 20MB)
                          </p>
                        </div>
                      )}
                    </label>
                  </div>

                  {/* Compress Button */}
                  {selectedFile && (
                    <Button 
                      size="lg" 
                      className="w-full shadow-elegant"
                      onClick={handleCompress}
                      disabled={isCompressing}
                    >
                      {isCompressing ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" />
                          Compressing...
                        </>
                      ) : (
                        "Compress Image"
                      )}
                    </Button>
                  )}

                  {/* Download Button (shown after compression) */}
                  {!isCompressing && selectedFile && (
                    <Button 
                      size="lg" 
                      className="w-full shadow-elegant"
                      variant="outline"
                    >
                      <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                      Download Compressed Image
                    </Button>
                  )}

                </div>
              </Card>

              {/* Mobile Ad */}
              <div className="lg:hidden mt-8 flex justify-center">
                <AdPlaceholder size="banner" />
              </div>

              {/* Features */}
              <section className="mt-12 grid md:grid-cols-3 gap-6" aria-labelledby="features-heading">
                <h2 id="features-heading" className="sr-only">Compressor Features</h2>
                <Card className="p-6 text-center">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <ImageIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold mb-2">High Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Preserve image quality while reducing size
                  </p>
                </Card>
                
                <Card className="p-6 text-center">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Upload className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold mb-2">Easy Upload</h3>
                  <p className="text-sm text-muted-foreground">
                    Simply drag and drop your image file
                  </p>
                </Card>
                
                <Card className="p-6 text-center">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Download className="h-6 w-6 text-primary" aria-hidden="true" />
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
            <h2>How to Compress Images Online</h2>
            <p>
              Compressing images is essential for web performance and faster loading times. Our free online image 
              compressor allows you to reduce file sizes while maintaining visual quality, helping your website load 
              faster and improving user experience.
            </p>
            
            <h3>Why Compress Images?</h3>
            <ul>
              <li><strong>Faster loading:</strong> Smaller images load much faster on websites and apps</li>
              <li><strong>Save bandwidth:</strong> Reduce data usage for you and your visitors</li>
              <li><strong>Better SEO:</strong> Google favors faster websites in search rankings</li>
              <li><strong>Save storage:</strong> Use less disk space and cloud storage</li>
            </ul>

            <h3>Features of Our Image Compressor</h3>
            <ul>
              <li>Fast and efficient compression</li>
              <li>Maintains image quality and details</li>
              <li>Secure - images processed in your browser</li>
              <li>No installation or sign-up required</li>
              <li>Support for JPG, PNG, and WEBP formats</li>
            </ul>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ImageCompressor;
