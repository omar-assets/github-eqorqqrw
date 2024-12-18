import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export function MarketplaceHeader() {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-3">
            Investment Portfolio Preview Mode - Sample Data
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access institutional-grade investments through strategic fractional positions, with
            professional management and transparent fee structures.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search investment opportunities..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <select className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:outline-none appearance-none">
              <option value="">All Asset Classes</option>
              <option value="real-estate">Real Estate</option>
              <option value="vehicles">Vehicles</option>
              <option value="jewelry">Jewelry</option>
              <option value="digital-assets">Digital Assets</option>
              <option value="business-equity">Business Equity</option>
              <option value="art">Art</option>
            </select>
          </div>

            <select className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:outline-none appearance-none">
              <option value="">Investment Strategy</option>
              <option value="conservative">Conservative</option>
              <option value="moderate">Moderate</option>
              <option value="aggressive">Aggressive</option>
            </select>
          </div>

          <button className="flex-shrink-0 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50">
            <SlidersHorizontal className="h-5 w-5" />
            <span>Advanced Filters</span>
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Minimum Investment: $100,000</span>
              <span>Target Return: 8% - 15%</span>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="h-1 w-full bg-gray-200 rounded">
                  <div className="h-1 bg-primary rounded" style={{ width: '60%' }} />
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="60"
                className="absolute inset-0 w-full h-1 opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}