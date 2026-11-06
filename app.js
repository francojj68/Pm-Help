import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { initFirebase } from "./db.js?v=3.0";
import { enviarAGoogleSheets } from "./form.js?v=3.0";

// URL de respaldo directa por si el navegador tenía en caché una versión antigua de form.js
const FALLBACK_SHEETS_URL = "https://script.google.com/macros/s/AKfycbz7JBaktGFsfRPsAVIe-z9Ng82w7M5jfmERpxzhwu0YTOtYY04z105SVUv7JKFi0x_whA/exec";

// Helper de traducción obtenido del módulo global i18n
const t = (key) => (window.PMHelpI18n ? window.PMHelpI18n.t(key) : key);

let db = null;

// Inicializamos Firebase de manera asíncrona
const dbReadyPromise = initFirebase().then((database) => {
    db = database;
    if (db) console.log("Firebase inicializado y listo en app.js");
    return db;
}).catch(err => {
    console.warn("Firebase no disponible en este entorno:", err);
    return null;
});

// Envío directo garantizado a Google Sheets
async function sendToSheetsGuaranteed(leadData) {
    try {
        const res = await enviarAGoogleSheets(leadData);
        if (res && res.success) return true;
    } catch (e) {
        console.warn("Reintentando envío directo a Google Sheets...", e);
    }

    // Fallback directo en caso de caché en form.js
    try {
        await fetch(FALLBACK_SHEETS_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(leadData)
        });
        return true;
    } catch (err) {
        if (navigator.sendBeacon) {
            const blob = new Blob([JSON.stringify(leadData)], { type: "text/plain;charset=utf-8" });
            if (navigator.sendBeacon(FALLBACK_SHEETS_URL, blob)) {
                return true;
            }
        }
        console.error("Error definitivo enviando a Google Sheets:", err);
        return false;
    }
}

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
            const leadData = {
                nombre: fullName,
                empresa: company,
                telefono: phone,
                requerimiento: requirement,
                fecha: new Date().toLocaleString()
            };

            if (!db) {
                db = await dbReadyPromise;
            }

            // Ejecutamos ambos envíos en paralelo (Google Sheets + Firebase Firestore)
            const [sheetsOk, firestoreOk] = await Promise.all([
                sendToSheetsGuaranteed(leadData),
                (async () => {
                    if (!db) return false;
                    try {
                        const docRef = await addDoc(collection(db, "leads_pm_help"), {
                            nombre: leadData.nombre,
                            empresa: leadData.empresa,
                            telefono: leadData.telefono,
                            requerimiento: leadData.requerimiento,
                            fecha: serverTimestamp()
                        });
                        console.log("Lead guardado en Firebase con ID:", docRef.id);
                        return true;
                    } catch (fsErr) {
                        console.warn("Aviso de Firebase Firestore:", fsErr.message);
                        return false;
                    }
                })()
            ]);

            if (sheetsOk || firestoreOk) {
                showFeedback(t("feedback_success"), "success");
                leadForm.reset();
            } else {
                throw new Error("No se pudo registrar el lead ni en Google Sheets ni en Firebase.");
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
