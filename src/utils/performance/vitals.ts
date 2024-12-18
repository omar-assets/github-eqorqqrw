import { logger } from '../logger';

interface WebVital {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 }
};

const getRating = (name: keyof typeof WEB_VITALS_THRESHOLDS, value: number): WebVital['rating'] => {
  const thresholds = WEB_VITALS_THRESHOLDS[name];
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
};

export const reportWebVitals = (metric: { name: string; value: number }): void => {
  const { name, value } = metric;
  const rating = getRating(name as keyof typeof WEB_VITALS_THRESHOLDS, value);
  
  logger.info('Web Vital:', { name, value, rating });
  
  if (import.meta.env.PROD) {
    // Send to analytics in production
    navigator.sendBeacon('/api/metrics', JSON.stringify({
      name,
      value,
      rating,
      url: window.location.href,
      timestamp: Date.now()
    }));
  }
};

export const initializePerformanceMonitoring = (): void => {
  if (!window.performance || !window.PerformanceObserver) return;

  // First Contentful Paint
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    if (entries.length > 0) {
      reportWebVitals({
        name: 'FCP',
        value: entries[0].startTime
      });
    }
  }).observe({ entryTypes: ['paint'] });

  // Largest Contentful Paint
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    if (entries.length > 0) {
      reportWebVitals({
        name: 'LCP',
        value: entries[entries.length - 1].startTime
      });
    }
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // First Input Delay
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    if (entries.length > 0) {
      reportWebVitals({
        name: 'FID',
        value: entries[0].processingStart - entries[0].startTime
      });
    }
  }).observe({ entryTypes: ['first-input'] });
};