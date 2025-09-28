import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, BotMessageSquare, Zap, Check, ArrowRight } from "lucide-react";
import { calendlyBookings } from "@/lib/calendly";

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

export default function ServicesOverview({ onLearnMore, onBookDemo }: ServicesOverviewProps) {
  return (
    <section id="services" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the service that best fits your needs. Start with our free options to experience the power of AI automation.
          </p>
        </div>

        {/* Services Grid - Inspired by the attached image layout */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Visual/Device Mockup Area */}
                <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="relative aspect-square max-w-md mx-auto">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl"></div>
                    
                    {/* Device mockup placeholder - you can replace with actual device images */}
                    <div className="absolute inset-8 bg-card rounded-2xl border border-border flex items-center justify-center">
                      <div className="p-8 bg-primary/10 rounded-full">
                        <IconComponent className="h-16 w-16 text-primary" />
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-60"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/20 rounded-full opacity-40"></div>
                  </div>
                </div>

                {/* Content Area */}
                <div className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {/* Service Number and Icon */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-sm text-primary font-semibold">
                      SERVICE {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    {service.title}
                  </h3>

                  {/* Benefits List */}
                  <div className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary-foreground" />
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <Button 
                      size="lg"
                      className="text-lg px-8"
                      onClick={() => {
                        console.log(`Get started with ${service.id}`);
                        if (service.id === 'discovery-call') {
                          calendlyBookings.discoveryCall();
                        } else if (service.id === 'instagram-chatbot') {
                          calendlyBookings.freeChatbot();
                        } else {
                          calendlyBookings.consultation();
                        }
                      }}
                      data-testid={`button-get-${service.id}`}
                    >
                      {service.id === 'discovery-call' ? 'Book Free Call' : 
                       service.id === 'instagram-chatbot' ? 'Get Free Chatbot' : 
                       'Get Started'}
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-muted-foreground mb-6">
            Ready to transform your business with AI automation?
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8"
            onClick={() => {
              console.log('Schedule consultation clicked');
              calendlyBookings.discoveryCall();
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