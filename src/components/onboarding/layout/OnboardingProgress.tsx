import React from 'react';
import { useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';
import { ONBOARDING_STEPS } from '@/config/onboarding';
import { useOnboarding } from '../context/OnboardingContext';

export function OnboardingProgress() {
  const location = useLocation();
  const { currentStep } = useOnboarding();
  
  const currentStepIndex = ONBOARDING_STEPS.findIndex(
    step => step.id === currentStep
  );

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        {ONBOARDING_STEPS.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isCurrent = index === currentStepIndex;

          return (
            <div key={step.id} className="flex-1">
              <div className="flex items-center">
                <div className={`relative flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                  isCompleted ? 'bg-primary border-primary' :
                  isCurrent ? 'border-primary bg-white' :
                  'border-gray-300 bg-white'
                }`}>
                  {isCompleted ? (
                    <Check className="h-4 w-4 text-white" />
                  ) : (
                    <span className={`text-sm font-medium ${
                      isCurrent ? 'text-primary' : 'text-gray-500'
                    }`}>
                      {index + 1}
                    </span>
                  )}
                </div>
                {index < ONBOARDING_STEPS.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 transition-colors ${
                    index < currentStepIndex ? 'bg-primary' : 'bg-gray-300'
                  }`} />
                )}
              </div>
              <div className="mt-2">
                <p className={`text-sm font-medium ${
                  isCurrent ? 'text-primary' : 'text-gray-500'
                }`}>
                  {step.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}