import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ROUTES } from '@/utils/constants';
import { logger } from '@/utils/logger';

interface OnboardingGuardProps {
  step: string;
  children: React.ReactNode;
}

export function OnboardingGuard({ step, children }: OnboardingGuardProps) {
  const navigate = useNavigate();
  const { userProfile } = useAuth();

  React.useEffect(() => {
    // If user has completed onboarding, redirect to dashboard
    if (userProfile?.profileCompletionStatus === 'complete') {
      logger.info('User has completed onboarding, redirecting to dashboard');
      navigate(ROUTES.DASHBOARD, { replace: true });
      return;
    }

    // Get user's current onboarding step
    const currentStep = userProfile?.onboardingStep || 'account-details';
    const currentStepIndex = ['account-details', 'investor-type', 'personal-info', 'review'].indexOf(currentStep);
    const requestedStepIndex = ['account-details', 'investor-type', 'personal-info', 'review'].indexOf(step);

    // Prevent skipping steps
    if (requestedStepIndex > currentStepIndex) {
      logger.warn('Attempted to skip onboarding step:', {
        current: currentStep,
        requested: step
      });
      navigate(`/onboarding/${currentStep}`, { replace: true });
    }
  }, [userProfile, step, navigate]);

  return <>{children}</>;
}