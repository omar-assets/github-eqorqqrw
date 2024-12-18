import { ERROR_TYPES, ERROR_MESSAGES } from './constants';
import { logger } from '../logger';

export interface ErrorDetails {
  type: keyof typeof ERROR_TYPES;
  message: string;
  originalError?: unknown;
  context?: Record<string, unknown>;
}

export const handleError = (
  error: unknown,
  context?: Record<string, unknown>
): ErrorDetails => {
  // Determine error type
  let type = ERROR_TYPES.UNKNOWN;
  let message = ERROR_MESSAGES[ERROR_TYPES.UNKNOWN];

  if (error instanceof Error) {
    if (error.name === 'ValidationError') {
      type = ERROR_TYPES.VALIDATION;
      message = error.message || ERROR_MESSAGES[ERROR_TYPES.VALIDATION];
    } else if (error.name === 'NetworkError') {
      type = ERROR_TYPES.NETWORK;
      message = error.message || ERROR_MESSAGES[ERROR_TYPES.NETWORK];
    }
  }

  // Log error
  logger.error(`${type} occurred:`, {
    message,
    originalError: error,
    context
  });

  return {
    type,
    message,
    originalError: error,
    context
  };
};