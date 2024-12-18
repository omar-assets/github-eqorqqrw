import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BackgroundPattern } from '../ui/BackgroundPattern';
import { ScrollReveal } from '../ui/ScrollReveal';

export function LearnMore() {
  const navigate = useNavigate();

  return (
    <BackgroundPattern variant="primary" className="py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Investment Strategy?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of sophisticated investors who are building wealth through our innovative fractional investment platform. Start with as little as $100,000.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl text-lg font-medium 
                     shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 
                     transform hover:-translate-y-0.5 transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            data-tracking="learn-more-cta"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </ScrollReveal>
      </div>
    </BackgroundPattern>
  );
}