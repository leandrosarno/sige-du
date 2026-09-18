// firebase_config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCpCXxJbD8dPXkT7mcoz4qK8Wjt7WTRwFA",
    authDomain: "sig-edu.firebaseapp.com",
    projectId: "sig-edu",
    storageBucket: "sig-edu.firebasestorage.app",
    messagingSenderId: "233239725278",
    appId: "1:233239725278:web:809b9c42feacd99175ee4f",
    measurementId: "G-E5LLYGW7DN"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa e exporta o Banco de Dados (Firestore)
const db = getFirestore(app);

export { db };
