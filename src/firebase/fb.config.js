import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDv2jzN9t-mI1oqwwZqzqsEJSfXpGwSRo",
  authDomain: "submission-form-ef692.firebaseapp.com",
  projectId: "submission-form-ef692",
  storageBucket: "submission-form-ef692.appspot.com",
  messagingSenderId: "1074027446041",
  appId: "1:1074027446041:web:675d386506415bfa714f88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
