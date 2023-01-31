import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../config/auth';

export interface ProtectedRouteProps {
  children?: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
