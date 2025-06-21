import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase.js";
import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

// Auth Buttons
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

// Sign Up
if (signupBtn) {
  signupBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCred => {
        alert("Sign-up successful!");
        console.log("Signed up:", userCred.user);
      })
      .catch(error => {
        alert(error.message);
        console.error("Sign-up error:", error.message);
      });
  });
}

// Log In
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(userCred => {
        alert("Login successful!");
        console.log("Logged in:", userCred.user);
      })
      .catch(error => {
        alert(error.message);
        console.error("Login error:", error.message);
      });
  });
}

// Log Out
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        alert("Logged out successfully!");
      })
      .catch((error) => console.error("Logout error:", error));
  });
}

// Firestore Test Button
const testBtn = document.getElementById("testBtn");

if (testBtn) {
  testBtn.addEventListener("click", async () => {
    try {
      await addDoc(collection(db, "testCollection"), {
        name: "Disha",
        purpose: "Testing Firebase Integration",
        timestamp: new Date()
      });
      alert("✅ Data sent to Firestore!");
    } catch (error) {
      console.error("❌ Firestore error:", error);
      alert("Firestore write failed.");
    }
  });
}
// app.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your actual Firebase config goes here:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("testBtn").addEventListener("click", async () => {
  try {
    await addDoc(collection(db, "testCollection"), {
      message: "Test write from SkillSwap",
      timestamp: new Date()
    });
    alert("✅ Successfully written to Firestore!");
  } catch (e) {
    console.error("❌ Error writing to Firestore:", e);
    alert("Failed to write. See console.");
  }
});
