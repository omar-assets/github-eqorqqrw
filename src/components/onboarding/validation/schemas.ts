import { z } from 'zod';

export const accountDetailsSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
});

export const investorTypeSchema = z.object({
  investorType: z.enum(['individual', 'institutional']),
  investmentGoals: z.array(z.string()).min(1, 'Select at least one investment goal'),
  riskTolerance: z.enum(['conservative', 'moderate', 'aggressive'])
});

export const personalInfoSchema = z.object({
  dateOfBirth: z.string(),
  occupation: z.string().min(2, 'Occupation is required'),
  address: z.object({
    street: z.string().min(5, 'Street address is required'),
    city: z.string().min(2, 'City is required'),
    state: z.string().min(2, 'State is required'),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code')
  })
});