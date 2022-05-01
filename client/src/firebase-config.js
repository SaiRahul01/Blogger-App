// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIaYVDkg-X1dbwohcVs5tlwRxPXdhKRuI",
  authDomain: "bloggerapp-f7b2e.firebaseapp.com",
  projectId: "bloggerapp-f7b2e",
  storageBucket: "bloggerapp-f7b2e.appspot.com",
  messagingSenderId: "862718153131",
  appId: "1:862718153131:web:6f438934e48d217d9c82ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()
