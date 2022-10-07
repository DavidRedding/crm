import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

const useDocument = (collection, id) => {
  const [doc, setDoc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = db.collection(collection).doc(id);

    const unsub = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          setDoc({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError('No such document exists');
        }
      },
      (err) => {
        console.log(err.message);
        setError('failed to get document');
      }
    );

    // unsub on unmount
    return () => unsub();
  }, [collection, id]);

  return { doc, error };
};

export default useDocument;
