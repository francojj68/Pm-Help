// i18n.js - Sistema de Internacionalización PM Help (Español / Inglés)
// Compatible con ejecución local (file://) y servidores web (http/https)

(function () {
    const translations = {
        es: {
            page_title: "PM Help | Agencia de Inteligencia Artificial en Colombia | Consultoría de IA y Desarrollo Web",
            nav_contact: "Contacto",
            nav_cases: "Casos de Éxito",
            nav_services: "Servicios",
            video_fallback: "Tu navegador no soporta el formato de video.",
            
            // Hero
            hero_badge: "Agencia de Inteligencia Artificial en Colombia",
            hero_title: "Agencia de Inteligencia Artificial en Colombia: Automatizamos los Procesos Críticos y el Desarrollo Web de tu Empresa en 30 Días",
            hero_subtitle: 'Liberamos hasta un 40% del tiempo de tu equipo y aceleramos tus ventas integrando <span class="font-semibold text-navy">Agentes de IA</span>, flujos de automatización y <span class="font-semibold text-navy">desarrollo web de alta conversión</span>, respaldados por nuestra <span class="font-semibold text-navy">Metodología de Adopción Asegurada</span>.',
            hero_premise_title: "La premisa:",
            hero_premise_text: "La IA no sustituye el talento humano; potencia a los equipos para alcanzar un rendimiento superior. Detecta patrones, automatiza la fricción operativa y recupera el tiempo estratégico de tu empresa.",
            hero_cta: "Agendar Auditoría de Viabilidad (Sin Costo)",
            hero_cta_secondary: "Ver Caso de Éxito Inmobiliario",
            hero_trust1: "Implementación en 30 Días",
            hero_trust2: "Garantía de Adopción Total",
            hero_trust3: "Soporte Especializado en Colombia",
            hero_video_tag: "Tecnología & Estrategia",
            hero_video_title: "PM Help IA en Acción",

            // Problema / Agitación
            problem_tag: "El Diagnóstico Operativo",
            problem_title: "Consultoría de IA y Automatización: El costo de operar sin evolución digital",
            problem_card1_title: "Equipo saturado de trabajo manual",
            problem_card1_desc: "Procesos repetitivos que queman el talento humano y reducen la motivación, limitando la innovación y la escalabilidad.",
            problem_card2_title: "Datos y sistemas desconectados",
            problem_card2_desc: "Pérdida de visibilidad e ineficiencia comercial provocada por herramientas aisladas que no se comunican en tiempo real.",
            problem_card3_title: "Falta de tiempo estratégico",
            problem_card3_desc: "Directivos y líderes comerciales atrapados en la rutina diaria en lugar de enfocarse en cerrar negocios y hacer crecer la compañía.",

            // Solución
            solution_tag: "El Verdadero Cuello de Botella",
            solution_title: 'El gran obstáculo en la implementación de IA no es la tecnología en sí, sino el <strong class="font-bold">fracaso de adopción por falta de gestión.</strong>',
            solution_desc: 'La aplicación rigurosa de nuestros <span class="text-white font-medium">Marcos de Entrega de Alta Precisión</span> y estructuras ágiles —basados en las mejores prácticas de excelencia del sector— garantiza que la tecnología se integre verdaderamente en los procesos diarios, logrando una adopción exitosa y sin fricciones.',

            // Video intermedio
            video_title: "Inteligencia Artificial y Automatización en Acción: Cómo Transformamos tu Operación",
            video_cc_tooltip: "Alternar subtítulos en inglés / español",

            // Servicios / Ruta
            services_tag: "Nuestra Especialidad",
            services_title: "Servicios de IA y Desarrollo Web: Nuestra Ruta hacia la Automatización Integral",
            services_step1_title: "Auditoría Estratégica de Procesos e IA",
            services_step1_desc: "Evaluamos meticulosamente tus flujos operativos actuales para identificar los cuellos de botella y las oportunidades de automatización con mayor retorno sobre la inversión (ROI).",
            services_step2_title: "Automatización Operativa de Flujos",
            services_step2_desc: "Diseñamos e interconectamos flujos automatizados de extremo a extremo, asumiendo tareas manuales repetitivas y liberando de inmediato tiempo valioso de tu equipo.",
            services_step3_title: "Agentes de IA Inteligentes y Asistentes 24/7",
            services_step3_desc: "Implementamos asistentes virtuales y agentes autónomos entrenados con el contexto y datos de tu empresa, capaces de atender clientes, responder consultas y ejecutar tareas complejas.",
            services_step4_title: "Desarrollo Web de Alta Conversión y Ecosistemas con IA",
            services_step4_desc: "Diseñamos y desarrollamos sitios web, landing pages y plataformas digitales de alto impacto para captación, integradas nativamente con Agentes de Inteligencia Artificial, WhatsApp y tu CRM para convertir visitantes en clientes en piloto automático.",

            // Casos de Impacto Real (Prueba Social)
            case_tag: "Prueba Social & Resultados Comprobados",
            case_title: "Casos de Impacto Real: Consultoría de IA en Colombia",
            case_subtitle: "Descubre cómo un ecosistema web con Agente de IA transformó la captación y cualificación de clientes en el sector inmobiliario.",
            case_badge: "Sector Inmobiliario & Proptech",
            case_project_title: "Ecosistema Web de Alta Conversión + Agente de Inteligencia Artificial para Captación Inmobiliaria",
            case_challenge_title: "El Desafío",
            case_challenge_desc: "La empresa perdía más del 50% de sus prospectos digitales debido a tiempos de respuesta tardíos fuera de horario de oficina. Su sitio web tradicional no filtraba el presupuesto, zona de interés ni intención real de compra, saturando a los asesores comerciales con leads no cualificados.",
            case_solution_title: "La Solución PM Help",
            case_solution_desc: "Diseñamos y desarrollamos una landing page ultrarrápida optimizada para conversión, integrada nativamente con un Agente de Inteligencia Artificial disponible 24/7 en WhatsApp y Web. El agente perfila automáticamente al comprador/arrendatario en segundos y agenda citas directamente en el calendario del equipo comercial.",
            case_metric1_val: "< 30 seg",
            case_metric1_label: "Tiempo medio de respuesta automática 24/7",
            case_metric2_val: "+65%",
            case_metric2_label: "Aumento en conversión de leads calificados",
            case_metric3_val: "35 hrs/mes",
            case_metric3_label: "Ahorradas por asesor en filtrado manual",
            case_metric4_val: "30 Días",
            case_metric4_label: "Desde el diseño hasta el despliegue funcional",
            case_quote: '"Con la landing page y el agente de IA desarrollados por PM Help, pasamos de perder prospectos por la noche y fines de semana a cualificarlos y agendarlos en segundos. El impacto en ventas fue inmediato."',
            case_author: "— Gerencia Comercial, Proyecto Inmobiliario",
            case_cta: "Quiero un Ecosistema Similar para mi Negocio",

            // Autoridad
            authority_quote: '"Llevamos trabajando 10 años en proyectos de tecnología. Desde hace 5 años lideramos el desarrollo y gestión de proyectos complejos de inteligencia artificial, garantizando una <strong class="text-gold">Gobernanza Ágil de Proyectos</strong> que realmente funciona."',

            // Contacto & Formulario
            contact_tag: "Agencia de IA en Colombia",
            contact_title: "Inicia tu transformación con IA",
            contact_desc: "Completa el formulario y un especialista de PM Help se pondrá en contacto contigo para agendar tu Auditoría de Viabilidad sin costo.",
            contact_benefit1: "Respuesta garantizada en menos de 24 horas",
            contact_benefit2: "Diagnóstico personalizado para tu sector",
            contact_benefit3: "Absoluta confidencialidad y asesoría experta",

            form_name_label: "Nombre Completo",
            form_name_placeholder: "Ej. Juan Pérez",
            form_company_label: "Empresa",
            form_company_placeholder: "Tu Empresa S.A.S",
            form_phone_label: "Teléfono / WhatsApp",
            form_phone_placeholder: "+57 300 000 0000",
            form_requirement_label: "¿Qué proceso o ecosistema web deseas transformar?",
            form_requirement_placeholder: "Cuéntanos sobre tu empresa, si buscas desarrollo web con IA, automatización o agentes inteligentes...",
            form_submit_btn: "Solicitar Auditoría de Viabilidad Gratuita",

            // Feedback del formulario
            feedback_required: "Por favor, completa todos los campos requeridos.",
            feedback_success: "¡Solicitud enviada con éxito! Nos pondremos en contacto en menos de 24 horas.",
            feedback_error: "Hubo un error al enviar tu solicitud. Inténtalo más tarde o escríbenos directamente a WhatsApp.",

            // Widget Agente IA
            agent_badge: "En línea",
            agent_launcher: "Asistente IA",
            agent_title: "Asistente Virtual PM Help",
            agent_subtitle: "Especialista en IA & Desarrollo Web en Colombia",
            agent_welcome: "¡Hola! 👋 Soy el Agente de Inteligencia Artificial de **PM Help** en Colombia. Puedo explicarte cómo automatizamos tus procesos en 30 días, cómo desarrollamos ecosistemas web con IA o agendar tu auditoría gratuita. ¿Cómo puedo ayudarte?",
            agent_chip1: "⚡ ¿Cómo funciona la garantía de 30 días?",
            agent_chip2: "🌐 Desarrollo Web de Alta Conversión",
            agent_chip3: "🏢 Caso de Éxito Inmobiliario",
            agent_chip4: "📋 Agendar Auditoría Gratis",
            agent_placeholder: "Pregunta sobre nuestros servicios de IA...",
            agent_send: "Enviar",
            agent_human_cta: "Hablar con un consultor en WhatsApp",

            // Footer & Floating
            footer_contact: "Contáctanos:",
            footer_rights: "&copy; 2026 PM Help IA Solutions. Todos los derechos reservados. Colombia.",
            whatsapp_aria: "Contactar por WhatsApp a PM Help",
            lang_toggle_tooltip: "Cambiar idioma a Inglés (EN)"
        },
        en: {
            page_title: "PM Help | Artificial Intelligence Agency in Colombia | AI Consulting & Web Development",
            nav_contact: "Contact",
            nav_cases: "Case Studies",
            nav_services: "Services",
            video_fallback: "Your browser does not support the video format.",

            // Hero
            hero_badge: "Artificial Intelligence Agency in Colombia",
            hero_title: "Artificial Intelligence Agency in Colombia: We Automate Your Critical Processes and Web Development in 30 Days",
            hero_subtitle: 'We free up to 40% of your team\'s time and accelerate your sales by integrating <span class="font-semibold text-navy">AI Agents</span>, workflow automation, and <span class="font-semibold text-navy">high-converting web development</span>, backed by our <span class="font-semibold text-navy">Guaranteed Adoption Methodology</span>.',
            hero_premise_title: "The premise:",
            hero_premise_text: "AI does not replace human talent; it empowers teams to achieve superior performance. It detects patterns, automates operational friction, and reclaims your company's strategic focus.",
            hero_cta: "Schedule Free Feasibility Audit",
            hero_cta_secondary: "View Real Estate Case Study",
            hero_trust1: "30-Day Implementation",
            hero_trust2: "Full Adoption Guarantee",
            hero_trust3: "Specialized Local Support in Colombia",
            hero_video_tag: "Technology & Strategy",
            hero_video_title: "PM Help AI in Action",

            // Problema / Agitación
            problem_tag: "Operational Diagnostic",
            problem_title: "AI Consulting & Automation: The cost of operating without digital evolution",
            problem_card1_title: "Team overwhelmed by manual work",
            problem_card1_desc: "Repetitive processes that burn out human talent and reduce motivation, limiting innovation and scalability.",
            problem_card2_title: "Disconnected data and tools",
            problem_card2_desc: "Loss of visibility and commercial inefficiency caused by isolated systems that don't communicate in real time.",
            problem_card3_title: "Lack of strategic time",
            problem_card3_desc: "Executives and sales leaders trapped in daily chores instead of focusing on closing deals and scaling the company.",

            // Solución
            solution_tag: "The Real Bottleneck",
            solution_title: 'The major hurdle in AI implementation is not the technology itself, but the <strong class="font-bold">failure of adoption due to lack of management.</strong>',
            solution_desc: 'The rigorous application of our <span class="text-white font-medium">High-Precision Delivery Frameworks</span> and agile structures —based on industry-leading best practices— ensures that technology is truly integrated into daily operations, achieving successful and frictionless adoption.',

            // Video intermedio
            video_title: "Artificial Intelligence and Automation in Action: How We Transform Your Operation",
            video_cc_tooltip: "Toggle English / Spanish subtitles",

            // Servicios / Ruta
            services_tag: "Our Expertise",
            services_title: "AI & Web Development Services: Our Roadmap to Complete Automation",
            services_step1_title: "Strategic Process & AI Audit",
            services_step1_desc: "We meticulously assess your current operational workflows to pinpoint bottlenecks and high-ROI automation opportunities.",
            services_step2_title: "Operational Workflow Automation",
            services_step2_desc: "We design and interconnect end-to-end automated workflows, taking over repetitive manual work and immediately freeing up your team's valuable hours.",
            services_step3_title: "Intelligent AI Agents & 24/7 Virtual Assistants",
            services_step3_desc: "We deploy custom virtual assistants and autonomous agents trained on your business data, ready to handle clients, answer inquiries, and execute complex workflows.",
            services_step4_title: "High-Converting Web Development & AI Ecosystems",
            services_step4_desc: "We design and build high-impact websites, landing pages, and lead capture funnels natively integrated with AI Agents, WhatsApp, and CRM to convert visitors into clients on autopilot.",

            // Casos de Impacto Real (Prueba Social)
            case_tag: "Social Proof & Proven Track Record",
            case_title: "Real Impact Case Studies: AI Consulting in Colombia",
            case_subtitle: "Discover how an AI-powered web ecosystem revolutionized lead capture and qualification in the real estate sector.",
            case_badge: "Real Estate & Proptech Sector",
            case_project_title: "High-Converting Web Ecosystem + AI Agent for Real Estate Lead Qualification",
            case_challenge_title: "The Challenge",
            case_challenge_desc: "The real estate firm lost over 50% of digital leads due to slow response times outside business hours. Their legacy website did not qualify budget, preferred locations, or buying intent, overwhelming sales advisors with unqualified contacts.",
            case_solution_title: "The PM Help Solution",
            case_solution_desc: "We engineered an ultra-fast high-converting landing page natively connected to a 24/7 AI Agent on WhatsApp and Web. The agent profiles buyer criteria in seconds and books tours directly into the sales team's calendar.",
            case_metric1_val: "< 30 sec",
            case_metric1_label: "24/7 automatic response time",
            case_metric2_val: "+65%",
            case_metric2_label: "Increase in qualified lead conversions",
            case_metric3_val: "35 hrs/mo",
            case_metric3_label: "Saved per sales advisor in manual screening",
            case_metric4_val: "30 Days",
            case_metric4_label: "From blueprint to full production deployment",
            case_quote: '"With PM Help\'s landing page and AI agent, we went from losing evening and weekend leads to qualifying and scheduling them within seconds. The sales boost was immediate."',
            case_author: "— Commercial Directorate, Real Estate Project",
            case_cta: "I Want a Similar Ecosystem for My Business",

            // Autoridad
            authority_quote: '"We have been working on technology projects for 10 years. For the past 5 years, we have been leading the development and management of complex artificial intelligence projects, ensuring <strong class="text-gold">Agile Project Governance</strong> that truly works."',

            // Contacto & Formulario
            contact_tag: "AI Agency in Colombia",
            contact_title: "Start Your AI Transformation",
            contact_desc: "Fill out the form and a PM Help specialist will reach out to schedule your free Feasibility Audit.",
            contact_benefit1: "Guaranteed response in under 24 hours",
            contact_benefit2: "Custom diagnosis for your industry",
            contact_benefit3: "Strict confidentiality & expert guidance",

            form_name_label: "Full Name",
            form_name_placeholder: "e.g. John Doe",
            form_company_label: "Company",
            form_company_placeholder: "Your Company Inc.",
            form_phone_label: "Phone / WhatsApp",
            form_phone_placeholder: "+57 300 000 0000",
            form_requirement_label: "Which process or web ecosystem do you wish to transform?",
            form_requirement_placeholder: "Tell us about your business, if you are looking for AI web development, workflow automation, or intelligent agents...",
            form_submit_btn: "Request Free Feasibility Audit",

            // Feedback del formulario
            feedback_required: "Please complete all required fields.",
            feedback_success: "Request sent successfully! We will get in touch in less than 24 hours.",
            feedback_error: "There was an error sending your request. Please try again later or reach out directly via WhatsApp.",

            // Widget Agente IA
            agent_badge: "Online",
            agent_launcher: "AI Assistant",
            agent_title: "PM Help Virtual Assistant",
            agent_subtitle: "Specialist in AI & Web Development in Colombia",
            agent_welcome: "Hello! 👋 I am the AI Assistant of **PM Help** in Colombia. I can show you how we automate your business in 30 days, build high-converting AI web ecosystems, or schedule your free audit. How can I help you today?",
            agent_chip1: "⚡ How does the 30-day guarantee work?",
            agent_chip2: "🌐 High-Converting Web Development",
            agent_chip3: "🏢 Real Estate Case Study",
            agent_chip4: "📋 Schedule Free Audit",
            agent_placeholder: "Ask about our AI services...",
            agent_send: "Send",
            agent_human_cta: "Chat with a consultant on WhatsApp",

            // Footer & Floating
            footer_contact: "Contact us:",
            footer_rights: "&copy; 2026 PM Help AI Solutions. All rights reserved. Colombia.",
            whatsapp_aria: "Contact PM Help on WhatsApp",
            lang_toggle_tooltip: "Switch language to Spanish (ESP)"
        }
    };

    // Subtítulos cronometrados para el video de soluciones
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

        video.addEventListener('timeupdate', updateVideoSubtitles);
        video.addEventListener('seeking', updateVideoSubtitles);
        video.addEventListener('seeked', updateVideoSubtitles);
        video.addEventListener('ended', () => {
            const overlay = document.getElementById('videoSubtitleOverlay');
            if (overlay) overlay.classList.add('hidden');
        });

        if (ccBtn) {
            ccBtn.addEventListener('click', (e) => {
                e.stopPropagation();
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

        setLanguage(currentLang);
        initAnimations();
        initVideoSubtitles();
    }

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

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initI18n);
    } else {
        initI18n();
    }
})();