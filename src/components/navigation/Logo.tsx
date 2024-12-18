import React from 'react';
import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import { APP_CONFIG } from '@/utils/constants';

export function Logo() {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 hover:opacity-90 transition-opacity"
      aria-label={APP_CONFIG.APP_NAME}
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
        <Building2 className="h-6 w-6 text-primary" />
      </div>
      <span className="text-xl font-semibold text-gray-900">
        {APP_CONFIG.APP_NAME}
      </span>
    </Link>
  );
}