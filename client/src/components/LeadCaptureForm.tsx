import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LeadCaptureFormProps {
  webhookUrl?: string;
  heading?: string;
  subheading?: string;
  buttonText?: string;
  source?: string;
}

export default function LeadCaptureForm({
  webhookUrl = "https://n8n.marketingagentc.com/webhook/1956b02f-eb16-45b8-a58a-8cbfc2648aec",
  heading = "Get Your <span class='text-primary'>Free</span> Instagram Chatbot",
  subheading = "Fill in your details below and we'll get you set up with your free chatbot",
  buttonText = "Get Free Chatbot",
  source = "landing_page_form"
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Try direct fetch first, fallback to server proxy if CORS fails
      let response;
      try {
        // Send data directly to webhook
        response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            timestamp: new Date().toISOString(),
            source: source || "landing_page_form"
          }),
        });
      } catch (directFetchError) {
        log('Direct fetch failed, trying proxy...');
        // Fallback to server proxy if direct fetch fails (CORS)
        response = await fetch("/api/proxy-webhook", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: webhookUrl,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            timestamp: new Date().toISOString(),
            source: source || "landing_page_form"
          }),
        });
      }

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Success!",
          description: "We've received your information. We'll be in touch soon!",
        });

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "" });
          setIsSuccess(false);
        }, 3000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="lead-form" className="py-16 px-4 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <Card className="border-2 border-primary/20 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold mb-2">
              <span dangerouslySetInnerHTML={{ __html: heading }} />
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              {subheading}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting || isSuccess}
                  className="h-12 text-base"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting || isSuccess}
                  className="h-12 text-base"
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting || isSuccess}
                  className="h-12 text-base"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full text-lg h-14"
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Success!
                  </>
                ) : (
                  buttonText
                )}
              </Button>

              {/* Trust Indicators */}
              <div className="text-center text-sm text-muted-foreground pt-2">
                <p>🔒 Your information is secure and will never be shared</p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
