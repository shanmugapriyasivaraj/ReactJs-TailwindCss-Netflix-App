// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCvHx55yiTznvSujZ-nIf5eFpy6JH9RGSI",
  authDomain: "netflix-react-78df6.firebaseapp.com",
  projectId: "netflix-react-78df6",
  storageBucket: "netflix-react-78df6.appspot.com",
  messagingSenderId: "503105901000",
  appId: "1:503105901000:web:a911a23885a9e86a78f0fd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
