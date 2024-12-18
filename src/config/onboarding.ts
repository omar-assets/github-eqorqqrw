export const ONBOARDING_STEPS = [
  {
    id: 'account-details',
    title: 'Account Details',
    description: 'Set up your basic account information'
  },
  {
    id: 'investor-type',
    title: 'Investor Type',
    description: 'Tell us about your investment preferences'
  },
  {
    id: 'personal-info',
    title: 'Personal Information',
    description: 'Provide your personal details'
  },
  {
    id: 'review',
    title: 'Review',
    description: 'Review and confirm your information'
  }
] as const;

export type OnboardingStep = typeof ONBOARDING_STEPS[number]['id'];

export const INVESTOR_TYPES = {
  INDIVIDUAL: 'individual',
  INSTITUTIONAL: 'institutional'
} as const;

export const RISK_TOLERANCE = {
  CONSERVATIVE: 'conservative',
  MODERATE: 'moderate',
  AGGRESSIVE: 'aggressive'
} as const;