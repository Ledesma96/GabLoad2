// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjNk0OoGhP2SqD2-FNI8JqyEtFKa2OzUw",
  authDomain: "gabload-78142.firebaseapp.com",
  projectId: "gabload-78142",
  storageBucket: "gabload-78142.appspot.com",
  messagingSenderId: "727817919081",
  appId: "1:727817919081:web:96142aa97d721eee78a0f8",
  measurementId: "G-1LFW1QRPS1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export default {firebaseApp};
