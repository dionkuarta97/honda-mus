// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyCcys3xCnuc26i2xAp1NIYMIrILwVjRAGU",
   authDomain: "mus-honda.firebaseapp.com",
   projectId: "mus-honda",
   storageBucket: "mus-honda.appspot.com",
   messagingSenderId: "656509863857",
   appId: "1:656509863857:web:cc210e62cfac89e8c51f90",
   measurementId: "G-Y56HBYYKMB",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default db;
