import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, MessageCircle } from 'lucide-react';
import { ROUTES } from '@/utils/constants';
import { ScrollReveal } from '../ui/ScrollReveal';

export function GetStartedCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-primary/10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Ready to Begin Your Investment Journey?
              </h3>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Take the first step towards building your institutional-grade portfolio with BRiX Assets.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Explore Opportunities
                </h4>
                <p className="text-gray-600 mb-6">
                  Browse our curated selection of premium investment opportunities.
                </p>
                <button
                  onClick={() => navigate(ROUTES.MARKETPLACE)}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
                >
                  View Marketplace
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Get Started Now
                </h4>
                <p className="text-gray-600 mb-6">
                  Create your account and start building your portfolio today.
                </p>
                <button
                  onClick={() => navigate(ROUTES.REGISTER)}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
                >
                  Create Account
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <div className="inline-flex items-center gap-2 text-gray-600">
                <MessageCircle className="h-5 w-5" />
                <span>Need assistance?</span>
              </div>
              <div className="mt-2">
                <button
                  onClick={() => navigate(ROUTES.FAQS)}
                  className="text-primary hover:text-primary-medium font-medium mx-2"
                >
                  Visit our FAQ
                </button>
                <span className="text-gray-400">•</span>
                <button
                  onClick={() => navigate(ROUTES.CONTACT)}
                  className="text-primary hover:text-primary-medium font-medium mx-2"
                >
                  Contact our team
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}