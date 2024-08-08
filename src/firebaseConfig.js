// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDON8jn7IYmzay0AXpGCs1JF33dKHJMxRI",
    authDomain: "proyecto4-f9640.firebaseapp.com",
    projectId: "proyecto4-f9640",
    storageBucket: "proyecto4-f9640.appspot.com",
    messagingSenderId: "1056628898735",
    appId: "1:1056628898735:web:7581ee2132760638728d5a",
    measurementId: "G-11XMR233FN"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
