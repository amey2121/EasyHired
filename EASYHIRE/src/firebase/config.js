import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyDv8DyrUj6QwOw8qxSD1k-_MejVHkJm9p8",
  authDomain: "easyhired-d6b64.firebaseapp.com",
  projectId: "easyhired-d6b64",
  storageBucket: "easyhired-d6b64.appspot.com",
  messagingSenderId: "147650618298",
  appId: "1:147650618298:web:dab5174324b39d02adf383",
  measurementId: "G-T9MGHSMDY0"
};

  //init firebase
  const app = initializeApp(firebaseConfig);

  //init services
  const auth = getAuth();
  const projectFirestore= getFirestore(app)

  export {auth,projectFirestore}