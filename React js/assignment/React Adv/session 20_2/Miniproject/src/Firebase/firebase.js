// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzsJLpXPFiv4vBHVPEzQTMqphH-L0FnCE",
  authDomain: "minipro-cc1ac.firebaseapp.com",
  projectId: "minipro-cc1ac",
  storageBucket: "minipro-cc1ac.firebasestorage.app",
  messagingSenderId: "997020302462",
  appId: "1:997020302462:web:1fd585fa1eb9ca233cac2f",
  measurementId: "G-F0R5K5B99M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
export { app, db };