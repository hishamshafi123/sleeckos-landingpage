import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { calendlyBookings } from "@/lib/calendly";

interface NavigationProps {
  onBookCall?: () => void;
}

export default function Navigation({ onBookCall }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold">
              Sleeck<span className="text-primary">OS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-process"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-testimonials"
            >
              Results
            </button>
            <Button 
              size="sm"
              onClick={() => {
                console.log('Nav book call clicked');
                calendlyBookings.discoveryCall();
              }}
              data-testid="nav-book-call"
            >
              Book Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                data-testid="mobile-nav-process"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                data-testid="mobile-nav-testimonials"
              >
                Results
              </button>
              <div className="pt-2">
                <Button 
                  className="w-full"
                  onClick={() => {
                    console.log('Mobile nav book call clicked');
                    calendlyBookings.discoveryCall();
                    setIsMenuOpen(false);
                  }}
                  data-testid="mobile-nav-book-call"
                >
                  Book Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}