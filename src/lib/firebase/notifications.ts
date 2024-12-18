import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';
import { COLLECTIONS } from './collections';
import { AssetNotification } from '@/types/notifications';
import { logger } from '@/utils/logger';

export async function addNotification(userId: string, assetId: string, notification: Partial<AssetNotification>) {
  try {
    const notificationsRef = collection(db, COLLECTIONS.NOTIFICATIONS);
    const newNotification = {
      userId,
      assetId,
      timestamp: serverTimestamp(),
      read: false,
      type: notification.type || 'launch-alert',
      ...notification
    };

    const docRef = await addDoc(notificationsRef, newNotification);
    logger.info('Notification added:', { notificationId: docRef.id });
    
    return docRef.id;
  } catch (error) {
    logger.error('Error adding notification:', error);
    throw error;
  }
}

export async function markNotificationAsRead(notificationId: string) {
  try {
    const notificationRef = doc(db, 'notifications', notificationId);
    await updateDoc(notificationRef, {
      read: true,
      readAt: serverTimestamp()
    });
    
    logger.info('Notification marked as read:', { notificationId });
  } catch (error) {
    logger.error('Error marking notification as read:', error);
    throw error;
  }
}

export async function updateNotificationPreferences(userId: string, preferences: any) {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      notificationPreferences: {
        ...preferences,
        updatedAt: serverTimestamp()
      }
    });
    
    logger.info('Notification preferences updated:', { userId });
  } catch (error) {
    logger.error('Error updating notification preferences:', error);
    throw error;
  }
}