import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureHighlightProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureHighlight({ icon: Icon, title, description }: FeatureHighlightProps) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/20 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}