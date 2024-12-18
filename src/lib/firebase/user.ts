import { doc, setDoc, getDoc, updateDoc, serverTimestamp, collection, addDoc } from 'firebase/firestore';
import { db } from './config';
import { COLLECTIONS } from './collections';
import { UserProfile } from './types';
import { addNotification } from './notifications';
import { logger } from '@/utils/logger';

export async function createUserProfile(userId: string, data: Partial<UserProfile>): Promise<void> {
  try {
    const userRef = doc(db, COLLECTIONS.USERS, userId);
    const now = new Date();
    
    // Use APP_CONFIG for consistent branding
    const companyName = APP_CONFIG.APP_NAME;
    
    const userProfile: UserProfile = {
      id: userId,
      email: data.email!,
      fullName: data.fullName!,
      createdAt: data.createdAt || now,
      lastLoginAt: data.lastLoginAt || now,
      company: companyName,
      emailVerified: false,
      accountStatus: 'pending',
      kycStatus: 'not_started',
      investmentPreferences: {
        riskTolerance: 'moderate',
        preferredAssetTypes: [],
        minInvestment: 100000
      },
      ...data
    };

    await setDoc(userRef, {
      ...userProfile,
      createdAt: serverTimestamp(), 
      lastLoginAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    logger.info('User profile created:', { userId });
  } catch (error) {
    logger.error('Create user profile error:', error);
    throw error;
  }
}

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  try {
    const userRef = doc(db, COLLECTIONS.USERS, userId);
    const userDoc = await getDoc(userRef);
    
    if (!userDoc.exists()) {
      return null;
    }

    return userDoc.data() as UserProfile;
  } catch (error) {
    logger.error('Get user profile error:', error);
    throw error;
  }
}

export async function updateUserProfile(userId: string, data: Partial<UserProfile>): Promise<void> {
  try {
    const userRef = doc(db, COLLECTIONS.USERS, userId);
    await updateDoc(userRef, {
      ...data,
      lastLoginAt: serverTimestamp()
    });
    
    logger.info('User profile updated:', { userId });
  } catch (error) {
    logger.error('Update user profile error:', error);
    throw error;
  }
}

export async function addUserInterest(userId: string, investmentId: string): Promise<void> {
  try {
    // Add to user interests collection
    const userInterestsRef = collection(db, COLLECTIONS.USER_INTERESTS);
    await addDoc(userInterestsRef, {
      userId,
      investmentId,
      createdAt: serverTimestamp(),
      status: 'active',
      type: 'launch-alert'
    });
    
    logger.info('User interest added:', { userId, investmentId });
  } catch (error) {
    logger.error('Error adding user interest:', error);
    throw error;
  }
}