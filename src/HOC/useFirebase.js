import {
  getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut
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

  const signWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        const { user } = result;
        setUser(user);
        const redirectUrl = location?.state?.from?.pathname || '/';
        navigate(redirectUrl, { replace: true });
        console.log('.then ~ redirectUrl', redirectUrl);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // watching user behavior
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsLoading(false);
      } else {
        // if user logged out
        setUser({});
      }
    });

    return () => unSubscribe();
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
    .then(() => {
      // signOut successfully
    }).catch((error) => {
      // an error happend
      setAuthError(error.message);
    }).finally(() => setIsLoading(false));
  };

  return {
    user: loggedUser,
    authError,
    isLoading,
    signWithGoogle,
    logOut
  };
};

export default useFirebase;
