import React from 'react';
import { Check, Minus, HelpCircle } from 'lucide-react';
import { PricingData, FeatureCategory } from './types';

interface ComparisonTableProps {
  isAnnual: boolean;
  data: PricingData;
}

export function ComparisonTable({ isAnnual, data }: ComparisonTableProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-[2fr,repeat(3,1fr)] border-b border-gray-200">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">Features</h3>
        </div>
        {data.plans.map((plan) => (
          <div key={plan.name} className={`p-6 text-center ${
            plan.recommended ? 'bg-primary/5' : ''
          }`}>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
              <div className="text-2xl font-bold text-primary">
                ${isAnnual ? plan.price.annual : plan.price.monthly}
                <span className="text-sm font-normal text-gray-500 ml-1">
                  /mo
                </span>
              </div>
              {plan.recommended && (
                <div className="text-sm text-primary font-medium">
                  Recommended
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Feature Categories */}
      {data.categories.map((category) => (
        <div key={category.name}>
          {/* Category Header */}
          <div className="grid grid-cols-[2fr,repeat(3,1fr)] bg-gray-50 border-b border-gray-200">
            <div className="p-4 font-semibold text-gray-700">
              {category.name}
            </div>
            <div className="col-span-3" />
          </div>

          {/* Features */}
          {category.features.map((feature) => (
            <div key={feature.name} className="grid grid-cols-[2fr,repeat(3,1fr)] border-b border-gray-200">
              <div className="p-4 flex items-center gap-2">
                <span className="text-gray-700">{feature.name}</span>
                {feature.tooltip && (
                  <div className="group relative">
                    <button className="text-gray-400 hover:text-gray-500">
                      <HelpCircle className="h-4 w-4" />
                    </button>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      {feature.tooltip}
                    </div>
                  </div>
                )}
              </div>
              {data.plans.map((plan) => (
                <div key={`${plan.name}-${feature.name}`} className={`p-4 text-center ${
                  plan.recommended ? 'bg-primary/5' : ''
                }`}>
                  {renderFeatureValue(feature.values[plan.name])}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function renderFeatureValue(value: boolean | string | number | null) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="h-5 w-5 text-primary mx-auto" />
    ) : (
      <Minus className="h-5 w-5 text-gray-300 mx-auto" />
    );
  }
  
  if (value === null) {
    return <Minus className="h-5 w-5 text-gray-300 mx-auto" />;
  }
  
  return <span className="text-gray-900">{value}</span>;
}