import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useLocalStorage } from '@mantine/hooks';

export interface UserType {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export const AuthContext = createContext<{
  user: UserType | null;
  signInWithGoogleHandler: () => Promise<void>;
  signOutHandler: () => Promise<void>;
} | null>({
  user: null,
  signInWithGoogleHandler: async () => {},
  signOutHandler: async () => {}
});

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  //   const [user, setUser] = useLocalStorage<UserType | null>('user', null);
  const storedUser = localStorage.getItem('user');
  const [user, setUser] = useState<UserType | null>(
    storedUser ? JSON.parse(storedUser) : null
  );

  const signInWithGoogleHandler = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const signOutHandler = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const authContextValue = {
    user,
    signInWithGoogleHandler,
    signOutHandler
  };

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //       setUser(authUser);
  //     });

  //     return () => unsubscribe();
  //   }, []);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser as UserType | null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext) as {
    user: UserType | null;
    signInWithGoogleHandler: () => Promise<void>;
    signOutHandler: () => Promise<void>;
  };
}
