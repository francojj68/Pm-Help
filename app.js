import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { initFirebase } from "./db.js";
import { enviarAGoogleSheets } from "./form.js";

// Helper de traducción obtenido del módulo global i18n
const t = (key) => (window.PMHelpI18n ? window.PMHelpI18n.t(key) : key);

let db;

// Inicializamos la base de datos de manera asíncrona
initFirebase().then((database) => {
    db = database;
    console.log("Firebase inicializado y listo en app.js");
}).catch(err => {
    console.error("Error al inicializar Firebase en app.js:", err);
});

// Form submission logic
const leadForm = document.getElementById('leadForm');
const submitBtn = document.getElementById('submitBtn');
const submitSpinner = document.getElementById('submitSpinner');
const formFeedback = document.getElementById('formFeedback');

if (leadForm) {
    leadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value.trim();
        const company = document.getElementById('company').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const requirement = document.getElementById('requirement').value.trim();

        if (!fullName || !company || !phone || !requirement) {
            showFeedback(t("feedback_required"), "error");
            return;
        }

        setLoadingState(true);

        try {
            // Check if db is initialized properly
            if (!db) throw new Error("Base de datos no inicializada. Revisa la configuración de Firebase.");

            // Preparamos los datos del lead
            const leadData = {
                nombre: fullName,
                empresa: company,
                telefono: phone,
                requerimiento: requirement
            };

            // 1. Añadimos el documento a Firebase
            const docRef = await addDoc(collection(db, "leads_pm_help"), {
                ...leadData,
                fecha: serverTimestamp()
            });
            console.log("Lead guardado en Firebase con ID: ", docRef.id);

            // 2. Enviamos los datos a Google Sheets como doble respaldo
            leadData.fecha = new Date().toLocaleString(); // Añadimos fecha en texto para el Sheets
            const sheetsResult = await enviarAGoogleSheets(leadData);
            if(sheetsResult.success) {
                console.log("Lead respaldado en Google Sheets exitosamente.");
            }

            showFeedback(t("feedback_success"), "success");
            leadForm.reset();
        } catch (error) {
            console.error("Error adding document: ", error);
            showFeedback(t("feedback_error"), "error");
        } finally {
            setLoadingState(false);
        }
    });
}

function setLoadingState(isLoading) {
    if (isLoading) {
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
        submitSpinner.classList.remove('hidden');
    } else {
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
        submitSpinner.classList.add('hidden');
    }
}

function showFeedback(message, type) {
    formFeedback.textContent = message;
    formFeedback.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'bg-green-100', 'text-green-700');
    
    if (type === "error") {
        formFeedback.classList.add('bg-red-100', 'text-red-700');
    } else {
        formFeedback.classList.add('bg-green-100', 'text-green-700');
    }
}
