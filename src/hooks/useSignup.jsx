import { useEffect, useState } from 'react';
import { auth, db, storage } from '../firebase/config';
import { useAuthContext } from '../hooks/useAuthContext';

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      // signup in firebase
      const res = await auth.createUserWithEmailAndPassword(email, password);

      // if there is no res at all (ex. connnectivity issues)
      if (!res) {
        throw new Error('Could not complete signup');
      }

      // ref returns a reference for the given path
      // put uploads thumbnail to this reference's location + returns obj
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const upload = await storage.ref(uploadPath).put(thumbnail);
      const uploadURL = await upload.ref.getDownloadURL();

      // add display name to user
      await res.user.updateProfile({ displayName, photoURL: uploadURL });

      // create doc
      await db.collection('users').doc(res.user.uid).set({ displayName, photoURL: uploadURL, online: true });

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
