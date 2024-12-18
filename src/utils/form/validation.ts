import { z } from 'zod';

export const createFormSchema = <T extends z.ZodRawShape>(schema: T) => {
  return z.object(schema).strict();
};

export const validateField = (
  value: unknown,
  schema: z.ZodType<any>
): string | null => {
  try {
    schema.parse(value);
    return null;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.errors[0]?.message || 'Invalid value';
    }
    return 'Validation failed';
  }
};

export const formatValidationError = (error: unknown): string => {
  if (error instanceof z.ZodError) {
    return error.errors.map(err => err.message).join(', ');
  }
  return 'An error occurred during validation';
};