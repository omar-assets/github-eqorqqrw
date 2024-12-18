import React from 'react';
import { DollarSign, Users, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/Card';

interface AssetCardProps {
  title: string;
  totalValue: string;
  fractionPrice: string;
  totalFractions: number;
  image: string;
  returns: string;
  status: string;
}

export function AssetCard({
  title,
  totalValue,
  fractionPrice,
  totalFractions,
  image,
  returns,
  status
}: AssetCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all group">
      {/* Image Container with optimized loading */}
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <DollarSign className="h-4 w-4" />
              <span>Total Value</span>
            </div>
            <span className="font-semibold text-gray-900">{totalValue}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="h-4 w-4" />
              <span>Per Fraction</span>
            </div>
            <span className="font-semibold text-gray-900">{fractionPrice}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <AlertCircle className="h-4 w-4" />
              <span>Status</span>
            </div>
            <span className="font-medium text-primary">{status}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <TrendingUp className="h-4 w-4" />
              <span>Returns</span>
            </div>
            <span className="font-semibold text-green-600">{returns}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors">
          Invest Now
        </button>
      </CardFooter>
    </Card>
  );
}