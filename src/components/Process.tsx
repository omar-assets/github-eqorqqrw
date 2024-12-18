import React from 'react';
import { Shield, Wallet, LineChart } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

const highlights = [
  {
    icon: Shield,
    title: 'Secure Fractionalization',
    description: 'Our proprietary fractionalization technology ensures secure, regulated, and transparent asset division.',
    stat: '256-bit',
    label: 'Encryption'
  },
  {
    icon: Wallet,
    title: 'Strategic Investment',
    description: 'Access institutional-grade investments through strategic fractional positions.',
    stat: '$100',
    label: 'Minimum Investment'
  },
  {
    icon: LineChart,
    title: 'Optimized Returns',
    description: 'Professional portfolio management maximizing returns through fractional diversification.',
    stat: '12.5%',
    label: 'Avg. Annual Returns'
  }
];

export function Process() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2E7D3215_1px,transparent_1px),linear-gradient(to_bottom,#2E7D3215_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Strategic Asset Fractionalization
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our innovative approach to asset fractionalization enables sophisticated investors to build 
              institutional-grade portfolios with precision and flexibility.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 200}>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>
                
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-primary">
                    {item.stat}
                  </span>
                  <span className="text-gray-600 mb-1">
                    {item.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}