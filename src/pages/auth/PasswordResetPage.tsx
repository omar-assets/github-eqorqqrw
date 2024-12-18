import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { PasswordResetForm } from '@/components/auth/PasswordResetForm';
import { ROUTES } from '@/utils/constants';

function PasswordResetPage() {
  const navigate = useNavigate();

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email to receive reset instructions"
    >
      <PasswordResetForm />

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate(ROUTES.LOGIN)}
          className="text-sm text-primary hover:text-primary-medium"
        >
          Back to sign in
        </button>
      </div>
    </AuthLayout>
  );
}

export default PasswordResetPage;