import React from 'react';
import { LineChart, DollarSign, Calendar } from 'lucide-react';

export function PortfolioChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Portfolio Performance</h3>
        <select className="px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
          <option value="1m">1M</option>
          <option value="3m">3M</option>
          <option value="6m">6M</option>
          <option value="1y">1Y</option>
          <option value="all">All</option>
        </select>
      </div>
      
      <div className="h-48 flex items-center justify-center bg-gray-50 rounded-lg mb-4">
        <div className="text-center text-gray-500">
          <LineChart className="h-8 w-8 mx-auto mb-2" />
          <p>Performance chart visualization would go here</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
            <DollarSign className="h-4 w-4 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Profit</p>
            <p className="font-semibold text-gray-900">$12,450</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Calendar className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Avg. Hold Time</p>
            <p className="font-semibold text-gray-900">8.5 months</p>
          </div>
        </div>
      </div>
    </div>
  );
}