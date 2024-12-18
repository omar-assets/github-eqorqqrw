import React from 'react';
import { Filter, TrendingUp, DollarSign } from 'lucide-react';

const assetClasses = [
  'Real Estate',
  'Private Equity',
  'Venture Capital',
  'Fixed Income',
  'Alternative Assets'
];

const investmentStrategies = [
  'Income Generation',
  'Capital Appreciation',
  'Balanced Growth',
  'Value Investment'
];

export function MarketplaceFilters() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-4">
          {/* Asset Classes */}
          <div className="flex-grow">
            <div className="flex flex-wrap gap-2">
              {assetClasses.map((type) => (
                <button
                  key={type}
                  className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 
                           text-sm font-medium text-gray-700 transition-colors"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Investment Amount */}
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-gray-400" />
            <select className="px-3 py-2 bg-gray-50 rounded-xl border border-gray-200 text-sm">
              <option>Any Amount</option>
              <option>$100 - $1,000</option>
              <option>$1,000 - $10,000</option>
              <option>$10,000+</option>
            </select>
          </div>

          {/* Expected Returns */}
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-gray-400" />
            <select className="px-3 py-2 bg-gray-50 rounded-xl border border-gray-200 text-sm">
              <option>Any Return</option>
              <option>5% - 8%</option>
              <option>8% - 12%</option>
              <option>12%+</option>
            </select>
          </div>

          {/* Advanced Filters */}
          <button className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/5 rounded-xl transition-colors">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">More Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}