import React from 'react';

interface InvestmentImageProps {
  src: string;
  alt: string;
}

export function InvestmentImage({ src, alt }: InvestmentImageProps) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group h-[300px]">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl" />
    </div>
  );
}