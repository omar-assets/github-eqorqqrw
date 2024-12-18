import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { updateUserProfile } from '@/lib/firebase/user';
import { UserProfile } from '@/lib/firebase/types';
import { Shield } from 'lucide-react';
import { logger } from '@/utils/logger';

export function ProfileCompletion() {
  const { user, userProfile } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preferences, setPreferences] = useState({
    riskTolerance: 'moderate',
    targetReturn: 10,
    preferredAssetTypes: [] as string[],
    minInvestment: 100000
  });

  if (!user || userProfile?.investmentPreferences) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUserProfile(user.uid, {
        investmentPreferences: preferences
      } as Partial<UserProfile>);
      
      setIsOpen(false);
      logger.info('Profile preferences updated successfully');
    } catch (error) {
      logger.error('Error updating preferences:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-primary/20 p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Shield className="h-6 w-6 text-primary" />
        </div>
        
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Complete Your Profile
          </h3>
          <p className="text-gray-600 mb-4">
            Help us customize your investment experience by setting your preferences.
          </p>
          
          {isOpen ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Risk Tolerance
                </label>
                <select
                  value={preferences.riskTolerance}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    riskTolerance: e.target.value as 'conservative' | 'moderate' | 'aggressive'
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50"
                >
                  <option value="conservative">Conservative</option>
                  <option value="moderate">Moderate</option>
                  <option value="aggressive">Aggressive</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Annual Return (%)
                </label>
                <input
                  type="number"
                  value={preferences.targetReturn}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    targetReturn: parseInt(e.target.value)
                  }))}
                  min="5"
                  max="25"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Asset Types
                </label>
                <div className="space-y-2">
                  {['Real Estate', 'Private Equity', 'Venture Capital', 'Fixed Income'].map((type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={preferences.preferredAssetTypes.includes(type)}
                        onChange={(e) => setPreferences(prev => ({
                          ...prev,
                          preferredAssetTypes: e.target.checked
                            ? [...prev.preferredAssetTypes, type]
                            : prev.preferredAssetTypes.filter(t => t !== type)
                        }))}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
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
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
            >
              Complete Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}