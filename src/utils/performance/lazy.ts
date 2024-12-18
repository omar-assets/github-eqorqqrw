import { lazy, ComponentType } from 'react';
import { logger } from '../logger';

interface LazyOptions {
  fallback?: React.ReactNode;
  errorBoundary?: boolean;
  onError?: (error: Error) => void;
}

export function lazyLoad<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  options: LazyOptions = {}
) {
  const LazyComponent = lazy(() =>
    factory().catch((error) => {
      logger.error('Error loading component:', error);
      options.onError?.(error);
      throw error;
    })
  );

  return LazyComponent;
}

export const preloadComponent = (componentPath: string): void => {
  const link = document.createElement('link');
  link.rel = 'modulepreload';
  link.href = componentPath;
  document.head.appendChild(link);
};

export const prefetchComponent = (componentPath: string): void => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = componentPath;
  document.head.appendChild(link);
};