import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Bell, TrendingUp, AlertCircle, DollarSign } from 'lucide-react';
import { AssetNotification } from '@/types/notifications';

interface NotificationCardProps {
  notification: AssetNotification;
}

const NOTIFICATION_ICONS = {
  'price-alert': DollarSign,
  'trading-activity': TrendingUp,
  'news-update': Bell,
  'launch-alert': AlertCircle
} as const;

export function NotificationCard({ notification }: NotificationCardProps) {
  const Icon = NOTIFICATION_ICONS[notification.type] || Bell;

  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0`}>
          <Icon className="h-5 w-5 text-primary" />
        </div>

        <div className="flex-grow">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-1">
                {notification.title}
              </h3>
              <p className="text-gray-600">
                {notification.message}
              </p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap">
              {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
            </span>
          </div>

          {notification.thresholds && (
            <div className="mt-3 flex items-center gap-4 text-sm">
              <span className="text-gray-500">Alert Thresholds:</span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                  {notification.thresholds.min && `Min: ${notification.thresholds.min}`}
                </span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                  {notification.thresholds.max && `Max: ${notification.thresholds.max}`}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}