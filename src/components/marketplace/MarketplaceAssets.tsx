import React from 'react';
import { Building2, Car, Gem, LineChart, Briefcase, Code } from 'lucide-react';
import { AssetCard } from './AssetCard';

const assets = [
  // Real Estate
  {
    title: 'Luxury Manhattan Penthouse',
    totalValue: '$2,500,000',
    fractionPrice: '$1,000',
    totalFractions: 2500,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    returns: '+8.5% annually',
    status: 'Available: 1,250 fractions',
    type: 'real-estate'
  },
  {
    title: 'Miami Beach Condo',
    totalValue: '$1,000,000',
    fractionPrice: '$1,000',
    totalFractions: 1000,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    returns: '+7.2% annually',
    status: 'Available: 500 fractions',
    type: 'real-estate'
  },
  // Vehicles
  {
    title: 'Classic Ferrari Collection',
    totalValue: '$750,000',
    fractionPrice: '$1,000',
    totalFractions: 750,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80',
    returns: '+12% annually',
    status: 'Available: 400 fractions',
    type: 'vehicles'
  },
  {
    title: 'Vintage Porsche Portfolio',
    totalValue: '$500,000',
    fractionPrice: '$1,000',
    totalFractions: 500,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
    returns: '+10.5% annually',
    status: 'Available: 250 fractions',
    type: 'vehicles'
  },
  // Fine Jewelry
  {
    title: 'Vintage Diamond Collection',
    totalValue: '$250,000',
    fractionPrice: '$1,000',
    totalFractions: 250,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80',
    returns: '+6.2% annually',
    status: 'Available: 125 fractions',
    type: 'jewelry'
  },
  // Digital Assets
  {
    title: 'Premium Domain Portfolio',
    totalValue: '$180,000',
    fractionPrice: '$500',
    totalFractions: 360,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80',
    returns: '+15% annually',
    status: 'Available: 200 fractions',
    type: 'digital'
  }
];

export function MarketplaceAssets() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {assets.map((asset) => (
        <AssetCard
          key={asset.title}
          {...asset}
        />
      ))}
    </div>
  );
}