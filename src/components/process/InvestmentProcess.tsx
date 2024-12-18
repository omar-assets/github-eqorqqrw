import React from 'react';
import { Shield, Wallet, LineChart, Users, Building2 } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const processSteps = [
  {
    icon: Shield,
    title: 'Investor Verification',
    description: 'Complete our streamlined verification process to access institutional-grade opportunities.',
    detail: 'Our compliance team ensures all investors meet regulatory requirements while maintaining privacy and security.'
  },
  {
    icon: Building2,
    title: 'Portfolio Analysis',
    description: 'Review curated investment opportunities aligned with your strategy.',
    detail: 'Access detailed analysis of each investment opportunity, including risk assessments and projected returns.'
  },
  {
    icon: Wallet,
    title: 'Strategic Position Sizing',
    description: 'Select optimal position sizes through our fractionalization platform.',
    detail: 'Leverage our technology to precisely allocate capital across multiple investments.'
  },
  {
    icon: LineChart,
    title: 'Professional Management',
    description: 'Benefit from ongoing portfolio optimization and rebalancing.',
    detail: 'Our investment team actively monitors and adjusts positions to maintain optimal performance.'
  },
  {
    icon: Users,
    title: 'Regular Reporting',
    description: 'Access comprehensive performance reports and analytics.',
    detail: 'Stay informed with detailed insights into your investment performance and portfolio metrics.'
  }
];

export function InvestmentProcess() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Investment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures a professional and efficient investment experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 200}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <p className="text-sm text-gray-500">{step.detail}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}