import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, LogIn, KeyRound, Mail } from 'lucide-react';
import { ROUTES } from '@/utils/constants';

interface AuthErrorProps {
  type: 'duplicate-email' | 'general';
  message: string;
  onDismiss?: () => void;
}

export function AuthError({ type, message, onDismiss }: AuthErrorProps) {
  const navigate = useNavigate();

  if (type === 'duplicate-email') {
    return (
      <div className="mb-6 p-6 bg-amber-50 border border-amber-200 rounded-xl">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-amber-900 mb-1">
                Account Already Exists
              </h3>
              <p className="text-amber-700">
                An account with this email address already exists. Please either:
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => navigate(ROUTES.LOGIN)}
                className="w-full flex items-center gap-2 px-4 py-2 bg-white text-amber-700 rounded-lg hover:bg-amber-50 transition-colors text-sm"
              >
                <LogIn className="h-4 w-4" />
                <span>Sign in with your existing account</span>
              </button>

              <button
                onClick={() => navigate(ROUTES.PASSWORD_RESET)}
                className="w-full flex items-center gap-2 px-4 py-2 bg-white text-amber-700 rounded-lg hover:bg-amber-50 transition-colors text-sm"
              >
                <KeyRound className="h-4 w-4" />
                <span>Reset your password</span>
              </button>

              <button
                onClick={onDismiss}
                className="w-full flex items-center gap-2 px-4 py-2 bg-white text-amber-700 rounded-lg hover:bg-amber-50 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>Use a different email address</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
      <div className="flex gap-3">
        <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
        <div className="text-red-600 text-sm">{message}</div>
      </div>
    </div>
  );
}