import { FC } from 'react';
import { CircularProgress, Container } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/routing/ProtectedRoute';
import useAuth from './hooks/useAuth';

import DashboardPage from './pages/admin/Dashboard';
import LandingPage from './pages/Landing';
import SignInPage from './pages/SignIn';

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
        <Route path="signin" element={<SignInPage />} />
        <Route path="factory" element={<ProtectedRoute />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
