// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB72VLlVjYbmbgQVbcqiMW10MT3l53KssY',
  authDomain: 'projet-formation-d6cdf.firebaseapp.com',
  databaseURL:
    'https://projet-formation-d6cdf-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'projet-formation-d6cdf',
  storageBucket: 'projet-formation-d6cdf.appspot.com',
  messagingSenderId: '1085188264914',
  appId: '1:1085188264914:web:55675d65bc8aea0c55ae0b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
