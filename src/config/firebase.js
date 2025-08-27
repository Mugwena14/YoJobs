// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNKJhIIbsGwy6_e9v2Vws_y4XyKsURDu0",
    authDomain: "yojobs-a6f38.firebaseapp.com",
    projectId: "yojobs-a6f38",
    storageBucket: "yojobs-a6f38.firebasestorage.app",
    messagingSenderId: "130762713233",
    appId: "1:130762713233:web:28299375b894290d77b730",
    measurementId: "G-0RC96NR8GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);