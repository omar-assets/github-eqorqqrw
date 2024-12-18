import React, { useState } from 'react';
import { PricingToggle } from '../toggle/PricingToggle';
import { ComparisonTable } from './ComparisonTable';
import { ScrollReveal } from '../../ui/ScrollReveal';
import { pricingData } from './data/pricingData';

export function PricingComparison() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Compare Plan Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Find the perfect plan for your investment needs with our detailed feature comparison.
            </p>

            <PricingToggle
              isAnnual={isAnnual}
              onChange={setIsAnnual}
              annualDiscount={20}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <ComparisonTable isAnnual={isAnnual} data={pricingData} />
        </ScrollReveal>
      </div>
    </section>
  );
}