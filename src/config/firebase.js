
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCRQLNhG9WjCh9BYWWLPz7tb12XxKtkom8",
  authDomain: "tiktok---jornada-c5e87.firebaseapp.com",
  projectId: "tiktok---jornada-c5e87",
  storageBucket: "tiktok---jornada-c5e87.appspot.com",
  messagingSenderId: "247290219371",
  appId: "1:247290219371:web:87ddcb7360029b9e391a2e"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;