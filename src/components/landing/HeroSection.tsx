import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, Shield, Zap, Star } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Coming Soon Banner */}
            <div className="inline-flex items-center gap-2 bg-primary-glow/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary animate-pulse-glow">
              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
              Coming Soon - App in Development
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Track Expenses
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Instantly</span>
                <br />
                with Your Voice
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                The fastest way to log expenses. Just speak and track. No complicated forms, 
                no data sharing - your financial privacy stays with you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Mic className="w-5 h-5 group-hover:animate-voice-wave" />
                Start Tracking Free
              </Button>
              <Button variant="voice" size="lg">
                <Shield className="w-5 h-5" />
                Learn About Privacy
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">100% Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Mic className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Voice Powered</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <Card className="p-8 bg-gradient-card border-0 shadow-elegant">
              <div className="relative">
                <img 
                  src={heroMockup} 
                  alt="Budget tracker app interface showing voice input and expense categories"
                  className="w-full h-auto rounded-lg shadow-card"
                />
                {/* Floating voice indicator */}
                <div className="absolute top-4 right-4 bg-primary-glow/20 backdrop-blur-sm rounded-full p-3 animate-pulse-glow">
                  <Mic className="w-6 h-6 text-primary animate-voice-wave" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;