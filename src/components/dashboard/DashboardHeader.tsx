import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { signOut } from '@/lib/firebase/auth';
import { ROUTES } from '@/utils/constants';
import { ProfileModal } from './ProfileModal';
import { logger } from '@/utils/logger';

export function DashboardHeader() {
  const { user, userProfile, refreshUserProfile } = useAuth();
  const navigate = useNavigate();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut();
      logger.info('User logged out successfully');
      navigate(ROUTES.HOME);
    } catch (error) {
      logger.error('Logout error:', error);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Welcome back, {userProfile?.fullName?.split(' ')[0] || user?.email}
            </h2>
            <p className="text-sm text-gray-500">
              {user?.email}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {!userProfile?.preferences && (
            <button
              onClick={() => setShowProfileModal(true)}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
            >
              Complete Your Profile
            </button>
          )}

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
      
      {showProfileModal && (
        <ProfileModal
          isOpen={showProfileModal}
          onClose={() => setShowProfileModal(false)}
          onSuccess={async () => {
            await refreshUserProfile();
            setShowProfileModal(false);
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 3000);
          }}
        />
      )}
      
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-100 text-green-800 px-6 py-3 rounded-lg shadow-lg">
          Profile updated successfully!
        </div>
      )}
    </header>
  );
}