import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ToolCategories from "@/components/ToolCategories";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <ToolCategories />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
