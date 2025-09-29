import { Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CalendlyModal from "@/components/CalendlyModal";
import { useEffect, useState } from "react";

interface UrgencySectionProps {
  onGetChatbot?: () => void;
}

export default function UrgencySection({}: UrgencySectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // Show modal after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        {/* Modal */}
        <div className="bg-background rounded-lg shadow-xl max-w-md w-full relative animate-in fade-in-0 zoom-in-95">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-6">
            <div className="text-center space-y-4">
              {/* Clock Icon */}
              <div className="flex justify-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full">
                  <Clock className="h-8 w-8 text-primary animate-pulse" />
                </div>
              </div>

              {/* Promotion Message */}
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Limited Time Promotion
                </h3>
                <p className="text-muted-foreground mb-6">
                  The limited time promotion to get free Instagram chatbot will end soon. Don't miss it out!
                </p>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full"
                onClick={() => {
                  console.log('Get Free Access Now urgency clicked');
                  setIsCalendlyOpen(true);
                  setIsOpen(false);
                }}
                data-testid="button-urgency-chatbot"
              >
                Get Free Access Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url="https://calendly.com/hishamshafiofficial/ai-insider-knowledge-for-businesses"
      />
    </>
  );
}