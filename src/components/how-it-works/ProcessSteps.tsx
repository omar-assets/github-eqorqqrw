import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Shield, LineChart, Wallet, Users } from 'lucide-react';

const steps = [
  {
    icon: Shield,
    title: 'Create Your Account',
    description: 'Complete our streamlined verification process to access institutional-grade investment opportunities.'
  },
  {
    icon: LineChart,
    title: 'Choose Your Investments',
    description: 'Browse curated opportunities and select investments that align with your financial goals.'
  },
  {
    icon: Wallet,
    title: 'Start Investing',
    description: 'Begin with as little as $100 and build your portfolio through strategic fractional positions.'
  },
  {
    icon: Users,
    title: 'Track Performance',
    description: 'Monitor your investments and receive regular updates on portfolio performance.'
  }
];

export function ProcessSteps() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Start Investing in Four Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes it easy to begin your investment journey with professional portfolio management.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 200}>
              <div className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}