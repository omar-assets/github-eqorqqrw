import React from 'react';
import { Shield, TrendingUp, Users, Wallet } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const benefits = [
  {
    icon: Shield,
    title: 'Secure Asset Protection',
    description: 'Bank-grade security protocols and regulatory compliance safeguard your investments with institutional-level protection.',
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    icon: TrendingUp,
    title: 'Strategic Growth',
    description: 'Professional portfolio management optimizes returns through data-driven investment strategies and market analysis.',
    color: 'bg-green-500/10 text-green-600'
  },
  {
    icon: Users,
    title: 'Expert Management',
    description: 'Seasoned investment professionals actively manage your portfolio to maximize potential returns and minimize risks.',
    color: 'bg-purple-500/10 text-purple-600'
  },
  {
    icon: Wallet,
    title: 'Flexible Investment',
    description: 'Start with as little as $100 and build your portfolio through strategic fractional positions in premium assets.',
    color: 'bg-amber-500/10 text-amber-600'
  }
];

export function KeyBenefits() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the advantages of institutional-grade investing with our innovative platform.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 200}>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all h-full">
                <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-6`}>
                  <benefit.icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}