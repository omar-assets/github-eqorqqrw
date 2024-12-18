import React from 'react';
import { MarketplaceHeader } from '../MarketplaceHeader';
import { MarketplaceFilters } from './MarketplaceFilters';
import { MarketplaceGrid } from './MarketplaceGrid';
import { MarketplaceSidebar } from './MarketplaceSidebar';
import { MarketStats } from '../MarketStats';

export function MarketplacePreview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MarketplaceHeader />
      <MarketplaceFilters />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <MarketStats />
        
        <div className="mt-8 grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <MarketplaceGrid />
          </div>
          <div className="lg:col-span-1">
            <MarketplaceSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}