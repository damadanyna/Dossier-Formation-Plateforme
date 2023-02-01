import { UserData } from '../models/User';

export type AuthContext = {
  user: UserData | null;
  loading: boolean;
  error: Error | null;
};
