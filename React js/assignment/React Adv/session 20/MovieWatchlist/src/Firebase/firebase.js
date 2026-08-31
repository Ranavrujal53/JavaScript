// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjjBIWR0RrmasL4pmHnr-S4KVBI-RRD6A",
  authDomain: "movielist-9211a.firebaseapp.com",
  projectId: "movielist-9211a",
  storageBucket: "movielist-9211a.firebasestorage.app",
  messagingSenderId: "890452630808",
  appId: "1:890452630808:web:6ae49cd84800788189526d",
  measurementId: "G-F450J8VGBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);