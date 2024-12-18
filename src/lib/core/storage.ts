import { encryptData, decryptData } from '@/utils/security';

class StorageService {
  private prefix: string;

  constructor(prefix: string = 'brix_') {
    this.prefix = prefix;
  }

  private getKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  async setItem(key: string, value: any, encrypt: boolean = false): Promise<void> {
    const storageKey = this.getKey(key);
    const stringValue = JSON.stringify(value);
    
    try {
      const finalValue = encrypt 
        ? await encryptData(stringValue)
        : stringValue;
        
      localStorage.setItem(storageKey, finalValue);
    } catch (error) {
      console.error('Storage error:', error);
    }
  }

  async getItem<T>(key: string, encrypt: boolean = false): Promise<T | null> {
    const storageKey = this.getKey(key);
    const value = localStorage.getItem(storageKey);
    
    if (!value) return null;
    
    try {
      const decryptedValue = encrypt 
        ? await decryptData(value)
        : value;
        
      return JSON.parse(decryptedValue);
    } catch (error) {
      console.error('Storage error:', error);
      return null;
    }
  }

  removeItem(key: string): void {
    const storageKey = this.getKey(key);
    localStorage.removeItem(storageKey);
  }

  clear(): void {
    Object.keys(localStorage)
      .filter(key => key.startsWith(this.prefix))
      .forEach(key => localStorage.removeItem(key));
  }
}

export const storage = new StorageService();