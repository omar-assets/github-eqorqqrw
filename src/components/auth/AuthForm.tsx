import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, registerSchema } from '@/lib/validation';
import { FormInput } from './FormInput';
import { LoadingButton } from './LoadingButton';
import { Mail, Lock, User } from 'lucide-react';

interface AuthFormProps {
  type: 'login' | 'register';
  onSubmit: (data: any) => Promise<void>;
  loading?: boolean;
}

export function AuthForm({ type, onSubmit, loading = false }: AuthFormProps) {
  const isLogin = type === 'login';
  const schema = isLogin ? loginSchema : registerSchema;
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {!isLogin && (
        <FormInput
          label="Full Name"
          type="text"
          icon={User}
          error={errors.fullName?.message as string}
          {...register('fullName')}
          required
        />
      )}

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

      {!isLogin && (
        <FormInput
          label="Confirm Password"
          type="password"
          icon={Lock}
          error={errors.confirmPassword?.message as string}
          {...register('confirmPassword')}
          required
        />
      )}

      <LoadingButton
        type="submit"
        loading={loading}
        className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
      >
        {isLogin ? 'Sign In' : 'Create Account'}
      </LoadingButton>
    </form>
  );
}