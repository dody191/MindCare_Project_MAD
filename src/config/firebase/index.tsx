// Import the functions you need from the SDKs you need
import {initializeApp, getApps} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAdxs7aME2Tx1EVxCPFjf7LNMMW3GEmY_U',
  authDomain: 'mindcare-d940e.firebaseapp.com',
  projectId: 'mindcare-d940e',
  storageBucket: 'mindcare-d940e.appspot.com',
  messagingSenderId: '334034603054',
  appId: '1:334034603054:web:b92ddd4558ae446dfd23bf',
  measurementId: 'G-DY0B3G45FT',
};

// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const analytics = getAnalytics(app);
export default app;
