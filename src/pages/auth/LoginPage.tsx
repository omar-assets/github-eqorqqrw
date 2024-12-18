import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { AuthForm } from '@/components/auth/AuthForm';
import { signIn } from '@/lib/firebase/auth';
import { ROUTES } from '@/utils/constants';
import { logger } from '@/utils/logger';

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      setLoading(true);
      setError(null);
      
      const { user, profile } = await signIn(data.email, data.password);
      logger.info('Login successful');
      
      // Check if user needs to complete onboarding
      if (profile?.profileCompletionStatus === 'onboarding') {
        const onboardingStep = profile.onboardingStep || 'account-details';
        navigate(`/onboarding/${onboardingStep}`);
      } else {
        navigate(ROUTES.DASHBOARD);
      }
    } catch (error) {
      logger.error('Login error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your account"
    >
      <AuthForm
        type="login"
        onSubmit={handleLogin}
        loading={loading}
        error={error}
      />
    </AuthLayout>
  );
}

export default LoginPage;