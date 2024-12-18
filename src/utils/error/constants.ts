export const ERROR_TYPES = {
  VALIDATION: 'VALIDATION_ERROR',
  API: 'API_ERROR',
  AUTH: 'AUTH_ERROR',
  NETWORK: 'NETWORK_ERROR',
  STORAGE: 'STORAGE_ERROR',
  UNKNOWN: 'UNKNOWN_ERROR'
} as const;

export const ERROR_MESSAGES = {
  [ERROR_TYPES.VALIDATION]: 'Validation failed',
  [ERROR_TYPES.API]: 'API request failed',
  [ERROR_TYPES.AUTH]: 'Authentication failed',
  [ERROR_TYPES.NETWORK]: 'Network error occurred',
  [ERROR_TYPES.STORAGE]: 'Storage operation failed',
  [ERROR_TYPES.UNKNOWN]: 'An unknown error occurred'
} as const;