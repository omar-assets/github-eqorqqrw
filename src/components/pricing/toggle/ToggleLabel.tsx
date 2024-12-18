import React from 'react';
import { Info } from 'lucide-react';

interface ToggleLabelProps {
  active: boolean;
  text: string;
  tooltipText: string;
  children?: React.ReactNode;
}

export function ToggleLabel({ active, text, tooltipText, children }: ToggleLabelProps) {
  return (
    <div className="group relative flex items-center gap-1">
      <span className={`text-sm font-medium transition-colors ${
        active ? 'text-gray-900' : 'text-gray-500'
      }`}>
        {text}
      </span>
      
      {children}
      
      <button
        type="button"
        className="ml-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full"
        aria-label={`Learn more about ${text.toLowerCase()} billing`}
      >
        <Info className="h-4 w-4" />
      </button>

      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="bg-gray-900 text-white text-sm rounded-lg py-2 px-3 max-w-[200px] text-center">
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
          {tooltipText}
        </div>
      </div>
    </div>
  );
}