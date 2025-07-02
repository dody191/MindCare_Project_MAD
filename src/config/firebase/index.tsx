// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdxs7aME2Tx1EVxCPFjf7LNMMW3GEmY_U",
  authDomain: "mindcare-d940e.firebaseapp.com",
  projectId: "mindcare-d940e",
  storageBucket: "mindcare-d940e.firebasestorage.app",
  messagingSenderId: "334034603054",
  appId: "1:334034603054:web:b92ddd4558ae446dfd23bf",
  measurementId: "G-DY0B3G45FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { app, db };