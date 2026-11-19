// agent-widget.js - Widget de Agente de IA Interactivo para PM Help
// Especialista en Transformación Operativa, Agentes de IA y Desarrollo Web en Colombia

(function () {
    // 💡 Configuración del Backend de IA (Cloudflare Worker + Gemini):
    // Cuando pegues aquí la URL de tu Cloudflare Worker, el asistente responderá con IA Generativa en tiempo real.
    // Si se deja vacío o falla la conexión, utilizará automáticamente la base de conocimiento local (Fallback seguro).
    const AI_API_URL = "https://pmhelp-ai-assistant.consultoriapmhelp.workers.dev";

    const KNOWLEDGE_BASE = {
        es: {
            welcome: "¡Hola! 👋 Soy el **Agente de IA de PM Help**. Estoy entrenado con toda la información de nuestros servicios de Inteligencia Artificial, automatización operativa y desarrollo web en Colombia. ¿En qué te puedo orientar hoy?",
            chips: [
                "⚡ Hoja de Ruta de 30 Días",
                "🤖 Agentes de IA en WhatsApp",
                "⚙️ Automatización de Flujos",
                "🏢 Caso de Éxito Inmobiliario",
                "📋 Agendar Auditoría Gratis",
                "📲 Contacto por WhatsApp"
            ],
            answers: {
                roadmap: "Nuestra **Metodología de Adopción Asegurada en 30 Días** se divide en 4 etapas:\n\n• **Semana 1 (Diagnóstico):** Auditoría Estratégica para detectar cuellos de botella y matriz de procesos críticos (alcance en < 24h).\n• **Semana 2 (Interconexión):** Automatización de flujos operativos de extremo a extremo, liberando hasta el **40% del tiempo** del equipo.\n• **Semana 3 (Entrenamiento):** Despliegue de Agentes de IA 24/7 en WhatsApp y Web con los datos y catálogo de tu empresa.\n• **Semana 4 (Adopción y Salida en Vivo):** Pruebas con el personal, acompañamiento ágil sin fricciones y soporte local en Colombia.",
                whatsapp_agent: "Nuestros **Agentes de IA 24/7 en WhatsApp y Web** transforman prospectos en citas en 5 pasos:\n\n1. **Respuesta inmediata (< 30s):** Atiende consultas 24/7 incluso de noche o festivos.\n2. **Perfilamiento en tiempo real:** Filtra presupuesto, zona y requerimientos específicos.\n3. **Lead Calificado:** Identifica prospectos de alto valor sin saturar a los asesores.\n4. **Agendamiento autónomo:** Ofrece horarios y reserva directamente en la agenda del equipo.\n5. **Sincronización con CRM:** Registra el contacto, historial y cita automáticamente sin intervención manual.",
                flows: "Con la **Automatización Operativa de Flujos**, conectamos tus sistemas (CRM, correos, Excel, facturación) en tiempo real. Eliminamos la copia manual de datos y tareas rutinarias, permitiendo **liberar hasta un 40% del tiempo operativo** de tu equipo para que se concentren en cerrar negocios y actividades estratégicas.",
                guarantee: "La **Metodología de Adopción Asegurada** parte de una premisa clara: *la IA no sustituye el talento humano, lo potencia*. Con más de 5 años bajo Gobernanza Ágil de Proyectos, garantizamos que tus procesos queden adoptados e integrados en el día a día de tu personal en **30 días**, o iteramos sin costo adicional.",
                web: "Diseñamos y desarrollamos **Ecosistemas Web y Landing Pages de Alta Conversión integradas con IA**. Son ultrarrápidas, optimizadas para captación y vienen conectadas nativamente con agentes conversacionales 24/7 en WhatsApp, CRM y agendamiento automático de citas.",
                case_study: "En nuestro **Caso de Éxito Inmobiliario (PropTech)**:\n\n• **Respuesta inmediata:** Menos de 30 segundos automáticos las 24 horas.\n• **Conversión superior:** Aumento de más del **+65%** en leads calificados.\n• **Ahorro operativo:** Liberó hasta **35 horas mensuales por asesor** en filtrado manual.\n• **Despliegue ágil:** Implementado de punta a punta en **30 días**.",
                audit: "La **Auditoría Estratégica de Procesos e IA** es **100% gratuita y sin compromiso**. Evaluamos tus flujos de trabajo actuales, diagnosticamos fricciones y sistemas desconectados, y te entregamos un plan técnico con las oportunidades de mayor retorno sobre la inversión (ROI) con respuesta en menos de 24 horas.",
                pricing: "Cada solución se diseña a la medida según la complejidad de los procesos y el tamaño de tu empresa. El primer paso siempre es la **Auditoría de Viabilidad Gratuita**, donde cuantificamos el tiempo exacto que tu equipo ahorrará y el retorno de inversión proyectado.",
                contact: "Puedes escribirnos directamente a WhatsApp al [+57 310 815 3663](https://wa.me/573108153663), escribirnos a **consultoria@pmhelp.com.co**, o dejarnos tus datos en el formulario de la página para responderte en menos de 24 horas.",
                default: "En **PM Help** somos especialistas en Inteligencia Artificial, Automatización Operativa de Flujos y Desarrollo Web de Alta Conversión en Colombia. Te invitamos a agendar una **Auditoría Estratégica gratuita** o escribirnos directamente por WhatsApp para analizar tu empresa."
            }
        },
        en: {
            welcome: "Hello! 👋 I am the **PM Help AI Agent**. I am trained on our Artificial Intelligence consulting, operational automation, and high-converting web development services in Colombia. How can I assist you today?",
            chips: [
                "⚡ 30-Day Roadmap",
                "🤖 WhatsApp AI Agents",
                "⚙️ Workflow Automation",
                "🏢 Real Estate Case Study",
                "📋 Schedule Free Audit",
                "📲 WhatsApp Contact"
            ],
            answers: {
                roadmap: "Our **Guaranteed Adoption Methodology in 30 Days** is structured into 4 key stages:\n\n• **Week 1 (Diagnosis):** Feasibility Audit to identify bottlenecks and map critical processes (response < 24h).\n• **Week 2 (Interconnection):** End-to-end workflow automation, freeing up to **40% of operational time**.\n• **Week 3 (Training):** Deployment of 24/7 AI Agents on WhatsApp and Web trained on company data.\n• **Week 4 (Adoption & Go-Live):** Comprehensive team testing, agile governance, local support, and rollout on Day 30.",
                whatsapp_agent: "Our **24/7 WhatsApp & Web AI Agents** convert digital leads into booked appointments in 5 steps:\n\n1. **Instant Response (< 30s):** 24/7 availability with zero lead drop-off outside business hours.\n2. **Real-time Profiling:** Screens budget, preferred location, and buying timeline.\n3. **Qualified Leads:** Validates high-value buyers before routing to sales advisors.\n4. **Autonomous Booking:** Directly blocks calendar appointments in real time.\n5. **CRM Sync:** Automatically updates contact records, conversation logs, and meetings with zero manual work.",
                flows: "Through **End-to-End Workflow Automation**, we connect your isolated apps (CRM, emails, spreadsheets, billing) in real time. We eliminate repetitive copy-pasting, **reclaiming up to 40% of your team's operational hours** for revenue-generating initiatives.",
                guarantee: "Our **Guaranteed Adoption Methodology** is built on a clear principle: *AI does not replace human talent, it empowers it*. Backed by 5+ years of Agile Project Governance, we ensure full operational adoption within **30 days**, or we iterate at no extra charge.",
                web: "We build **High-Converting Web Ecosystems and Landing Pages integrated with AI**. Ultra-fast, conversion-focused, and natively connected with 24/7 conversational agents on WhatsApp, CRM sync, and automated calendar scheduling.",
                case_study: "In our **Real Estate (PropTech) Case Study**:\n\n• **Instant responses:** Under 30 seconds automatically 24/7.\n• **Higher conversion:** Over **+65%** increase in qualified leads.\n• **Time savings:** Saved up to **35 hours per month per sales agent** on manual filtering.\n• **Fast rollout:** Fully deployed and adopted in **30 days**.",
                audit: "The **Strategic Feasibility Audit** is **100% free with zero obligation**. We analyze your existing workflows, identify disconnected systems, and deliver a prioritized technical plan with high-ROI automation targets within 24 hours.",
                pricing: "Every solution is custom-tailored to your company's processes. We start with the **Free Feasibility Audit** to calculate your exact projected ROI and hours saved before you commit to anything.",
                contact: "Reach us directly on WhatsApp at [+57 310 815 3663](https://wa.me/573108153663), email **consultoria@pmhelp.com.co**, or fill out the website contact form to get a response within 24 hours.",
                default: "At **PM Help**, we specialize in Artificial Intelligence consulting, Operational Workflow Automation, and High-Converting Web Ecosystems in Colombia. We invite you to schedule a **Free Feasibility Audit** or message us directly on WhatsApp."
            }
        }
    };

    function getLang() {
        if (window.PMHelpI18n && typeof window.PMHelpI18n.getLanguage === 'function') {
            return window.PMHelpI18n.getLanguage();
        }
        return 'es';
    }

    function matchAnswer(text, lang) {
        const q = text.toLowerCase();
        const kb = KNOWLEDGE_BASE[lang] || KNOWLEDGE_BASE.es;

        // Hoja de ruta / Semanas / 30 días
        if (q.includes("semana") || q.includes("hoja de ruta") || q.includes("roadmap") || q.includes("etapas") || q.includes("fases") || q.includes("week")) {
            return kb.answers.roadmap;
        }

        // Agentes de WhatsApp / Agendamiento / CRM
        if (q.includes("whatsapp") && (q.includes("agent") || q.includes("bot") || q.includes("ia") || q.includes("flujo") || q.includes("como funciona"))) {
            return kb.answers.whatsapp_agent;
        }
        if (q.includes("agend") || q.includes("calend") || q.includes("cita") || q.includes("crm") || q.includes("perfil") || q.includes("cualific")) {
            return kb.answers.whatsapp_agent;
        }

        // Flujos operativos / Tareas repetitivas / 40%
        if (q.includes("flujo") || q.includes("operativ") || q.includes("repetitiv") || q.includes("aislad") || q.includes("excel") || q.includes("40%") || q.includes("workflow")) {
            return kb.answers.flows;
        }

        // Metodología de adopción / Garantía / Talento humano
        if (q.includes("30") || q.includes("días") || q.includes("days") || q.includes("garant") || q.includes("metodolog") || q.includes("adopci") || q.includes("humano") || q.includes("talento")) {
            return kb.answers.guarantee;
        }

        // Web / Landing pages
        if (q.includes("web") || q.includes("landing") || q.includes("página") || q.includes("pagina") || q.includes("sitio") || q.includes("diseño") || q.includes("design")) {
            return kb.answers.web;
        }

        // Caso de éxito inmobiliario / Proptech
        if (q.includes("inmobili") || q.includes("real estate") || q.includes("caso") || q.includes("éxito") || q.includes("exito") || q.includes("proptech") || q.includes("35 hora")) {
            return kb.answers.case_study;
        }

        // Auditoría / Viabilidad / Gratuita / Diagnóstico
        if (q.includes("audit") || q.includes("gratis") || q.includes("free") || q.includes("diagnóstic") || q.includes("viabilidad") || q.includes("cuello")) {
            return kb.answers.audit;
        }

        // Precios / Costos / Cuánto cuesta
        if (q.includes("precio") || q.includes("cost") || q.includes("tarifa") || q.includes("cuánto") || q.includes("cuanto") || q.includes("presupuesto") || q.includes("price") || q.includes("roi") || q.includes("inversi")) {
            return kb.answers.pricing;
        }

        // Contacto / WhatsApp / Teléfono / Correo
        if (q.includes("whatsapp") || q.includes("tel") || q.includes("contact") || q.includes("correo") || q.includes("email") || q.includes("llamar") || q.includes("humano") || q.includes("asesor")) {
            return kb.answers.contact;
        }

        return kb.answers.default;
    }

    function createWidget() {
        const container = document.createElement('div');
        container.id = 'pmHelpAiWidget';
        container.className = 'fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto select-none';

        const launcher = document.createElement('button');
        launcher.id = 'aiWidgetLauncher';
        launcher.type = 'button';
        launcher.className = 'flex items-center gap-2.5 bg-slate-900 text-white px-4 py-3.5 rounded-full shadow-2xl hover:bg-slate-900Light hover:scale-105 transition-all duration-300 ring-4 ring-blue-500/20 border border-slate-700/80 cursor-pointer group';
        launcher.setAttribute('aria-label', 'Abrir Asistente IA de PM Help');
        
        launcher.innerHTML = `
            <div class="relative flex items-center justify-center">
                <span class="absolute -top-1 -right-1 flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-mint"></span>
                </span>
                <svg class="w-6 h-6 text-blue-400 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
            </div>
            <div class="text-left hidden sm:block">
                <div class="text-xs font-bold leading-tight text-blue-400 flex items-center gap-1.5">
                    <span data-i18n="agent_launcher">Asistente IA</span>
                    <span class="w-1.5 h-1.5 rounded-full bg-mint"></span>
                </div>
                <div class="text-[10px] text-slate-300 font-light">En vivo • Colombia</div>
            </div>
        `;

        const chatBox = document.createElement('div');
        chatBox.id = 'aiChatBox';
        chatBox.className = 'hidden w-[92vw] sm:w-[380px] h-[520px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex-col overflow-hidden mb-3 animate-fade-in transition-all duration-300';

        chatBox.innerHTML = `
            <!-- Chat Header -->
            <div class="bg-slate-900 p-4 text-white flex items-center justify-between border-b border-navyLight">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-inner flex-shrink-0">
                        <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <div>
                        <div class="text-sm font-bold text-white flex items-center gap-2">
                            <span data-i18n="agent_title">Asistente Virtual PM Help</span>
                            <span class="inline-block w-2 h-2 rounded-full bg-mint"></span>
                        </div>
                        <div class="text-[11px] text-slate-300 font-light" data-i18n="agent_subtitle">Agencia IA & Desarrollo Web • Colombia</div>
                    </div>
                </div>
                <div class="flex items-center gap-1">
                    <button id="aiChatReset" class="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer" title="Reiniciar conversación" aria-label="Reiniciar">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                    </button>
                    <button id="aiChatClose" class="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer" title="Cerrar chat" aria-label="Cerrar">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
            </div>

            <!-- Messages Area -->
            <div id="aiChatMessages" class="flex-1 p-4 overflow-y-auto space-y-3 bg-[#F8F9FA] text-xs sm:text-sm"></div>

            <!-- Quick Action Chips -->
            <div id="aiChatChips" class="px-3 py-2 bg-slate-50 border-t border-slate-100 flex gap-1.5 overflow-x-auto no-scrollbar"></div>

            <!-- Input Area -->
            <form id="aiChatForm" class="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
                <input type="text" id="aiChatInput" autocomplete="off" placeholder="Escribe tu consulta aquí..." data-i18n-placeholder="agent_placeholder" class="flex-1 px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900">
                <button type="submit" class="bg-blue-600 text-white font-bold p-2.5 rounded-xl hover:bg-blue-700 transition-colors flex-shrink-0 cursor-pointer shadow-sm" title="Enviar" aria-label="Enviar">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
            </form>
        `;

        container.appendChild(chatBox);
        container.appendChild(launcher);
        document.body.appendChild(container);

        initChatEvents(launcher, chatBox);
    }

    function initChatEvents(launcher, chatBox) {
        const closeBtn = document.getElementById('aiChatClose');
        const resetBtn = document.getElementById('aiChatReset');
        const chatForm = document.getElementById('aiChatForm');
        const chatInput = document.getElementById('aiChatInput');
        const messagesArea = document.getElementById('aiChatMessages');
        const chipsArea = document.getElementById('aiChatChips');

        let isOpen = false;
        let conversationHistory = [];

        function toggleChat() {
            isOpen = !isOpen;
            if (isOpen) {
                chatBox.classList.remove('hidden');
                chatBox.classList.add('flex');
                if (messagesArea.children.length === 0) {
                    resetConversation();
                }
                setTimeout(() => chatInput.focus(), 150);
            } else {
                chatBox.classList.add('hidden');
                chatBox.classList.remove('flex');
            }
        }

        launcher.addEventListener('click', toggleChat);
        closeBtn.addEventListener('click', toggleChat);
        resetBtn.addEventListener('click', resetConversation);

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;
            chatInput.value = '';
            handleUserMessage(text);
        });

        function appendMessage(sender, text, isHtml = false) {
            const row = document.createElement('div');
            row.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`;

            const bubble = document.createElement('div');
            if (sender === 'user') {
                bubble.className = 'bg-slate-900 text-white px-3.5 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm';
                bubble.textContent = text;
            } else {
                bubble.className = 'bg-white text-slate-900 border border-slate-200 px-3.5 py-2.5 rounded-2xl rounded-tl-sm max-w-[88%] shadow-sm leading-relaxed whitespace-pre-line';
                if (isHtml) {
                    bubble.innerHTML = text;
                } else {
                    let formatted = text
                        .replace(/### (.*?)\n/g, '<div class="font-bold text-slate-900 mt-2 mb-1 text-xs sm:text-sm">$1</div>')
                        .replace(/## (.*?)\n/g, '<div class="font-bold text-slate-900 mt-2 mb-1 text-xs sm:text-sm">$1</div>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener" class="text-blue-600 font-bold underline hover:text-slate-900">$1</a>');
                    bubble.innerHTML = formatted;
                }
            }

            row.appendChild(bubble);
            messagesArea.appendChild(row);
            messagesArea.scrollTop = messagesArea.scrollHeight;
        }

        function showTypingIndicator() {
            const row = document.createElement('div');
            row.id = 'aiTypingIndicator';
            row.className = 'flex justify-start';
            row.innerHTML = `
                <div class="bg-white border border-slate-200 px-4 py-2 rounded-2xl flex items-center gap-1.5 shadow-sm">
                    <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
            `;
            messagesArea.appendChild(row);
            messagesArea.scrollTop = messagesArea.scrollHeight;
        }

        function removeTypingIndicator() {
            const typing = document.getElementById('aiTypingIndicator');
            if (typing) typing.remove();
        }

        async function handleUserMessage(text) {
            appendMessage('user', text);
            conversationHistory.push({ role: 'user', text: text });
            showTypingIndicator();

            let reply = "";
            let usedAI = false;

            if (AI_API_URL && AI_API_URL.trim().length > 0) {
                try {
                    const response = await fetch(AI_API_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            message: text,
                            history: conversationHistory,
                            lang: getLang()
                        })
                    });

                    if (response.ok) {
                        const data = await response.json();
                        if (data && data.reply) {
                            reply = data.reply;
                            usedAI = true;
                        }
                    }
                } catch (err) {
                    console.warn("Fallo en backend de IA, usando base de conocimiento local:", err);
                }
            }

            if (!usedAI) {
                const lang = getLang();
                reply = matchAnswer(text, lang);
            }

            conversationHistory.push({ role: 'model', text: reply });
            removeTypingIndicator();
            appendMessage('bot', reply);

            // Si menciona auditoría o contacto, sugerimos acción directa
            const lower = (text + " " + reply).toLowerCase();
            if (lower.includes("audit") || lower.includes("contact") || lower.includes("precio") || lower.includes("whatsapp")) {
                const actionRow = document.createElement('div');
                actionRow.className = 'flex flex-col gap-2 pt-1 animate-fade-in';
                actionRow.innerHTML = `
                    <a href="#contacto" onclick="document.getElementById('aiChatBox').classList.add('hidden');" class="inline-flex items-center justify-center gap-1.5 bg-gold hover:bg-blue-700 text-slate-900 text-xs font-bold px-3 py-2 rounded-xl transition-all shadow-sm text-center">
                        <span>Agendar Auditoría Gratuita en el Formulario</span>
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                    <a href="https://wa.me/573108153663?text=${encodeURIComponent('Hola PM Help, quiero información sobre sus servicios de IA y Desarrollo Web.')}" target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold px-3 py-2 rounded-xl transition-all shadow-sm text-center">
                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        <span>Escribir por WhatsApp (+57 310 815 3663)</span>
                    </a>
                `;
                messagesArea.appendChild(actionRow);
                messagesArea.scrollTop = messagesArea.scrollHeight;
            }
        }

        function renderChips() {
            chipsArea.innerHTML = '';
            const lang = getLang();
            const kb = KNOWLEDGE_BASE[lang] || KNOWLEDGE_BASE.es;

            kb.chips.forEach(chipText => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'whitespace-nowrap px-3 py-1.5 rounded-full bg-white hover:bg-gold hover:text-slate-900 text-slate-900 font-medium text-[11px] border border-slate-200 transition-all shadow-sm flex-shrink-0 cursor-pointer';
                btn.textContent = chipText;
                btn.addEventListener('click', () => {
                    handleUserMessage(chipText);
                });
                chipsArea.appendChild(btn);
            });
        }

        function resetConversation() {
            conversationHistory = [];
            messagesArea.innerHTML = '';
            const lang = getLang();
            const kb = KNOWLEDGE_BASE[lang] || KNOWLEDGE_BASE.es;
            appendMessage('bot', kb.welcome);
            renderChips();
        }

        window.addEventListener('languageChanged', () => {
            renderChips();
            if (messagesArea.children.length <= 1) {
                resetConversation();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createWidget);
    } else {
        createWidget();
    }
})();
