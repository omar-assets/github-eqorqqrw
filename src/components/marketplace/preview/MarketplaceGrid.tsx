import React from 'react';
import { InvestmentCard } from './InvestmentCard';

const investments = [
  {
    id: 1,
    title: 'Prime Commercial Real Estate Fund',
    type: 'Real Estate',
    minimumInvestment: '$100,000',
    targetReturn: '8-12%',
    riskRating: 'Moderate',
    availableUnits: 250,
    totalValue: '$25M',
    description: 'A diversified portfolio of premium commercial properties in major metropolitan areas.',
    status: 'Open for Investment'
  },
  // Add more investment opportunities...
];

export function MarketplaceGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {investments.map((investment) => (
        <InvestmentCard key={investment.id} {...investment} />
      ))}
    </div>
  );
}