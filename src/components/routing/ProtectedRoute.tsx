import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import User from '../../models/User';

export interface ProtectedRouteProps {
  children?: JSX.Element;
  redirectTo?: string;
  isAllowed?: (user: User | null) => boolean;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  redirectTo = '/signin',
  isAllowed = (user) => !!user,
}) => {
  const { user } = useAuth();

  if (!isAllowed(user)) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
