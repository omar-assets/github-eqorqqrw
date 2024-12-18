import React from 'react';
import { HelpCircle } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export function FAQHero() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="max-w-3xl">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Help Center</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Can We
            <span className="text-primary"> Help You?</span>
          </h1>
          
          <p className="text-xl text-gray-600">
            Find answers to common questions about our investment platform, processes, 
            and services. Can't find what you're looking for? Our support team is here to help.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}