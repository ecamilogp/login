// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA9cF6nkP1BfcTdML0219aU-60I_flqh58",
  authDomain: "login-89551.firebaseapp.com",
  projectId: "login-89551",
  storageBucket: "login-89551.appspot.com",
  messagingSenderId: "339400543796",
  appId: "1:339400543796:web:9de0f288312e89fcc28461",
  measurementId: "G-PEYWX8FPW7",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Asegúrate de pasar `app` aquí

export { auth }; // Exporta la instancia de autenticación
