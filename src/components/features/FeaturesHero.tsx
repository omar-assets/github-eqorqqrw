import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, TrendingUp, Building2, ArrowRight, Users, LineChart } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { FeatureHighlight } from './FeatureHighlight';
import { StatCard } from './StatCard';

export function FeaturesHero() {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Advanced encryption and regulatory compliance protect your investments'
    },
    {
      icon: LineChart,
      title: 'Smart Portfolio Management',
      description: 'Data-driven strategies optimize your investment performance'
    },
    {
      icon: Users,
      title: 'Expert Advisory',
      description: 'Professional guidance for informed investment decisions'
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: '12.5%',
      label: 'Avg. Returns'
    },
    {
      icon: Building2,
      value: '$2.5B+',
      label: 'Assets Managed'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <ScrollReveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Enterprise-Grade Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Investment Strategy
            <span className="text-primary"> with Professional Management</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience institutional-grade investment features through our secure, regulated platform. 
            Built for sophisticated investors seeking professional portfolio management and optimized returns.
          </p>

          <button
            onClick={() => navigate('/marketplace')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl 
                     shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 
                     transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore Investment Opportunities
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal delay={200}>
          <div className="space-y-8">
            {highlights.map((highlight, index) => (
              <FeatureHighlight key={index} {...highlight} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80"
              alt="Professional investment platform interface"
              className="w-full rounded-xl shadow-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}