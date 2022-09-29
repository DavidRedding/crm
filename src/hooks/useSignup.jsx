import { useEffect, useState } from 'react';
import { db, storage } from '../firebase/config';
import { useAuthContext } from '../hooks/useAuthContext';

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (displayName, email, password, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      // signup in firebase
      const res = await db.createUserWithEmailAndPassword(email, password);

      // if there is no res at all (ex. connnectivity issues)
      if (!res) {
        throw new Error('Could not complete signup');
      }

      // ref returns a reference for the given path
      // put uploads thumbnail to this reference's location + returns obj
      const upload = await storage.ref(`thumbnails/${res.user.uid}/${thumbnail.name}`).put(thumbnail);
      const uploadURL = await upload.ref.getDownloadURL();

      // add display name to user
      await res.user.updateProfile({ displayName, photoURL: uploadURL });

      // login locally
      dispatch({ type: 'LOGIN', payload: res.user });

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

  // cleanup only runs on un-mount
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
