import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ProcessStep } from './ProcessStep';
import { Shield, LineChart, Wallet } from 'lucide-react';

const steps = [
  {
    icon: Shield,
    title: 'Create Your Account',
    description: 'Complete our streamlined verification process to access institutional-grade investment opportunities.',
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    icon: LineChart,
    title: 'Choose Your Investments',
    description: 'Browse curated opportunities and select investments that align with your financial goals.',
    color: 'bg-green-500/10 text-green-600'
  },
  {
    icon: Wallet,
    title: 'Start Investing',
    description: 'Begin with as little as $100 and build your portfolio through strategic fractional positions.',
    color: 'bg-purple-500/10 text-purple-600'
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Start Investing in Three Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes it easy to begin your investment journey with professional portfolio management.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 200}>
              <ProcessStep
                icon={step.icon}
                title={step.title}
                description={step.description}
                color={step.color}
                number={index + 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}