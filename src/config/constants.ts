export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email'
  },
  USER: {
    PROFILE: '/user/profile',
    PREFERENCES: '/user/preferences',
    NOTIFICATIONS: '/user/notifications'
  },
  INVESTMENTS: {
    LIST: '/investments',
    DETAILS: (id: string) => `/investments/${id}`,
    TRANSACTIONS: (id: string) => `/investments/${id}/transactions`
  }
} as const;

export const CACHE_KEYS = {
  USER_PROFILE: 'user-profile',
  INVESTMENTS: 'investments',
  NOTIFICATIONS: 'notifications'
} as const;

export const ERROR_CODES = {
  AUTHENTICATION: {
    INVALID_CREDENTIALS: 'auth/invalid-credentials',
    USER_NOT_FOUND: 'auth/user-not-found',
    EMAIL_IN_USE: 'auth/email-already-in-use'
  },
  VALIDATION: {
    INVALID_INPUT: 'validation/invalid-input',
    REQUIRED_FIELD: 'validation/required-field'
  },
  API: {
    NETWORK_ERROR: 'api/network-error',
    SERVER_ERROR: 'api/server-error',
    TIMEOUT: 'api/timeout'
  }
} as const;

export const TIMEOUTS = {
  API_REQUEST: 30000,
  AUTHENTICATION: 10000,
  ANIMATION: 300
} as const;