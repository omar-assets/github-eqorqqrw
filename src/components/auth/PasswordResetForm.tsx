import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail } from 'lucide-react';
import { FormInput } from './FormInput';
import { LoadingButton } from './LoadingButton';
import { resetPassword } from '@/lib/firebase/auth';

const resetSchema = z.object({
  email: z.string().email('Invalid email address')
});

export function PasswordResetForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(resetSchema)
  });

  const onSubmit = async (data: { email: string }) => {
    try {
      setLoading(true);
      await resetPassword(data.email);
      setSuccess(true);
    } catch (error) {
      console.error('Password reset error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
          <Mail className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Check your email
        </h3>
        <p className="text-gray-600">
          We've sent password reset instructions to your email address.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormInput
        label="Email"
        type="email"
        icon={Mail}
        error={errors.email?.message}
        {...register('email')}
        required
      />

      <LoadingButton
        type="submit"
        loading={loading}
        className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors"
      >
        Reset Password
      </LoadingButton>
    </form>
  );
}