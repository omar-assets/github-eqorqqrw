import React from 'react';
import { Building2 } from 'lucide-react';

export function LoadingLogo() {
  return (
    <div className="relative transform scale-150">
      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center animate-pulse">
        <Building2 className="h-8 w-8 text-primary" />
      </div>
    </div>
  );
}