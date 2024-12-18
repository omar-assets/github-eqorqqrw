import React from 'react';

export function LoadingProgress() {
  return (
    <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div 
        className="h-full bg-primary rounded-full relative animate-progress"
        style={{ animationDuration: '1s' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>
    </div>
  );
}