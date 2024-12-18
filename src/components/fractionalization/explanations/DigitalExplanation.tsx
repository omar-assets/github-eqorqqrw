import React from 'react';
import { Code } from 'lucide-react';

export function DigitalExplanation() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Code className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">Digital Asset Fractionalization</h3>
      </div>

      <p className="text-gray-600 leading-relaxed">
        Think of digital fractionalization like a high-resolution image being divided into pixels. Each pixel maintains its position and value while being part of the larger picture. Similarly, digital assets are split into tokens, each representing a specific portion of the underlying asset's value.
      </p>

      <div className="bg-primary/5 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-2">Thought Experiment:</h4>
        <p className="text-gray-600">
          Consider a rare digital artwork valued at $1 million. Through tokenization:
        </p>
        <ul className="space-y-2 text-gray-600 mt-4">
          <li>• 1,000 unique tokens created</li>
          <li>• Each token = $1,000 of artwork value</li>
          <li>• Tokens tradeable 24/7 on digital exchanges</li>
        </ul>
      </div>

      <div className="text-gray-600">
        <strong className="text-primary">Key Takeaway:</strong> Digital fractionalization enables instant trading, transparent ownership records, and automated distribution of returns through smart contracts.
      </div>
    </div>
  );
}