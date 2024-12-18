import React from 'react';
import { Bell } from 'lucide-react';

interface ComingSoonAssetProps {
  title: string;
  type: string;
  totalValue: string;
  fractionPrice: string;
  fractions: number;
  returns: string;
  image: string;
  launchDate: string;
  onNotify: () => void;
  isNotified: boolean;
}

export function ComingSoonAsset({
  title,
  type,
  totalValue,
  fractionPrice,
  fractions,
  returns,
  image,
  launchDate,
  onNotify,
  isNotified
}: ComingSoonAssetProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white text-sm font-medium rounded-full">
          Coming Soon
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm font-medium rounded-full">
          Launch: {launchDate}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary inline-block mb-2">
              {type}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Expected Returns</p>
            <p className="text-lg font-semibold text-green-600">{returns}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500 mb-1">Total Value</p>
            <p className="text-lg font-semibold text-gray-900">{totalValue}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-500 mb-1">Per Fraction</p>
            <p className="text-lg font-semibold text-gray-900">{fractionPrice}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-primary font-medium">
            Opening Soon: {fractions} fractions
          </span>
          <button
            onClick={onNotify}
            disabled={isNotified}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isNotified
                ? 'bg-green-100 text-green-700'
                : 'bg-primary text-white hover:bg-primary-medium'
            }`}
          >
            <Bell className="h-4 w-4" />
            {isNotified ? 'Notification Set' : 'Get Notified'}
          </button>
        </div>
      </div>
    </div>
  );
}