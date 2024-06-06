// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_Google_API_KEY,
  authDomain: "aadi-estate.firebaseapp.com",
  projectId: "aadi-estate",
  storageBucket: "aadi-estate.appspot.com",
  messagingSenderId: "935565624943",
  appId: "1:935565624943:web:cb5834d69ce74e8dc1ef9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
