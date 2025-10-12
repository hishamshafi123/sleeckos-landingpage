import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CalendlyModal from "@/components/CalendlyModal";
import { useState } from "react";

interface ProcessStep {
  id: string;
  title: string;
}

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl?: string;
}

const steps: ProcessStep[] = [
  {
    id: "book-call",
    title: "Book a free discovery call"
  },
  {
    id: "fill-application",
    title: "Fill in the application form"
  },
  {
    id: "get-automation",
    title: "Get your automation delivered in 24 hours"
  },
  {
    id: "setup-server",
    title: "Set it up on your server"
  },
  {
    id: "we-setup",
    title: "Or we'll set it up for you"
  }
];

export default function ProcessModal({ isOpen, onClose, calendlyUrl = "https://calendly.com/hishamshafiofficial/ai-insider-knowledge-for-businesses" }: ProcessModalProps) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // Temporarily hidden
  return null;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        {/* Modal */}
        <div className="bg-background rounded-lg shadow-xl max-w-2xl w-full relative animate-in fade-in-0 zoom-in-95 max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Process Content */}
          <Card className="border-0 shadow-none">
            <CardHeader className="text-left pb-8">
              <CardTitle className="text-2xl md:text-3xl font-bold">
                How to Get Your <span className="text-primary font-bold">Free Instagram Chatbot</span>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-3">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">
                        Step {index + 1}: {step.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Button */}
              <div className="mt-8 flex justify-center">
                <Button
                  size="lg"
                  className="w-full max-w-sm"
                  onClick={() => {
                    setIsCalendlyOpen(true);
                  }}
                >
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => {
          setIsCalendlyOpen(false);
          onClose();
        }}
        url={calendlyUrl}
      />
    </>
  );
}