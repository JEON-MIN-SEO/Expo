import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCn8-INaoTsQXUaTxGT1UbwbWRPEfuOgGM",
    authDomain: "chatapp-42470.firebaseapp.com",
    projectId: "chatapp-42470",
    storageBucket: "chatapp-42470.appspot.com",
    messagingSenderId: "340615155529",
    appId: "1:340615155529:web:0d8fbb8afb245e6bb7d498",
    measurementId: "G-39R2BX4Q18"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);