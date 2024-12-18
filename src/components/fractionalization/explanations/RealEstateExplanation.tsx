import React from 'react';
import { Building2 } from 'lucide-react';

export function RealEstateExplanation() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Building2 className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">Real Estate Fractionalization</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Before Fractionalization:</h4>
          <ul className="space-y-2 text-gray-600">
            <li>• High entry barriers ($500K+ minimum)</li>
            <li>• Complex management requirements</li>
            <li>• Limited liquidity options</li>
            <li>• Single property exposure</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">After Fractionalization:</h4>
          <ul className="space-y-2 text-gray-600">
            <li>• Accessible entry ($1K minimum)</li>
            <li>• Professional property management</li>
            <li>• Enhanced liquidity through trading</li>
            <li>• Diversified portfolio potential</li>
          </ul>
        </div>
      </div>

      <div className="bg-primary/5 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-2">Interactive Scenario:</h4>
        <p className="text-gray-600">
          How would you allocate $10,000 across different property types?
        </p>
        <ul className="space-y-2 text-gray-600 mt-4">
          <li>• Luxury Residential: $4,000 (40%)</li>
          <li>• Commercial Office: $3,000 (30%)</li>
          <li>• Industrial Warehouse: $3,000 (30%)</li>
        </ul>
      </div>

      <div className="text-gray-600">
        <strong className="text-primary">Key Takeaway:</strong> Real estate fractionalization democratizes property investment while maintaining professional standards and potential returns.
      </div>
    </div>
  );
}