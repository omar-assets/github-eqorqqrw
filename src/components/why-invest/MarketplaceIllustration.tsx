import React from 'react';

export function MarketplaceIllustration() {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl">
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        alt="Modern investment platform"
        className="w-full aspect-[4/3] object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl" />
    </div>
  );
}