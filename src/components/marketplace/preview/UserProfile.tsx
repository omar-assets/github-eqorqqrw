import React from 'react';
import { User, Wallet, Bell, Settings, TrendingUp, ChevronRight } from 'lucide-react';

export function UserProfile() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Profile Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">John Doe</h3>
              <p className="text-sm text-gray-500">Premium Investor</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none">
              <Bell className="h-5 w-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none">
              <Settings className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Wallet className="h-4 w-4 text-primary" />
              <span className="text-sm text-gray-500">Portfolio Value</span>
            </div>
            <p className="text-lg font-semibold text-gray-900">$125,000</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-500">Total Returns</span>
            </div>
            <p className="text-lg font-semibold text-green-600">+15.8%</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="divide-y divide-gray-100">
        <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none">
          <span className="text-gray-600">Investment History</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>
        <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none">
          <span className="text-gray-600">Account Settings</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>
        <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none">
          <span className="text-gray-600">Support</span>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
}