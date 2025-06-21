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
