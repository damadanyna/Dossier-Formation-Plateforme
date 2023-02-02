import { UserCredential } from 'firebase/auth';
import User from '../models/User';

export type AuthContext = {
  user: User | null;
  loading: boolean;
  error: Error | null;
  signOut: () => Promise<boolean>;
  signInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential | undefined>;
  signInInProgress: boolean;
};
