import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { updateUserProfile } from '@/lib/firebase/user';
import { logger } from '@/utils/logger';
import { TIMEZONES } from '@/utils/constants';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function ProfileModal({ isOpen, onClose, onSuccess }: ProfileModalProps) {
  const { user, refreshUserProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    communicationPreference: 'email',
    notifications: {
      dailyUpdates: false,
      weeklyNewsletter: false,
      specialOffers: false
    },
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    bio: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      setLoading(true);
      
      await updateUserProfile(user.uid, {
        preferences: formData
      });
      
      // Refresh the user profile to get updated data
      await refreshUserProfile();
      
      logger.info('Profile preferences updated successfully');
      onSuccess();
    } catch (error) {
      logger.error('Error updating preferences:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
        
        <div className="relative bg-white rounded-xl shadow-lg max-w-md w-full p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Complete Your Profile</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Communication Preference */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Communication Method
              </label>
              <select
                value={formData.communicationPreference}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  communicationPreference: e.target.value
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="both">Both</option>
              </select>
            </div>

            {/* Notification Preferences */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notification Preferences
              </label>
              <div className="space-y-2">
                {[
                  { key: 'dailyUpdates', label: 'Daily Investment Updates' },
                  { key: 'weeklyNewsletter', label: 'Weekly Newsletter' },
                  { key: 'specialOffers', label: 'Special Offers & Opportunities' }
                ].map(({ key, label }) => (
                  <label key={key} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.notifications[key as keyof typeof formData.notifications]}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        notifications: {
                          ...prev.notifications,
                          [key]: e.target.checked
                        }
                      }))}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-gray-700">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Timezone Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Timezone
              </label>
              <select
                value={formData.timezone}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  timezone: e.target.value
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50"
              >
                {TIMEZONES.map((timezone) => (
                  <option key={timezone} value={timezone}>
                    {timezone.replace(/_/g, ' ')}
                  </option>
                ))}
              </select>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brief Bio
                <span className="text-gray-500 ml-1">
                  ({200 - formData.bio.length} characters remaining)
                </span>
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  bio: e.target.value.slice(0, 200)
                }))}
                rows={3}
                maxLength={200}
                placeholder="Tell us a bit about yourself..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save Preferences'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}