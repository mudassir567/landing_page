import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, ArrowRight, Star, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      <div className="absolute top-10 right-10 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <Card className="p-12 lg:p-16 bg-gradient-card border-0 shadow-elegant text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Social proof */}
            <div className="flex items-center justify-center gap-2 text-primary">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-primary-glow/20 rounded-full border-2 border-background"></div>
                ))}
              </div>
              <Users className="w-5 h-5 ml-2" />
              <span className="font-medium">Join 10,000+ Smart Savers</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Ready to Transform Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Expense Tracking</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Start tracking expenses the smart way. Voice-powered, privacy-first, 
                and faster than any other method you've tried.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="group text-lg px-8 py-4">
                <Mic className="w-6 h-6 group-hover:animate-voice-wave" />
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="voice" size="lg" className="text-lg px-8 py-4">
                Watch 2-Min Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-border/50">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 fill-current text-primary" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 fill-current text-primary" />
                <span>Free Forever Plan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 fill-current text-primary" />
                <span>Setup in Under 60 Seconds</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;