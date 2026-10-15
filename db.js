import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

let dbInstance = null;

// Inicializamos Firebase de manera asíncrona leyendo las variables de Vite.
// En Vite, import.meta.env se reemplaza en tiempo de construcción.
export const initFirebase = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            // Ya que no estamos usando Vite/Node.js localmente, leemos el .env manualmente
            // mediante una petición asíncrona (fetch) para mantener las credenciales fuera del código fuente.
            const response = await fetch('./.env');
            if (!response.ok) throw new Error("No se pudo cargar el archivo .env");
            
            const text = await response.text();
            const env = {};
            
            // Parsear las variables del archivo .env
            text.split('\n').forEach(line => {
                const match = line.match(/^\s*(VITE_FIREBASE_\w+)\s*=\s*"?([^"\r\n]+)"?/);
                if (match) {
                    env[match[1]] = match[2];
                }
            });

            const firebaseConfig = {
                apiKey: env.VITE_FIREBASE_API_KEY,
                authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
                projectId: env.VITE_FIREBASE_PROJECT_ID,
                storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
                messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
                appId: env.VITE_FIREBASE_APP_ID,
                measurementId: env.VITE_FIREBASE_MEASUREMENT_ID
            };

            const app = initializeApp(firebaseConfig);
            dbInstance = getFirestore(app);
            resolve(dbInstance);
        } catch (error) {
            console.error("Error al inicializar Firebase:", error);
            reject(error);
        }
    });
};

export const getDb = () => {
    if (!dbInstance) {
        throw new Error("Base de datos no inicializada. Llama a initFirebase() primero.");
    }
    return dbInstance;
};
