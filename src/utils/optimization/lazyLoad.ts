import { lazy, ComponentType } from 'react';
import { logger } from '../logger';

interface LazyLoadOptions {
  retry?: number;
  timeout?: number;
  fallback?: React.ReactNode;
}

export function lazyLoadComponent<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: LazyLoadOptions = {}
) {
  const {
    retry = 2,
    timeout = 10000,
    fallback
  } = options;

  return lazy(() => {
    let attempts = 0;

    const attemptLoad = async (): Promise<{ default: T }> => {
      try {
        const component = await Promise.race([
          importFn(),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Timeout')), timeout)
          )
        ]) as { default: T };

        return component;
      } catch (error) {
        attempts++;
        if (attempts <= retry) {
          logger.warn(`Retrying component load (${attempts}/${retry})`);
          return attemptLoad();
        }
        throw error;
      }
    };

    return attemptLoad()
      .catch(error => {
        logger.error('Component load failed:', error);
        return { default: fallback as any };
      });
  });
}

export const preloadComponent = (path: string): void => {
  const link = document.createElement('link');
  link.rel = 'modulepreload';
  link.href = path;
  document.head.appendChild(link);
};