import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_nweMk7BcM2FcUC1yLHIm4ql_yGLbM3g",
  authDomain: "lad-store.firebaseapp.com",
  projectId: "lad-store",
  storageBucket: "lad-store.appspot.com",
  messagingSenderId: "1033747874290",
  appId: "1:1033747874290:web:d4c41e2ef580b315d8ab6b",
  measurementId: "G-JJYCSZMC3T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);