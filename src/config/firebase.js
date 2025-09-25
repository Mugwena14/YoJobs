import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNdmBDxlBcl3FvjdC-XeuTO4a5c-m61fg",
    authDomain: "market-place-c57fa.firebaseapp.com",
    projectId: "market-place-c57fa",
    storageBucket: "market-place-c57fa.firebasestorage.app",
    messagingSenderId: "3452203034",
    appId: "1:3452203034:web:78f836fab4797e7c5421a3",
    measurementId: "G-HECHQJJT6Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);

