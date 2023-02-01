import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import AuthContextProvider from './components/contexts/AuthContextProvider';
import AppRoutes from './routes';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <AuthContextProvider>
          <CssBaseline />
          <AppRoutes />
        </AuthContextProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
