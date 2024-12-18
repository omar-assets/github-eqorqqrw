import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config';
import { logger } from '@/utils/logger';

export async function resetPassword(email: string): Promise<void> {
  try {
    await sendPasswordResetEmail(auth, email);
    logger.info('Password reset email sent:', { email });
  } catch (error) {
    logger.error('Password reset error:', error);
    throw error;
  }
}