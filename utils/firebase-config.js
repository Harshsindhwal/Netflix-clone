import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBTY4BPFasFuAgiSpVFmvEfTB_DJK2EdMY",
  authDomain: "react-netflix-clone-e4dce.firebaseapp.com",
  projectId: "react-netflix-clone-e4dce",
  storageBucket: "react-netflix-clone-e4dce.appspot.com",
  messagingSenderId: "191390075041",
  appId: "1:191390075041:web:ef74baec4e64969ec988e0",
  measurementId: "G-T498BDGBJ9"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app); 