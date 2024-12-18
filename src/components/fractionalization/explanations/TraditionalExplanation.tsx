import React from 'react';
import { Building2 } from 'lucide-react';

export function TraditionalExplanation() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Building2 className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">Traditional Asset Fractionalization</h3>
      </div>

      <p className="text-gray-600 leading-relaxed">
        Imagine a luxury apartment building worth $10 million. Traditionally, only wealthy investors could afford such an investment. Through fractionalization, this property is divided into 10,000 shares at $1,000 each, making it accessible to a broader range of investors.
      </p>

      <div className="bg-primary/5 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-2">Interactive Example:</h4>
        <p className="text-gray-600 mb-4">
          If you invested $5,000 in this property (5 shares):
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>• You'd own 0.05% of the property</li>
          <li>• With 8% annual rental yield = $400 yearly income</li>
          <li>• Plus potential property value appreciation</li>
        </ul>
      </div>

      <div className="text-gray-600">
        <strong className="text-primary">Key Takeaway:</strong> Traditional fractionalization transforms large, indivisible assets into manageable investment portions while maintaining professional management and potential returns.
      </div>
    </div>
  );
}