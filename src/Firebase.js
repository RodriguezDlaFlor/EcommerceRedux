import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8GmCZLtJpoSNcCCU_DACh1cA1teTcP-k",
  authDomain: "ecommercereact98.firebaseapp.com",
  projectId: "ecommercereact98",
  storageBucket: "ecommercereact98.appspot.com",
  messagingSenderId: "1053293974794",
  appId: "1:1053293974794:web:61fb058ed663cca13696f3",
};

const app = initializeApp(firebaseConfig);
export default app;
