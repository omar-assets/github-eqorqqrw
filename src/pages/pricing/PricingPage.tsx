import React from 'react';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';
import { PricingPlans } from '@/components/pricing/PricingPlans';
import { PricingFAQ } from '@/components/pricing/PricingFAQ';
import { Trust } from '@/components/Trust';

export function PricingPage() {
  return (
    <>
      <BackgroundPattern variant="primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent
              <span className="text-primary"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-600">
              Simple, straightforward pricing with no hidden fees. Choose the plan 
              that best fits your investment goals.
            </p>
          </div>
        </div>
      </BackgroundPattern>
      <PricingPlans />
      <PricingFAQ />
      <Trust />
    </>
  );
}