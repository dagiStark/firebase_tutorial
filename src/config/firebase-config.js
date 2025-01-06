// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDTs1J7RLpTc8Q4zq65feMS6wkNIp0SMQ",
  authDomain: "expensetracker-3384f.firebaseapp.com",
  projectId: "expensetracker-3384f",
  storageBucket: "expensetracker-3384f.firebasestorage.app",
  messagingSenderId: "998921924699",
  appId: "1:998921924699:web:6a3091fa8e40be9d920f7e",
  measurementId: "G-WHWZFC80EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);