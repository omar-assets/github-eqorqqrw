import React from 'react';
import { Palette } from 'lucide-react';

export function ArtExplanation() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Palette className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">Art & Collectibles Fractionalization</h3>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-100 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-2">The Challenge:</h4>
          <p className="text-gray-600">
            A rare vintage car collection valued at $5 million sits in a private garage, appreciated by few and inaccessible to most enthusiasts and investors.
          </p>
        </div>

        <div className="bg-primary/5 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-2">The Solution:</h4>
          <p className="text-gray-600">
            Through fractionalization:
          </p>
          <ul className="space-y-2 text-gray-600 mt-4">
            <li>• Collection divided into 5,000 shares</li>
            <li>• Each share = $1,000 investment</li>
            <li>• Professional maintenance and display</li>
            <li>• Regular collector events and exhibitions</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-2">Interactive Question:</h4>
        <p className="text-gray-600">
          What would you value more in a fractional art investment?
        </p>
        <ul className="space-y-2 text-gray-600 mt-4">
          <li>A) Potential appreciation value</li>
          <li>B) Access to exclusive exhibitions</li>
          <li>C) Historical significance</li>
          <li>D) Portfolio diversification</li>
        </ul>
      </div>

      <div className="text-gray-600">
        <strong className="text-primary">Key Takeaway:</strong> Art fractionalization combines investment potential with cultural appreciation, making fine art and collectibles accessible to enthusiasts and investors alike.
      </div>
    </div>
  );
}