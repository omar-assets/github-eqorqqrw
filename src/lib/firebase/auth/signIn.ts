import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config';
import { getUserProfile, updateUserProfile } from '../user';
import { AuthResponse } from './types';
import { handleAuthError } from './errors';
import { logger } from '@/utils/logger';

export async function signIn(email: string, password: string): Promise<AuthResponse> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;

    if (!user.emailVerified) {
      throw { 
        code: 'auth/email-not-verified',
        message: 'Please verify your email before signing in'
      };
    }
    
    // Update last login timestamp
    await updateUserProfile(user.uid, {
      lastLoginAt: new Date()
    });
    
    // Get user profile
    const profile = await getUserProfile(user.uid);
    if (!profile) {
      throw new Error('User profile not found');
    }
    
    logger.info('User signed in successfully:', { userId: user.uid });
    
    return { user, profile };
  } catch (error) {
    throw handleAuthError(error);
  }
}