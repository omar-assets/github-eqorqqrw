import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Shield, TrendingUp, Building2, Wallet } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const features = [
  {
    id: 'security',
    Icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Advanced encryption and multi-layer security protocols protect your investments with institutional-level safeguards.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    id: 'portfolio',
    Icon: TrendingUp,
    title: 'Smart Portfolio Management',
    description: 'Data-driven investment strategies optimize your portfolio performance through advanced analytics and market insights.',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=1200',
    color: 'bg-green-500/10 text-green-600'
  },
  {
    id: 'assets',
    Icon: Building2,
    title: 'Premium Asset Access',
    description: 'Exclusive access to institutional-grade investments through innovative fractionalization technology.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    color: 'bg-purple-500/10 text-purple-600'
  },
  {
    id: 'investment',
    Icon: Wallet,
    title: 'Flexible Investment Options',
    description: 'Customize your investment strategy with fractional positions starting from just $100.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1200',
    color: 'bg-amber-500/10 text-amber-600'
  }
];

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);

  const nextFeature = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  }, []);

  const prevFeature = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(nextFeature, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextFeature]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevFeature();
      if (e.key === 'ArrowRight') nextFeature();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextFeature, prevFeature]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextFeature();
      else prevFeature();
    }
  };

  const activeFeature = features[activeIndex];
  const ActiveIcon = activeFeature.Icon;

  return (
    <section className="py-24 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our comprehensive platform empowers investors through innovative technology.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex gap-4">
            {features.map((feature, index) => {
              const FeatureIcon = feature.Icon;
              return (
                <button
                  key={feature.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    activeIndex === index
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-white hover:shadow-sm'
                  }`}
                  aria-label={`View ${feature.title}`}
                >
                  <FeatureIcon className="h-5 w-5" />
                  <span className="whitespace-nowrap font-medium">{feature.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Content */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-[16/9] relative">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className={`w-16 h-16 rounded-xl ${activeFeature.color} mb-4 flex items-center justify-center`}>
                <ActiveIcon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{activeFeature.title}</h3>
              <p className="text-lg text-white/90">{activeFeature.description}</p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <button
              onClick={prevFeature}
              className="pointer-events-auto w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
              aria-label="Previous feature"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextFeature}
              className="pointer-events-auto w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
              aria-label="Next feature"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index
                  ? 'bg-primary w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}