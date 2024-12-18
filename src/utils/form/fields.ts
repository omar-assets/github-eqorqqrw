export interface FieldConfig {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  helperText?: string;
  validation?: (value: any) => string | null;
}

export const getFieldError = (
  fieldName: string,
  errors: Record<string, string>
): string | undefined => {
  return errors[fieldName];
};

export const getFieldValue = <T>(
  fieldName: string,
  values: Record<string, T>
): T | undefined => {
  return values[fieldName];
};

export const setFieldValue = (
  fieldName: string,
  value: any,
  setValues: (values: Record<string, any>) => void
): void => {
  setValues(prev => ({ ...prev, [fieldName]: value }));
};