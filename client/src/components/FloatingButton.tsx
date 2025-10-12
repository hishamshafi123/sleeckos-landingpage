import React from 'react';
import { Button } from "@/components/ui/button";

interface FloatingButtonProps {
  text?: string;
  onClick?: () => void;
}

export default function FloatingButton({ text = "Get Free Access Now", onClick }: FloatingButtonProps) {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-pulse">
      <style jsx>{`
        .floating-button {
          position: fixed;
          bottom: 30px;
          right: 60px;
          z-index: 1000;
          transform: scale(1.1);
          animation: gentle-pulse 2s ease-in-out infinite;
        }

        .floating-button:hover {
          transform: scale(1.15);
        }

        @keyframes gentle-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0, 239, 255, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(0, 239, 255, 0); }
        }
      `}</style>

      <Button
        onClick={onClick || scrollToForm}
        className="floating-button bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/90 hover:to-cyan-300 text-black font-bold px-6 py-3 rounded-full shadow-2xl transition-all duration-300 border-2 border-primary/50"
      >
        {text}
      </Button>
    </div>
  );
}