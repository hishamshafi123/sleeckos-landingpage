import { Button } from "@/components/ui/button";
import { calendlyBookings } from "@/lib/calendly";

interface HeroProps {
  onBookCall?: () => void;
  onWatchDemo?: () => void;
}

export default function Hero({ onBookCall, onWatchDemo }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
        <span className="text-primary">Empires</span> are built by<br />
          <span className="text-primary">obsessing</span> over <span className="text-primary">EFFICIENCY</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-12 font-bold max-w-4xl mx-auto">
          We will make sure you are as <span className="text-primary">EFFICIENT</span> as possible
        </p>

        {/* Video Container */}
        <div className="mb-12">
          <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden bg-card border border-border">
            <iframe
              src="https://www.youtube.com/embed/hPnNK9pg7os"
              title="VSL Demo Video"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => {
              console.log('Get free Instagram chatbot clicked');
              calendlyBookings.freeChatbot();
            }}
            data-testid="button-free-instagram-chatbot"
          >
            Free Instagram Chatbot
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-4"
            onClick={() => {
              console.log('Request demo clicked');
              calendlyBookings.demo();
            }}
            data-testid="button-request-demo"
          >
            Request Live Demo
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span>100+ AI systems built</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded-full"></div>
            <span>3-15 Days to Go Live</span>
          </div>
        </div>
      </div>
    </section>
  );
}