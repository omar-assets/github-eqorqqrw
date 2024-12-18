import React from 'react';
import { Building2, Car, Gem, DollarSign, TrendingUp, Briefcase, Code, Palette } from 'lucide-react';

const assetTypes = [
  { icon: Building2, label: 'Real Estate', id: 'real-estate', count: 2 },
  { icon: Car, label: 'Vehicles', id: 'vehicles', count: 2 },
  { icon: Gem, label: 'Jewelry', id: 'jewelry', count: 1 },
  { icon: Code, label: 'Digital Assets', id: 'digital', count: 1 },
  { icon: Briefcase, label: 'Business Equity', id: 'business', count: 1 },
  { icon: Palette, label: 'Art', id: 'art', count: 1 }
];

const priceRanges = [
  '< $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '> $10,000'
];

const returns = [
  '5-7%',
  '7-10%',
  '10-12%',
  '> 12%'
];

export function MarketplaceFilters() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center gap-6">
          {/* Asset Types */}
          <div className="flex-grow">
            <div className="flex flex-wrap gap-2">
              {assetTypes.map((type) => (
                <button
                  key={type.id}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <type.icon className="h-4 w-4 text-primary" />
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="flex-shrink-0">
            <select className="px-4 py-2 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:outline-none appearance-none">
              {priceRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          {/* Returns */}
          <div className="flex-shrink-0">
            <select className="px-4 py-2 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:outline-none appearance-none">
              {returns.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}