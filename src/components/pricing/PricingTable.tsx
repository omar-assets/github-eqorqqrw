import React, { useState } from 'react';
import { Shield, Building2, Briefcase } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { PricingCard } from './PricingCard';
import { PricingToggle } from './toggle/PricingToggle';

const plans = [
  {
    name: 'Standard',
    description: 'Perfect for individual investors starting their journey',
    price: {
      monthly: 99,
      annual: 79
    },
    icon: Shield,
    features: [
      'Access to fractional investments',
      'Basic portfolio analytics',
      'Email support',
      'Monthly market insights',
      'Standard API access'
    ],
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    name: 'Professional',
    description: 'Enhanced features for serious investors',
    price: {
      monthly: 199,
      annual: 159
    },
    icon: Building2,
    features: [
      'All Standard features',
      'Advanced portfolio analytics',
      'Priority support',
      'Weekly market insights',
      'Custom investment strategies',
      'Enhanced API access'
    ],
    recommended: true,
    color: 'bg-primary/10 text-primary'
  },
  {
    name: 'Enterprise',
    description: 'Tailored solutions for institutional investors',
    price: {
      monthly: 499,
      annual: 399
    },
    icon: Briefcase,
    features: [
      'All Professional features',
      'Dedicated account manager',
      'Custom reporting',
      'Unlimited API access',
      'White-label options',
      'SLA guarantees'
    ],
    color: 'bg-purple-500/10 text-purple-600'
  }
];

export function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Transparent Pricing for Every Investor
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Choose the plan that best fits your investment goals. All plans include our core platform features.
            </p>

            <PricingToggle
              isAnnual={isAnnual}
              onChange={setIsAnnual}
              annualDiscount={20}
            />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 200}>
              <PricingCard
                {...plan}
                price={isAnnual ? plan.price.annual : plan.price.monthly}
                billingPeriod={isAnnual ? 'per month, billed annually' : 'per month'}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}