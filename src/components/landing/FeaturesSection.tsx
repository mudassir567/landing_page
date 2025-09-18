import { Card } from "@/components/ui/card";
import { Mic, Shield, Edit3, Clock, Brain, Lock } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice Input Magic",
    description: "Just say 'Coffee $4.50' and it's logged instantly. No typing, no forms, no hassle.",
    highlight: "10x Faster"
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description: "Your data never leaves your device. No cloud storage, no data mining, no tracking.",
    highlight: "100% Private"
  },
  {
    icon: Edit3,
    title: "Manual Precision",
    description: "Quick voice entry with manual editing when needed. Perfect balance of speed and control.",
    highlight: "Best of Both"
  },
  {
    icon: Brain,
    title: "Smart Categories",
    description: "Automatically categorizes your expenses based on voice input. Learn your spending patterns.",
    highlight: "AI Powered"
  },
  {
    icon: Clock,
    title: "Instant Tracking",
    description: "Log expenses in under 3 seconds. Perfect for busy lifestyles and on-the-go tracking.",
    highlight: "Lightning Fast"
  },
  {
    icon: Lock,
    title: "Secure & Offline",
    description: "Works completely offline. Your financial data stays on your device, encrypted and safe.",
    highlight: "Bank-Level Security"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-glow/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Voice Tracking</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional expense apps are slow and complicated. We built something different - 
            fast, private, and incredibly easy to use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-smooth group cursor-pointer"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;