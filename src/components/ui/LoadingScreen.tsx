import React from 'react';
import { LoadingLogo } from './loading/LoadingLogo';
import { LoadingProgress } from './loading/LoadingProgress';
import { LoadingBackground } from './loading/LoadingBackground';
import { APP_CONFIG } from '@/utils/constants';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 bg-white">
      <LoadingBackground />
      
      <div className="relative h-full flex flex-col items-center justify-center">
        <LoadingLogo />
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
          {APP_CONFIG.APP_NAME}
        </h2>
        
        <LoadingProgress />
      </div>
    </div>
  );
}