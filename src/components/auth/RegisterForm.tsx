import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/lib/validation';
import { signUp } from '@/lib/firebase/auth';
import { FormInput } from './FormInput';
import { LoadingButton } from './LoadingButton';
import { AuthError } from './AuthError';
import { User, Mail, Lock } from 'lucide-react';
import { logger } from '@/utils/logger';

interface RegisterFormProps {
  onSuccess: () => void;
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      setError(null);
      
      const { user, profile } = await signUp(data.email, data.password, data.fullName);
      
      if (profile?.profileCompletionStatus === 'onboarding') {
        navigate(`/onboarding/${profile.onboardingStep || 'account-details'}`);
      } else {
        onSuccess();
      }
    } catch (error: any) {
      logger.error('Registration error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && <AuthError type="general" message={error} />}

      <FormInput
        label="Full Name"
        type="text"
        icon={User}
        error={errors.fullName?.message as string}
        {...register('fullName')}
        required
      />

      <FormInput
        label="Email"
        type="email"
        icon={Mail}
        error={errors.email?.message as string}
        {...register('email')}
        required
      />

      <FormInput
        label="Password"
        type="password"
        icon={Lock}
        error={errors.password?.message as string}
        {...register('password')}
        required
      />

      <FormInput
        label="Confirm Password"
        type="password"
        icon={Lock}
        error={errors.confirmPassword?.message as string}
        {...register('confirmPassword')}
        required
      />

      <LoadingButton
        type="submit"
        loading={loading}
        className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
      >
        Create Account
      </LoadingButton>
    </form>
  );
}