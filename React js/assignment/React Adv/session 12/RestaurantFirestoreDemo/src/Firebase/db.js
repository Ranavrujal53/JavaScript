// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqYfT8Xeg0kge2ml3_95t4PNmm7uRgX94",
  authDomain: "restaurantfirestore-a1772.firebaseapp.com",
  projectId: "restaurantfirestore-a1772",
  storageBucket: "restaurantfirestore-a1772.firebasestorage.app",
  messagingSenderId: "1016437907687",
  appId: "1:1016437907687:web:0f3d20b93976a2edf80242",
  measurementId: "G-B157D5GMXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;