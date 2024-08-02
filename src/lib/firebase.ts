import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBOiT9psRHf4xNr8MUPIyABTphGbuRKTnk",
  authDomain: "onotes-b2b42.firebaseapp.com",
  projectId: "onotes-b2b42",
  storageBucket: "onotes-b2b42.appspot.com",
  messagingSenderId: "310567607327",
  appId: "1:310567607327:web:cc0c2ee7c3b37dcff7092a",
  measurementId: "G-184JY1E700"
};

// Initialize Firebase
const app = getApps().length === 0 ?  initializeApp(firebaseConfig) : getApp();

export const analytics = getAnalytics(app);
export const db = getFirestore(app);
