import React from 'react';
import { Shield } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export function HowItWorksHero() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="max-w-3xl">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Simple & Secure Process</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Path to
            <span className="text-primary"> Institutional Investing</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Discover how our strategic fractionalization approach transforms institutional-grade 
            investments into accessible opportunities for sophisticated investors.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}