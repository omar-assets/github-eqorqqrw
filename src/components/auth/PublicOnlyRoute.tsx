import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ROUTES } from '@/utils/constants';

interface PublicOnlyRouteProps {
  children: React.ReactNode;
}

export function PublicOnlyRoute({ children }: PublicOnlyRouteProps) {
  const { user, loading } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || ROUTES.DASHBOARD;

  if (loading) {
    return null;
  }

  if (user) {
    return <Navigate to={from} replace />;
  }

  return <>{children}</>;
}