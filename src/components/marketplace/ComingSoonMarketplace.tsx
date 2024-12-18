import React, { useState } from 'react';
import { ComingSoonAssetCard } from './ComingSoonAssetCard';
import { useAuth } from '@/contexts/AuthContext';
import { NotificationBanner } from './NotificationBanner';

const comingSoonAssets = [
  {
    id: 'luxury-penthouse-1',
    title: 'Luxury Manhattan Penthouse',
    totalValue: '$2,500,000',
    fractionPrice: '$1,000',
    totalFractions: 2500,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    returns: '+8.5% annually',
    status: 'Opening Soon: 2,500 fractions',
    type: 'Real Estate',
    launchDate: 'Jan 15, 2024'
  },
  {
    id: 'tech-startup-1',
    title: 'AI Technology Startup',
    totalValue: '$5,000,000',
    fractionPrice: '$2,500',
    totalFractions: 2000,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
    returns: '+15% annually',
    status: 'Opening Soon: 2,000 fractions',
    type: 'Private Equity',
    launchDate: 'Jan 20, 2024'
  },
  {
    id: 'art-collection-1',
    title: 'Contemporary Art Collection',
    totalValue: '$1,000,000',
    fractionPrice: '$500',
    totalFractions: 2000,
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80',
    returns: '+10% annually',
    status: 'Opening Soon: 2,000 fractions',
    type: 'Fine Art',
    launchDate: 'Jan 25, 2024'
  }
];

export function ComingSoonMarketplace() {
  const { user } = useAuth();
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationSuccess = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Notification Banner */}
      {showNotification && (
        <NotificationBanner 
          message="You'll be notified when this investment launches!"
          onClose={() => setShowNotification(false)}
        />
      )}

      {/* Non-logged in user message */}
      {!user && (
        <div className="bg-primary/5 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Create an Account to Get Notified
          </h3>
          <p className="text-gray-600">
            Sign up to receive notifications when new investment opportunities become available.
            You'll be the first to know when these assets launch.
          </p>
        </div>
      )}

      {/* Asset Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {comingSoonAssets.map((asset) => (
          <ComingSoonAssetCard
            key={asset.id}
            {...asset}
            onNotificationSuccess={handleNotificationSuccess}
          />
        ))}
      </div>
    </div>
  );
}