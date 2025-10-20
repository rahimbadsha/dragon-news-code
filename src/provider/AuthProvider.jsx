import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext"; 
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState();

  const createUser = (email, pass) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, pass)
  }

  const signIn = (email, pass) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, pass)
  }

  const updateUser = (updatedUserData) => {
    return updateProfile(auth.currentUser, updatedUserData);
  }

  const logout = () => {
    return signOut(auth)
  }
  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logout,
    signIn,
    loading,
    setLoading,
    updateUser,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
