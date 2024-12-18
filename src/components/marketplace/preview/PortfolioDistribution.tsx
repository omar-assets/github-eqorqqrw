import React from 'react';
import { PieChart, Building2, Car, Gem, Code, Briefcase, Palette } from 'lucide-react';

const portfolioData = [
  {
    type: 'Real Estate',
    percentage: 40,
    value: '$50,000',
    icon: Building2,
    colorClass: 'bg-blue-500 text-blue-500'
  },
  {
    type: 'Vehicles',
    percentage: 25,
    value: '$31,250',
    icon: Car,
    colorClass: 'bg-green-500 text-green-500'
  },
  {
    type: 'Fine Jewelry',
    percentage: 15,
    value: '$18,750',
    icon: Gem,
    colorClass: 'bg-purple-500 text-purple-500'
  },
  {
    type: 'Digital Assets',
    percentage: 10,
    value: '$12,500',
    icon: Code,
    colorClass: 'bg-yellow-500 text-yellow-500'
  },
  {
    type: 'Business Equity',
    percentage: 7,
    value: '$8,750',
    icon: Briefcase,
    colorClass: 'bg-red-500 text-red-500'
  },
  {
    type: 'Art',
    percentage: 3,
    value: '$3,750',
    icon: Palette,
    colorClass: 'bg-indigo-500 text-indigo-500'
  }
];

export function PortfolioDistribution() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-900">Portfolio Distribution</h3>
        <div className="flex items-center gap-2 text-sm">
          <PieChart className="h-5 w-5 text-primary" />
          <span className="text-gray-500">Total Value:</span>
          <span className="font-medium text-gray-900">$125,000</span>
        </div>
      </div>

      <div className="space-y-4">
        {portfolioData.map((item) => (
          <div key={item.type} className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-lg bg-opacity-10 ${item.colorClass.split(' ')[0]} flex items-center justify-center flex-shrink-0`}>
              <item.icon className={`h-5 w-5 ${item.colorClass.split(' ')[1]}`} />
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-gray-900">{item.type}</span>
                <span className="text-gray-600">{item.value}</span>
              </div>
              
              <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`absolute inset-y-0 left-0 ${item.colorClass.split(' ')[0]} rounded-full transition-all duration-500`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
            
            <span className="text-sm font-medium text-gray-900 w-12 text-right">
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}