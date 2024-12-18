import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ROUTES } from '@/utils/constants';
import { logger } from '@/utils/logger';

export function useRequireAuth(redirectUrl = ROUTES.LOGIN) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      logger.info('Unauthorized access attempt, redirecting to login');
      navigate(redirectUrl);
    }
  }, [user, loading, navigate, redirectUrl]);

  return { user, loading };
}