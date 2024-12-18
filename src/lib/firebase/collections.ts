import { collection } from 'firebase/firestore';
import { db } from './config';

// Define collection references
export const usersCollection = collection(db, 'users');
export const investmentsCollection = collection(db, 'investments');
export const transactionsCollection = collection(db, 'transactions');
export const portfoliosCollection = collection(db, 'portfolios');
export const leadsCollection = collection(db, 'leads');
export const userInterestsCollection = collection(db, 'userInterests');
export const notificationsCollection = collection(db, 'notifications');

// Collection names as constants
export const COLLECTIONS = {
  USERS: 'users',
  INVESTMENTS: 'investments',
  TRANSACTIONS: 'transactions',
  PORTFOLIOS: 'portfolios',
  LEADS: 'leads',
  USER_INTERESTS: 'userInterests',
  NOTIFICATIONS: 'notifications'
} as const;

// Required indexes for notifications collection
export const REQUIRED_INDEXES = {
  NOTIFICATIONS: [
    {
      collectionGroup: 'notifications',
      queryScope: 'COLLECTION',
      fields: [
        { fieldPath: 'userId', order: 'ASCENDING' },
        { fieldPath: 'timestamp', order: 'DESCENDING' }
      ]
    },
    {
      collectionGroup: 'notifications',
      queryScope: 'COLLECTION',
      fields: [
        { fieldPath: 'userId', order: 'ASCENDING' },
        { fieldPath: 'type', order: 'ASCENDING' },
        { fieldPath: 'timestamp', order: 'DESCENDING' }
      ]
    },
    {
      collectionGroup: 'notifications',
      queryScope: 'COLLECTION',
      fields: [
        { fieldPath: 'userId', order: 'ASCENDING' },
        { fieldPath: 'read', order: 'ASCENDING' },
        { fieldPath: 'timestamp', order: 'DESCENDING' }
      ]
    }
  ]
};