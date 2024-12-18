import React from 'react';
import { Bell } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { NotificationCard } from './NotificationCard';
import { useNotifications } from '@/hooks/useNotifications';
import { NotificationFiltersType } from '@/types/notifications';

interface NotificationsListProps {
  filters?: NotificationFiltersType;
}

export function NotificationsList({ filters }: NotificationsListProps) {
  const { userProfile } = useAuth();
  const { notifications, loading, error } = useNotifications(filters);

  const sortedNotifications = React.useMemo(() => {
    return [...(notifications || [])].sort((a, b) => 
      b.timestamp.getTime() - a.timestamp.getTime()
    );
  }, [notifications]);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading notifications...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          <p className="font-medium">Error loading notifications</p>
          <p className="text-sm mt-1">Please try refreshing the page or contact support if the problem persists.</p>
        </div>
      </div>
    );
  }

  if (!sortedNotifications?.length) {
    return (
      <div className="p-6">
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <Bell className="h-6 w-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications yet</h3>
          <p className="text-gray-600">
            Add assets to your watchlist or enable notifications for upcoming investments
            to receive updates about new opportunities.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {sortedNotifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}
    </div>
  );
}