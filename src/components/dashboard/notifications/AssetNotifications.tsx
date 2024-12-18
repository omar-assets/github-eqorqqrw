import React, { useState } from 'react';
import { Bell, Settings, Filter } from 'lucide-react';
import { NotificationsList } from './NotificationsList';
import { NotificationSettings } from './NotificationSettings';
import { NotificationFilters } from './NotificationFilters';
import { ScrollReveal } from '../../ui/ScrollReveal';

export function AssetNotifications() {
  const [showSettings, setShowSettings] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <ScrollReveal>
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Asset Notifications</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Filter notifications"
              >
                <Filter className="h-5 w-5 text-gray-500" />
              </button>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Notification settings"
              >
                <Settings className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          {showFilters && <NotificationFilters onClose={() => setShowFilters(false)} />}
        </div>

        {/* Content */}
        <div className="relative">
          {showSettings ? (
            <NotificationSettings onClose={() => setShowSettings(false)} />
          ) : (
            <NotificationsList />
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}