import { auth } from '@/lib/firebase/config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';
import { AuthError, AuthResponse } from './types';
import { validateAuthInput } from './validation';
import { handleAuthError } from './errors';
import { logger } from '@/utils/logger';

export class AuthService {
  async signIn(email: string, password: string): Promise<AuthResponse> {
    try {
      await validateAuthInput({ email, password });
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      logger.info('User signed in successfully');
      return { user: userCredential.user };
    } catch (error) {
      throw handleAuthError(error);
    }
  }

  async signUp(email: string, password: string, fullName: string): Promise<AuthResponse> {
    try {
      await validateAuthInput({ email, password, fullName });
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      logger.info('User signed up successfully');
      return { user: userCredential.user };
    } catch (error) {
      throw handleAuthError(error);
    }
  }

  async signOut(): Promise<void> {
    try {
      await firebaseSignOut(auth);
      logger.info('User signed out successfully');
    } catch (error) {
      throw handleAuthError(error);
    }
  }
}

export const authService = new AuthService();