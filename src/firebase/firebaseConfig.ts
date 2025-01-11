// Import the functions you need from the SDKs you need

import { getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHfVdvxBqensiuvO4QLpf12aISKeQWDTc",
  authDomain: "bodagabrieljoyce.firebaseapp.com",
  projectId: "bodagabrieljoyce",
  storageBucket: "bodagabrieljoyce.firebasestorage.app",
  messagingSenderId: "792575166999",
  appId: "1:792575166999:web:19a23ae609ac46e9972a52",
  measurementId: "G-DXW787XCKQ",
};

// Initialize Firebase
export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(firebaseApp);

export default firebaseApp;
