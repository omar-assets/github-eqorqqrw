import React from 'react';
import { Building2, TrendingUp, Wallet } from 'lucide-react';
import { addUserInterest } from '@/lib/firebase/user';
import { useAuth } from '@/contexts/AuthContext';
import { logger } from '@/utils/logger';

const sampleInvestments = [
  {
    id: 'luxury-condo-1',
    title: 'Luxury Manhattan Penthouse',
    type: 'Real Estate',
    totalValue: '$2,500,000',
    minInvestment: '$10,000',
    expectedReturn: '8.5%',
    icon: Building2
  },
  {
    id: 'tech-startup-1',
    title: 'AI Technology Startup',
    type: 'Private Equity',
    totalValue: '$5,000,000',
    minInvestment: '$25,000',
    expectedReturn: '12.5%',
    icon: TrendingUp
  },
  {
    id: 'income-fund-1',
    title: 'Fixed Income Fund',
    type: 'Fixed Income',
    totalValue: '$10,000,000',
    minInvestment: '$5,000',
    expectedReturn: '6.5%',
    icon: Wallet
  }
];

export function MarketplacePreview() {
  const { user } = useAuth();

  const handleNotifyClick = async (investmentId: string) => {
    if (!user) return;

    try {
      await addUserInterest(user.uid, investmentId);
      logger.info('User interest recorded:', { investmentId });
    } catch (error) {
      logger.error('Error recording interest:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Featured Opportunities
        </h2>
        <a href="/marketplace" className="text-primary hover:text-primary-medium">
          View All
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {sampleInvestments.map((investment) => (
          <div
            key={investment.id}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/20 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <investment.icon className="h-6 w-6 text-primary" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {investment.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{investment.type}</p>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Value</span>
                <span className="font-medium text-gray-900">{investment.totalValue}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Min Investment</span>
                <span className="font-medium text-gray-900">{investment.minInvestment}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Expected Return</span>
                <span className="font-medium text-green-600">{investment.expectedReturn}</span>
              </div>
            </div>

            <button
              onClick={() => handleNotifyClick(investment.id)}
              className="w-full py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              Notify Me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}