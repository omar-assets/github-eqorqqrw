import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Building2, Briefcase, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { PricingCard } from './PricingCard';

const plans = [
  {
    name: 'Standard',
    description: 'Perfect for individual investors starting their journey',
    price: {
      monthly: 99,
      annual: 79
    },
    features: [
      'Access to fractional investments',
      'Basic portfolio analytics',
      'Email support',
      'Monthly market insights'
    ],
    icon: Shield,
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    name: 'Professional',
    description: 'Enhanced features for serious investors',
    price: {
      monthly: 199,
      annual: 159
    },
    features: [
      'All Standard features',
      'Advanced portfolio analytics',
      'Priority support',
      'Weekly market insights',
      'Custom investment strategies'
    ],
    icon: Building2,
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
    features: [
      'All Professional features',
      'Dedicated account manager',
      'Custom reporting',
      'API access',
      'White-label options'
    ],
    icon: Briefcase,
    color: 'bg-purple-500/10 text-purple-600'
  }
];

export function PricingPreview() {
  const [isAnnual, setIsAnnual] = useState(true);
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transparent Pricing for Every Investor
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your investment goals. All plans include our core platform features.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-14 h-7 bg-primary rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label={`Switch to ${isAnnual ? 'monthly' : 'annual'} billing`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    isAnnual ? 'translate-x-7' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Annual
                <span className="ml-1.5 text-primary">Save 20%</span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 200}>
              <PricingCard
                {...plan}
                price={isAnnual ? plan.price.annual : plan.price.monthly}
                billingPeriod={isAnnual ? 'per month, billed annually' : 'per month'}
                onSelect={() => navigate(`/pricing#${plan.name.toLowerCase()}`)}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <button
              onClick={() => navigate('/pricing')}
              className="inline-flex items-center gap-2 px-6 py-3 text-primary hover:text-primary-medium transition-colors"
            >
              Compare All Plans
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Need a custom solution?{' '}
              <button
                onClick={() => navigate('/contact')}
                className="text-primary hover:text-primary-medium font-medium"
              >
                Contact our team
              </button>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}