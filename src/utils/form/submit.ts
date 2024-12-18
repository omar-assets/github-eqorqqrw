export interface SubmitOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  resetForm?: boolean;
}

export const handleFormSubmit = async (
  values: Record<string, any>,
  submitFn: (values: Record<string, any>) => Promise<void>,
  options: SubmitOptions = {}
): Promise<void> => {
  try {
    await submitFn(values);
    options.onSuccess?.();
  } catch (error) {
    options.onError?.(error as Error);
    throw error;
  }
};

export const resetForm = (
  setValues: (values: Record<string, any>) => void,
  initialValues: Record<string, any>
): void => {
  setValues(initialValues);
};