import React from 'react';
import { TrendingUp, ChevronRight } from 'lucide-react';

const trendingAssets = [
  {
    name: 'Luxury Manhattan Penthouse',
    type: 'Real Estate',
    change: '+15.2%',
    volume: '$1.2M'
  },
  {
    name: 'Classic Ferrari Collection',
    type: 'Vehicles',
    change: '+12.8%',
    volume: '$750K'
  },
  {
    name: 'Tech Startup Equity',
    type: 'Business',
    change: '+25.5%',
    volume: '$2.1M'
  }
];

export function TrendingAssets() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-gray-900">Trending Assets</h3>
        </div>
        <button className="text-primary hover:text-primary-medium text-sm font-medium">
          View All
        </button>
      </div>
      <div className="divide-y divide-gray-200">
        {trendingAssets.map((asset) => (
          <div key={asset.name} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">{asset.name}</p>
                <p className="text-sm text-gray-500">{asset.type}</p>
              </div>
              <div className="text-right">
                <p className="text-green-600 font-medium">{asset.change}</p>
                <p className="text-sm text-gray-500">Vol: {asset.volume}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}