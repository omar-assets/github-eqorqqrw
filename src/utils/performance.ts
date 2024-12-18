import { env } from '@/config/environment';

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private marks: Map<string, number> = new Map();

  private constructor() {
    this.setupPerformanceObserver();
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private setupPerformanceObserver() {
    if (!window.PerformanceObserver) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Report long tasks (tasks that block the main thread for more than 50ms)
        if (entry.entryType === 'longtask') {
          this.reportPerformanceIssue({
            type: 'longtask',
            duration: entry.duration,
            startTime: entry.startTime
          });
        }
      }
    });

    observer.observe({ entryTypes: ['longtask', 'largest-contentful-paint'] });
  }

  startMark(name: string) {
    this.marks.set(name, performance.now());
  }

  endMark(name: string) {
    const startTime = this.marks.get(name);
    if (startTime) {
      const duration = performance.now() - startTime;
      this.marks.delete(name);
      
      this.reportPerformanceMetric({
        name,
        duration,
        timestamp: new Date().toISOString()
      });
    }
  }

  private reportPerformanceIssue(data: any) {
    if (import.meta.env.DEV) {
      console.warn('[Performance Issue]', data);
      return;
    }

    // Send to analytics or monitoring service
    if (env.features.analytics) {
      // Example: Send to your analytics endpoint
      fetch('/api/performance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).catch(console.error);
    }
  }

  private reportPerformanceMetric(metric: any) {
    if (import.meta.env.DEV) {
      console.info('[Performance Metric]', metric);
      return;
    }

    // Send to analytics service
    if (env.features.analytics) {
      // Implementation for production metrics reporting
    }
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance();