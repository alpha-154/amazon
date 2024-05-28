import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//first, use these command `sudo npm install -g firebase-tools` & then type command `npm install firebase` to install firebase to the project.


const firebaseConfig = {
    apiKey: "AIzaSyDWos3B_EoUob9LRhnjSsZosf2xj8Xi-2c",
    authDomain: "fir-339c4.firebaseapp.com",
    projectId: "fir-339c4",
    storageBucket: "fir-339c4.appspot.com",
    messagingSenderId: "420933412139",
    appId: "1:420933412139:web:3af31fde989ed17fac516e",
    measurementId: "G-QQP97SJKL7"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };