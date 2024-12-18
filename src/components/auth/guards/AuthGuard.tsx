import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ROUTES } from '@/utils/constants';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { logger } from '@/utils/logger';

interface AuthGuardProps {
  children: React.ReactNode;
  requiresAuth?: boolean;
  requiresOnboarding?: boolean;
}

export function AuthGuard({ 
  children, 
  requiresAuth = true,
  requiresOnboarding = true 
}: AuthGuardProps) {
  const { user, userProfile, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingScreen />;
  }

  // Handle unauthenticated users
  if (requiresAuth && !user) {
    logger.warn('Unauthorized access attempt:', { path: location.pathname });
    return <Navigate to={ROUTES.ONBOARDING.ACCOUNT_DETAILS} state={{ from: location }} replace />;
  }

  // Handle onboarding status
  if (requiresAuth && requiresOnboarding && userProfile?.profileCompletionStatus === 'onboarding') {
    const onboardingStep = userProfile?.onboardingStep || 'account-details';
    const onboardingRoute = `/onboarding/${onboardingStep}`;

    // Only redirect if not already on an onboarding route
    if (!location.pathname.startsWith('/onboarding')) {
      logger.info('Redirecting to onboarding:', { step: onboardingStep });
      return <Navigate to={onboardingRoute} replace />;
    }
  }

  return <>{children}</>;
}