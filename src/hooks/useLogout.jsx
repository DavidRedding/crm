import { useEffect, useState } from 'react';
import { auth, db } from '../firebase/config';
import { useAuthContext } from '../hooks/useAuthContext';

const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    try {
      const { uid } = user;
      await db.collection('users').doc(uid).update({ online: false });

      // signs the user out of firebase
      await auth.signOut();

      // signs the user out of local state
      dispatch({ type: 'LOGOUT' });

      setIsPending(false);

      // update state
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

  // cleanup runs only on un-mount
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, error, isPending };
};

export default useLogout;
