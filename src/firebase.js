
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCamJ-Qt_8e0KF6Ln2142ddbgft8WK-qTE",
    authDomain: "voyawander-b692b.firebaseapp.com",
    databaseURL: "https://voyawander-b692b-default-rtdb.firebaseio.com",
    projectId: "voyawander-b692b",
    storageBucket: "voyawander-b692b.firebasestorage.app",
    messagingSenderId: "646013001616",
    appId: "1:646013001616:web:78acdf28a6f89b0c1d9d15"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, provider };