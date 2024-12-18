import React from 'react';
import { Info } from 'lucide-react';

interface TooltipProps {
  children: React.ReactNode;
}

export function Tooltip({ children }: TooltipProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
      <Info className="h-4 w-4 text-primary" />
      <span className="text-sm text-primary">{children}</span>
    </div>
  );
}