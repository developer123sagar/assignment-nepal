import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD6LeobI8RC0cvu-VvM74ZGYyunzhS2cWU",
    authDomain: "assignmentnepal-86e0e.firebaseapp.com",
    databaseURL: "https://assignmentnepal-86e0e-default-rtdb.firebaseio.com",
    projectId: "assignmentnepal-86e0e",
    storageBucket: "assignmentnepal-86e0e.appspot.com",
    messagingSenderId: "1041470535313",
    appId: "1:1041470535313:web:66c816f00e5bec7156b130",
    measurementId: "G-WJPGLDX8EZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);