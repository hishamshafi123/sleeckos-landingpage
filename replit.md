# AI Services Landing Page

## Overview

This is a modern dark-themed landing page for AI automation services, built to showcase and sell AI chatbots, voice agents, and custom automation systems. The application features a conversion-optimized design with video sales letters, service showcases, social proof, and multiple call-to-action sections targeting businesses looking to automate their operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom dark theme configuration
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Design System
- **Theme**: Dark mode with conversion-focused design inspired by Odivend.com
- **Color Palette**: Vivid cyan-blue primary (#00E5FF), pitch black backgrounds (#0A0A0A), dark grey cards (#1A1A1A)
- **Typography**: Poppins/Montserrat for headings, Inter for body text
- **Layout**: Tailwind spacing primitives (4px, 8px, 16px, 32px units)
- **Components**: Reusable landing page sections (Hero, Services, Social Proof, CTA)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development**: Hot reload with Vite integration in development mode
- **API Structure**: RESTful endpoints with `/api` prefix
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Automatic API request/response logging with performance metrics

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL with Neon Database serverless driver
- **Schema**: User management with username/password authentication
- **Migrations**: Drizzle Kit for database schema management
- **Storage Interface**: Abstract storage interface with in-memory implementation for development

### Component Architecture
- **Landing Sections**: Modular components for Hero, Services, Process, Social Proof, and CTA sections
- **UI Library**: Complete shadcn/ui component set (buttons, cards, forms, dialogs, etc.)
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Accessibility**: ARIA-compliant components using Radix UI primitives

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for state management
- **Build Tools**: Vite for development and production builds, TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing

### UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS for processing
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx and tailwind-merge for conditional styling

### Backend Infrastructure
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL and Neon Database serverless driver
- **Validation**: Zod for runtime type validation and schema generation
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development Tools
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESBuild for production bundling
- **Development**: tsx for TypeScript execution, Replit integration plugins
- **Database Tools**: Drizzle Kit for migrations and schema management

### Form and Interaction
- **Form Handling**: React Hook Form with Hookform resolvers
- **Validation**: Zod for schema validation with Drizzle integration
- **UI Interactions**: Class Variance Authority for component variants
- **Date Handling**: date-fns for date manipulation and formatting

The application is designed for easy deployment on Replit with automatic development tooling and optimized for conversion-focused marketing campaigns targeting business automation services.