import React from 'react';
import { User, Bell, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export function WelcomeHeader() {
  const { user, userProfile } = useAuth();
  
  return (
    <div className="bg-white border-b border-gray-200">
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
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}