// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth/web-extension";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIGpWy0MH-SVE9wihb1mY-lqDNoBg5taM",
  authDomain: "reach-auth8.firebaseapp.com",
  projectId: "reach-auth8",
  storageBucket: "reach-auth8.firebasestorage.app",
  messagingSenderId: "376194688112",
  appId: "1:376194688112:web:64783fb70943de519400b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider=new GoogleAuthProvider();