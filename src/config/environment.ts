import { z } from 'zod';

// Environment variable validation schema
const envSchema = z.object({
  firebase: z.object({
    apiKey: z.string().min(1, 'Firebase API Key is required'),
    authDomain: z.string().min(1, 'Firebase Auth Domain is required'),
    projectId: z.string().min(1, 'Firebase Project ID is required'),
    storageBucket: z.string().min(1, 'Firebase Storage Bucket is required'),
    messagingSenderId: z.string().min(1, 'Firebase Messaging Sender ID is required'),
    appId: z.string().min(1, 'Firebase App ID is required'),
    measurementId: z.string().optional()
  }),
  app: z.object({
    name: z.string().min(1, 'App Name is required'),
    minInvestment: z.number().min(0, 'Minimum investment must be non-negative'),
    supportEmail: z.string().email('Support email must be valid'),
    apiUrl: z.string().url().optional()
  }),
  features: z.object({
    notifications: z.boolean(),
    analytics: z.boolean()
  })
});

// Default values for development
const defaultConfig = {
  firebase: {
    apiKey: 'demo-api-key',
    authDomain: 'demo.firebaseapp.com',
    projectId: 'demo-project',
    storageBucket: 'demo.appspot.com',
    messagingSenderId: '123456789',
    appId: '1:123456789:web:abcdef',
    measurementId: 'G-DEMO123'
  },
  app: {
    name: 'BRiX Assets',
    minInvestment: 100,
    supportEmail: 'support@brixasset.com',
    apiUrl: 'http://localhost:3000/api'
  },
  features: {
    notifications: true,
    analytics: false
  }
};

// Load environment variables with fallbacks
const loadConfig = () => {
  const config = {
    firebase: {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
    },
    app: {
      name: import.meta.env.VITE_APP_NAME,
      minInvestment: Number(import.meta.env.VITE_MIN_INVESTMENT),
      supportEmail: import.meta.env.VITE_SUPPORT_EMAIL,
      apiUrl: import.meta.env.VITE_API_URL
    },
    features: {
      notifications: import.meta.env.VITE_ENABLE_NOTIFICATIONS === 'true',
      analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true'
    }
  };

  // Use default values in development
  if (import.meta.env.DEV) {
    return {
      ...defaultConfig,
      ...config,
      firebase: {
        ...defaultConfig.firebase,
        ...config.firebase
      },
      app: {
        ...defaultConfig.app,
        ...config.app
      },
      features: {
        ...defaultConfig.features,
        ...config.features
      }
    };
  }

  return config;
};

// Validate and export configuration
const validateConfig = () => {
  try {
    const config = loadConfig();
    const result = envSchema.safeParse(config);

    if (!result.success) {
      const errors = result.error.errors.map(error => 
        `${error.path.join('.')}: ${error.message}`
      ).join('\n');

      if (import.meta.env.DEV) {
        console.warn('Environment validation warnings:\n', errors);
        return defaultConfig;
      }

      throw new Error(`Invalid environment configuration:\n${errors}`);
    }

    return result.data;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn('Using default configuration in development');
      return defaultConfig;
    }
    throw error;
  }
};

export const env = validateConfig();