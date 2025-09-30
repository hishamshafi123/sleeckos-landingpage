import { X } from "lucide-react";
import { useEffect, useRef } from "react";

// Calendly types are already declared in lib/calendly.ts

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function CalendlyModal({ isOpen, onClose, url }: CalendlyModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && containerRef.current && typeof window !== 'undefined') {
      // Clear any existing Calendly widget
      containerRef.current.innerHTML = '';

      // Create the Calendly widget exactly as provided
      const calendlyDiv = document.createElement('div');
      calendlyDiv.className = 'calendly-inline-widget';
      calendlyDiv.setAttribute('data-url', url);
      calendlyDiv.style.minWidth = '320px';
      calendlyDiv.style.height = '700px';
      calendlyDiv.style.width = '100%';

      containerRef.current.appendChild(calendlyDiv);

      // Function to initialize Calendly widget
      const initializeCalendly = () => {
        // Force Calendly to recognize the new widget
        if (window.Calendly && window.Calendly.initInlineWidget) {
          window.Calendly.initInlineWidget({
            url: url,
            parentElement: calendlyDiv
          });
        } else {
          // Dispatch event to trigger Calendly initialization
          const event = new Event('calendly-widget-ready');
          window.dispatchEvent(event);
        }
      };

      // Load Calendly script if not already loaded
      const existingScript = document.querySelector('script[src*="calendly"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
          // Wait a bit for Calendly to fully initialize
          setTimeout(initializeCalendly, 100);
        };
        document.body.appendChild(script);
      } else {
        // Script already loaded, initialize immediately
        setTimeout(initializeCalendly, 50);
      }
    }
  }, [isOpen, url]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        {/* Modal */}
        <div className="bg-background rounded-lg shadow-xl max-w-4xl w-full relative animate-in fade-in-0 zoom-in-95 max-h-[95vh] overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10 bg-background rounded-full p-2 shadow-lg"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Calendly Widget Container */}
          <div ref={containerRef} className="w-full h-[700px] max-h-[90vh] overflow-auto" />
        </div>
      </div>
    </>
  );
}

interface CalendlyInlineWidgetProps {
  url: string;
  height?: string;
  minWidth?: string;
}

export function CalendlyInlineWidget({ url, height = '700px', minWidth = '320px' }: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined') {
      // Clear any existing Calendly widget
      containerRef.current.innerHTML = '';

      // Create the Calendly widget exactly as provided
      const calendlyDiv = document.createElement('div');
      calendlyDiv.className = 'calendly-inline-widget';
      calendlyDiv.setAttribute('data-url', url);
      calendlyDiv.style.minWidth = minWidth;
      calendlyDiv.style.height = height;
      calendlyDiv.style.width = '100%';

      containerRef.current.appendChild(calendlyDiv);

      // Function to initialize Calendly widget
      const initializeCalendly = () => {
        // Force Calendly to recognize the new widget
        if (window.Calendly && window.Calendly.initInlineWidget) {
          window.Calendly.initInlineWidget({
            url: url,
            parentElement: calendlyDiv
          });
        } else {
          // Dispatch event to trigger Calendly initialization
          const event = new Event('calendly-widget-ready');
          window.dispatchEvent(event);
        }
      };

      // Load Calendly script if not already loaded
      const existingScript = document.querySelector('script[src*="calendly"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
          // Wait a bit for Calendly to fully initialize
          setTimeout(initializeCalendly, 100);
        };
        document.body.appendChild(script);
      } else {
        // Script already loaded, initialize immediately
        setTimeout(initializeCalendly, 50);
      }
    }
  }, [url, height, minWidth]);

  return <div ref={containerRef} className="w-full" />;
}


