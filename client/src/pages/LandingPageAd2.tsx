import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import ServicesOverview from "@/components/ServicesOverview";
import UrgencySection from "@/components/UrgencySection";
import SocialProof from "@/components/SocialProof";
import ProcessSection from "@/components/ProcessSection";
import FinalCTA from "@/components/FinalCTA";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export default function LandingPageAd2() {
  // Set dark mode by default for the landing page
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const handleBookCall = scrollToForm;
  const handleRequestDemo = scrollToForm;
  const handleLearnMore = (serviceId: string) => {
    console.log(`Learning more about ${serviceId}`);
    scrollToForm();
  };
  const handleBookDemo = (serviceId: string) => {
    console.log(`Booking demo for ${serviceId}`);
    scrollToForm();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onBookCall={handleBookCall} />

      <main>
        <section id="hero">
          <Hero
            onBookCall={handleBookCall}
            onWatchDemo={handleRequestDemo}
            videoSrc="https://www.youtube.com/embed/YOUR_AD_VIDEO_ID_2"
          />
        </section>

        {/* Lead Capture Form - Right after VSL */}
        <LeadCaptureForm
          webhookUrl="https://n8n.marketingagentc.com/webhook/1956b02f-eb16-45b8-a58a-8cbfc2648aec"
          heading="Get Your <span class='text-primary'>Free</span> Ad Video"
          subheading="Fill in your details below and we'll create a professional ad video for you"
          buttonText="Get Free Ad Video"
        />

        <section id="process">
          <ProcessSection />
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
            <img src="/logo.png" alt="SleeckOS" className="h-8 w-auto select-none" loading="eager" decoding="async" />
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
