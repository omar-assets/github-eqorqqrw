import React from 'react';
import { Wallet, TrendingUp, Building } from 'lucide-react';
import { BackgroundPattern } from '../ui/BackgroundPattern';
import { ScrollReveal } from '../ui/ScrollReveal';
import { InvestmentFeature } from './InvestmentFeature';
import { InvestmentImage } from './InvestmentImage';

const investmentFeatures = [
  {
    icon: Building,
    title: 'Institutional-Grade Assets',
    points: [
      'Access to premium investment opportunities',
      'Professional portfolio management',
      'Regulated investment structures'
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=600',
      alt: 'Professional investment management platform'
    }
  },
  {
    icon: TrendingUp,
    title: 'Strategic Fractionalization',
    points: [
      'Optimized position sizing',
      'Enhanced portfolio diversification',
      'Efficient capital allocation'
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
      alt: 'Investment performance analytics'
    }
  },
  {
    icon: Wallet,
    title: 'Wealth Optimization',
    points: [
      'Sophisticated investment strategies',
      'Tax-efficient structures',
      'Regular performance monitoring'
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600',
      alt: 'Premium investment portfolio'
    }
  }
];

export function WhyInvest() {
  return (
    <BackgroundPattern variant="secondary">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Why Choose BRiX Assets?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience institutional-grade investment management through our innovative fractionalization approach.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="space-y-16">
          {investmentFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className={`grid lg:grid-cols-5 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <ScrollReveal 
                animation="slide-right"
                delay={index * 200}
                className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:col-start-3' : ''}`}
              >
                <InvestmentFeature {...feature} />
              </ScrollReveal>
              
              <ScrollReveal
                animation="slide-left"
                delay={index * 200}
                className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <InvestmentImage {...feature.image} />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </BackgroundPattern>
  );
}