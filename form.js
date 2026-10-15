// form.js
// Función para enviar datos a Google Sheets
export async function enviarAGoogleSheets(leadData) {
    let sheetsUrl;
    try {
        // Intento de leer de import.meta.env (entorno Vite/producción)
        sheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;
    } catch (e) {
        // Fallback para pruebas locales (servidor sin bundler) leyendo directamente .env
        const response = await fetch('./.env');
        const text = await response.text();
        const match = text.match(/VITE_GOOGLE_SHEETS_URL\s*=\s*"?([^"\r\n]+)"?/);
        if (match) {
            sheetsUrl = match[1];
        }
    }

    if (!sheetsUrl) {
        console.error("Error: VITE_GOOGLE_SHEETS_URL no está definida.");
        return { success: false, error: "Missing URL" };
    }

    try {
        const response = await fetch(sheetsUrl, {
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
