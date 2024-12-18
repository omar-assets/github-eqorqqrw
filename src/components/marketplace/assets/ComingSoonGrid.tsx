import React from 'react';
import { ComingSoonAsset } from './ComingSoonAsset';
import { MarketplaceFilters } from '../filters/MarketplaceFilters';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useNotifications } from '@/hooks/useNotifications';
import { addUserInterest } from '@/lib/firebase/user';
import { addNotification } from '@/lib/firebase/notifications';
import { ROUTES } from '@/utils/constants';
import { logger } from '@/utils/logger';
import { ComingSoonAsset as ComingSoonAssetType } from '@/data/market/types';
import { FilterState } from '@/hooks/useMarketplaceFilters';

interface ComingSoonGridProps {
  assets: ComingSoonAssetType[];
  filters: FilterState;
  onUpdateFilter: (key: keyof FilterState, value: any) => void;
  onResetFilters: () => void;
  onNotificationSuccess?: (message: string) => void;
}

export function ComingSoonGrid({
  assets,
  filters,
  onUpdateFilter,
  onResetFilters,
  onNotificationSuccess
}: ComingSoonGridProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { notifications } = useNotifications();

  const handleNotify = async (assetId: string) => {
    if (!user) {
      navigate(ROUTES.LOGIN, {
        state: {
          from: ROUTES.MARKETPLACE,
          notifyAsset: assetId
        }
      });
      return;
    }

    try {
      const asset = assets.find(a => a.id === assetId);
      if (!asset) return;

      await addUserInterest(user.uid, assetId);
      await addNotification(user.uid, assetId, {
        type: 'launch-alert',
        title: 'Investment Launch Alert Set',
        message: `You'll be notified when ${asset.title} launches.`
      });

      logger.info('User interest recorded:', { assetId });
      onNotificationSuccess?.(`You'll be notified when ${asset.title} launches!`);
    } catch (error) {
      logger.error('Error recording interest:', error);
    }
  };

  return (
    <div className="space-y-8">
      <MarketplaceFilters
        selectedType={filters.type}
        onTypeSelect={(type) => onUpdateFilter('type', type)}
        onSearch={(query) => onUpdateFilter('search', query)}
        searchQuery={filters.search}
        onReset={onResetFilters}
      />

      {assets.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No matching investments found.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assets.map((asset) => (
            <ComingSoonAsset
              key={asset.id}
              {...asset}
              onNotify={() => handleNotify(asset.id)}
              isNotified={notifications?.some(n => n.assetId === asset.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}