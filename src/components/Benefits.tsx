import React from 'react';
import { Shield, PieChart, Wallet } from 'lucide-react';
import { BackgroundPattern } from './ui/BackgroundPattern';
import { ScrollReveal } from './ui/ScrollReveal';

const benefits = [
  {
    icon: Wallet,
    title: 'Start Small, Grow Big',
    description: 'Begin your investment journey with just $100. Build your portfolio gradually while learning and growing.',
    points: [
      'Low $100 minimum investment',
      'Flexible contribution options',
      'No hidden fees or charges'
    ]
  },
  {
    icon: PieChart,
    title: 'Dual Income Streams',
    description: 'Earn from both asset value appreciation and regular monthly distributions from your investments.',
    points: [
      'Monthly rental income',
      'Property value appreciation',
      'Automated distributions'
    ]
  },
  {
    icon: Shield,
    title: 'Secure Fractionalization',
    description: 'Own verified portions of premium assets through our secure, regulated fractionalization platform.',
    points: [
      'Legal ownership structure',
      'Bank-grade security',
      'Full regulatory compliance'
    ]
  }
];

export function Benefits() {
  return (
    <section className="relative">
      <BackgroundPattern variant="tertiary" className="pb-40">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">
                Why Choose Fractional Investing?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the advantages of fractional ownership with our innovative investment platform.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 200}>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-lg transition-all group">
                  <div className="mb-6 transform group-hover:-translate-y-1 transition-transform">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {benefit.description}
                  </p>

                  <ul className="space-y-3">
                    {benefit.points.map((point, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-medium flex-shrink-0" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </BackgroundPattern>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white transform translate-y-1/2">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2E7D3215_1px,transparent_1px),linear-gradient(to_bottom,#2E7D3215_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      </div>
    </section>
  );
}