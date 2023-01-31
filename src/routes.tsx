import { CircularProgress, Container } from '@mui/material';
import { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import auth from './config/auth';

import DashboardPage from './pages/admin/Dashboard';
import LandingPage from './pages/Landing';
import SignInPage from './pages/SignIn';

const AppRoutes: FC = () => {
  const [user, loadingAuthState] = useAuthState(auth);

  return loadingAuthState ? (
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
        <Route path="signin" element={<SignInPage />} />
        <Route path="factory">
          <Route index element={<Navigate to="dashboard" />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
