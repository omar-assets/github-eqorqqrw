import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { signOut } from '@/lib/firebase/auth/index';
import { ROUTES } from '@/utils/constants';
import { logger } from '@/utils/logger';

export function AuthButtons() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
      logger.info('User logged out successfully');
      navigate(ROUTES.HOME);
    } catch (error) {
      logger.error('Logout error:', error);
    }
  };

  if (user) {
    return (
      <button
        onClick={handleLogout}
        className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
      >
        <LogOut className="h-5 w-5" />
        <span>Logout</span>
      </button>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <button 
        onClick={() => navigate(ROUTES.LOGIN)}
        className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
      >
        Sign In
      </button>
      <button 
        onClick={() => navigate(ROUTES.ONBOARDING.ACCOUNT_DETAILS)}
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
      >
        Get Started
      </button>
    </div>
  );
}