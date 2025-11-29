import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyDD6lh6FVHDXQE4K9ZvFxC4YAypLoirGTY",
  authDomain: "ezen-test.firebaseapp.com",
  projectId: "ezen-test",
  storageBucket: "ezen-test.firebasestorage.app",
  messagingSenderId: "980118669217",
  appId: "1:980118669217:web:b7a0a9c7680a2ea8da2de0",
  measurementId: "G-FK9Z03NNFV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
