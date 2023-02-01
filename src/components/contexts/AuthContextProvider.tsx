import { FC, ReactNode, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../config/auth';
import authContext from '../../contexts/auth';
import User, { UserData } from '../../models/User';

export interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true); // True by default so that the app doesn't render until the user is fetched from firestore
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [firebaseAuthUser, firebaseAuthLoading, firebaseAuthError] =
    useAuthState(auth);

  useEffect(() => {
    if (!firebaseAuthLoading) {
      if (firebaseAuthUser) {
        // Fetch user data from firestore here and set it to the state
        (async () => {
          setLoading(true);
          try {
            let user = await User.getById<User>(firebaseAuthUser.uid);
            if (!user?.exists) {
              // Create the user in firestore
              user = await User.setById<User, UserData>(firebaseAuthUser.uid, {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                username: firebaseAuthUser.email!,
                firstName: firebaseAuthUser.displayName?.split(' ')[0] ?? '',
                lastName: firebaseAuthUser.displayName?.split(' ')[1] ?? '',
                role: 'user',
              });
              setUser(user.data);
            } else {
              setUser(user.data);
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
      }
    }
  }, [firebaseAuthError, firebaseAuthLoading, firebaseAuthUser]);

  return (
    <authContext.Provider value={{ user, loading, error }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
