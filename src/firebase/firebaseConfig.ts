// Import the functions you need from the SDKs you need

import { getApps, initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoiQs8zMEMM7ZqWG-7TWdmgBdiK8WEOmQ",
  authDomain: "leiva-ordonez.firebaseapp.com",
  projectId: "leiva-ordonez",
  storageBucket: "leiva-ordonez.appspot.com",
  messagingSenderId: "1004212350900",
  appId: "1:1004212350900:web:b095fab185272c29258ce1",
  measurementId: "G-WK1BFKBSCF",
};

// Initialize Firebase
export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(firebaseApp);

export default firebaseApp;
