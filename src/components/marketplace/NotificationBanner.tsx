import React from 'react';
import { Bell, X, AlertTriangle } from 'lucide-react';

interface NotificationBannerProps {
  message: string;
  type?: 'success' | 'error' | 'warning';
  onClose: () => void;
}

export function NotificationBanner({ message, type = 'success', onClose }: NotificationBannerProps) {
  const styles = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800'
  };

  const icons = {
    success: Bell,
    error: X,
    warning: AlertTriangle
  };

  const Icon = icons[type];

  return (
    <div className={`fixed top-4 right-4 z-50 ${styles[type]} px-6 py-3 rounded-lg shadow-lg`}>
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5" />
        <span>{message}</span>
        <button
          onClick={onClose}
          className={`p-1 hover:${type === 'success' ? 'bg-green-200' : type === 'error' ? 'bg-red-200' : 'bg-yellow-200'} rounded-full transition-colors`}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}