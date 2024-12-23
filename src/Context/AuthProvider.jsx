import { useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.init";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createRegisterUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createSignInUser = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password);

  }

  const authInfo = {
    user,
    loading,
    createRegisterUser,
    createSignInUser,
    // createSignOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
