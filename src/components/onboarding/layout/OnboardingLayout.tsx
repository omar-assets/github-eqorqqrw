import React from 'react';
import { Outlet } from 'react-router-dom';
import { OnboardingProvider } from '../context/OnboardingContext';
import { OnboardingProgress } from './OnboardingProgress';
import { OnboardingHeader } from './OnboardingHeader';
import { BackgroundPattern } from '@/components/ui/BackgroundPattern';

export function OnboardingLayout() {
  return (
    <OnboardingProvider>
      <BackgroundPattern variant="primary">
        <div className="min-h-screen py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <OnboardingHeader />
            <OnboardingProgress />
            
            <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-primary/10">
              <Outlet />
            </div>
          </div>
        </div>
      </BackgroundPattern>
    </OnboardingProvider>
  );
}