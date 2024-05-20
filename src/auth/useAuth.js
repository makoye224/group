import { useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import AuthContext from "./context";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

const universities = [
  { key: '1', value: 'University of Dar es Salaam (UDSM)' },
  { key: '2', value: 'Ardhi University (ARU)' },
  { key: '3', value: 'Mzumbe University (MU)' },
  { key: '4', value: 'Sokoine University of Agriculture (SUA)' },
  { key: '5', value: 'The Open University of Tanzania (OUT)' },
  { key: '6', value: 'Hubert Kairuki Memorial University (HKMU)' },
  { key: '7', value: 'St. Augustine University of Tanzania (SAUT)' },
  { key: '8', value: 'University of Dodoma (UDOM)' },
  { key: '9', value: 'State University of Zanzibar (SUZA)' },
  { key: '10', value: 'Muhimbili University of Health and Allied Sciences (MUHAS)' },
  { key: '11', value: 'Nelson Mandela African Institute of Science and Technology (NM-AIST)' }
];

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  // Function to log in using Firebase
  const logIn = async (email, password) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredentials.user);
      console.log("user now ", user);
    } catch (error) {
      let errorMessage = "Error logging in.";
      if (error.code === 'auth/user-not-found') {
        errorMessage = "No user found with this email.";
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = "Invalid password.";
      } else if (error.code === 'auth/invalid-credential') {
        errorMessage = "Invalid credentials.";
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = "Too many attempts. Please try again later.";
      } else {
        errorMessage = "Server error. Please try again later.";
      }
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  };
  

  // Function to register a new user using Firebase
  const register = async (userInfo) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);
      setUser(userCredentials.user);
      console.log("user now ", user);
      await updateProfile(userCredentials.user, {
        displayName: `${userInfo.first_name} ${userInfo.last_name}`
      });
  
      const userDocRef = doc(db, 'users', userCredentials.user.uid);
      const uni = universities.find(u => u.key === userInfo.university)?.value || '';
  
      await setDoc(userDocRef, {
        universityName: uni,
        fullName: `${userInfo.first_name} ${userInfo.last_name}`,
        uid: userCredentials.user.uid,
      });
    } catch (error) {
      let errorMessage = "Error registering user.";
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = "The email address is already in use by another account.";
      }
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  };

  // Function to log out using Firebase
  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log("Error logging out:", error);
      throw error;
    }
  };

  return { user, logIn, register, logOut };
};

export default useAuth;
