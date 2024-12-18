import React from 'react';
import { Building2 } from 'lucide-react';
import { APP_CONFIG } from '@/utils/constants';

export function OnboardingHeader() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
        <Building2 className="h-6 w-6 text-primary" />
      </div>
      <h1 className="text-2xl font-semibold text-gray-900">
        Welcome to {APP_CONFIG.APP_NAME}
      </h1>
      <p className="text-gray-600 mt-2">
        Let's get your account set up to start investing
      </p>
    </div>
  );
}