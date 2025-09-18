import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WaitlistFormProps {
  variant?: "hero" | "cta";
  className?: string;
}

const WaitlistForm = ({ variant = "hero", className = "" }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("form-name", "waitlist");
      formData.append("email", email);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
        toast({
          title: "Successfully joined waitlist!",
          description: "We'll notify you when we launch.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={`p-6 text-center bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 ${className}`}>
        <div className="flex flex-col items-center gap-3">
          <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          <div>
            <h3 className="font-semibold text-green-800 dark:text-green-200">You're on the list!</h3>
            <p className="text-sm text-green-600 dark:text-green-300">
              We'll notify you as soon as we launch.
            </p>
          </div>
        </div>
      </Card>
    );
  }

  const isHeroVariant = variant === "hero";

  return (
    <form
      name="waitlist"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={className}
      data-testid="form-waitlist"
    >
      {/* Hidden fields for Netlify */}
      <input type="hidden" name="form-name" value="waitlist" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      <div className={`flex ${isHeroVariant ? 'flex-col sm:flex-row' : 'flex-row'} gap-3 ${isHeroVariant ? 'max-w-md' : 'max-w-lg'} mx-auto`}>
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            disabled={isSubmitting}
            className={`pl-10 ${isHeroVariant ? 'h-12 text-base' : 'h-11'}`}
            data-testid="input-email"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting || !email}
          variant={isHeroVariant ? "hero" : "default"}
          size={isHeroVariant ? "lg" : "default"}
          className={`${isHeroVariant ? 'px-8' : 'px-6'} flex-shrink-0`}
          data-testid="button-join-waitlist"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Joining...
            </>
          ) : (
            <>
              Join Waitlist
              {isHeroVariant && <Mail className="w-4 h-4 ml-2" />}
            </>
          )}
        </Button>
      </div>

      {!isHeroVariant && (
        <p className="text-sm text-muted-foreground text-center mt-3">
          Be the first to know when we launch. No spam, unsubscribe anytime.
        </p>
      )}
    </form>
  );
};

export default WaitlistForm;