
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7VdBYd8xx65ECKTAOHrxDZqzk_pGj1QA",
  authDomain: "proyectoo4.firebaseapp.com",
  projectId: "proyectoo4",
  storageBucket: "proyectoo4.appspot.com",
  messagingSenderId: "934116570269",
  appId: "1:934116570269:web:7f13a732c97bd976e9d074",
  measurementId: "G-HEPXCZGJK1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
