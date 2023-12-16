// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBAM8cgbAITF27hn7u-A3CzkZ70kVXE48c",
  authDomain: "pre-test-425d2.firebaseapp.com",
  databaseURL: "https://pre-test-425d2-default-rtdb.firebaseio.com",
  projectId: "pre-test-425d2",
  storageBucket: "pre-test-425d2.appspot.com",
  messagingSenderId: "84613429819",
  appId: "1:84613429819:web:e71d245a75185f401eba1e",
  measurementId: "G-PZPNKCY2GW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)