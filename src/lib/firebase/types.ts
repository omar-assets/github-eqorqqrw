import { User } from 'firebase/auth';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  username?: string;
  phoneNumber?: string;
  emailVerified: boolean;
  createdAt: Date;
  lastLoginAt: Date;
  profileCompletionStatus: 'onboarding' | 'complete' | 'pending';
  onboardingStep?: 'account-details' | 'investor-type' | 'personal-info' | 'review';
  investorProfile?: {
    investorType: 'individual' | 'institutional';
    investmentGoals: string[];
    riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  };
  personalInfo?: {
    dateOfBirth: string;
    occupation: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
  };
}

export interface AuthError {
  code: string;
  message: string;
}

export interface AuthResponse {
  user: User;
  profile: UserProfile | null;
}