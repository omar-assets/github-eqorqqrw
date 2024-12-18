import React from 'react';
import { AlertCircle } from 'lucide-react';

export function PreviewBanner() {
  return (
    <div className="bg-primary/10 border-b border-primary/20">
      <div className="px-6 py-2">
        <div className="flex items-center justify-center gap-2 text-primary">
          <AlertCircle className="h-5 w-5" />
          <span className="font-medium">Investment Portfolio Preview Mode - Sample Data</span>
        </div>
      </div>
    </div>
  );
}