// Calendly integration utilities

export interface CalendlyConfig {
  url: string;
  prefill?: {
    name?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    organization?: string;
    customAnswers?: Record<string, string>;
  };
  utm?: {
    utmCampaign?: string;
    utmSource?: string;
    utmMedium?: string;
    utmContent?: string;
    utmTerm?: string;
  };
}

// Default Calendly configuration - replace with your actual Calendly URLs
const CALENDLY_URLS = {
  discovery_call: 'https://calendly.com/d/cw4r-kvc-nmk',
  free_chatbot: 'https://calendly.com/d/cw4r-kvc-nmk',
  demo: 'https://calendly.com/d/cw4r-kvc-nmk',
  consultation: 'https://calendly.com/d/cw4r-kvc-nmk',
  strategy_call: 'https://calendly.com/d/cw4r-kvc-nmk'
};

// Declare Calendly global for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string; [key: string]: any }) => void;
    };
  }
}

/**
 * Opens Calendly using the official widget popup
 */
export function openCalendlyPopup(config: CalendlyConfig): void {
  try {
    // Build URL with parameters
    const url = new URL(config.url);

    // Add prefill parameters
    if (config.prefill) {
      if (config.prefill.name) url.searchParams.set('name', config.prefill.name);
      if (config.prefill.firstName) url.searchParams.set('first_name', config.prefill.firstName);
      if (config.prefill.lastName) url.searchParams.set('last_name', config.prefill.lastName);
      if (config.prefill.email) url.searchParams.set('email', config.prefill.email);
      if (config.prefill.organization) url.searchParams.set('a1', config.prefill.organization);

      // Add custom answers
      if (config.prefill.customAnswers) {
        Object.entries(config.prefill.customAnswers).forEach(([key, value]) => {
          url.searchParams.set(`custom_answers[${key}]`, value);
        });
      }
    }

    // Add UTM parameters
    if (config.utm) {
      Object.entries(config.utm).forEach(([key, value]) => {
        if (value) url.searchParams.set(key, value);
      });
    }

    // Add color customization parameters
    url.searchParams.set('hide_gdpr_banner', '1');
    url.searchParams.set('background_color', '000000');
    url.searchParams.set('text_color', 'ffffff');
    url.searchParams.set('primary_color', '00ffff');

    // Use Calendly widget if available, otherwise fallback to window.open
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: url.toString() });
    } else {
      // Fallback to popup window if Calendly widget is not loaded
      const popup = window.open(
        url.toString(),
        'calendly-popup',
        'width=800,height=700,scrollbars=yes,resizable=yes'
      );

      if (popup) {
        popup.focus();
      } else {
        // Final fallback to opening in same tab if popup is blocked
        window.open(url.toString(), '_blank');
      }
    }
  } catch (error) {
    console.error('Error opening Calendly:', error);
    // Fallback to direct navigation
    window.open(config.url, '_blank');
  }
}

/**
 * Opens Calendly in the same tab
 */
export function navigateToCalendly(config: CalendlyConfig): void {
  try {
    const url = new URL(config.url);
    
    // Add prefill parameters
    if (config.prefill) {
      if (config.prefill.name) url.searchParams.set('name', config.prefill.name);
      if (config.prefill.firstName) url.searchParams.set('first_name', config.prefill.firstName);
      if (config.prefill.lastName) url.searchParams.set('last_name', config.prefill.lastName);
      if (config.prefill.email) url.searchParams.set('email', config.prefill.email);
      if (config.prefill.organization) url.searchParams.set('a1', config.prefill.organization);
      
      if (config.prefill.customAnswers) {
        Object.entries(config.prefill.customAnswers).forEach(([key, value]) => {
          url.searchParams.set(`custom_answers[${key}]`, value);
        });
      }
    }
    
    // Add UTM parameters  
    if (config.utm) {
      Object.entries(config.utm).forEach(([key, value]) => {
        if (value) url.searchParams.set(key, value);
      });
    }
    
    window.location.href = url.toString();
  } catch (error) {
    console.error('Error navigating to Calendly:', error);
    window.location.href = config.url;
  }
}

// Predefined booking functions for different call types
export const calendlyBookings = {
  discoveryCall: () => openCalendlyPopup({
    url: CALENDLY_URLS.discovery_call,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'discovery_call'
    },
    prefill: {
      customAnswers: {
        'call_type': 'Discovery Call'
      }
    }
  }),
  
  freeChatbot: () => openCalendlyPopup({
    url: CALENDLY_URLS.free_chatbot,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'free_instagram_chatbot'
    },
    prefill: {
      customAnswers: {
        'service_type': 'Free Instagram Chatbot'
      }
    }
  }),
  
  demo: () => openCalendlyPopup({
    url: CALENDLY_URLS.demo,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'demo_call'
    },
    prefill: {
      customAnswers: {
        'call_type': 'Demo Call'
      }
    }
  }),
  
  consultation: () => openCalendlyPopup({
    url: CALENDLY_URLS.consultation,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'consultation'
    },
    prefill: {
      customAnswers: {
        'call_type': 'Consultation'
      }
    }
  }),
  
  strategyCall: () => openCalendlyPopup({
    url: CALENDLY_URLS.strategy_call,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'strategy_call'
    },
    prefill: {
      customAnswers: {
        'call_type': 'Strategy Call'
      }
    }
  })
};

/**
 * Prompts user for their information and opens Calendly with prefilled data
 */
export function openCalendlyWithForm(config: Omit<CalendlyConfig, 'prefill'> & { prefill?: Omit<CalendlyConfig['prefill'], 'firstName' | 'lastName' | 'email' | 'organization'> }): void {
  // Prompt for user information
  const firstName = prompt('Please enter your first name:');
  if (!firstName) return; // User cancelled

  const lastName = prompt('Please enter your last name:');
  if (!lastName) return; // User cancelled

  const email = prompt('Please enter your email address:');
  if (!email) return; // User cancelled

  const organization = prompt('Please enter your organization name:');
  if (!organization) return; // User cancelled

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Open Calendly with prefilled information
  openCalendlyPopup({
    ...config,
    prefill: {
      ...config.prefill,
      firstName,
      lastName,
      email,
      organization
    }
  });
}

// Enhanced booking functions that collect user information first
export const calendlyBookingsWithForm = {
  discoveryCall: () => openCalendlyWithForm({
    url: CALENDLY_URLS.discovery_call,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'discovery_call'
    },
    prefill: {
      customAnswers: {
        'call_type': 'Discovery Call'
      }
    }
  }),

  freeChatbot: () => openCalendlyWithForm({
    url: CALENDLY_URLS.free_chatbot,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'free_instagram_chatbot'
    },
    prefill: {
      customAnswers: {
        'service_type': 'Free Instagram Chatbot'
      }
    }
  }),

  demo: () => openCalendlyWithForm({
    url: CALENDLY_URLS.demo,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'demo_call'
    },
    prefill: {
      customAnswers: {
        'call_type': 'Demo Call'
      }
    }
  }),

  consultation: () => openCalendlyWithForm({
    url: CALENDLY_URLS.consultation,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'consultation'
    },
    prefill: {
      customAnswers: {
        'call_type': 'Consultation'
      }
    }
  }),

  strategyCall: () => openCalendlyWithForm({
    url: CALENDLY_URLS.strategy_call,
    utm: {
      utmSource: 'website',
      utmMedium: 'landing_page',
      utmCampaign: 'strategy_call'
    },
    prefill: {
      customAnswers: {
        'call_type': 'Strategy Call'
      }
    }
  })
};

// Function to update Calendly URLs (for easy configuration)
export function updateCalendlyUrls(urls: Partial<typeof CALENDLY_URLS>): void {
  Object.assign(CALENDLY_URLS, urls);
}