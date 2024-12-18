import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  delay?: number;
  className?: string;
}

export function ScrollReveal({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  className = ''
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('animate-in');
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '50px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  const baseStyles = 'transition-all duration-700 ease-out opacity-0';
  const animationStyles = {
    'fade-up': 'translate-y-8',
    'fade-in': '',
    'slide-left': '-translate-x-8',
    'slide-right': 'translate-x-8'
  };

  return (
    <div
      ref={elementRef}
      className={`${baseStyles} ${animationStyles[animation]} ${className}`}
      style={{ 
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}