// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoN8q4i8Y32slKgAEH7T2NEFp-qO3OG_s",
  authDomain: "assignment-11-client-sid-68c66.firebaseapp.com",
  projectId: "assignment-11-client-sid-68c66",
  storageBucket: "assignment-11-client-sid-68c66.firebasestorage.app",
  messagingSenderId: "718440329891",
  appId: "1:718440329891:web:daecdc3fa944e42c46c516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;