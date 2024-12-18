import React from 'react';
import { Building2, TrendingUp, Shield, ChevronRight } from 'lucide-react';

interface InvestmentCardProps {
  title: string;
  type: string;
  minimumInvestment: string;
  targetReturn: string;
  riskRating: string;
  availableUnits: number;
  totalValue: string;
  description: string;
  status: string;
}

export function InvestmentCard({
  title,
  type,
  minimumInvestment,
  targetReturn,
  riskRating,
  availableUnits,
  totalValue,
  description,
  status
}: InvestmentCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {type}
            </span>
            <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Target Return</p>
            <p className="text-lg font-semibold text-green-600">{targetReturn}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-sm text-gray-500 mb-1">Minimum</p>
            <p className="font-semibold text-gray-900">{minimumInvestment}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-sm text-gray-500 mb-1">Available Units</p>
            <p className="font-semibold text-gray-900">{availableUnits}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-primary font-medium">{status}</span>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors">
            View Details
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}