// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsv_txW0obGImL6c0MQFK5DCW6-QpgC9g",
  authDomain: "itemise-1ee66.firebaseapp.com",
  projectId: "itemise-1ee66",
  storageBucket: "itemise-1ee66.appspot.com",
  messagingSenderId: "316286179980",
  appId: "1:316286179980:web:fbaf12d95dfe1001a779a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db =getFirestore(app);