import { fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth } from '../config';
import { logger } from '@/utils/logger';

export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const methods = await fetchSignInMethodsForEmail(auth, email);
    return methods && methods.length > 0;
  } catch (error) {
    // If the email doesn't exist, Firebase throws an error
    if (error.code === 'auth/user-not-found') {
      return false;
    }
    // For other errors, log and re-throw
    logger.error('Error checking email existence:', { 
      code: error.code,
      message: error.message 
    });
    throw error;
  }
}