import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  number: number;
}

export function ProcessStep({ icon: Icon, title, description, color, number }: ProcessStepProps) {
  return (
    <div className="relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all h-full">
      {/* Step Number */}
      <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
        {number}
      </div>

      {/* Icon */}
      <div className={`w-16 h-16 rounded-xl ${color} flex items-center justify-center mb-6`}>
        <Icon className="h-8 w-8" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Connector Line (except for last step) */}
      {number < 3 && (
        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
        </div>
      )}
    </div>
  );
}