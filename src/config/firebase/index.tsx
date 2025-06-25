// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCS3-GgVXLYJ7lw6Y1AgZBT-Su2JbbRI5g',
  authDomain: 'mtdemosummer2025.firebaseapp.com',
  projectId: 'mtdemosummer2025',
  storageBucket: 'mtdemosummer2025.firebasestorage.app',
  messagingSenderId: '374250257604',
  appId: '1:374250257604:web:1937864ec1e942ceaa1d91',
  databaseURL: 'https://mindcareprojectmad2025-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
