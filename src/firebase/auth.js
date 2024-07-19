import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgaUDxbBwqmE9wxTtoIf8T7M4eHWD7fRo",
  authDomain: "semanal-crud.firebaseapp.com",
  projectId: "semanal-crud",
  storageBucket: "semanal-crud.appspot.com",
  messagingSenderId: "448213218946",
  appId: "1:448213218946:web:2c9e1b99bc8eec7096269b"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app)