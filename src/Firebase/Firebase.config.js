// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBaCMOSvz4TNFvm4uBveWVyHYbxvTIMjw",
  authDomain: "warmpaws-pet-care-54b21.firebaseapp.com",
  projectId: "warmpaws-pet-care-54b21",
  storageBucket: "warmpaws-pet-care-54b21.firebasestorage.app",
  messagingSenderId: "838236500172",
  appId: "1:838236500172:web:c62454d2b3438019d4d269"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;