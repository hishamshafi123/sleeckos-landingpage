import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import ServicesOverview from "@/components/ServicesOverview";
import UrgencySection from "@/components/UrgencySection";
import SocialProof from "@/components/SocialProof";
import ProcessSection from "@/components/ProcessSection";
import FinalCTA from "@/components/FinalCTA";

export default function LandingPage() {
  // Set dark mode by default for the landing page
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleBookCall = () => {
    // todo: remove mock functionality - integrate with actual booking system
    console.log('Booking call - would redirect to scheduling system');
    // Placeholder for actual booking integration
    alert('Booking system would open here - scheduling a consultation call');
  };

  const handleRequestDemo = () => {
    // todo: remove mock functionality - integrate with demo system
    console.log('Requesting demo - would show demo or scheduling');
    alert('Demo system would open here - either live demo or demo scheduling');
  };

  const handleLearnMore = (serviceId: string) => {
    // todo: remove mock functionality - navigate to service detail page
    console.log(`Learning more about ${serviceId}`);
    alert(`Would navigate to detailed ${serviceId} information page`);
  };

  const handleBookDemo = (serviceId: string) => {
    // todo: remove mock functionality - integrate with service-specific booking
    console.log(`Booking demo for ${serviceId}`);
    alert(`Would open booking system for ${serviceId} demo`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onBookCall={handleBookCall} />
      
      <main>
        <section id="hero">
          <Hero 
            onBookCall={handleBookCall}
            onWatchDemo={handleRequestDemo}
          />
        </section>

        <section id="problem">
          <ProblemStatement />
        </section>

        <section id="services">
          <ServicesOverview 
            onLearnMore={handleLearnMore}
            onBookDemo={handleBookDemo}
          />
        </section>

        <section id="urgency">
          <UrgencySection onGetChatbot={handleBookCall} />
        </section>

        <section id="testimonials">
          <SocialProof />
        </section>

        <section id="process">
          <ProcessSection onGetStarted={handleBookCall} />
        </section>

        <section id="cta">
          <FinalCTA 
            onBookCall={handleBookCall}
            onRequestDemo={handleRequestDemo}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-xl font-bold">
              Sleeck<span className="text-primary">OS</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Transform your business with AI automation solutions
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <button 
              onClick={() => console.log('Privacy policy clicked')}
              className="hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => console.log('Terms clicked')}
              className="hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => console.log('Contact clicked')}
              className="hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}