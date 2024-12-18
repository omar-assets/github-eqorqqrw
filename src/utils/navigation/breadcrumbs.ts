import { ROUTES } from '../constants';

interface Breadcrumb {
  label: string;
  path: string;
}

export const generateBreadcrumbs = (pathname: string): Breadcrumb[] => {
  const paths = pathname.split('/').filter(Boolean);
  
  return paths.map((path, index) => {
    const url = `/${paths.slice(0, index + 1).join('/')}`;
    const route = getRouteConfig(url);
    
    return {
      label: route?.label || path.charAt(0).toUpperCase() + path.slice(1),
      path: url
    };
  });
};

export const getBreadcrumbLabel = (path: string): string => {
  const route = getRouteConfig(path);
  if (route) return route.label;
  
  const segment = path.split('/').pop();
  return segment ? segment.charAt(0).toUpperCase() + segment.slice(1) : '';
};