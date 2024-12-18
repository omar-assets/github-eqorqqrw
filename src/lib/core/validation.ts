import { z } from 'zod';
import { handleError } from '@/utils/error';

export class ValidationService {
  private schemas: Map<string, z.ZodSchema> = new Map();

  registerSchema(name: string, schema: z.ZodSchema): void {
    this.schemas.set(name, schema);
  }

  async validate<T>(name: string, data: unknown): Promise<T> {
    try {
      const schema = this.schemas.get(name);
      if (!schema) {
        throw new Error(`Schema '${name}' not found`);
      }

      return await schema.parseAsync(data) as T;
    } catch (error) {
      throw handleError(error);
    }
  }

  isValid(name: string, data: unknown): boolean {
    const schema = this.schemas.get(name);
    if (!schema) return false;
    
    return schema.safeParse(data).success;
  }
}

export const validation = new ValidationService();