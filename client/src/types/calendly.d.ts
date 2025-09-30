// Global Calendly types
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget?: (options: { url: string; [key: string]: any }) => void;
      initInlineWidget?: (options: { url: string; parentElement: HTMLElement }) => void;
      initBadgeWidget?: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        [key: string]: any;
      }) => void;
    };
  }
}

export {}; // Make this a module