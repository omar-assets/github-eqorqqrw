import React from 'react';
import { PreviewBanner } from './preview/PreviewBanner';
import { UserProfile } from './preview/UserProfile';
import { PortfolioChart } from './preview/PortfolioChart';
import { RiskMetrics } from './preview/RiskMetrics';
import { PortfolioDistribution } from './preview/PortfolioDistribution';
import { MarketStats } from './preview/MarketStats';
import { TrendingAssets } from './preview/TrendingAssets';
import { MarketplaceHeader } from './MarketplaceHeader';
import { MarketplaceFilters } from './MarketplaceFilters';
import { MarketplaceAssets } from './MarketplaceAssets';

export function MarketplaceDemo() {
  return (
    <div className="bg-gray-50">
      <PreviewBanner />
      <MarketplaceHeader />
      <MarketplaceFilters />
      
      <div className="px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Column - User Profile & Analytics */}
          <div className="lg:col-span-1 space-y-6">
            <UserProfile />
            <RiskMetrics />
            <PortfolioDistribution />
            <TrendingAssets />
          </div>
          
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <PortfolioChart />
              <MarketStats />
            </div>
            <MarketplaceAssets />
          </div>
        </div>
      </div>
    </div>
  );
}