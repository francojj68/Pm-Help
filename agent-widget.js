// agent-widget.js - Widget de Agente de IA Interactivo para PM Help
// Especialista en Transformación Operativa, Agentes de IA y Desarrollo Web en Colombia

(function () {
    const KNOWLEDGE_BASE = {
        es: {
            welcome: "¡Hola! 👋 Soy el **Agente de IA de PM Help**. Estoy entrenado con toda la información de nuestros servicios de Inteligencia Artificial, automatización operativa y desarrollo web en Colombia. ¿En qué te puedo orientar hoy?",
            chips: [
                "⚡ ¿Cómo automatizan en 30 días?",
                "🌐 Desarrollo Web con IA",
                "🏢 Caso de Éxito Inmobiliario",
                "📋 Agendar Auditoría Gratis",
                "📲 Contacto por WhatsApp"
            ],
            answers: {
                guarantee: "Nuestra **Metodología de Adopción Asegurada** garantiza que tus procesos críticos queden automatizados e integrados en el día a día de tu equipo en **30 días**, o iteramos sin costo adicional hasta lograrlo. Liberamos hasta un **40% del tiempo operativo** de tu personal.",
                web: "Diseñamos y desarrollamos **Ecosistemas Web y Landing Pages de Alta Conversión integradas con IA**. Incluyen agentes conversacionales 24/7 en WhatsApp y Web, conexión directa a tu CRM y captura automatizada para que nunca pierdas un prospecto calificado.",
                case_study: "En nuestro **Caso de Éxito Inmobiliario**, desarrollamos una landing page inteligente con Agente de IA 24/7 que responde en menos de 30 segundos, redujo 35 horas de trabajo manual al mes por asesor y aumentó la conversión de prospectos calificados en un **+65%**.",
                audit: "La **Auditoría de Viabilidad** es 100% gratuita y sin compromiso. Analizamos tus procesos actuales, identificamos qué tareas pueden automatizarse con IA y estimamos el tiempo y dinero que tu empresa ahorrará.",
                pricing: "Cada solución es personalizada según el tamaño y procesos de tu empresa. Iniciamos con una Auditoría Estratégica gratuita para evaluar el retorno sobre la inversión (ROI). Puedes agendarla llenando el formulario o escribiéndonos a WhatsApp.",
                contact: "Puedes escribirnos directamente a WhatsApp al [+57 310 815 3663](https://wa.me/573108153663) o dejarnos tus datos en el formulario de contacto para recibir respuesta en menos de 24 horas.",
                default: "Excelente consulta. En **PM Help** somos especialistas en Consultoría de IA, Agentes Virtuales Inteligentes y Desarrollo Web de Alta Conversión en Colombia. Te invitamos a agendar una **Auditoría de Viabilidad gratuita** o contactarnos de inmediato por WhatsApp para darte una solución a la medida."
            }
        },
        en: {
            welcome: "Hello! 👋 I am the **PM Help AI Agent**. I am trained on our Artificial Intelligence consulting, operational automation, and high-converting web development services in Colombia. How can I assist you today?",
            chips: [
                "⚡ How does the 30-day delivery work?",
                "🌐 Web Development with AI",
                "🏢 Real Estate Case Study",
                "📋 Schedule Free Audit",
                "📲 WhatsApp Contact"
            ],
            answers: {
                guarantee: "Our **Guaranteed Adoption Methodology** ensures that your critical business processes are automated and fully adopted by your team in **30 days**, or we iterate at no extra charge. We free up to **40% of operational time**.",
                web: "We build **High-Converting Web Ecosystems and Landing Pages integrated with AI**. They feature 24/7 conversational agents on WhatsApp and Web, direct CRM synchronization, and automated lead qualification so you never lose high-value prospects.",
                case_study: "In our **Real Estate Case Study**, we deployed a conversion landing page with a 24/7 AI Agent that responds in under 30 seconds, saved 35 hours of manual screening per month per agent, and boosted qualified leads by **+65%**.",
                audit: "The **Feasibility Audit** is 100% free with zero obligation. We inspect your workflows, identify AI automation opportunities, and quantify the exact hours and budget your company can reclaim.",
                pricing: "Every solution is customized based on your business complexity. We start with a Free Feasibility Audit to ensure positive ROI. You can book it on our contact form or chat on WhatsApp.",
                contact: "You can reach us directly on WhatsApp at [+57 310 815 3663](https://wa.me/573108153663) or complete our contact form to get a personalized response within 24 hours.",
                default: "Great question! At **PM Help**, we specialize in AI Consulting, Intelligent Autonomous Agents, and High-Converting Web Development in Colombia. We invite you to schedule a **Free Feasibility Audit** or message us directly on WhatsApp."
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

        if (q.includes("30") || q.includes("días") || q.includes("days") || q.includes("garant") || q.includes("metodolog") || q.includes("adopci")) {
            return kb.answers.guarantee;
        }
        if (q.includes("web") || q.includes("landing") || q.includes("página") || q.includes("pagina") || q.includes("sitio") || q.includes("diseño") || q.includes("design")) {
            return kb.answers.web;
        }
        if (q.includes("inmobili") || q.includes("real estate") || q.includes("caso") || q.includes("éxito") || q.includes("exito") || q.includes("proptech") || q.includes("cliente")) {
            return kb.answers.case_study;
        }
        if (q.includes("audit") || q.includes("gratis") || q.includes("free") || q.includes("cita") || q.includes("agend") || q.includes("diagnóstic") || q.includes("schedule")) {
            return kb.answers.audit;
        }
        if (q.includes("precio") || q.includes("cost") || q.includes("tarifa") || q.includes("cuánto") || q.includes("cuanto") || q.includes("presupuesto") || q.includes("price")) {
            return kb.answers.pricing;
        }
        if (q.includes("whatsapp") || q.includes("tel") || q.includes("contact") || q.includes("correo") || q.includes("email") || q.includes("llamar") || q.includes("humano")) {
            return kb.answers.contact;
        }

        return kb.answers.default;
    }

    function createWidget() {
        // Container
        const container = document.createElement('div');
        container.id = 'pmHelpAiWidget';
        container.className = 'fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto select-none';

        // Launcher Button
        const launcher = document.createElement('button');
        launcher.id = 'aiWidgetLauncher';
        launcher.type = 'button';
        launcher.className = 'flex items-center gap-2.5 bg-navy text-white px-4 py-3.5 rounded-full shadow-2xl hover:bg-navyLight hover:scale-105 transition-all duration-300 ring-4 ring-gold/30 border border-gold/40 cursor-pointer group';
        launcher.setAttribute('aria-label', 'Abrir Asistente IA de PM Help');
        
        launcher.innerHTML = `
            <div class="relative flex items-center justify-center">
                <span class="absolute -top-1 -right-1 flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-mint"></span>
                </span>
                <svg class="w-6 h-6 text-gold group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
            </div>
            <div class="text-left hidden sm:block">
                <div class="text-xs font-bold leading-tight text-gold flex items-center gap-1.5">
                    <span data-i18n="agent_launcher">Asistente IA</span>
                    <span class="w-1.5 h-1.5 rounded-full bg-mint"></span>
                </div>
                <div class="text-[10px] text-slate-300 font-light">En vivo • Colombia</div>
            </div>
        `;

        // Chat Drawer Modal
        const chatBox = document.createElement('div');
        chatBox.id = 'aiChatBox';
        chatBox.className = 'hidden w-[92vw] sm:w-[380px] h-[520px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex-col overflow-hidden mb-3 animate-fade-in transition-all duration-300';

        chatBox.innerHTML = `
            <!-- Chat Header -->
            <div class="bg-navy p-4 text-white flex items-center justify-between border-b border-navyLight">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold shadow-inner flex-shrink-0">
                        <svg class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <button id="aiChatReset" class="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors" title="Reiniciar conversación" aria-label="Reiniciar">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                    </button>
                    <button id="aiChatClose" class="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors" title="Cerrar chat" aria-label="Cerrar">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
            </div>

            <!-- Messages Area -->
            <div id="aiChatMessages" class="flex-1 p-4 overflow-y-auto space-y-3 bg-[#F8F9FA] text-xs sm:text-sm">
                <!-- Se inyectan dinámicamente -->
            </div>

            <!-- Quick Action Chips -->
            <div id="aiChatChips" class="px-3 py-2 bg-slate-50 border-t border-slate-100 flex gap-1.5 overflow-x-auto no-scrollbar">
                <!-- Se inyectan dinámicamente -->
            </div>

            <!-- Input Area -->
            <form id="aiChatForm" class="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
                <input type="text" id="aiChatInput" autocomplete="off" placeholder="Escribe tu consulta aquí..." data-i18n-placeholder="agent_placeholder" class="flex-1 px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy text-navy">
                <button type="submit" class="bg-gold text-navy font-bold p-2.5 rounded-xl hover:bg-goldHover transition-colors flex-shrink-0 cursor-pointer shadow-sm" title="Enviar" aria-label="Enviar">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
            </form>
        `;

        container.appendChild(chatBox);
        container.appendChild(launcher);
        document.body.appendChild(container);

        // Logic
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
                bubble.className = 'bg-navy text-white px-3.5 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm';
                bubble.textContent = text;
            } else {
                bubble.className = 'bg-white text-navy border border-slate-200 px-3.5 py-2.5 rounded-2xl rounded-tl-sm max-w-[88%] shadow-sm leading-relaxed';
                if (isHtml) {
                    bubble.innerHTML = text;
                } else {
                    // Simple markdown-to-html converter for bold & links
                    let formatted = text
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener" class="text-gold font-bold underline hover:text-navy">$1</a>');
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

        function handleUserMessage(text) {
            appendMessage('user', text);
            showTypingIndicator();

            setTimeout(() => {
                removeTypingIndicator();
                const lang = getLang();
                const reply = matchAnswer(text, lang);
                appendMessage('bot', reply);

                // Si menciona auditoría o contacto, sugerimos acción directa
                if (text.toLowerCase().includes("audit") || text.toLowerCase().includes("contact") || text.toLowerCase().includes("precio")) {
                    const actionRow = document.createElement('div');
                    actionRow.className = 'flex flex-col gap-2 pt-1 animate-fade-in';
                    actionRow.innerHTML = `
                        <a href="#contacto" onclick="document.getElementById('aiChatBox').classList.add('hidden');" class="inline-flex items-center justify-center gap-1.5 bg-gold hover:bg-goldHover text-navy text-xs font-bold px-3 py-2 rounded-xl transition-all shadow-sm text-center">
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
            }, 500);
        }

        function renderChips() {
            chipsArea.innerHTML = '';
            const lang = getLang();
            const kb = KNOWLEDGE_BASE[lang] || KNOWLEDGE_BASE.es;

            kb.chips.forEach(chipText => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'whitespace-nowrap px-3 py-1.5 rounded-full bg-white hover:bg-gold hover:text-navy text-navy font-medium text-[11px] border border-slate-200 transition-all shadow-sm flex-shrink-0 cursor-pointer';
                btn.textContent = chipText;
                btn.addEventListener('click', () => {
                    handleUserMessage(chipText);
                });
                chipsArea.appendChild(btn);
            });
        }

        function resetConversation() {
            messagesArea.innerHTML = '';
            const lang = getLang();
            const kb = KNOWLEDGE_BASE[lang] || KNOWLEDGE_BASE.es;
            appendMessage('bot', kb.welcome);
            renderChips();
        }

        // Escuchar cambios de idioma
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