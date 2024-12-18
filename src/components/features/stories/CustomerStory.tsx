import React from 'react';
import { Quote } from 'lucide-react';
import { ScrollReveal } from '../../ui/ScrollReveal';

interface CustomerStoryProps {
  quote: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
}

export function CustomerStory({ quote, author }: CustomerStoryProps) {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Quote className="h-6 w-6 text-primary" />
            </div>

            <blockquote className="text-2xl text-gray-900 mb-8">"{quote}"</blockquote>

            <div className="flex items-center gap-4">
              <img
                src={author.image}
                alt={author.name}
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <div className="font-semibold text-gray-900">{author.name}</div>
                <div className="text-gray-600">{author.role}</div>
                <div className="text-primary">{author.company}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}