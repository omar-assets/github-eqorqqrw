import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function MarketplaceHeader() {
  return (
    <ScrollReveal>
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Coming Soon:
            <span className="text-primary"> Future Opportunities</span>
          </h1>
          <p className="text-xl text-gray-600">
            Preview upcoming investment opportunities and be the first to know when they launch.
            Get notified about premium assets that match your investment goals.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}