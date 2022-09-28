import { createContext, useEffect } from 'react';
import { db } from '../firebase/config';

export const AuthContext = createContext();

// exporting Justin Case we use it in another file
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

// this component wraps around entire app
export const AuthContextProvider = () => {
  const [state, dispatch] = useReducer(authReducer, { user: null, authIsReady: false });

  useEffect(() => {
    const unsub = db.onAuthStateChanged((user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
      unsub();
    });
  }, []);

  console.log('AuthContext state:', state.user);
  console.log('AuthState:', state.authIsReady);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
