import { createContext } from 'react';
import { AuthContext } from '../@types';

const authContext = createContext<AuthContext>({
  user: null,
  error: null,
  loading: false,
  signOut: () => Promise.reject('Method not implemented'),
  signInWithEmailAndPassword: () => Promise.reject('Method not implemented'),
  signInInProgress: false,
});

export default authContext;
