import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, ArrowRight, Star, Users, Mail } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

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
                Join the Waitlist for
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Smart Voice Tracking</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Be among the first to experience voice-powered expense tracking. 
                No forms, no typing - just speak and track your expenses instantly.
              </p>
            </div>

            {/* Waitlist Form */}
            <div className="max-w-lg mx-auto">
              <WaitlistForm variant="cta" className="mb-6" />
              <div className="flex justify-center">
                <Button variant="voice" size="lg" className="text-lg px-8 py-4" data-testid="button-demo">
                  <Star className="w-5 h-5" />
                  Watch 2-Min Demo
                </Button>
              </div>
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