import React from 'react';
import { useRequireAuth } from '@/hooks/useRequireAuth';
import { WelcomeHeader } from '@/components/dashboard/WelcomeHeader';
import { ProfileCompletion } from '@/components/dashboard/ProfileCompletion';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { MarketplacePreview } from '@/components/dashboard/MarketplacePreview';
import { AssetNotifications } from '@/components/dashboard/notifications/AssetNotifications';

function DashboardPage() {
  const { loading } = useRequireAuth();

  if (loading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <WelcomeHeader />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <ProfileCompletion />
        <DashboardStats />
        <div className="mt-8">
          <AssetNotifications />
        </div>
        <div className="mt-8">
          <MarketplacePreview />
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;