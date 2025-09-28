import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, TrendingUp } from "lucide-react";
import { calendlyBookings } from "@/lib/calendly";

interface FinalCTAProps {
  onBookCall?: () => void;
  onRequestDemo?: () => void;
}

export default function FinalCTA({ onBookCall, onRequestDemo }: FinalCTAProps) {
  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA Card */}
        <Card className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
          
          <CardContent className="relative p-12 text-center">
            {/* Urgency Indicator */}
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">
                Limited Spots Available This Month
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-primary">10x Your Conversions</span>?
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
                  No upfront costs or contracts
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-lg mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Proven Results</h4>
                <p className="text-sm text-muted-foreground">
                  300% average ROI increase
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
                  calendlyBookings.discoveryCall();
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
                  calendlyBookings.demo();
                }}
                data-testid="button-see-demo"
              >
                See Live Demo
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="text-sm text-muted-foreground space-y-2">
              <p>✓ No pressure consultation</p>
              <p>✓ Custom solution designed for your business</p>
              <p>✓ Full support and training included</p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Teaser */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <Button 
            variant="ghost" 
            className="text-primary hover:text-primary/80"
            onClick={() => {
              console.log('View FAQ clicked');
              calendlyBookings.consultation();
            }}
            data-testid="button-faq"
          >
            View Frequently Asked Questions →
          </Button>
        </div>
      </div>
    </section>
  );
}