import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

let dbInstance = null;

const firebaseConfig = {
    apiKey: "AIzaSyA_DiwAMS3vG1kQ3RDs9PUvXwsCqesejvQ",
    authDomain: "pm-help68.firebaseapp.com",
    projectId: "pm-help68",
    storageBucket: "pm-help68.firebasestorage.app",
    messagingSenderId: "544536120370",
    appId: "1:544536120370:web:2b452dab8d8e562820802b",
    measurementId: "G-TZ4ZFBR5DT"
};

export const initFirebase = async () => {
    try {
        const app = initializeApp(firebaseConfig);
        dbInstance = getFirestore(app);
        return dbInstance;
    } catch (error) {
        console.warn("No se pudo inicializar Firebase:", error);
        return null;
    }
};

export const getDb = () => {
    return dbInstance;
};
