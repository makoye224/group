import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHxhPCjbs9PtN-pAcTz2qH6LyyZu1njZQ",
  authDomain: "ugroup-ffd1a.firebaseapp.com",
  projectId: "ugroup-ffd1a",
  storageBucket: "ugroup-ffd1a.appspot.com",
  messagingSenderId: "1099031249787",
  appId: "1:1099031249787:web:6a89c717156ed05506f3de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
export { auth }; // Exporting the initialized auth instance
