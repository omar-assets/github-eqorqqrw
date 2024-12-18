import { User } from 'firebase/auth';

export interface AuthError {
  code: string;
  message: string;
}

export interface AuthResponse {
  user: User;
}

export interface AuthInput {
  email: string;
  password: string;
  fullName?: string;
}