import { Card } from "@/components/ui/card";

const WaitlistSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl animate-pulse-glow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join the
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Waitlist</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be among the first to experience the future of voice-powered expense tracking. 
            Get early access and exclusive updates about our launch.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-card border-0 shadow-elegant">
            <iframe 
              src="https://waitfast.netlify.app/embed/waitlist/2b2dc1f9-e05c-41d0-b49e-9c4510180071?theme=light&size=md"
              style={{border: 'none', width: '100%', height: '500px'}}
              title="My Awesome Project Waitlist"
              data-testid="iframe-waitlist"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;