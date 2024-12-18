import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AssetTypeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  minimumValue?: string;
  expectedReturns?: string;
}

export function AssetTypeCard({ 
  icon: Icon, 
  title, 
  description, 
  benefits,
  minimumValue,
  expectedReturns 
}: AssetTypeCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      {(minimumValue || expectedReturns) && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          {minimumValue && (
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-500">Minimum Value</p>
              <p className="font-semibold text-gray-900">{minimumValue}</p>
            </div>
          )}
          {expectedReturns && (
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-500">Expected Returns</p>
              <p className="font-semibold text-green-600">{expectedReturns}</p>
            </div>
          )}
        </div>
      )}
      
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-medium flex-shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}