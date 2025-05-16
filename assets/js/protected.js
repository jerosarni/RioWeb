import { initializeApp }   from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzHXpqRsnYGBoFNjvd3QgGXFoZ-pbhYqI",
  authDomain: "rio-web-87bf5.firebaseapp.com",
  projectId: "rio-web-87bf5",
  storageBucket: "rio-web-87bf5.firebasestorage.app",
  messagingSenderId: "87877200847",
  appId: "1:87877200847:web:123c65328b093f309e80ba",
  measurementId: "G-99CP5QXB68"
};
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = 'index.html';
  }
});

// Si tienes un botón de logout, descomenta esto:
document.getElementById('logoutBtn')
  .addEventListener('click', () => {
    signOut(auth).then(() => {
      window.location.href = 'index.html';
    });
  });



document.querySelectorAll('.campaign-card').forEach(card => {
  card.addEventListener('click', function() {
    const videoUrl = this.getAttribute('data-video') + "?autoplay=1";
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalVideo');
    iframe.src = videoUrl;
    modal.style.display = 'flex';
  });
});

document.querySelector('.modal .close').onclick = function() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalVideo');
  iframe.src = "";
  modal.style.display = 'none';
};

window.onclick = function(event) {
  const modal = document.getElementById('videoModal');
  if (event.target == modal) {
    const iframe = document.getElementById('modalVideo');
    iframe.src = "";
    modal.style.display = 'none';
  }
};