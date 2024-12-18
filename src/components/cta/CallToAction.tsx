import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Building2 } from 'lucide-react';
import { BackgroundPattern } from '../ui/BackgroundPattern';
import { ScrollReveal } from '../ui/ScrollReveal';

export function CallToAction() {
  const navigate = useNavigate();

  return (
    <BackgroundPattern variant="primary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="relative">
                    <Building2 className="h-8 w-8 text-primary" />
                    <Shield className="h-4 w-4 text-primary absolute -bottom-1 -right-1" />
                  </div>
                  <span className="text-primary font-medium">SEC Regulated Platform</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Start Building Your Investment Portfolio Today
                </h2>

                <p className="text-xl text-gray-600 mb-8">
                  Join thousands of investors accessing institutional-grade opportunities through our secure platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate(ROUTES.ONBOARDING.ACCOUNT_DETAILS)}
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl text-lg font-medium 
                             shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 
                             transform hover:-translate-y-0.5 transition-all duration-300"
                    data-tracking="cta-primary"
                  >
                    Start Investing Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => navigate('/marketplace')}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl text-lg font-medium
                             hover:bg-primary/5 transition-colors"
                    data-tracking="cta-secondary"
                  >
                    View Opportunities
                  </button>
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <div>
                    <div className="text-2xl font-bold text-primary">$100</div>
                    <div className="text-sm text-gray-600">Minimum Investment</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200" />
                  <div>
                    <div className="text-2xl font-bold text-primary">12.5%</div>
                    <div className="text-sm text-gray-600">Avg. Annual Returns</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80"
                  alt="Professional investment management"
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
}