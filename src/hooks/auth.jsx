import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ROOT, HOME } from "../config/routes";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import isUsernameExists from "../utility/isUsernameExists";

export function useRegister() {
  const [isLoading, setLoading] = useState(false);
  const [userNameError, setUserNameError] = useState();
  const navigate = useNavigate();

  async function register({ username, email, password, redirectTo = HOME }) {
    setLoading(true);

    const usernameExists = await isUsernameExists(username);

    if (usernameExists) {
      setUserNameError("Username Exists");
      setLoading(false);
    } else {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);

        await setDoc(doc(db, "users", res.user.uid), {
          id: res.user.uid,
          username: username.toLowerCase(),
          images: [],
          date: Date.now(),
        });
        navigate(redirectTo);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  }
  return { register, isLoading, userNameError };
}

export function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  async function login({ email, password, redirectTo = HOME }) {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(redirectTo);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }
  return { login, isLoading, error };
}

export function useAuth() {
  const [authUser, authLoading, error] = useAuthState(auth);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const ref = doc(db, "users", authUser.uid);
      const docSnap = await getDoc(ref);
      setUser(docSnap.data());
      setLoading(false);
    }

    if (!authLoading) {
      if (authUser) fetchData();
      else setLoading(false);
    }
  }, [authLoading]);

  return { user, isLoading, error };
}

export function useLogout() {
  const [signOut, isLoading, error] = useSignOut(auth);
  const navigate = useNavigate();

  async function logout() {
    await signOut();
    window.location.reload();
  }

  return { logout, isLoading };
}
