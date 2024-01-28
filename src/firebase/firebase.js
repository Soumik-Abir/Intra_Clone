// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAs9Nyqt8SldlqJnQOzJOhhSjTHSEvEQGs",
  authDomain: "insta-clone-f3dc1.firebaseapp.com",
  projectId: "insta-clone-f3dc1",
  storageBucket: "insta-clone-f3dc1.appspot.com",
  messagingSenderId: "275248418781",
  appId: "1:275248418781:web:7e4a69756950a3632eb034",
  measurementId: "G-41G9T9TW1V"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };