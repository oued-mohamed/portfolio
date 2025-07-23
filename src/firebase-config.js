// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCekFdD3m-PDhuRkV2pocKtJFw60JcZNMI",
  authDomain: "lastprojet-b0df5.firebaseapp.com",
  projectId: "lastprojet-b0df5",
  storageBucket: "lastprojet-b0df5.firebasestorage.app",
  messagingSenderId: "896243735640",
  appId: "1:896243735640:web:752623ebfbb32f8c91be2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)