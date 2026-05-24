import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVEzbj4604QwaC0dwprD7FZ4_ZJmxPjBk",
  authDomain: "scolorax.firebaseapp.com",
  projectId: "scolorax",
  storageBucket: "scolorax.firebasestorage.app",
  messagingSenderId: "972926101555",
  appId: "1:972926101555:web:6a8a9b90d81b8ec162db46",
  measurementId: "G-FMN12FYG84"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider =
  new GoogleAuthProvider();