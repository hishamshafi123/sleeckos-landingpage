import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { calendlyBookings } from "@/lib/calendly";

interface UrgencySectionProps {
  onGetChatbot?: () => void;
}

export default function UrgencySection({ onGetChatbot }: UrgencySectionProps) {
  return (
    <section className="py-16 px-4 bg-destructive/10 border-t border-b border-destructive/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          {/* Warning Icon */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-16 h-16 bg-destructive/20 rounded-full">
              <AlertTriangle className="h-8 w-8 text-destructive animate-pulse" />
            </div>
          </div>

          {/* Warning Message */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-destructive mb-2">
              WARNING: Free Instagram chatbot promotion will end soon
            </h3>
            <p className="text-muted-foreground">
              Grab yours before it's gone!
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Button 
              size="lg"
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
              onClick={() => {
                console.log('Get free chatbot urgency clicked');
                calendlyBookings.freeChatbot();
              }}
              data-testid="button-urgency-chatbot"
            >
              Get Free Chatbot Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}