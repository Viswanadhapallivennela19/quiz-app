// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwVUaSZaYJ0JJaaBQodGF4BnzGQHEjFUM",
  authDomain: "quiz-signup-686cf.firebaseapp.com",
  projectId: "quiz-signup-686cf",
  storageBucket: "quiz-signup-686cf.appspot.com",
  messagingSenderId: "74869102665",
  appId: "1:74869102665:web:154d4e3d241ac17536c798",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword };
