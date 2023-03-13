// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYc2wl0ElNeCd7s2HTwAAzxdX1ObIBYfA",
  authDomain: "bruin-subleasing.firebaseapp.com",
  projectId: "bruin-subleasing",
  storageBucket: "bruin-subleasing.appspot.com",
  messagingSenderId: "936967157902",
  appId: "1:936967157902:web:80c1373b78c31f4e1df1df",
  measurementId: "G-35DDV6E9GL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db, auth, provider};
