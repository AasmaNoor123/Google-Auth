  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyA_CzFeK7EpbHHcmDlGGzdGnCyvXDvEWgI",
    authDomain: "signup-bcfda.firebaseapp.com",
    projectId: "signup-bcfda",
    storageBucket: "signup-bcfda.firebasestorage.app",
    messagingSenderId: "800415565042",
    appId: "1:800415565042:web:c58fcf7883894d44b07c6b",
    measurementId: "G-CF4EJ955JP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

//Sign Up Form Code :

  document.getElementById('signup-btn')?.addEventListener('click', (e)=>{
    e.preventDefault(); //remove unwanted reload pg
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
        alert("Sign Up Successful!!👍");
        window.location.href = "welcome.html";
    })
    .catch((error)=>{
        alert(error.message);
    })
  })

//Login Form Code:

document.getElementById('login-btn')?.addEventListener('click',(e)=>{
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
        alert('Login Sucessfully!!👍')
    })
.catch((error)=>{
    alert(error.message);
})
})

// // Continue with Google

document.getElementById('google-btn')?.addEventListener('click', (e)=>{
    signInWithPopup(auth, provider)
    .then(()=>{
        alert('Login Sucessfully!!👍');
        window.location.href=('welcom.html');
    })
    .then(() => {
        alert("Login Successful!");
        window.location.href = "welcome.html";
        })
        .catch((error) => {
        alert(error.message);
        }); 
});

// Logout
document.getElementById("logout-btn")?.addEventListener("click", () => {
    signOut(auth)
    .then(() => {
    alert("Logged Out Successfully!");
    window.location.href = "index.html";
    })
    .catch((error) => {
    alert(error.message);
    });
    });
    
// Show User Email on Welcome Page

onAuthStateChanged(auth, (user) => {
    if (user && window.location.pathname.includes("welcome.html")) {
    document.getElementById("user-email").textContent = user.email;
    } else if (!user && window.location.pathname.includes("welcome.html")) {
    window.location.href = "index.html";
    }
    });

