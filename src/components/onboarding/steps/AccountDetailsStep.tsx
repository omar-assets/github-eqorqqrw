import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { accountDetailsSchema } from '../validation/schemas';
import { useAuth } from '@/contexts/AuthContext';
import { useOnboarding } from '../context/OnboardingContext';
import { updateUserProfile } from '@/lib/firebase/user';
import { ROUTES } from '@/config/routes';
import { logger } from '@/utils/logger';

function AccountDetailsStep() {
  // Component implementation remains the same
}

export default AccountDetailsStep;