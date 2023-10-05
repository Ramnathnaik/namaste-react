// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA55D4riFghjVbB62wl_-_Dezz0LpeUxAc",
  authDomain: "netflixgpt-2bd92.firebaseapp.com",
  projectId: "netflixgpt-2bd92",
  storageBucket: "netflixgpt-2bd92.appspot.com",
  messagingSenderId: "177909591428",
  appId: "1:177909591428:web:b2ba5b5a1622c6b57181d1",
  measurementId: "G-NGYE946507",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
