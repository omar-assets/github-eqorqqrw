import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { updateUserProfile } from '@/lib/firebase/user';
import { ROUTES } from '@/utils/constants';
import { logger } from '@/utils/logger';
import { Toast } from '@/components/ui/Toast';
import { ReviewSection } from '../review/ReviewSection';
import { ReviewField } from '../review/ReviewField';
import { Shield, User, Building2, MapPin } from 'lucide-react';

export function ReviewStep({ onComplete }: ReviewStepProps) {
  const navigate = useNavigate();
  const { user, userProfile, refreshUserProfile } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  const handleComplete = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      setError(null);
      
      await updateUserProfile(user.uid, {
        profileCompletionStatus: 'complete',
        onboardingStep: undefined,
        completedAt: new Date(),
        lastUpdatedAt: new Date()
      });
      
      await refreshUserProfile();
      setSuccess(true);
      
      logger.info('Onboarding completed successfully');
      
      // Call onComplete callback from guard
      onComplete?.();
      
      // Redirect to dashboard after a brief delay
      setTimeout(() => {
        navigate(ROUTES.DASHBOARD);
      }, 1500);
    } catch (error) {
      const message = 'Failed to complete onboarding. Please try again.';
      logger.error('Error completing onboarding:', error);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (!userProfile) return null;

  const { investorProfile, personalInfo } = userProfile;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Review Your Information
        </h2>
        <p className="text-gray-600">
          Please review your information before completing the onboarding process. 
          You can go back to any section to make changes.
        </p>
      </div>

      {/* Account Details */}
      <ReviewSection 
        icon={User}
        title="Account Details"
        editRoute={ROUTES.ONBOARDING.ACCOUNT_DETAILS}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <ReviewField label="Username" value={userProfile.username} />
          <ReviewField label="Email" value={userProfile.email} />
          <ReviewField label="Phone" value={userProfile.phoneNumber} />
        </div>
      </ReviewSection>

      {/* Investor Profile */}
      <ReviewSection
        icon={Building2}
        title="Investor Profile"
        editRoute={ROUTES.ONBOARDING.INVESTOR_TYPE}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <ReviewField 
            label="Investor Type" 
            value={investorProfile?.investorType} 
            capitalize 
          />
          <ReviewField 
            label="Risk Tolerance" 
            value={investorProfile?.riskTolerance} 
            capitalize 
          />
          <div className="col-span-2">
            <ReviewField
              label="Investment Goals"
              value={investorProfile?.investmentGoals?.join(', ')}
            />
          </div>
        </div>
      </ReviewSection>

      {/* Personal Information */}
      <ReviewSection
        icon={MapPin}
        title="Personal Information"
        editRoute={ROUTES.ONBOARDING.PERSONAL_INFO}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <ReviewField 
            label="Date of Birth" 
            value={personalInfo?.dateOfBirth} 
          />
          <ReviewField 
            label="Occupation" 
            value={personalInfo?.occupation} 
          />
          <div className="col-span-2">
            <ReviewField
              label="Address"
              value={`${personalInfo?.address.street}, ${personalInfo?.address.city}, ${personalInfo?.address.state} ${personalInfo?.address.zipCode}`}
            />
          </div>
        </div>
      </ReviewSection>

      {/* Completion Section */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="bg-primary/5 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                Ready to Complete
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                By completing the setup, you confirm that all provided information is accurate 
                and agree to our terms of service and privacy policy.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate(ROUTES.ONBOARDING.PERSONAL_INFO)}
            className="px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleComplete}
            disabled={loading}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-medium transition-colors disabled:opacity-50"
          >
            {loading ? 'Completing...' : 'Complete Setup'}
          </button>
        </div>
      </div>

      {/* Success/Error Messages */}
      {success && (
        <Toast
          type="success"
          message="Setup completed successfully! Redirecting to dashboard..."
        />
      )}
      
      {error && (
        <Toast
          type="error"
          message={error}
          onClose={() => setError(null)}
        />
      )}
    </div>
  );
}