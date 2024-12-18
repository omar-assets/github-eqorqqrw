import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ScrollReveal } from '../../ui/ScrollReveal';

interface FeatureDemoProps {
  title: string;
  description: string;
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
}

export function FeatureDemo({ title, description, features }: FeatureDemoProps) {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}