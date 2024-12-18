import { env } from './environment';
import { TIMEOUTS, ERROR_CODES } from './constants';
import { logger } from '@/utils/logger';

interface ApiConfig {
  baseUrl: string;
  timeout: number;
  retryAttempts: number;
  retryDelay: number;
}

export const apiConfig: ApiConfig = {
  baseUrl: env.app.apiUrl || '',
  timeout: Number(import.meta.env.VITE_API_TIMEOUT) || TIMEOUTS.API_REQUEST,
  retryAttempts: Number(import.meta.env.VITE_API_RETRY_ATTEMPTS) || 3,
  retryDelay: Number(import.meta.env.VITE_API_RETRY_DELAY) || 1000
};

export const handleApiError = (error: unknown): never => {
  if (error instanceof Error) {
    if (error.name === 'TimeoutError') {
      logger.error('API request timeout:', { error });
      throw new Error(ERROR_CODES.API.TIMEOUT);
    }
    
    if (error.name === 'NetworkError') {
      logger.error('Network error:', { error });
      throw new Error(ERROR_CODES.API.NETWORK_ERROR);
    }
  }
  
  logger.error('API error:', { error });
  throw new Error(ERROR_CODES.API.SERVER_ERROR);
};