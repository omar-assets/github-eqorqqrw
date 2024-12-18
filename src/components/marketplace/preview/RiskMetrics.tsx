import React from 'react';
import { Shield, TrendingUp, AlertTriangle } from 'lucide-react';

export function RiskMetrics() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <h3 className="font-semibold text-gray-900 mb-4">Risk Analysis</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-gray-600">Risk Score</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '65%' }} />
            </div>
            <span className="text-sm font-medium text-gray-900">6.5/10</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span className="text-gray-600">Expected Returns</span>
          </div>
          <span className="font-medium text-green-600">12.5% - 15.8%</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <span className="text-gray-600">Volatility</span>
          </div>
          <span className="font-medium text-yellow-500">Medium</span>
        </div>
      </div>
    </div>
  );
}