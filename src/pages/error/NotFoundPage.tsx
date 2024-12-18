import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { BackgroundPattern } from '../../components/ui/BackgroundPattern';
import { logger } from '../../utils/logger';

export function NotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    logger.warn(`404 error: Page not found at path: ${location.pathname}`);
  }, [location.pathname]);

  return (
    <BackgroundPattern variant="primary">
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary mb-8">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              <Home className="h-5 w-5" />
              Return Home
            </button>
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
}

export default NotFoundPage;