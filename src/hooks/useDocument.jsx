import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

const useDocument = (collection, id) => {
  const [doc, setDoc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = db.collection(collection).doc(id);

    const unsub = ref.onSnapshot(
      (snapshot) => {
        setDoc({ ...snapshot.data(), id: snapshot.id });
        setError(null);
      },
      (error) => {
        console.log(error.message);
        setError(`failed to load document`);
      }
    );

    return () => unsub();
  }, [collection, id]);

  return { doc, error };
};

export default useDocument;
