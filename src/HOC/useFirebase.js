import {
  getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
  const [loggedUser, setUser] = useState({});
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { user } = result;
        console.log('.then ~ user', user);
        setUser(user);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // watching user behavior
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // if user logged out
        setUser({});
      }
    });

    return () => unsubscribe;
  }, [auth]);

  return {
    user: loggedUser,
    authError,
    isLoading,
    signWithGoogle
  };
};

export default useFirebase;
