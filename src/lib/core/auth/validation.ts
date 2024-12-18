import { z } from 'zod';
import { AuthInput } from './types';

const authSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters').optional()
});

export const validateAuthInput = async (input: AuthInput): Promise<void> => {
  await authSchema.parseAsync(input);
};