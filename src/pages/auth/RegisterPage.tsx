import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { RegistrationSuccess } from '@/components/auth/RegistrationSuccess';
import { ROUTES } from '@/utils/constants';
import { logger } from '@/utils/logger';

function RegisterPage() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegistrationSuccess = () => {
    setSuccess(true);
    logger.info('Registration completed successfully');
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join our platform to start investing"
    >
      {success ? (
        <RegistrationSuccess onNavigateToLogin={() => navigate(ROUTES.LOGIN)} />
      ) : (
        <RegisterForm onSuccess={handleRegistrationSuccess} />
      )}
    </AuthLayout>
  );
}

export default RegisterPage;