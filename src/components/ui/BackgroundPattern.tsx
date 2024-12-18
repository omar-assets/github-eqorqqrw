import React from 'react';

interface BackgroundPatternProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
  className?: string;
}

export function BackgroundPattern({ 
  variant = 'primary', 
  children, 
  className = '' 
}: BackgroundPatternProps) {
  const colors = {
    primary: {
      grid: '#2E7D3215',
      gradient: 'from-[#2E7D32]/10',
      blur: 'bg-[#2E7D32]/20',
      pattern: 'bg-[#2E7D32]/5'
    },
    secondary: {
      grid: '#4CAF5015',
      gradient: 'from-[#4CAF50]/10',
      blur: 'bg-[#4CAF50]/20',
      pattern: 'bg-[#4CAF50]/5'
    },
    tertiary: {
      grid: '#81C78415',
      gradient: 'from-[#81C784]/10',
      blur: 'bg-[#81C784]/20',
      pattern: 'bg-[#81C784]/5'
    },
  };

  return (
    <section className={`relative py-20 overflow-hidden ${className}`}>
      {/* Base Grid Pattern */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,${colors[variant].grid}_1px,transparent_1px),linear-gradient(to_bottom,${colors[variant].grid}_1px,transparent_1px)] bg-[size:4rem_4rem]`}>
        {/* Diagonal Lines */}
        <div className={`absolute inset-0 bg-[linear-gradient(45deg,${colors[variant].pattern}_1px,transparent_1px),linear-gradient(-45deg,${colors[variant].pattern}_1px,transparent_1px)] bg-[size:20px_20px]`} />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${colors[variant].gradient} to-transparent`} />
      </div>
      
      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_70%)]" />
      
      {/* Blur Elements */}
      <div className={`absolute top-20 -left-20 w-72 h-72 rounded-full blur-[128px] ${colors[variant].blur} animate-blob`} />
      <div className={`absolute bottom-20 -right-20 w-72 h-72 rounded-full blur-[128px] ${colors[variant].blur} animate-blob animation-delay-2000`} />

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </section>
  );
}