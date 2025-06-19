// auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";

// Connect to HTML elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");

// Sign Up Logic
signupBtn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCred => {
      console.log("Signed up:", userCred.user);
      alert("Sign-up successful!");
      // Optional: Redirect to dashboard
      // window.location.href = "dashboard.html";
    })
    .catch(error => {
      console.error("Sign-up error:", error.message);
      alert(error.message);
    });
});

// Log In Logic
loginBtn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCred => {
      console.log("Logged in:", userCred.user);
      alert("Login successful!");
      // Optional: Redirect to dashboard
      // window.location.href = "dashboard.html";
    })
    .catch(error => {
      console.error("Login error:", error.message);
      alert(error.message);
    });
});
import { signOut } from "firebase/auth";

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully!");
      window.location.href = "index.html"; // Or wherever you want
    })
    .catch((error) => console.error("Logout error:", error));
});

