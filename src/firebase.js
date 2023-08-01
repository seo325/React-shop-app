// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRCumBsRh_oKdGgNyjJwO50EnL-o6Akbw",
  authDomain: "react-shop-app-c96e4.firebaseapp.com",
  projectId: "react-shop-app-c96e4",
  storageBucket: "react-shop-app-c96e4.appspot.com",
  messagingSenderId: "927464131280",
  appId: "1:927464131280:web:60af92db1f38c7b188acd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app