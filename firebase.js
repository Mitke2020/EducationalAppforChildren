// Import Firebase core functions
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ No Analytics!

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Yzni9OObGwGN47GaIUGCRD--LPTvIo8",
  authDomain: "educational-app-for-children.firebaseapp.com",
  projectId: "educational-app-for-children",
  storageBucket: "educational-app-for-children.firebasestorage.app",
  messagingSenderId: "70668568505",
  appId: "1:70668568505:web:3e7204bdc2de22db221868",
  measurementId: "G-MXKLLJXXSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore Database
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword };
