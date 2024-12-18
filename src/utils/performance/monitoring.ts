import { logger } from '../logger';

interface PerformanceMetrics {
  FCP: number;
  LCP: number;
  CLS: number;
  FID: number;
  TTFB: number;
}

export const initializePerformanceMonitoring = (): void => {
  if (!window.performance || !window.PerformanceObserver) {
    return;
  }

  // First Contentful Paint
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    if (entries.length > 0) {
      const fcp = entries[0];
      logger.info('FCP:', { value: fcp.startTime });
    }
  }).observe({ entryTypes: ['paint'] });

  // Largest Contentful Paint
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    logger.info('LCP:', { value: lastEntry.startTime });
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // Cumulative Layout Shift
  let cumulativeLayoutShift = 0;
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (!entry.hadRecentInput) {
        cumulativeLayoutShift += entry.value;
      }
    }
    logger.info('CLS:', { value: cumulativeLayoutShift });
  }).observe({ entryTypes: ['layout-shift'] });

  // First Input Delay
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    if (entries.length > 0) {
      const fid = entries[0];
      logger.info('FID:', { value: fid.processingStart - fid.startTime });
    }
  }).observe({ entryTypes: ['first-input'] });
};

export const reportPerformanceMetrics = (metrics: Partial<PerformanceMetrics>): void => {
  if (import.meta.env.PROD) {
    // Send metrics to analytics service
    fetch('/api/metrics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        metrics,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      })
    }).catch(error => {
      logger.error('Error reporting metrics:', error);
    });
  }
};