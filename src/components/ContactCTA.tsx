import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { BackgroundPattern } from './ui/BackgroundPattern';
import { ScrollReveal } from './ui/ScrollReveal';

export function ContactCTA() {
  const navigate = useNavigate();

  return (
    <BackgroundPattern variant="secondary">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Ready to take the next step in your investment journey?
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Discover exactly how our platform works and start building your wealth with confidence. 
                Our simple, proven process has helped thousands of investors succeed.
              </p>
              
              <button
                onClick={() => navigate('/how-it-works')}
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl text-lg font-medium 
                         shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 
                         transform hover:-translate-y-0.5 transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                data-tracking="learn-more-cta"
              >
                Learn How It Works
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </BackgroundPattern>
  );
}