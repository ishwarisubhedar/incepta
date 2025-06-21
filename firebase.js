// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsiJJ5MkauUHAVX2hQzz6QsmgvqKJ2t_I",
  authDomain: "incepta4skillswap.firebaseapp.com",
  projectId: "incepta4skillswap",
  storageBucket: "incepta4skillswap.firebasestorage.app",
  messagingSenderId: "148884128561",
  appId: "1:148884128561:web:689141f6a7f8da02d72610",
  measurementId: "G-G5R9BML556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
