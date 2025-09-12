import { Button } from "@/components/ui/button";
import { Mic, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Mic className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-bold">Budget Tracker</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
            Features
          </a>
          <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-smooth">
            Privacy
          </a>
          <a href="#demo" className="text-muted-foreground hover:text-foreground transition-smooth">
            Demo
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-smooth">
            Pricing
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Sign In</Button>
          <Button variant="hero">
            <Mic className="w-4 h-4" />
            Start Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <nav className="space-y-3">
              <a href="#features" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Features
              </a>
              <a href="#privacy" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Privacy
              </a>
              <a href="#demo" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Demo
              </a>
              <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Pricing
              </a>
            </nav>
            <div className="pt-4 border-t border-border/50 space-y-3">
              <Button variant="ghost" className="w-full justify-start">Sign In</Button>
              <Button variant="hero" className="w-full">
                <Mic className="w-4 h-4" />
                Start Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;