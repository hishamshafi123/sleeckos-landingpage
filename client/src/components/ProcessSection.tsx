import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Clock, Settings, CheckCircle, ArrowRight } from "lucide-react";
import { calendlyBookings } from "@/lib/calendly";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
}

interface ProcessSectionProps {
  onGetStarted?: () => void;
}

const steps: ProcessStep[] = [
  {
    id: "book-call",
    title: "Book a free discovery call",
    description: "Schedule your complimentary consultation to discuss your automation needs.",
    details: [
      "30-minute strategy session",
      "Discuss your business challenges",
      "Identify automation opportunities",
      "No obligation or pressure"
    ],
    icon: Calendar,
    duration: "Step 1"
  },
  {
    id: "fill-application",
    title: "Fill in the application form",
    description: "Complete our detailed questionnaire to help us understand your specific requirements.",
    details: [
      "Business information gathering",
      "Current process documentation",
      "Goals and objectives assessment",
      "Technical requirements review"
    ],
    icon: FileText,
    duration: "Step 2"
  },
  {
    id: "get-automation",
    title: "Get your automation delivered in 24 hours",
    description: "Receive your custom Instagram chatbot solution within one business day.",
    details: [
      "Custom chatbot development",
      "Instagram integration setup",
      "Lead capture configuration",
      "Testing and quality assurance"
    ],
    icon: Clock,
    duration: "Step 3"
  },
  {
    id: "setup-server",
    title: "Set it up on your server",
    description: "Deploy the automation system to your preferred hosting environment.",
    details: [
      "Server configuration guidance",
      "Installation documentation",
      "Security setup instructions",
      "Performance optimization tips"
    ],
    icon: Settings,
    duration: "Step 4"
  },
  {
    id: "we-setup",
    title: "Or we'll set it up for you",
    description: "Let our team handle the complete setup and configuration for you.",
    details: [
      "Full service installation",
      "Complete system configuration",
      "Staff training included",
      "Ongoing support provided"
    ],
    icon: CheckCircle,
    duration: "Step 5"
  }
];

export default function ProcessSection({ onGetStarted }: ProcessSectionProps) {
  return (
    <section id="process" className="py-32 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How to Get Your <span className="text-primary">Free Instagram Chatbot</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow these simple steps to get your custom Instagram chatbot up and running in just 24 hours.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={step.id} className="relative h-full hover-elevate">
                {/* Step Number */}
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                <CardHeader className="pt-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {step.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3">{step.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">What's included:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                {/* Connector Arrow (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-card rounded-lg p-8 border max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Your Free Instagram Chatbot?
            </h3>
            <p className="text-muted-foreground mb-6">
              Don't wait - this limited-time offer won't last forever. Get started today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => {
                  console.log('Book free discovery call clicked');
                  calendlyBookings.discoveryCall();
                }}
                data-testid="button-book-discovery-call"
              >
                Book Free Discovery Call
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={() => {
                  console.log('Get chatbot now clicked');
                  calendlyBookings.freeChatbot();
                }}
                data-testid="button-get-chatbot-now"
              >
                Get Chatbot Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}