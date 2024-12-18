import { User } from 'firebase/auth';
import { UserProfile } from '../types';

export interface AuthError {
  code: string;
  message: string;
}

export interface AuthResponse {
  user: User;
  profile: UserProfile;
}