import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyA35IAY-gm1k8bZ6AtZ1ZPAgQXsxw1Gfuk",
//     authDomain: "ugolok-f04e4.firebaseapp.com",
//     projectId: "ugolok-f04e4",
//     storageBucket: "ugolok-f04e4.appspot.com",
//     messagingSenderId: "1014906543104",
//     appId: "1:1014906543104:web:1f1bc738d722fd150a8ce5",
// };
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC-z9dHaOcU4gWUCy67MP2-2mPXoejDxYA",
    authDomain: "ugolok-tv.firebaseapp.com",
    projectId: "ugolok-tv",
    storageBucket: "ugolok-tv.appspot.com",
    messagingSenderId: "289402268304",
    appId: "1:289402268304:web:b620addaebf1556d13c615",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
