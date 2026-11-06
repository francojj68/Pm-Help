import { initFirebase } from "./db.js";
import { enviarAGoogleSheets } from "./form.js";

// Helper de traducción obtenido del módulo global i18n
const t = (key) => (window.PMHelpI18n ? window.PMHelpI18n.t(key) : key);

let db = null;

// Inicializamos Firebase en segundo plano si está disponible
initFirebase().then((database) => {
    db = database;
    if (db) console.log("Firebase inicializado y listo en app.js");
}).catch(err => {
    console.warn("Firebase no disponible en este entorno:", err);
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
            const leadData = {
                nombre: fullName,
                empresa: company,
                telefono: phone,
                requerimiento: requirement,
                fecha: new Date().toLocaleString()
            };

            // 1. Envío prioritario a Google Sheets (comprobado y 100% funcional)
            const sheetsResult = await enviarAGoogleSheets(leadData);

            if (!sheetsResult || !sheetsResult.success) {
                throw new Error("Fallo al conectar con Google Sheets");
            }

            console.log("Lead guardado exitosamente en Google Sheets.");

            // 2. Intento silencioso en Firebase Firestore en segundo plano (no bloquea al usuario)
            if (db) {
                import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js")
                    .then(({ collection, addDoc, serverTimestamp }) => {
                        addDoc(collection(db, "leads_pm_help"), {
                            nombre: leadData.nombre,
                            empresa: leadData.empresa,
                            telefono: leadData.telefono,
                            requerimiento: leadData.requerimiento,
                            fecha: serverTimestamp()
                        }).then(docRef => {
                            console.log("Lead respaldado en Firebase con ID:", docRef.id);
                        }).catch(fsErr => {
                            console.warn("Firestore bloqueado por reglas de seguridad:", fsErr.message);
                        });
                    })
                    .catch(() => {});
            }

            // Éxito garantizado para el usuario
            showFeedback(t("feedback_success"), "success");
            leadForm.reset();

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
