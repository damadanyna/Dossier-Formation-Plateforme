import { FC } from 'react';
import { CircularProgress, Container } from '@mui/material';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import ProtectedRoute from './components/routing/ProtectedRoute';
import useAuth from './hooks/useAuth';

import DashboardPage from './pages/admin/Dashboard';
import LandingPage from './pages/Landing';
import SignInPage from './pages/SignIn';
import PublicRoute from './components/routing/PublicRoute';

const AppRoutes: FC = () => {
  const { loading } = useAuth();

  return loading ? (
    <Container
      sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Container>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route
          path="signin"
          element={
            <PublicRoute
              redirectTo={(user) =>
                user.data.role === 'superadmin' ? '/factory' : '/'
              }
            >
              <SignInPage />
            </PublicRoute>
          }
        />
        <Route
          path="factory"
          element={
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
