// auth.js
import { db, auth } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

console.log("✅ auth.js loaded");

// Sign-up/Login Elements
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
        alert("✅ Sign-up successful!");
        console.log("Signed up:", userCred.user);
      })
      .catch(err => alert(err.message));
  });
}

// Log In
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(userCred => {
        alert("✅ Login successful!");
        console.log("Logged in:", userCred.user);
      })
      .catch(err => alert(err.message));
  });
}

// Log Out
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        alert("🚪 Logged out");
        window.location.href = "index.html";
      })
      .catch(err => console.error(err));
  });
}

// Firestore Test Button
const testBtn = document.getElementById("testBtn");

if (testBtn) {
  testBtn.addEventListener("click", async () => {
    try {
      await addDoc(collection(db, "testCollection"), {
        name: "Disha",
        purpose: "Testing Firebase Firestore",
        timestamp: new Date()
      });
      alert("✅ Data written to Firestore!");
    } catch (error) {
      console.error("❌ Firestore write failed:", error);
      alert("Failed to write to Firestore");
    }
  });
}

