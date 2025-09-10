# Dosa World - South Indian Restaurant Website

## Overview
This is a React + TypeScript application for Dosa World, a South Indian restaurant in Hamburg. The website showcases the restaurant's menu, allows online reservations, and provides information about their authentic South Indian cuisine.

## Recent Changes
- 2025-09-10: Initial setup for Replit environment
  - Configured Vite to work with Replit proxy (port 5000, host 0.0.0.0)
  - Set up frontend workflow for development server
  - Configured deployment settings for production
  - All dependencies installed and LSP errors resolved

## Project Architecture
- **Frontend**: React 18 + TypeScript + Vite
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: TanStack Query (React Query)
- **Build Tool**: Vite with SWC

## Key Technologies
- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.1
- Tailwind CSS 3.4.11
- shadcn/ui components
- React Router 6.26.2
- TanStack Query 5.56.2

## Development
- Run `npm run dev` to start development server on port 5000
- The frontend is configured to work with Replit's proxy system
- Hot module replacement is enabled for fast development

## Deployment
- Configured for autoscale deployment target
- Build command: `npm run build`
- Preview command: `npm run preview`
- Suitable for static website deployment

## Project Structure
- `/src/components/` - Reusable UI components
- `/src/pages/` - Route-based page components
- `/src/assets/` - Static assets (images, etc.)
- `/src/hooks/` - Custom React hooks
- `/src/lib/` - Utility functions

## Pages
- Home (Index) - Main landing page
- About - Restaurant information
- Reservations - Table booking
- Contact - Contact information
- Online Ordering - Order placement
- Privacy Policy - Legal information