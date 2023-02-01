import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export interface ProtectedRouteProps {
  children?: JSX.Element;
  redirectTo?: string;
  isAllowed?: boolean;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, redirectTo }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={redirectTo ?? '/signin'} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
