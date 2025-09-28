# Calendly Configuration

To use your own Calendly links, edit the `CALENDLY_URLS` object in `client/src/lib/calendly.ts`:

## Required Calendly URLs

Replace the placeholder URLs with your actual Calendly booking links:

```typescript
const CALENDLY_URLS = {
  discovery_call: 'YOUR_CALENDLY_USERNAME/discovery-call',     // For discovery calls and consultations
  free_chatbot: 'YOUR_CALENDLY_USERNAME/free-instagram-chatbot', // For free Instagram chatbot
  demo: 'YOUR_CALENDLY_USERNAME/demo-call',                    // For demo calls and live demos
  consultation: 'YOUR_CALENDLY_USERNAME/consultation',         // For general consultations
  strategy_call: 'YOUR_CALENDLY_USERNAME/strategy-call'       // For strategy calls
};
```

## How to Find Your Calendly URLs

1. Log into your Calendly account
2. Go to your event types
3. Click on the event you want to connect
4. Copy the booking page link (e.g., `https://calendly.com/yourusername/30min`)
5. Replace the placeholder URL in the configuration

## Button Mapping

Each button type is mapped to specific Calendly bookings:

- **Discovery Call buttons** → `discovery_call` URL
- **Free Chatbot buttons** → `free_chatbot` URL  
- **Demo buttons** → `demo` URL
- **Consultation buttons** → `consultation` URL
- **Strategy Call buttons** → `strategy_call` URL

## Features Included

- Popup booking windows for better user experience
- UTM tracking for campaign attribution
- Custom parameters for lead qualification
- Fallback to new tab if popups are blocked
- Mobile-responsive design

All buttons throughout the website now open Calendly booking windows when clicked!