import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import SignInPage from './pages/SignIn';

const AppRoutes: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<SignInPage />} path="/login" />
      <Route element={<DashboardPage />} path="/dashboard" />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
