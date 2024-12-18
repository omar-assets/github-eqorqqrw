import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ScrollReveal } from '../../ui/ScrollReveal';

interface FeatureDetailsProps {
  title: string;
  description: string;
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  image: string;
}

export function FeatureDetails({ title, description, features, image }: FeatureDetailsProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h2>
              <p className="text-xl text-gray-600 mb-8">{description}</p>

              <div className="space-y-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative">
              <img
                src={image}
                alt="Feature illustration"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}