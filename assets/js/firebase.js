// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0-e28luVSsXz0rWf-anPlrd4n_uY-ito",
  authDomain: "copa-real-time.firebaseapp.com",
  projectId: "copa-real-time",
  storageBucket: "copa-real-time.appspot.com",
  messagingSenderId: "451247502926",
  appId: "1:451247502926:web:b299f0b8c385fc36eab51f"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app 