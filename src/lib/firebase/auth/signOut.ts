import { signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '../config';
import { logger } from '@/utils/logger';

export async function signOut(): Promise<void> {
  try {
    await firebaseSignOut(auth);
    logger.info('User signed out successfully');
  } catch (error) {
    logger.error('Sign out error:', error);
    throw error;
  }
}