import React from 'react';
import { TrendingUp, AlertCircle, Clock } from 'lucide-react';

const trendingInvestments = [
  {
    title: 'Premium Office Portfolio',
    type: 'Real Estate',
    return: '+12.5%',
    timeLeft: '3 days'
  },
  // Add more trending investments...
];

export function MarketplaceSidebar() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Trending Opportunities</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {trendingInvestments.map((investment, index) => (
            <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-gray-900">{investment.title}</span>
                <span className="text-green-600">{investment.return}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{investment.type}</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{investment.timeLeft}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}