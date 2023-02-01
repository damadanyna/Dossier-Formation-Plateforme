import { createContext } from 'react';
import { AuthContext } from '../@types';

const authContext = createContext<AuthContext>({
  user: null,
  error: null,
  loading: false,
});

export default authContext;
