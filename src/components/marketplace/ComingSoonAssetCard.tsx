import React, { useState } from 'react';
import { Bell, DollarSign, Users, TrendingUp, AlertCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { addUserInterest } from '@/lib/firebase/user';
import { addNotification } from '@/lib/firebase/notifications';
import { useNotifications } from '@/hooks/useNotifications';
import { ROUTES } from '@/utils/constants';
import { logger } from '@/utils/logger';

interface ComingSoonAssetCardProps {
  id: string;
  title: string;
  totalValue: string;
  fractionPrice: string;
  totalFractions: number;
  image: string;
  returns: string;
  status: string;
  type: string;
  launchDate: string;
  onNotificationSuccess?: () => void;
}

export function ComingSoonAssetCard({
  id,
  title,
  totalValue,
  fractionPrice,
  totalFractions,
  image,
  returns,
  status,
  type,
  launchDate,
  onNotificationSuccess
}: ComingSoonAssetCardProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { notifications } = useNotifications();
  const isNotified = notifications?.some(n => n.assetId === id);

  const handleNotifyClick = async () => {
    // Prevent duplicate notifications
    if (isNotified) return;
    
    try {
      if (!user) {
        navigate(ROUTES.LOGIN, { 
          state: { 
            from: ROUTES.MARKETPLACE,
            notifyAsset: id 
          }
        });
        return;
      }

      await addUserInterest(user.uid, id);
      
      await addNotification(user.uid, id, {
        type: 'launch-alert',
        title: 'Investment Launch Alert Set',
        message: `You'll be notified when ${title} launches.`
      });
      
      logger.info('User interest recorded:', { assetId: id });
      onNotificationSuccess?.();
    } catch (error) {
      logger.error('Error recording interest:', error);
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all group">
      {/* ... rest of the component remains the same ... */}
      <div className="flex items-center justify-between">
        <span className="text-primary font-medium">{status}</span>
        <button
          onClick={handleNotifyClick}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            isNotified 
              ? 'bg-green-100 text-green-700 hover:bg-green-200'
              : 'bg-primary text-white hover:bg-primary-medium'
          }`}
          disabled={isNotified}
        >
          <Bell className="h-4 w-4" />
          {isNotified ? 'Notification Set' : 'Get Notified'}
        </button>
      </div>
    </div>
  );
}