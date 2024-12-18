import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  completedSteps: number[];
}

export function StepIndicator({ currentStep, totalSteps, completedSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = completedSteps.includes(stepNumber);

        return (
          <React.Fragment key={stepNumber}>
            {index > 0 && (
              <div 
                className={`w-12 h-0.5 transition-colors duration-300 ${
                  isCompleted ? 'bg-primary' : 'bg-gray-200'
                }`}
              />
            )}
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isActive ? 'bg-primary text-white' :
                isCompleted ? 'bg-primary text-white' :
                'bg-gray-200 text-gray-600'
              }`}
            >
              {isCompleted ? (
                <Check className="h-4 w-4" />
              ) : (
                <span className="text-sm">{stepNumber}</span>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}