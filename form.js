// form.js
// URL directa del Webhook de Google Sheets
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbz7JBaktGFsfRPsAVIe-z9Ng82w7M5jfmERpxzhwu0YTOtYY04z105SVUv7JKFi0x_whA/exec";

// Función para enviar datos a Google Sheets
export async function enviarAGoogleSheets(leadData) {
    try {
        await fetch(GOOGLE_SHEETS_URL, {
            method: "POST",
            mode: "no-cors", // Requerido para peticiones a Apps Script
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(leadData)
        });
        return { success: true };
    } catch (error) {
        console.error("Error enviando lead a Google Sheets:", error);
        return { success: false, error };
    }
}
