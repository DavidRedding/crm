import { useEffect, useState } from 'react';
import { auth, db } from '../firebase/config';
import { useAuthContext } from '../hooks/useAuthContext';

const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      // signs the user into firebase
      const res = await auth.signInWithEmailAndPassword(email, password);
      console.log(res.user);

      // online status
      await db.collection('users').doc(res.user.uid).update({ online: true });

      // signs the user into local state
      dispatch({ type: 'LOGIN', payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, isPending, error };
};

export default useLogin;
