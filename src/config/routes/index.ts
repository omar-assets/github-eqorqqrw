// Import route constants
import { AUTH_ROUTES } from './auth.routes';
import { ONBOARDING_ROUTES } from './onboarding.routes';

// Define main routes object
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  FAQS: '/faqs',
  HOW_IT_WORKS: '/how-it-works',
  MARKETPLACE: '/marketplace',
  DASHBOARD: '/dashboard',
  NOT_FOUND: '/404',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS: '/terms',
  // Nested route objects
  AUTH: AUTH_ROUTES,
  ONBOARDING: ONBOARDING_ROUTES
} as const;