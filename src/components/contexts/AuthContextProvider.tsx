import { FC, ReactNode, useEffect, useState } from 'react';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignOut,
} from 'react-firebase-hooks/auth';
import auth from '../../config/auth';
import authContext from '../../contexts/auth';
import User, { UserData } from '../../models/User';

export interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true); // True by default so that the app doesn't render until the user is fetched from firestore
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [firebaseAuthUser, firebaseAuthLoading, firebaseAuthError] =
    useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const [signInWithEmailAndPassword, , signInInProgress] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (!firebaseAuthLoading && !signInInProgress) {
      if (firebaseAuthUser) {
        // Fetch user data from firestore here and set it to the state
        (async () => {
          setLoading(true);
          try {
            let user = await User.getById<User>(firebaseAuthUser.uid);
            if (!user?.exists) {
              // Create the user in firestore
              user = await User.setById<User, UserData>(firebaseAuthUser.uid, {
                username: firebaseAuthUser.email!,
                firstName: firebaseAuthUser.displayName?.split(' ')[0] ?? '',
                lastName: firebaseAuthUser.displayName?.split(' ')[1] ?? '',
                role: 'user',
              });
              setUser(user);
            } else {
              setUser(user);
            }
          } catch (error) {
            setError(error as Error);
          } finally {
            setLoading(false);
          }
        })();
      } else {
        setUser(null);
        setError(firebaseAuthError ?? null);
        setLoading(false);
      }
    }
  }, [
    firebaseAuthError,
    firebaseAuthLoading,
    firebaseAuthUser,
    signInInProgress,
  ]);

  return (
    <authContext.Provider
      value={{
        user,
        loading,
        error,
        signOut,
        signInWithEmailAndPassword,
        signInInProgress,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
