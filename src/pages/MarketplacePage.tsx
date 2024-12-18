import React from 'react';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { MarketplaceHeader } from '@/components/marketplace/header/MarketplaceHeader';
import { ComingSoonGrid } from '@/components/marketplace/assets/ComingSoonGrid';
import { NotificationBanner } from '@/components/marketplace/NotificationBanner';
import { useMarketplaceFilters } from '@/hooks/useMarketplaceFilters';
import { comingSoonAssets } from '@/data/market/assets';

export function MarketplacePage() {
  const [showNotification, setShowNotification] = React.useState(false);
  const [notificationMessage, setNotificationMessage] = React.useState('');
  const { filters, updateFilter, resetFilters, filteredAssets } = useMarketplaceFilters(comingSoonAssets);

  const handleNotificationSuccess = (message: string) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <>
      <BackgroundPattern variant="primary">
        <MarketplaceHeader />
      </BackgroundPattern>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-8">
            <ComingSoonGrid
              assets={filteredAssets}
              filters={filters}
              onUpdateFilter={updateFilter}
              onResetFilters={resetFilters}
              onNotificationSuccess={handleNotificationSuccess}
            />
          </div>
        </div>
      </section>

      {showNotification && (
        <NotificationBanner
          message={notificationMessage || "You'll be notified when this investment launches!"}
          onClose={() => setShowNotification(false)}
        />
      )}
    </>
  );
}

export default MarketplacePage;