import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FractionalizeHero() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Transform Your Assets into
          <span className="text-primary"> Investment Opportunities</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Unlock the potential of your premium assets through our innovative fractionalization platform. 
          Create new investment opportunities while maintaining asset integrity and professional management.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors">
            Start Fractionalizing
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}