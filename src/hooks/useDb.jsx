import { useReducer, useState } from 'react';
import { db, timestamp } from '../firebase/config';

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = () => {
  switch (action.type) {
    case 'IS_PENDING':
      return { document: null, isPending: true, error: null, success: null };

    case 'ADDED_DOCUMENT':
      return { document: action.payload, isPending: false, error: null, success: true };

    case 'DELETED_DOCUMENT':
      return { document: null, isPending: false, error: null, success: true };

    case 'ERROR':
      return { document: null, isPending: false, error: action.payload, success: false };

    default:
      return state;
  }
};

const useDb = (collection) => {
  const [res, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // reference to the collection
  const ref = db.collection(collection);

  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add a doc
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });
    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createdAt });
      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument });
    } catch (err) {
      console.log(err);
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  };

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' });
    try {
      await ref.doc(id).delete();
      dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' });
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete' });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, res };
};

export default useDb;
