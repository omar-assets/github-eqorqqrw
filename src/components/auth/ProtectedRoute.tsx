import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ROUTES } from '@/utils/constants';
import { logger } from '@/utils/logger';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresOnboarding?: boolean;
}

export function ProtectedRoute({ children, requiresOnboarding = true }: ProtectedRouteProps) {
  const { user, userProfile, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return null;
  }

  if (!user) {
    logger.warn('Unauthorized access attempt:', { path: location.pathname });
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  // Check if user needs to complete onboarding
  if (requiresOnboarding && 
      userProfile?.profileCompletionStatus === 'onboarding' && 
      !location.pathname.startsWith('/onboarding')) {
    const onboardingStep = userProfile?.onboardingStep || 'account-details';
    return <Navigate to={`/onboarding/${onboardingStep}`} replace />;
  }

  return <>{children}</>;
}