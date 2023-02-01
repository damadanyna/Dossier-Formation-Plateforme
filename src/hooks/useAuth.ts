import { useContext } from 'react';
import authContext from '../contexts/auth';

export default function useAuth() {
  return useContext(authContext);
}
