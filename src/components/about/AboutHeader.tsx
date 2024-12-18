import React from 'react';
import { Building2, Users, TrendingUp, Globe2 } from 'lucide-react';
import { BackgroundPattern } from '../ui/BackgroundPattern';
import { ScrollReveal } from '../ui/ScrollReveal';

const highlights = [
  {
    icon: Building2,
    label: 'Assets Under Management',
    value: '$2.5B+'
  },
  {
    icon: Users,
    label: 'Active Clients',
    value: '15,000+'
  },
  {
    icon: TrendingUp,
    label: 'Average Annual Returns',
    value: '12.5%'
  },
  {
    icon: Globe2,
    label: 'Global Markets',
    value: '25+'
  }
];

export function AboutHeader() {
  return (
    <BackgroundPattern variant="primary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Investment
              <span className="text-primary"> Through Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              BRiX Assets is revolutionizing investment through innovative fractionalization technology, making institutional-grade opportunities accessible to qualified investors.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-medium">Trusted by 15,000+ investors worldwide</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{item.value}</p>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </BackgroundPattern>
  );
}