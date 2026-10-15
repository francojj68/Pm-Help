// i18n.js - Sistema de Internacionalización PM Help (Español / Inglés)
// Compatible con ejecución local (file://) y servidores web (http/https)

(function () {
    const translations = {
        es: {
            page_title: "PM Help | Transformación Operativa con IA",
            nav_contact: "Contacto",
            video_fallback: "Tu navegador no soporta el formato de video.",
            
            // Hero
            hero_title: "Transformamos tu carga operativa: Automatizamos los procesos críticos de tu empresa en 30 días",
            hero_subtitle: 'para que tu equipo libere hasta un 40% de su tiempo, asegurando la adopción total del sistema mediante nuestra <span class="font-semibold text-navy">Metodología de Adopción Asegurada</span>, o iteramos sin costo hasta lograrlo.',
            hero_premise_title: "La premisa:",
            hero_premise_text: "La IA no está para sustituir a los humanos, está para ayudar a un mejor desempeño de los equipos. Detecta patrones, mejora la eficiencia y recupera el tiempo de tu empresa.",
            hero_cta: "Agendar Auditoría de Viabilidad (Sin Costo)",

            // Problema / Agitación
            problem_title: "El costo de operar sin evolución",
            problem_card1_title: "Equipo saturado de trabajo manual",
            problem_card1_desc: "Procesos repetitivos que queman el talento humano y reducen la motivación, limitando la innovación.",
            problem_card2_title: "Datos desconectados",
            problem_card2_desc: "Pérdida de visibilidad e ineficiencia operativa generada por sistemas aislados que no se hablan entre sí.",
            problem_card3_title: "Falta de tiempo estratégico",
            problem_card3_desc: "Directivos atrapados en la operación diaria en lugar de enfocarse en visualizar y escalar el negocio.",

            // Solución
            solution_tag: "El Verdadero Cuello de Botella",
            solution_title: 'El gran obstáculo en la implementación de IA no es la tecnología en sí, sino el <strong class="font-bold">fracaso de adopción por falta de gestión.</strong>',
            solution_desc: 'La aplicación rigurosa de nuestros <span class="text-white font-medium">Marcos de Entrega de Alta Precisión</span> y estructuras ágiles —basados en las mejores prácticas de excelencia del sector— garantiza que la tecnología se integre verdaderamente en los procesos diarios, logrando una adopción exitosa y sin fricciones.',

            // Video intermedio
            video_title: "La IA en acción: Cómo transformamos tu operación",
            video_cc_tooltip: "Alternar subtítulos en inglés / español",

            // Servicios / Ruta
            services_title: "Nuestra ruta hacia la automatización",
            services_step1_title: "Auditoría Estratégica",
            services_step1_desc: "Evaluamos meticulosamente tus procesos actuales para identificar las oportunidades más viables y rentables de automatización.",
            services_step2_title: "Automatización Operativa",
            services_step2_desc: "Diseñamos flujos eficientes interconectados, asumiendo el trabajo manual y liberando inmediatamente el tiempo de tus equipos.",
            services_step3_title: "Agentes de IA Inteligentes",
            services_step3_desc: "Implementamos asistentes virtuales personalizados, entrenados con el contexto de tu empresa y dedicados a resolver tareas complejas.",
            services_step4_title: "Ecosistemas Digitales",
            services_step4_desc: "Conectamos todas tus herramientas fragmentadas en una arquitectura unificada impulsada por IA para un flujo de información impecable.",

            // Autoridad
            authority_quote: '"Llevamos trabajando 10 años en proyectos de tecnología. Desde hace 5 años lideramos el desarrollo y gestión de proyectos complejos de inteligencia artificial, garantizando una <strong class="text-gold">Gobernanza Ágil de Proyectos</strong> que realmente funciona."',

            // Contacto & Formulario
            contact_title: "Inicia tu transformación",
            contact_desc: "Completa el formulario y nos pondremos en contacto para agendar tu Auditoría de Viabilidad sin costo.",
            contact_benefit1: "Respuesta en menos de 24 horas",
            contact_benefit2: "Asesoría personalizada",
            contact_benefit3: "Absoluta confidencialidad",

            form_name_label: "Nombre Completo",
            form_name_placeholder: "Ej. Juan Pérez",
            form_company_label: "Empresa",
            form_company_placeholder: "Tu Empresa S.A.S",
            form_phone_label: "Teléfono / WhatsApp",
            form_phone_placeholder: "+57 300 000 0000",
            form_requirement_label: "Requerimiento del Servicio",
            form_requirement_placeholder: "Cuéntanos brevemente qué proceso deseas automatizar...",
            form_submit_btn: "Enviar Solicitud",

            // Feedback del formulario
            feedback_required: "Por favor, completa todos los campos.",
            feedback_success: "¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.",
            feedback_error: "Hubo un error al enviar tu solicitud. Inténtalo más tarde o usa nuestro WhatsApp.",

            // Footer & Floating
            footer_contact: "Contáctanos:",
            footer_rights: "&copy; 2026 PM Help. Todos los derechos reservados.",
            whatsapp_aria: "Contactar por WhatsApp",
            lang_toggle_tooltip: "Cambiar idioma a Inglés (EN)"
        },
        en: {
            page_title: "PM Help | Operational Transformation with AI",
            nav_contact: "Contact",
            video_fallback: "Your browser does not support the video format.",

            // Hero
            hero_title: "We transform your operational workload: We automate your company's critical processes in 30 days",
            hero_subtitle: 'so your team frees up to 40% of their time, ensuring complete system adoption through our <span class="font-semibold text-navy">Guaranteed Adoption Methodology</span>, or we iterate at no cost until achieved.',
            hero_premise_title: "The premise:",
            hero_premise_text: "AI is not here to replace humans; it's here to empower teams to perform better. It detects patterns, improves efficiency, and reclaims your company's time.",
            hero_cta: "Schedule Feasibility Audit (Free)",

            // Problema / Agitación
            problem_title: "The cost of operating without evolution",
            problem_card1_title: "Team overwhelmed by manual work",
            problem_card1_desc: "Repetitive processes that burn out human talent and reduce motivation, limiting innovation.",
            problem_card2_title: "Disconnected data",
            problem_card2_desc: "Loss of visibility and operational inefficiency caused by isolated systems that don't communicate with each other.",
            problem_card3_title: "Lack of strategic time",
            problem_card3_desc: "Executives trapped in daily operations instead of focusing on envisioning and scaling the business.",

            // Solución
            solution_tag: "The Real Bottleneck",
            solution_title: 'The major hurdle in AI implementation is not the technology itself, but the <strong class="font-bold">failure of adoption due to lack of management.</strong>',
            solution_desc: 'The rigorous application of our <span class="text-white font-medium">High-Precision Delivery Frameworks</span> and agile structures —based on industry-leading best practices— ensures that technology is truly integrated into daily operations, achieving successful and frictionless adoption.',

            // Video intermedio
            video_title: "AI in Action: How We Transform Your Operation",
            video_cc_tooltip: "Toggle English / Spanish subtitles",

            // Servicios / Ruta
            services_title: "Our roadmap to automation",
            services_step1_title: "Strategic Audit",
            services_step1_desc: "We meticulously assess your current processes to identify the most viable and profitable automation opportunities.",
            services_step2_title: "Operational Automation",
            services_step2_desc: "We design efficient interconnected workflows, taking over manual work and immediately freeing up your team's time.",
            services_step3_title: "Intelligent AI Agents",
            services_step3_desc: "We implement custom virtual assistants, trained on your company's context and dedicated to solving complex tasks.",
            services_step4_title: "Digital Ecosystems",
            services_step4_desc: "We connect all your fragmented tools into a unified, AI-driven architecture for seamless information flow.",

            // Autoridad
            authority_quote: '"We have been working on technology projects for 10 years. For the past 5 years, we have been leading the development and management of complex artificial intelligence projects, ensuring <strong class="text-gold">Agile Project Governance</strong> that truly works."',

            // Contacto & Formulario
            contact_title: "Start your transformation",
            contact_desc: "Fill out the form and we will reach out to schedule your free Feasibility Audit.",
            contact_benefit1: "Response in less than 24 hours",
            contact_benefit2: "Personalized consulting",
            contact_benefit3: "Strict confidentiality",

            form_name_label: "Full Name",
            form_name_placeholder: "e.g. John Doe",
            form_company_label: "Company",
            form_company_placeholder: "Your Company Inc.",
            form_phone_label: "Phone / WhatsApp",
            form_phone_placeholder: "+1 (555) 000-0000",
            form_requirement_label: "Service Requirement",
            form_requirement_placeholder: "Briefly tell us what process you wish to automate...",
            form_submit_btn: "Send Request",

            // Feedback del formulario
            feedback_required: "Please complete all fields.",
            feedback_success: "Request sent successfully! We will get in touch soon.",
            feedback_error: "There was an error sending your request. Please try again later or contact us via WhatsApp.",

            // Footer & Floating
            footer_contact: "Contact us:",
            footer_rights: "&copy; 2026 PM Help. All rights reserved.",
            whatsapp_aria: "Contact on WhatsApp",
            lang_toggle_tooltip: "Switch language to Spanish (ESP)"
        }
    };

    // Subtítulos cronometrados para el video 'PM Help IA Solutions.mp4'
    const videoSubtitles = {
        en: [
            { start: 0.0, end: 2.4, text: "Slow processes and too much manual work?" },
            { start: 2.4, end: 4.8, text: "With PM Help, transform your business with AI." },
            { start: 4.8, end: 8.0, text: "PM HELP. Turn your processes into intelligence. Start today!" }
        ],
        es: [
            { start: 0.0, end: 2.4, text: "¿Procesos lentos y demasiado trabajo manual?" },
            { start: 2.4, end: 4.8, text: "Con PM Help, transforma tu empresa con IA." },
            { start: 4.8, end: 8.0, text: "PM HELP. Convierte tus procesos en inteligencia. ¡Empieza hoy!" }
        ]
    };

    let currentLang = 'es';
    let subtitleMode = 'auto'; // 'auto' (sigue el idioma de la página), 'en', 'es', 'off'

    try {
        const saved = localStorage.getItem('pm_help_lang');
        if (saved === 'es' || saved === 'en') {
            currentLang = saved;
        }
    } catch (e) {
        console.warn("Storage local no accesible:", e);
    }

    function getLanguage() {
        return currentLang;
    }

    function t(key) {
        if (translations[currentLang] && translations[currentLang][key]) {
            return translations[currentLang][key];
        }
        return translations.es[key] || key;
    }

    function setLanguage(lang) {
        if (lang !== 'es' && lang !== 'en') return;
        currentLang = lang;
        try {
            localStorage.setItem('pm_help_lang', lang);
        } catch (e) {}

        if (document.documentElement) {
            document.documentElement.lang = lang;
        }

        // Título de la pestaña
        if (translations[currentLang] && translations[currentLang].page_title) {
            document.title = translations[currentLang].page_title;
        }

        // Textos normales
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translated = t(key);
            if (translated) el.textContent = translated;
        });

        // Textos con HTML
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const translated = t(key);
            if (translated) el.innerHTML = translated;
        });

        // Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translated = t(key);
            if (translated) el.placeholder = translated;
        });

        // Atributos aria
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            const translated = t(key);
            if (translated) el.setAttribute('aria-label', translated);
        });

        // Atributos title
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const translated = t(key);
            if (translated) el.setAttribute('title', translated);
        });

        // Actualizar badges visuales del botón (ESP / EN)
        updateButtonUI(lang);

        // Sincronizar subtítulos del video con el idioma
        updateVideoSubtitles();

        // Notificar cambio
        try {
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
        } catch (e) {}
    }

    function toggleLanguage() {
        const next = currentLang === 'es' ? 'en' : 'es';
        setLanguage(next);
    }

    function updateButtonUI(lang) {
        const espBadge = document.getElementById('langEspBadge');
        const enBadge = document.getElementById('langEnBadge');
        const toggleBtn = document.getElementById('langToggleBtn');

        if (espBadge && enBadge) {
            if (lang === 'es') {
                espBadge.className = 'px-2 py-0.5 rounded-full text-white bg-navy shadow-sm font-bold transition-all duration-200';
                enBadge.className = 'px-2 py-0.5 rounded-full text-slate-500 hover:text-navy font-semibold transition-all duration-200';
            } else {
                espBadge.className = 'px-2 py-0.5 rounded-full text-slate-500 hover:text-navy font-semibold transition-all duration-200';
                enBadge.className = 'px-2 py-0.5 rounded-full text-white bg-navy shadow-sm font-bold transition-all duration-200';
            }
        }

        if (toggleBtn) {
            const tip = t('lang_toggle_tooltip');
            toggleBtn.setAttribute('title', tip);
            toggleBtn.setAttribute('aria-label', tip);
        }
    }

    // Lógica de subtítulos sincronizados del video
    function getEffectiveSubtitleLang() {
        if (subtitleMode === 'off') return null;
        if (subtitleMode === 'en') return 'en';
        if (subtitleMode === 'es') return 'es';
        // En modo 'auto': si la página está en inglés, mostramos subtítulos en inglés.
        // Si la página está en español, el video ya tiene subtítulos nativos en español, por lo que no es necesario el overlay (o se puede activar).
        return currentLang === 'en' ? 'en' : null;
    }

    function updateVideoSubtitles() {
        const overlay = document.getElementById('videoSubtitleOverlay');
        const textEl = document.getElementById('videoSubtitleText');
        const video = document.getElementById('solutionVideo');
        const ccBtn = document.getElementById('videoCcBtn');
        const ccLabel = document.getElementById('videoCcLabel');

        if (!video) return;

        const eff = getEffectiveSubtitleLang();

        // Actualizar visual del botón CC
        if (ccBtn && ccLabel) {
            if (eff === 'en') {
                ccLabel.textContent = 'CC: EN';
                ccBtn.className = 'absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold text-navy font-bold text-xs shadow-lg transition-all cursor-pointer';
            } else if (eff === 'es' || (subtitleMode === 'auto' && currentLang === 'es')) {
                ccLabel.textContent = 'CC: ESP';
                ccBtn.className = 'absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy/85 text-white font-semibold text-xs shadow-md border border-white/20 transition-all cursor-pointer';
            } else {
                ccLabel.textContent = 'CC: OFF';
                ccBtn.className = 'absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 text-slate-400 font-medium text-xs shadow-sm border border-white/10 transition-all cursor-pointer';
            }
        }

        // Actualizar overlay según currentTime
        if (!overlay || !textEl) return;
        if (!eff) {
            overlay.classList.add('hidden');
            return;
        }

        const t = video.currentTime;
        const cues = videoSubtitles[eff] || [];
        const cue = cues.find(c => t >= c.start && t < c.end);

        if (cue) {
            textEl.textContent = cue.text;
            overlay.classList.remove('hidden');
        } else {
            overlay.classList.add('hidden');
        }
    }

    function initVideoSubtitles() {
        const video = document.getElementById('solutionVideo');
        const ccBtn = document.getElementById('videoCcBtn');

        if (!video) return;

        // Escuchar timeupdate para refrescar el texto
        video.addEventListener('timeupdate', updateVideoSubtitles);
        video.addEventListener('seeking', updateVideoSubtitles);
        video.addEventListener('seeked', updateVideoSubtitles);
        video.addEventListener('ended', () => {
            const overlay = document.getElementById('videoSubtitleOverlay');
            if (overlay) overlay.classList.add('hidden');
        });

        // Botón CC interactivo
        if (ccBtn) {
            ccBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Ciclo: auto -> en -> es -> off -> auto
                if (subtitleMode === 'auto') {
                    subtitleMode = currentLang === 'en' ? 'off' : 'en';
                } else if (subtitleMode === 'en') {
                    subtitleMode = 'es';
                } else if (subtitleMode === 'es') {
                    subtitleMode = 'off';
                } else {
                    subtitleMode = 'en';
                }
                updateVideoSubtitles();
            });
        }

        updateVideoSubtitles();
    }

    function initAnimations() {
        document.documentElement.classList.add('js-anim-ready');
        const elements = document.querySelectorAll('.fade-in');
        if (!elements.length) return;

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        obs.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                margin: '0px',
                threshold: 0.1
            });

            elements.forEach(el => {
                observer.observe(el);
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('visible');
                }
            });
        } else {
            elements.forEach(el => el.classList.add('visible'));
        }
    }

    function initI18n() {
        const toggleBtn = document.getElementById('langToggleBtn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                const espTarget = e.target.closest('#langEspBadge');
                const enTarget = e.target.closest('#langEnBadge');

                if (espTarget && currentLang !== 'es') {
                    setLanguage('es');
                } else if (enTarget && currentLang !== 'en') {
                    setLanguage('en');
                } else {
                    toggleLanguage();
                }
            });
        }

        // Aplicar idioma
        setLanguage(currentLang);

        // Inicializar animaciones de forma segura
        initAnimations();

        // Inicializar subtítulos del video
        initVideoSubtitles();
    }

    // Exponer API global
    window.PMHelpI18n = {
        translations,
        videoSubtitles,
        getLanguage,
        setLanguage,
        toggleLanguage,
        t,
        initI18n,
        updateVideoSubtitles
    };

    // Auto-inicialización robusta
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initI18n);
    } else {
        initI18n();
    }
})();
