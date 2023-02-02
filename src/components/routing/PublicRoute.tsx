import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import User from '../../models/User';

export interface PublicRouteProps {
  children: JSX.Element;
  redirectTo?: string | ((user: User) => string);
}

const PublicRoute: FC<PublicRouteProps> = ({ children, redirectTo = '/' }) => {
  const { user } = useAuth();

  if (user) {
    return (
      <Navigate
        to={typeof redirectTo === 'string' ? redirectTo : redirectTo(user)}
        replace
      />
    );
  }

  return children;
};

export default PublicRoute;
