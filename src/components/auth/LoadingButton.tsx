import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingButtonProps {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

export function LoadingButton({
  loading = false,
  children,
  className = '',
  type = 'button',
  onClick,
  disabled = false
}: LoadingButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={`relative w-full h-12 flex items-center justify-center gap-2 
        transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
    >
      {loading && (
        <Loader2 className="absolute left-1/2 -translate-x-1/2 h-5 w-5 animate-spin" />
      )}
      <span className={loading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
    </button>
  );
}