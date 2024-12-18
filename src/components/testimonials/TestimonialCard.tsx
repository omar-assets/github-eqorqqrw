import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
  companyLogo?: string;
}

export function TestimonialCard({ quote, author, companyLogo }: TestimonialCardProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        {/* Quote Icon */}
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Quote className="h-6 w-6 text-primary" />
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-xl text-gray-900 mb-8 leading-relaxed">
          "{quote}"
        </blockquote>

        {/* Author Information */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
            <img
              src={author.image}
              alt={author.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex-grow">
            <div className="font-semibold text-gray-900">{author.name}</div>
            <div className="text-gray-600">{author.role}</div>
            <div className="text-primary">{author.company}</div>
          </div>

          {companyLogo && (
            <div className="flex-shrink-0">
              <img
                src={companyLogo}
                alt={`${author.company} logo`}
                className="h-10 w-auto"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}