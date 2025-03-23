// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC93EPQNqAuHdUhjQT3I1TdQhPuYSzXVY4",
  authDomain: "skill-matrix-c359d.firebaseapp.com",
  projectId: "skill-matrix-c359d",
  storageBucket: "skill-matrix-c359d.firebasestorage.app",
  messagingSenderId: "698673712742",
  appId: "1:698673712742:web:158f154d3f981e834ba7a7",
  measurementId: "G-2BY5EYRLSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
