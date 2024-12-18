import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { updateUserProfile } from '@/lib/firebase/user';
import { logger } from '@/utils/logger';

interface NotificationSettingsProps {
  onClose: () => void;
}

export function NotificationSettings({ onClose }: NotificationSettingsProps) {
  const { user, userProfile, refreshUserProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState({
    priceAlerts: true,
    tradingActivity: true,
    newsUpdates: true,
    launchAlerts: true,
    emailNotifications: true,
    pushNotifications: false,
    frequency: 'realtime'
  });

  const handleSave = async () => {
    if (!user) return;

    try {
      setLoading(true);
      await updateUserProfile(user.uid, {
        notificationSettings: settings
      });
      await refreshUserProfile();
      logger.info('Notification settings updated');
      onClose();
    } catch (error) {
      logger.error('Error updating notification settings:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Notification Settings</h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="space-y-6">
        {/* Notification Types */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Notification Types</h4>
          <div className="space-y-3">
            {[
              { key: 'priceAlerts', label: 'Price Alerts' },
              { key: 'tradingActivity', label: 'Trading Activity' },
              { key: 'newsUpdates', label: 'News Updates' },
              { key: 'launchAlerts', label: 'Launch Alerts' }
            ].map(({ key, label }) => (
              <label key={key} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={settings[key as keyof typeof settings]}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    [key]: e.target.checked
                  }))}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Delivery Methods */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Delivery Methods</h4>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  emailNotifications: e.target.checked
                }))}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-gray-700">Email Notifications</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={settings.pushNotifications}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  pushNotifications: e.target.checked
                }))}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-gray-700">Push Notifications</span>
            </label>
          </div>
        </div>

        {/* Frequency */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Update Frequency</h4>
          <select
            value={settings.frequency}
            onChange={(e) => setSettings(prev => ({
              ...prev,
              frequency: e.target.value
            }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50"
          >
            <option value="realtime">Real-time</option>
            <option value="hourly">Hourly Digest</option>
            <option value="daily">Daily Digest</option>
            <option value="weekly">Weekly Summary</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  );
}