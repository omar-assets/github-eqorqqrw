export interface ErrorDetails {
  code?: string;
  message: string;
  stack?: string;
  context?: Record<string, any>;
}

export interface ErrorBoundaryProps {
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}