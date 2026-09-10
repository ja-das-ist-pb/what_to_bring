// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA88GRmZyQ6NCfVQ8tV9Ane5Coz96iSATA",
  authDomain: "whattobring-73e41.firebaseapp.com",
  projectId: "whattobring-73e41",
  storageBucket: "whattobring-73e41.firebasestorage.app",
  messagingSenderId: "1092527409085",
  appId: "1:1092527409085:web:9e57a63c2d6767d1fa34d4",
  measurementId: "G-0NK50QK87P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)