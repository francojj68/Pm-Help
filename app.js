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
            // Preparamos los datos del lead
            const leadData = {
                nombre: fullName,
                empresa: company,
                telefono: phone,
                requerimiento: requirement,
                fecha: new Date().toLocaleString()
            };

            let sheetsSuccess = false;
            let firestoreSuccess = false;

            // 1. Envío a Google Sheets (garantizado y verificado)
            try {
                const sheetsResult = await enviarAGoogleSheets(leadData);
                if (sheetsResult && sheetsResult.success) {
                    sheetsSuccess = true;
                    console.log("Lead guardado en Google Sheets exitosamente.");
                }
            } catch (sheetErr) {
                console.error("Error al enviar a Google Sheets:", sheetErr);
            }

            // 2. Envío a Firebase Firestore (si está configurado y accesible)
            if (db) {
                try {
                    const docRef = await addDoc(collection(db, "leads_pm_help"), {
                        nombre: leadData.nombre,
                        empresa: leadData.empresa,
                        telefono: leadData.telefono,
                        requerimiento: leadData.requerimiento,
                        fecha: serverTimestamp()
                    });
                    firestoreSuccess = true;
                    console.log("Lead guardado en Firebase con ID: ", docRef.id);
                } catch (fsErr) {
                    console.warn("No se pudo escribir en Firestore (posible regla de seguridad):", fsErr);
                }
            }

            // Si se guardó en Sheets o en Firestore, la captura fue exitosa
            if (sheetsSuccess || firestoreSuccess) {
                showFeedback(t("feedback_success"), "success");
                leadForm.reset();
            } else {
                throw new Error("No se pudo registrar el lead en ninguno de los canales.");
            }
        } catch (error) {
            console.error("Error al procesar la solicitud:", error);
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
