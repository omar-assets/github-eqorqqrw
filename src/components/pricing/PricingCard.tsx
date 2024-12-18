import React from 'react';
import { Check, LucideIcon } from 'lucide-react';

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  billingPeriod: string;
  features: string[];
  icon: LucideIcon;
  recommended?: boolean;
  color: string;
}

export function PricingCard({
  name,
  description,
  price,
  billingPeriod,
  features,
  icon: Icon,
  recommended,
  color
}: PricingCardProps) {
  return (
    <div className={`relative bg-white rounded-xl p-8 transition-all ${
      recommended ? 'ring-2 ring-primary shadow-lg scale-105' : 'hover:shadow-md border border-gray-200'
    }`}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
          Recommended
        </div>
      )}

      {/* Header */}
      <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-6`}>
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      {/* Pricing */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-500">{billingPeriod}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-gray-600">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="h-3 w-3 text-primary" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className={`w-full py-3 rounded-lg transition-colors ${
          recommended
            ? 'bg-primary text-white hover:bg-primary-medium'
            : 'border-2 border-primary text-primary hover:bg-primary/5'
        }`}
      >
        Get Started
      </button>
    </div>
  );
}