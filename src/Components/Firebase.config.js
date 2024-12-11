// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqGY6yZ53HkY20eMpoRf5XJA9duJCCZNU",
  authDomain: "hirelink-f50b5.firebaseapp.com",
  projectId: "hirelink-f50b5",
  storageBucket: "hirelink-f50b5.firebasestorage.app",
  messagingSenderId: "444241687667",
  appId: "1:444241687667:web:c9e9277b4897f5b41de606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);