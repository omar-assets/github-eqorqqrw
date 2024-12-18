import React from 'react';
import { Building2, Car, Gem, Briefcase, LineChart } from 'lucide-react';
import { AssetTypeCard } from './AssetTypeCard';

const assetTypes = [
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Transform premium properties into accessible investment opportunities',
    benefits: [
      'Unlock property value while maintaining control',
      'Create liquid real estate investments',
      'Professional property management',
      'Regular rental income distributions'
    ],
    minimumValue: '$500,000',
    expectedReturns: '8-12% annually'
  },
  {
    icon: Briefcase,
    title: 'Private Equity',
    description: 'Convert business equity into strategic investment positions',
    benefits: [
      'Maintain operational control',
      'Access growth capital',
      'Structured ownership framework',
      'Professional valuation services'
    ],
    minimumValue: '$250,000',
    expectedReturns: '15-25% annually'
  },
  {
    icon: LineChart,
    title: 'Investment Portfolios',
    description: 'Fractionalize diversified investment portfolios',
    benefits: [
      'Create managed fund structures',
      'Offer diversified exposure',
      'Professional portfolio management',
      'Regular performance reporting'
    ],
    minimumValue: '$100,000',
    expectedReturns: '10-15% annually'
  }
];

export function AssetTypes() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {assetTypes.map((type) => (
        <AssetTypeCard key={type.title} {...type} />
      ))}
    </div>
  );
}