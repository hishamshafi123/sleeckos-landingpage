import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, BotMessageSquare, Zap, Check, ArrowRight } from "lucide-react";
import ProcessModal from "@/components/ProcessModal";
import CalendlyModal from "@/components/CalendlyModal";
import { useState } from "react";

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
  const [isProcessModalOpen, setIsProcessModalOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

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

        {/* Services Grid - Inspired by the attached image layout */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-5 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Visual/Device Mockup Area */}
                <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="relative aspect-square max-w-32 lg:max-w-md lg:mx-auto">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl lg:rounded-3xl"></div>

                    {/* Device mockup placeholder - you can replace with actual device images */}
                    <div className="absolute inset-2 lg:inset-8 bg-card rounded-lg lg:rounded-2xl border border-border flex items-center justify-center">
                      <div className="p-2 lg:p-8 bg-primary/10 rounded-full">
                        <IconComponent className="h-6 w-6 lg:h-16 lg:w-16 text-primary" />
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-1 -right-1 lg:-top-4 lg:-right-4 w-3 h-3 lg:w-8 lg:h-8 bg-primary rounded-full opacity-60"></div>
                    <div className="absolute -bottom-2 -left-2 lg:-bottom-6 lg:-left-6 w-4 h-4 lg:w-12 lg:h-12 bg-primary/20 rounded-full opacity-40"></div>
                  </div>
                </div>

                {/* Content Area */}
                <div className={`space-y-6 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {/* Service Number and Icon */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-primary rounded-full">
                      <IconComponent className="h-4 w-4 md:h-6 md:w-6 text-primary-foreground" />
                    </div>
                    <div className="text-sm text-primary font-semibold">
                      STEP {String(index + 1).padStart(2, '0')}
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
                          setIsCalendlyOpen(true);
                        } else if (service.id === 'instagram-chatbot') {
                          setIsProcessModalOpen(true);
                        } else {
                          setIsProcessModalOpen(true);
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
          <p className="mb-4">
            Ready to transform your business with AI automation?
          </p>
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => {
              console.log('Schedule consultation clicked');
              setIsCalendlyOpen(true);
            }}
            data-testid="button-consultation"
          >
            Schedule Free Discovery Call
          </Button>
        </div>

        <ProcessModal
          isOpen={isProcessModalOpen}
          onClose={() => setIsProcessModalOpen(false)}
          calendlyUrl="https://calendly.com/hishamshafiofficial/ai-insider-knowledge-for-businesses"
        />

        <CalendlyModal
          isOpen={isCalendlyOpen}
          onClose={() => setIsCalendlyOpen(false)}
          url="https://calendly.com/hishamshafiofficial/ai-insider-knowledge-for-businesses"
        />
      </div>
    </section>
  );
}