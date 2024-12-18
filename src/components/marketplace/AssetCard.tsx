import React from 'react';
import { DollarSign, Users, TrendingUp, AlertCircle, ChevronRight } from 'lucide-react';

interface AssetCardProps {
  title: string;
  totalValue: string;
  fractionPrice: string;
  totalFractions: number;
  image: string;
  returns: string;
  status: string;
  type: string;
}

export function AssetCard({
  title,
  totalValue,
  fractionPrice,
  totalFractions,
  image,
  returns,
  status,
  type
}: AssetCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
      <div className="mb-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary inline-block mb-2">
              {type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {title}
            </h3>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-500">Annual Returns</span>
            <span className="text-lg font-semibold text-green-600">{returns}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-500 mb-1">Total Value</div>
            <div className="text-lg font-semibold text-gray-900">{totalValue}</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-500 mb-1">Per Fraction</div>
            <div className="text-lg font-semibold text-gray-900">{fractionPrice}</div>
          </div>
        </div>

        {/* Status and Action */}
        <div className="flex items-center justify-between">
          <span className="text-primary font-medium">{status}</span>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50">
            Invest Now
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}