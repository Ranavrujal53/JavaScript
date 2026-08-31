// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDURBm-uSBIt_tBaLHLGxguPivl8O08xsc",
  authDomain: "fir-reactdemo-dc416.firebaseapp.com",
  projectId: "fir-reactdemo-dc416",
  storageBucket: "fir-reactdemo-dc416.firebasestorage.app",
  messagingSenderId: "1037162118890",
  appId: "1:1037162118890:web:46719fb56487f79adfe193",
  measurementId: "G-LLTEF7NC6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;