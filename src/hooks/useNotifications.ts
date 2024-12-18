import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot, getDocs, QueryConstraint } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';
import { COLLECTIONS } from '@/lib/firebase/collections';
import { useAuth } from '@/contexts/AuthContext';
import { AssetNotification, NotificationFiltersType } from '@/types/notifications';
import { logger } from '@/utils/logger';

export function useNotifications(filters?: NotificationFiltersType) {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<AssetNotification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!user) return;

    let unsubscribe: () => void;

    const initializeNotifications = async () => {
      try {
        const notificationsRef = collection(db, COLLECTIONS.NOTIFICATIONS);
        const queryConstraints: QueryConstraint[] = [
          where('userId', '==', user.uid),
          orderBy('timestamp', 'desc')
        ];

        // Apply filters if provided
        if (filters) {
          if (filters.types?.length > 0) {
            queryConstraints.push(where('type', 'in', filters.types));
          }
          
          if (filters.status !== 'all') {
            queryConstraints.push(where('read', '==', filters.status === 'read'));
          }
          
          // Apply date range filter
          if (filters.dateRange !== 'all') {
            const now = new Date();
            let startDate = new Date();
            
            switch (filters.dateRange) {
              case '24h':
                startDate.setHours(now.getHours() - 24);
                break;
              case '7d':
                startDate.setDate(now.getDate() - 7);
                break;
              case '30d':
                startDate.setDate(now.getDate() - 30);
                break;
            }
            
            queryConstraints.push(where('timestamp', '>=', startDate));
          }
        }

        // Create query with all constraints
        const q = query(notificationsRef, ...queryConstraints);

        // First try to get documents to check if collection exists
        const snapshot = await getDocs(q);
        
        // If we get here, collection exists and is properly indexed
        unsubscribe = onSnapshot(q, 
          (snapshot) => {
            const notificationData = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
              timestamp: doc.data().timestamp?.toDate() || new Date()
            })) as AssetNotification[];
            
            setNotifications(notificationData);
            setLoading(false);
          },
          (err) => {
            // Handle specific Firebase errors
            if (err.code === 'failed-precondition') {
              logger.warn('Notifications collection needs indexing:', err);
              // Fallback to basic query without complex filters
              const basicQuery = query(
                notificationsRef,
                where('userId', '==', user.uid),
                orderBy('timestamp', 'desc')
              );
              
              unsubscribe = onSnapshot(basicQuery, 
                (snapshot) => {
                  const notificationData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    timestamp: doc.data().timestamp?.toDate() || new Date()
                  })) as AssetNotification[];
                  
                  setNotifications(notificationData);
                  setLoading(false);
                }
              );
            } else {
              logger.error('Error in notifications snapshot:', err);
              setError(err);
              setLoading(false);
            }
          }
        );
      } catch (error) {
        // Handle case where collection doesn't exist
        logger.info('Notifications collection not yet available:', error);
        setNotifications([]);
        setLoading(false);
      }
    };

    initializeNotifications();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user, filters]);

  return { notifications, loading, error };
}