import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, TrendingUp } from "lucide-react";
import CalendlyModal, { CalendlyInlineWidget } from "@/components/CalendlyModal";
import { useState } from "react";

interface FinalCTAProps {
  onBookCall?: () => void;
  onRequestDemo?: () => void;
}

export default function FinalCTA({}: FinalCTAProps) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA Card */}
        <Card className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
          
          <CardContent className="relative p-1 text-center">
            {/* Urgency Indicator */}
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-2 py-2 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">
                Limited Spots Available This Month
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-primary">3x Your Conversions</span>?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let manual processes hold you back. Join the businesses that are already automating their way to success.
            </p>

            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-lg mb-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Quick Setup</h4>
                <p className="text-sm text-muted-foreground">
                  Go live in 7-15 days
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-lg mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Risk-Free</h4>
                <p className="text-sm text-muted-foreground">
                  Refund if systems dont work
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-lg mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Proven Results</h4>
                <p className="text-sm text-muted-foreground">
                  56% average ROI increase
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="text-lg px-10 py-4"
                onClick={() => {
                  console.log('Book free call clicked');
                  setIsCalendlyOpen(true);
                }}
                data-testid="button-book-free-call"
              >
                Book Your Free Call Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-4"
                onClick={() => {
                  console.log('See live demo clicked');
                  setIsCalendlyOpen(true);
                }}
                data-testid="button-see-demo"
              >
                See Live Demo
              </Button>
            </div>

            {/* Calendly Iframe Widget - Inside the FinalCTA Card */}
            <div className="mt-8 bg-muted/30 rounded-lg p-4">
              <h3 className="text-center text-xl font-semibold mb-4">Schedule Your Free Consultation</h3>
              <iframe
                src="https://calendly.com/hishamshafiofficial/ai-insider-knowledge-for-businesses?embed_type=Inline&hide_event_type_details=1&background_color=ffffff&text_color=000000"
                width="100%"
                height="600"
                frameBorder="0"
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff'
                }}
                loading="eager"
                title="Schedule your free consultation"
                allow="autoplay; clipboard-write"
              />
            </div>

            {/* Trust Signals */}
            <div className="text-sm text-muted-foreground space-y-2 mt-4">
              <p>✓ No pressure consultation</p>
              <p>✓ Custom solution designed for your business</p>
              <p>✓ Full support and training included</p>
            </div>
          </CardContent>
        </Card>

      </div>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url="https://calendly.com/hishamshafiofficial/ai-insider-knowledge-for-businesses"
      />
    </section>
  );
}