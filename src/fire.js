import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA35IAY-gm1k8bZ6AtZ1ZPAgQXsxw1Gfuk",
    authDomain: "ugolok-f04e4.firebaseapp.com",
    projectId: "ugolok-f04e4",
    storageBucket: "ugolok-f04e4.appspot.com",
    messagingSenderId: "1014906543104",
    appId: "1:1014906543104:web:1f1bc738d722fd150a8ce5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
