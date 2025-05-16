// Popup functions
function openLoginPopup() {
  document.getElementById('login-popup').style.display = 'flex';
}
function closeLoginPopup() {
  document.getElementById('login-popup').style.display = 'none';
}
// Optional: Close popup when clicking outside the content
window.onclick = function(event) {
  var popup = document.getElementById('login-popup');
  if (event.target === popup) {
    popup.style.display = 'none';
  }
}

// Firebase Auth (compat)
const firebaseConfig = {
  apiKey: "AIzaSyAzHXpqRsnYGBoFNjvd3QgGXFoZ-pbhYqI",
  authDomain: "rio-web-87bf5.firebaseapp.com",
  projectId: "rio-web-87bf5",
  storageBucket: "rio-web-87bf5.firebasestorage.app",
  messagingSenderId: "87877200847",
  appId: "1:87877200847:web:123c65328b093f309e80ba",
  measurementId: "G-99CP5QXB68"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login function
async function doLogin(e) {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const pwd   = document.querySelector('#password').value;
  try {
    await auth.signInWithEmailAndPassword(email, pwd);
    window.location = '/protected.html';
  } catch(err) {
    alert('Error: '+err.message);
  }
}


