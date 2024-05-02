// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtXRYkumXw6sQF9Cd6CClll1v9uRl7Pzc",
  authDomain: "react-curso-56025.firebaseapp.com",
  projectId: "react-curso-56025",
  storageBucket: "react-curso-56025.appspot.com",
  messagingSenderId: "9008730557",
  appId: "1:9008730557:web:2ec5e213a43016385c42d4"
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp)
export const FirebaseDB = getFirestore(Firebaseapp)