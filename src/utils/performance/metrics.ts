import { logger } from '../logger';

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

const THRESHOLDS = {
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  TTI: { good: 3800, poor: 7300 }
};

export const getRating = (
  name: keyof typeof THRESHOLDS,
  value: number
): PerformanceMetric['rating'] => {
  const threshold = THRESHOLDS[name];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
};

export const measurePerformance = (name: string, fn: () => void): void => {
  const start = performance.now();
  fn();
  const duration = performance.now() - start;
  
  logger.info('Performance measurement:', {
    name,
    duration: `${duration.toFixed(2)}ms`
  });
};

export const trackCLS = (): (() => void) => {
  let clsValue = 0;
  let clsEntries: PerformanceEntry[] = [];

  const observer = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (!entry.hadRecentInput) {
        const firstSessionEntry = clsEntries[0];
        const lastSessionEntry = clsEntries[clsEntries.length - 1];
        
        if (sessionStart && entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - sessionStart < 5000) {
          clsEntries.push(entry);
          clsValue = clsEntries.reduce((sum, entry) => sum + entry.value, 0);
        } else {
          sessionStart = entry.startTime;
          clsEntries = [entry];
          clsValue = entry.value;
        }
      }
    }
  });

  let sessionStart: number;
  observer.observe({ entryTypes: ['layout-shift'] });

  return () => observer.disconnect();
};