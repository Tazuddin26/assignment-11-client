import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createRegisterUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createSignInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createSignOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const disconnect = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state Captured", currentUser?.email);
      setLoading(false);
    });
    return () => {
      disconnect();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createRegisterUser,
    createSignInUser,
    googleSignIn,
    createSignOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
