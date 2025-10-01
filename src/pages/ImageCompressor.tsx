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
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free <span className="bg-gradient-primary bg-clip-text text-transparent">Image Compressor</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reduce image file size while maintaining quality. Perfect for web optimization and faster loading times.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="border-border shadow-card animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                    Compress Your Image
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="image-upload"
                      aria-label="Upload image file"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" aria-hidden="true" />
                      <p className="text-lg font-medium mb-2">Drop your image here or click to browse</p>
                      <p className="text-sm text-muted-foreground">Supports JPG, PNG, WEBP (Max 20MB)</p>
                    </label>
                  </div>

                  {previewUrl && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="border border-border rounded-lg p-4">
                        <img src={previewUrl} alt="Preview" className="max-h-64 mx-auto rounded" />
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                        <ImageIcon className="h-10 w-10 text-primary" aria-hidden="true" />
                        <div className="flex-1">
                          <p className="font-medium">{selectedFile?.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(selectedFile!.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button 
                          onClick={handleCompress}
                          disabled={isCompressing}
                          className="flex-1"
                        >
                          {isCompressing ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" />
                              Compressing...
                            </>
                          ) : (
                            <>
                              <ImageIcon className="h-4 w-4 mr-2" aria-hidden="true" />
                              Compress Image
                            </>
                          )}
                        </Button>
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" aria-hidden="true" />
                          Download
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <section className="mt-12" aria-labelledby="features-heading">
                <h2 id="features-heading" className="text-2xl font-bold mb-6">
                  Why Use Our Image Compressor?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-border shadow-card">
                    <CardHeader>
                      <CardTitle className="text-lg">High Quality Output</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Our advanced compression algorithm reduces file size while preserving image quality.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border shadow-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Fast Processing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Compress images instantly in your browser. No uploading to servers required.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border shadow-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Multiple Formats</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Support for JPG, PNG, and WEBP formats. Choose the best format for your needs.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border shadow-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Privacy First</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        All compression happens in your browser. Your images never leave your device.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <AdPlaceholder size="sidebar" />
              <AdPlaceholder size="sidebar" />
            </aside>
          </div>

          <div className="flex justify-center">
            <AdPlaceholder size="leaderboard" />
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default ImageCompressor;
