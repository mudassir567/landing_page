import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, PieChart, Target, ArrowRight } from "lucide-react";
import expenseAnalytics from "@/assets/expense-analytics.jpg";
import smartDecisions from "@/assets/smart-decisions.jpg";
import voiceTracking from "@/assets/voice-tracking.jpg";

const insights = [
  {
    image: voiceTracking,
    icon: PieChart,
    title: "Instant Voice Logging",
    description: "Transform your voice into organized expense data in seconds. No more forgetting purchases or delayed entries.",
    benefits: ["3-second logging", "Real-time categorization", "Never miss an expense"]
  },
  {
    image: expenseAnalytics,
    icon: TrendingUp,
    title: "Smart Analytics Dashboard",
    description: "Visualize your spending patterns with beautiful charts and insights that help you understand where your money goes.",
    benefits: ["Category breakdowns", "Monthly trends", "Budget vs actual"]
  },
  {
    image: smartDecisions,
    icon: Target,
    title: "Make Better Decisions",
    description: "Get real-time insights that help you make smarter financial choices before you spend, not after.",
    benefits: ["Spending alerts", "Budget guidance", "Goal tracking"]
  }
];

const InsightsSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Track Smart,
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Spend Smarter</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how voice-powered tracking transforms your relationship with money. 
            From instant logging to intelligent insights, make every dollar count.
          </p>
        </div>

        <div className="space-y-20">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Card className="p-6 bg-gradient-card border-0 shadow-elegant">
                  <img 
                    src={insight.image} 
                    alt={`${insight.title} - ${insight.description}`}
                    className="w-full h-auto rounded-lg shadow-card"
                  />
                  {/* Floating icon */}
                  <div className="absolute -top-4 -right-4 bg-primary/20 backdrop-blur-sm rounded-full p-4 shadow-glow">
                    <insight.icon className="w-8 h-8 text-primary" />
                  </div>
                </Card>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <insight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">
                      Step {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold">
                    {insight.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {insight.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  {insight.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button variant="voice" size="lg" className="group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;