import React, { useState } from 'react';
import { Building2, Car, Gem, Info } from 'lucide-react';
import { AssetCard } from './AssetCard';
import { BackgroundPattern } from '../ui/BackgroundPattern';

const assetCategories = [
  {
    id: 'real-estate',
    icon: Building2,
    label: 'Real Estate',
    description: 'Premium properties divided into affordable shares',
    assets: [
      {
        title: 'Luxury Manhattan Penthouse',
        totalValue: '$2,500,000',
        fractionPrice: '$1,000',
        totalFractions: 2500,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
        returns: '+8.5% annually',
        status: 'Available: 1,250 fractions'
      },
      {
        title: 'Miami Beach Condo',
        totalValue: '$1,000,000',
        fractionPrice: '$1,000',
        totalFractions: 1000,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
        returns: '+7.2% annually',
        status: 'Available: 500 fractions'
      },
      {
        title: 'San Francisco Office Space',
        totalValue: '$3,000,000',
        fractionPrice: '$1,000',
        totalFractions: 3000,
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
        returns: '+9.1% annually',
        status: 'Available: 1,800 fractions'
      }
    ]
  },
  {
    id: 'vehicles',
    icon: Car,
    label: 'Luxury Vehicles',
    description: 'Rare and classic car collections',
    assets: [
      {
        title: 'Classic Ferrari Collection',
        totalValue: '$750,000',
        fractionPrice: '$1,000',
        totalFractions: 750,
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80',
        returns: '+12% annually',
        status: 'Available: 400 fractions'
      },
      {
        title: 'Vintage Porsche Portfolio',
        totalValue: '$500,000',
        fractionPrice: '$1,000',
        totalFractions: 500,
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
        returns: '+10.5% annually',
        status: 'Available: 250 fractions'
      },
      {
        title: 'Luxury SUV Fleet',
        totalValue: '$300,000',
        fractionPrice: '$1,000',
        totalFractions: 300,
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80',
        returns: '+7.8% annually',
        status: 'Available: 150 fractions'
      }
    ]
  },
  {
    id: 'jewelry',
    icon: Gem,
    label: 'Fine Jewelry',
    description: 'Curated collections of precious gems and jewelry',
    assets: [
      {
        title: 'Vintage Diamond Collection',
        totalValue: '$250,000',
        fractionPrice: '$1,000',
        totalFractions: 250,
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80',
        returns: '+6.2% annually',
        status: 'Available: 125 fractions'
      },
      {
        title: 'Rare Gemstone Portfolio',
        totalValue: '$180,000',
        fractionPrice: '$1,000',
        totalFractions: 180,
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80',
        returns: '+5.8% annually',
        status: 'Available: 90 fractions'
      },
      {
        title: 'Luxury Watch Collection',
        totalValue: '$200,000',
        fractionPrice: '$1,000',
        totalFractions: 200,
        image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80',
        returns: '+7.5% annually',
        status: 'Available: 100 fractions'
      }
    ]
  }
];

export function AssetExplanation() {
  const [selectedCategory, setSelectedCategory] = useState(assetCategories[0]);

  return (
    <BackgroundPattern variant="tertiary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-primary/20 rounded-2xl p-6 bg-white/50 backdrop-blur-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Understanding Asset Fractionalization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how BRiX Assets transforms premium investments into accessible opportunities
              through secure, regulated fractional ownership.
            </p>
            
            {/* Asset Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {assetCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    selectedCategory.id === category.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <category.icon className="h-5 w-5" />
                  <span className="font-medium">{category.label}</span>
                </button>
              ))}
            </div>
            
            {/* Category Description */}
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-12">
              <Info className="h-5 w-5" />
              <p className="text-lg">{selectedCategory.description}</p>
            </div>
          </div>

          {/* Asset Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {selectedCategory.assets.map((asset) => (
              <AssetCard
                key={asset.title}
                {...asset}
              />
            ))}
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
}