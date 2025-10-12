import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, BotMessageSquare, Zap, Check, ArrowRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

interface ServicesOverviewProps {
  onLearnMore?: (serviceId: string) => void;
  onBookDemo?: (serviceId: string) => void;
}

const services: Service[] = [
  {
    id: "discovery-call",
    title: "Free Discovery Call (30 min)",
    description: "Get a comprehensive analysis of your business and discover automation opportunities.",
    benefits: [
      "Free systems audit",
      "Get key insights on automating operations",
      "Receive information on automating growth"
    ],
    icon: Calendar,
    features: ["30-minute consultation", "Business analysis", "Automation roadmap", "No obligation"]
  },
  {
    id: "instagram-chatbot",
    title: "FREE Instagram Chatbot",
    description: "Get a fully customized Instagram chatbot that handles customer inquiries and generates leads automatically.",
    benefits: [
      "Get a free customized Instagram chatbot"
    ],
    icon: BotMessageSquare,
    features: ["Instagram Integration", "Lead Capture", "Automated Responses", "Custom Setup"]
  },
  {
    id: "custom-automation",
    title: "Get Customized AI Automation System for Your Business",
    description: "Complete AI automation solution tailored specifically for your business needs and goals.",
    benefits: [
      "AI systems that will increase your sales by a minimum of 20%",
      "Systems that turn 4 hours of social media work into 5 minutes",
      "AI systems that will completely automate your customer service"
    ],
    icon: Zap,
    features: ["Sales Automation", "Social Media Management", "Customer Service", "Custom Integration"]
  }
];

export default function ServicesOverview({}: ServicesOverviewProps) {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <section id="services" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get <span className="text-primary font-bold">Started</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Start with our free options to experience the power of AI automation.
          </p>
        </div>

        {/* Services Grid - Each step in a card/box */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <Card key={service.id} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                {/* Step Number Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                <CardHeader className="pb-4">
                  {/* Icon */}
                  <div className="mb-4 p-4 bg-primary/10 rounded-lg inline-flex w-fit">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>

                  {/* Step Label */}
                  <div className="text-sm text-primary font-semibold mb-2">
                    STEP {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Title */}
                  <CardTitle className="text-xl font-bold leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Benefits List */}
                  <div className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary-foreground" />
                        </div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button
                    className="w-full"
                    onClick={() => {
                      console.log(`Get started with ${service.id}`);
                      scrollToForm();
                    }}
                    data-testid={`button-get-${service.id}`}
                  >
                    {service.id === 'discovery-call' ? 'Book Free Call' :
                     service.id === 'instagram-chatbot' ? 'Get Free Chatbot' :
                     'Get Started'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="mb-4">
            Ready to transform your business with AI automation?
          </p>
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => {
              console.log('Schedule consultation clicked');
              scrollToForm();
            }}
            data-testid="button-consultation"
          >
            Schedule Free Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
}