import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
 
// Your web app's Firebase configuration
const firebaseConfig = {
 //tuinformación de tu app en firebase
    apiKey: "AIzaSyDU1mLI5D9ob0p0WrHbiNWLJgkXRNoOhUA",
    authDomain: "react-app-udemy-69b64.firebaseapp.com",
    projectId: "react-app-udemy-69b64",
    storageBucket: "react-app-udemy-69b64.appspot.com",
    messagingSenderId: "263709299132",
    appId: "1:263709299132:web:f10a08a3fff82314585bb9"
};
 
// Initialize Firebase
initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}