import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { investorTypeSchema } from '../validation/schemas';
import { useAuth } from '@/contexts/AuthContext';
import { updateUserProfile } from '@/lib/firebase/user';
import { ROUTES } from '@/utils/constants';
import { logger } from '@/utils/logger';
import { Toast } from '@/components/ui/Toast';

const investmentGoals = [
  'Capital Appreciation',
  'Regular Income',
  'Portfolio Diversification',
  'Tax Benefits',
  'Long-term Growth'
];

export function InvestorTypeStep() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(investorTypeSchema),
    defaultValues: {
      investmentGoals: [],
      riskTolerance: 'moderate'
    }
  });

  const onSubmit = async (data: any) => {
    if (!user) return;
    
    try {
      setLoading(true);
      setError(null);
      
      await updateUserProfile(user.uid, {
        investorProfile: {
          ...data,
          updatedAt: new Date()
        },
        onboardingStep: 'personal-info'
      });
      
      logger.info('Investor profile updated');
      navigate(ROUTES.ONBOARDING.PERSONAL_INFO);
    } catch (error) {
      const message = 'Failed to update investor profile. Please try again.';
      logger.error('Error updating investor profile:', error);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Investor Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Investor Type
        </label>
        <div className="grid grid-cols-2 gap-4">
          {['individual', 'institutional'].map((type) => (
            <label
              key={type}
              className={`
                relative flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer
                transition-colors hover:bg-gray-50
                ${errors.investorType ? 'border-red-300' : 'border-gray-200'}
              `}
            >
              <input
                type="radio"
                value={type}
                {...register('investorType')}
                className="sr-only"
              />
              <span className="capitalize">{type}</span>
              <span className={`absolute inset-0 rounded-lg pointer-events-none transition-colors
                ${register('investorType').value === type ? 'border-2 border-primary' : ''}
              `} />
            </label>
          ))}
        </div>
        {errors.investorType && (
          <p className="mt-1 text-sm text-red-600">{errors.investorType.message as string}</p>
        )}
      </div>

      {/* Investment Goals */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Investment Goals
        </label>
        <div className="space-y-2">
          {investmentGoals.map((goal) => (
            <label key={goal} className="flex items-center gap-3">
              <input
                type="checkbox"
                value={goal}
                {...register('investmentGoals')}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span>{goal}</span>
            </label>
          ))}
        </div>
        {errors.investmentGoals && (
          <p className="mt-1 text-sm text-red-600">{errors.investmentGoals.message as string}</p>
        )}
      </div>

      {/* Risk Tolerance */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Risk Tolerance
        </label>
        <select
          {...register('riskTolerance')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
        >
          <option value="conservative">Conservative</option>
          <option value="moderate">Moderate</option>
          <option value="aggressive">Aggressive</option>
        </select>
        {errors.riskTolerance && (
          <p className="mt-1 text-sm text-red-600">{errors.riskTolerance.message as string}</p>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => navigate(ROUTES.ONBOARDING.ACCOUNT_DETAILS)}
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