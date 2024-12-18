import React from 'react';
import { Building2, Car, Gem, Code, Briefcase, Palette, Search, X } from 'lucide-react';
import { ASSET_TYPES } from '@/data/market/constants';

const assetTypes = [
  { icon: Building2, label: ASSET_TYPES.REAL_ESTATE, id: ASSET_TYPES.REAL_ESTATE },
  { icon: Car, label: ASSET_TYPES.VEHICLES, id: ASSET_TYPES.VEHICLES },
  { icon: Gem, label: ASSET_TYPES.JEWELRY, id: ASSET_TYPES.JEWELRY },
  { icon: Code, label: ASSET_TYPES.DIGITAL_ASSETS, id: ASSET_TYPES.DIGITAL_ASSETS },
  { icon: Briefcase, label: ASSET_TYPES.BUSINESS_EQUITY, id: ASSET_TYPES.BUSINESS_EQUITY },
  { icon: Palette, label: ASSET_TYPES.ART, id: ASSET_TYPES.ART }
];

interface MarketplaceFiltersProps {
  selectedType: string | null;
  onTypeSelect: (type: string | null) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
  onReset: () => void;
}

export function MarketplaceFilters({
  selectedType,
  onTypeSelect,
  onSearch,
  searchQuery,
  onReset
}: MarketplaceFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search investments..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-gray-200 
                   focus:ring-2 focus:ring-primary/50 focus:border-primary"
        />
        {searchQuery && (
          <button
            onClick={() => onSearch('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        )}
      </div>

      {/* Asset Type Filters */}
      <div className="flex flex-wrap gap-4">
        {assetTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onTypeSelect(selectedType === type.id ? null : type.id)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border transition-colors ${
              selectedType === type.id
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <type.icon className={`h-4 w-4 ${
              selectedType === type.id ? 'text-white' : 'text-primary'
            }`} />
            <span>{type.label}</span>
          </button>
        ))}

        {(selectedType || searchQuery) && (
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="h-4 w-4" />
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
}