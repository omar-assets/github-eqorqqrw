import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, enableMultiTabIndexedDbPersistence } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { env } from '@/config/environment';
import { logger } from '@/utils/logger';

const firebaseConfig = {
  apiKey: env.firebase.apiKey,
  authDomain: env.firebase.authDomain,
  projectId: env.firebase.projectId,
  storageBucket: env.firebase.storageBucket,
  messagingSenderId: env.firebase.messagingSenderId,
  appId: env.firebase.appId,
  measurementId: env.firebase.measurementId
};

// Initialize Firebase with error handling
let app;
let db;
let auth;
let analytics;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  
  // Enable offline persistence
  enableMultiTabIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      logger.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
      logger.warn('The current browser does not support offline persistence');
    }
  });

  // Initialize analytics only in production and if supported
  if (import.meta.env.PROD) {
    isSupported().then(supported => {
      if (supported) {
        analytics = getAnalytics(app);
        logger.info('Firebase Analytics initialized');
      }
    });
  }

  logger.info('Firebase initialized successfully');
} catch (error) {
  logger.error('Firebase initialization error:', error);
  throw error;
}

// Development environment setup
if (import.meta.env.DEV) {
  if (window.location.hostname === 'localhost') {
    connectAuthEmulator(auth, 'http://localhost:9099');
  }
}

export { app, auth, db, analytics };