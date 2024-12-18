import React, { createContext, useContext, useState } from 'react';
import { OnboardingStep } from '@/config/onboarding';

interface OnboardingContextType {
  currentStep: OnboardingStep;
  setCurrentStep: (step: OnboardingStep) => void;
  onboardingData: Record<string, any>;
  updateOnboardingData: (data: Record<string, any>) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('account-details');
  const [onboardingData, setOnboardingData] = useState<Record<string, any>>({});

  const updateOnboardingData = (data: Record<string, any>) => {
    setOnboardingData(prev => ({ ...prev, ...data }));
  };

  return (
    <OnboardingContext.Provider 
      value={{ 
        currentStep, 
        setCurrentStep, 
        onboardingData, 
        updateOnboardingData 
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};