import React from 'react';
import { Mail } from 'lucide-react';

interface RegistrationSuccessProps {
  onNavigateToLogin: () => void;
}

export function RegistrationSuccess({ onNavigateToLogin }: RegistrationSuccessProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
        <Mail className="h-6 w-6 text-green-600" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Verify your email
      </h3>
      
      <p className="text-gray-600 mb-6">
        We've sent a verification link to your email address. 
        Please verify your email to begin the onboarding process.
      </p>
      
      <button
        onClick={onNavigateToLogin}
        className="text-primary hover:text-primary-medium font-medium"
      >
        Return to sign in
      </button>
    </div>
  );
}