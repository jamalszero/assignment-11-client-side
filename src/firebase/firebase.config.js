// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD_QoClzZm79dj_diZlMWqBloSnvIuPYU",
  authDomain: "e-school-27527.firebaseapp.com",
  projectId: "e-school-27527",
  storageBucket: "e-school-27527.appspot.com",
  messagingSenderId: "1068546232453",
  appId: "1:1068546232453:web:c65e293dedb8acf25059ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
