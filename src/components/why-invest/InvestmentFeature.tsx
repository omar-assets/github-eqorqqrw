import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InvestmentFeatureProps {
  icon: LucideIcon;
  title: string;
  points: string[];
}

export function InvestmentFeature({ icon: Icon, title, points }: InvestmentFeatureProps) {
  return (
    <div className="p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all group">
      {/* Centered Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-xl bg-primary-light/50 group-hover:bg-primary-light flex items-center justify-center transition-colors">
          <Icon className="h-8 w-8 text-primary" />
        </div>
      </div>
      
      {/* Centered Title */}
      <h3 className="text-2xl font-semibold text-gray-900 text-center mb-6">{title}</h3>
      
      {/* Points List */}
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-medium flex-shrink-0" />
            <span className="text-lg">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}