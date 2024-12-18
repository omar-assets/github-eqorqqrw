import React from 'react';

export function LoadingBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2E7D3215_1px,transparent_1px),linear-gradient(to_bottom,#2E7D3215_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent backdrop-blur-sm" />
      </div>
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary-medium/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>
    </>
  );
}