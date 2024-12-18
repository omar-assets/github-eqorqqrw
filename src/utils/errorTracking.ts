import { env } from '@/config/environment';

interface ErrorDetails {
  message: string;
  stack?: string;
  context?: Record<string, any>;
}

class ErrorTracker {
  private static instance: ErrorTracker;
  private isDevelopment = import.meta.env.DEV;

  private constructor() {
    this.setupGlobalHandlers();
  }

  static getInstance(): ErrorTracker {
    if (!ErrorTracker.instance) {
      ErrorTracker.instance = new ErrorTracker();
    }
    return ErrorTracker.instance;
  }

  private setupGlobalHandlers() {
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError({
        message: 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        context: { reason: event.reason }
      });
    });

    window.addEventListener('error', (event) => {
      this.captureError({
        message: event.message,
        stack: event.error?.stack,
        context: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        }
      });
    });
  }

  captureError({ message, stack, context }: ErrorDetails) {
    if (this.isDevelopment) {
      console.error('[Error Tracker]', { message, stack, context });
      return;
    }

    // In production, send to error tracking service
    // This is where you'd integrate with services like Sentry
    const errorData = {
      message,
      stack,
      context,
      timestamp: new Date().toISOString(),
      environment: import.meta.env.MODE,
      version: import.meta.env.VITE_APP_VERSION
    };

    // Example: Send to your error tracking endpoint
    fetch('/api/error-tracking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(errorData)
    }).catch(console.error);
  }
}

export const errorTracker = ErrorTracker.getInstance();