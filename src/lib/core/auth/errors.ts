import { AuthError } from './types';
import { logger } from '@/utils/logger';

const AUTH_ERROR_MESSAGES = {
  'auth/email-already-in-use': 'Email already in use',
  'auth/invalid-email': 'Invalid email address',
  'auth/user-disabled': 'Account has been disabled',
  'auth/user-not-found': 'Invalid email or password',
  'auth/wrong-password': 'Invalid email or password',
  'auth/too-many-requests': 'Too many attempts. Please try again later.',
  'default': 'Authentication failed'
};

export const handleAuthError = (error: unknown): AuthError => {
  const code = error instanceof Error ? error.name : 'unknown';
  const message = AUTH_ERROR_MESSAGES[code as keyof typeof AUTH_ERROR_MESSAGES] || 
                 AUTH_ERROR_MESSAGES.default;

  logger.error('Authentication error:', { code, message, error });

  return { code, message };
};