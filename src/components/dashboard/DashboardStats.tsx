import React from 'react';
import { Wallet, TrendingUp, LineChart, Clock } from 'lucide-react';

const stats = [
  {
    label: 'Portfolio Value',
    value: '$125,000',
    change: '+12.5%',
    icon: Wallet,
    positive: true
  },
  {
    label: 'Total Returns',
    value: '$15,750',
    change: '+8.3%',
    icon: TrendingUp,
    positive: true
  },
  {
    label: 'Active Investments',
    value: '5',
    change: '+2',
    icon: LineChart,
    positive: true
  },
  {
    label: 'Last Updated',
    value: 'Just now',
    change: '2m ago',
    icon: Clock,
    positive: true
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/20 transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            <div className={`px-2 py-1 rounded-full text-sm ${
              stat.positive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}>
              {stat.change}
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
          <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}