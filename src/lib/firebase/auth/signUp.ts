import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { auth } from '../config';
import { createUserProfile, getUserProfile } from '../user';
import { AuthResponse } from './types';
import { handleAuthError } from './errors';
import { checkEmailExists } from './utils';
import { logger } from '@/utils/logger';

export async function signUp(email: string, password: string, fullName: string): Promise<AuthResponse> {
  try {
    // Check if email exists before attempting registration
    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      logger.warn('Duplicate signup attempt:', { email });
      throw { 
        code: 'auth/email-already-in-use',
        message: 'duplicate-email'
      };
    }
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;
    
    // Create user profile with onboarding status
    await createUserProfile(user.uid, {
      email,
      fullName,
      emailVerified: false,
      profileCompletionStatus: 'onboarding',
      onboardingStep: 'account-details',
      createdAt: new Date(),
      lastLoginAt: new Date(),
      lastUpdatedAt: new Date()
    });
    
    await updateProfile(user, { 
      displayName: fullName
    });
    
    await sendEmailVerification(user);
    
    logger.info('User signed up successfully:', { userId: user.uid });
    
    const profile = await getUserProfile(user.uid);
    if (!profile) {
      throw new Error('Failed to create user profile');
    }
    
    return { user, profile };
  } catch (error) {
    throw handleAuthError(error);
  }
}