// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6LzI9oPK7G88qN__EYlPteGmxStEUogQ",
    authDomain: "financial-pathway.firebaseapp.com",
    projectId: "financial-pathway",
    storageBucket: "financial-pathway.appspot.com",
    messagingSenderId: "834646008538",
    appId: "1:834646008538:web:6858eea946c843ddfefbe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;