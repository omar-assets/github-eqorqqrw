import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personalInfoSchema } from '../validation/schemas';
import { useAuth } from '@/contexts/AuthContext';
import { updateUserProfile } from '@/lib/firebase/user';
import { ROUTES } from '@/utils/constants';
import { logger } from '@/utils/logger';
import { Toast } from '@/components/ui/Toast';

export function PersonalInfoStep() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(personalInfoSchema)
  });

  const onSubmit = async (data: any) => {
    if (!user) return;
    
    try {
      setLoading(true);
      setError(null);
      
      await updateUserProfile(user.uid, {
        personalInfo: {
          ...data,
          updatedAt: new Date()
        },
        onboardingStep: 'review'
      });
      
      logger.info('Personal info updated');
      navigate(ROUTES.ONBOARDING.REVIEW);
    } catch (error) {
      const message = 'Failed to update personal information. Please try again.';
      logger.error('Error updating personal info:', error);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Date of Birth */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          {...register('dateOfBirth')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
        />
        {errors.dateOfBirth && (
          <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message as string}</p>
        )}
      </div>

      {/* Occupation */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Occupation
        </label>
        <input
          type="text"
          {...register('occupation')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
        />
        {errors.occupation && (
          <p className="mt-1 text-sm text-red-600">{errors.occupation.message as string}</p>
        )}
      </div>

      {/* Address */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Address</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Street Address
          </label>
          <input
            type="text"
            {...register('address.street')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
          {errors.address?.street && (
            <p className="mt-1 text-sm text-red-600">{errors.address.street.message as string}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              {...register('address.city')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
            {errors.address?.city && (
              <p className="mt-1 text-sm text-red-600">{errors.address.city.message as string}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State
            </label>
            <input
              type="text"
              {...register('address.state')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
            {errors.address?.state && (
              <p className="mt-1 text-sm text-red-600">{errors.address.state.message as string}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ZIP Code
          </label>
          <input
            type="text"
            {...register('address.zipCode')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
          {errors.address?.zipCode && (
            <p className="mt-1 text-sm text-red-600">{errors.address.zipCode.message as string}</p>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => navigate(ROUTES.ONBOARDING.INVESTOR_TYPE)}
          className="px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Continue'}
        </button>
      </div>

      {error && (
        <Toast
          type="error"
          message={error}
          onClose={() => setError(null)}
        />
      )}
    </form>
  );
}