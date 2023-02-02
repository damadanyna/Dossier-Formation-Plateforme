import React, { useCallback } from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { LoadingButton } from '@mui/lab';
import useAuth from '../hooks/useAuth';

export default function SignIn() {
  const { signInWithEmailAndPassword, signInInProgress } = useAuth();

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = new FormData(event.currentTarget);
      const email = data.get('email') as string;
      const password = data.get('password') as string;

      signInWithEmailAndPassword(email, password);
    },
    [signInWithEmailAndPassword]
  );

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          p: 5,
          borderRadius: 3,
          boxShadow: theme.shadows[5],
          flexDirection: 'column',
          alignItems: 'center',
        })}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Connexion
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adresse email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              py: 1.5,
              textTransform: 'none',
              fontWeight: 'bold',
            }}
            loading={signInInProgress}
          >
            Se connecter
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
}
