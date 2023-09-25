import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6XSev92sXSom7D62FXbQNJ-1zaDj9W5U",
  authDomain: "art-project-31cb3.firebaseapp.com",
  projectId: "art-project-31cb3",
  storageBucket: "art-project-31cb3.appspot.com",
  messagingSenderId: "550983325031",
  appId: "1:550983325031:web:0c4fe09be512f28cd48bc2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
