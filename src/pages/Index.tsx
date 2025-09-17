import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import InsightsSection from "@/components/landing/InsightsSection";
import CTASection from "@/components/landing/CTASection";
import WaitlistSection from "@/components/landing/WaitlistSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <InsightsSection />
        <CTASection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
