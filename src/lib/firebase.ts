import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOiT9psRHf4xNr8MUPIyABTphGbuRKTnk",
  authDomain: "onotes-b2b42.firebaseapp.com",
  projectId: "onotes-b2b42",
  storageBucket: "onotes-b2b42.appspot.com",
  messagingSenderId: "310567607327",
  appId: "1:310567607327:web:3423a8bae9afbed9f7092a",
  measurementId: "G-0S6M14LQ4G"
};


// Initialize Firebase
const app = getApps().length === 0 ?  initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
