import { ROUTES } from '../constants';

export interface RouteConfig {
  path: string;
  label: string;
  icon?: React.ComponentType;
  requiresAuth?: boolean;
  publicOnly?: boolean;
}

export const mainNavRoutes: RouteConfig[] = [
  { path: ROUTES.MARKETPLACE, label: 'Marketplace' },
  { path: ROUTES.HOW_IT_WORKS, label: 'How it Works' },
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.FAQS, label: 'FAQs' }
];

export const authRoutes: RouteConfig[] = [
  { path: ROUTES.LOGIN, label: 'Sign In', publicOnly: true },
  { path: ROUTES.REGISTER, label: 'Get Started', publicOnly: true },
  { path: ROUTES.DASHBOARD, label: 'Dashboard', requiresAuth: true }
];

export const isActiveRoute = (currentPath: string, routePath: string): boolean => {
  if (routePath === '/') {
    return currentPath === '/';
  }
  return currentPath.startsWith(routePath);
};

export const getRouteConfig = (path: string): RouteConfig | undefined => {
  return [...mainNavRoutes, ...authRoutes].find(route => route.path === path);
};