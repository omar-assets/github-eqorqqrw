import React from 'react';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const stats = [
  {
    label: 'Market Volume',
    value: '$2.5M',
    change: '+12.5%',
    icon: TrendingUp,
    positive: true
  },
  {
    label: 'Active Investors',
    value: '5,234',
    change: '+234',
    icon: Users,
    positive: true
  },
  {
    label: 'Avg. Investment',
    value: '$2,150',
    change: '+$350',
    icon: DollarSign,
    positive: true
  },
  {
    label: 'Last Updated',
    value: 'Live',
    change: '2m ago',
    icon: Clock,
    positive: true
  }
];

export function MarketStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-primary/20 transition-colors">
          <div className="flex items-start justify-between mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
            <div className={`px-2 py-1 rounded-full text-sm ${
              stat.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {stat.change}
            </div>
          </div>
          <h4 className="text-sm text-gray-500 mb-1">{stat.label}</h4>
          <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}