import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzHXpqRsnYGBoFNjvd3QgGXFoZ-pbhYqI",
  authDomain: "rio-web-87bf5.firebaseapp.com",
  projectId: "rio-web-87bf5",
  storageBucket: "rio-web-87bf5.firebasestorage.app",
  messagingSenderId: "87877200847",
  appId: "1:87877200847:web:123c65328b093f309e80ba",
  measurementId: "G-99CP5QXB68"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

const form    = document.getElementById("joinForm");
const message = document.getElementById("message");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const name  = form.name.value.trim();
  const email = form.email.value.trim();

  if (!name || !email) return;

  try {
    await addDoc(
      collection(db, "joinRequests"),
      { name, email, createdAt: serverTimestamp() }
    );
    message.textContent = "Thanks! We'll be in touch soon by email.";
    form.reset();
  } catch (err) {
    console.error(err);
    message.textContent = "Oops! Something went wrong. Please try again later.";
  }
});