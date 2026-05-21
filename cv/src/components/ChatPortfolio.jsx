import React, { useState, useRef, useEffect } from 'react';

const ChatPortfolio = () => {
  // ==========================================
  // ESTADOS (STATES)
  // ==========================================
  const [messages, setMessages] = useState([{ id: 1, sender: 'ai', isInitialAboutMe: true }]);
  const [inputValue, setInputValue] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const [showSettings, setShowSettings] = useState(false);
  const [lang, setLang] = useState('es'); 
  const [theme, setTheme] = useState('bg-[#282a2c]'); 
  const [profileType, setProfileType] = useState('dev'); // 'dev' (Programador) o 'it' (Técnico/Telecom)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showSettings]);

  // ==========================================
  // DICCIONARIOS DE TRADUCCIÓN
  // ==========================================
  const t = {
    es: {
      newChat: "Nuevo chat",
      recent: "Recientes",
      emptyHistory: "Tu historial aparecerá aquí.",
      placeholder: "Preguntar a Mauro_AI",
      disclaimer: "Mauro_AI es una IA interactiva basada en React.",
      settings: "Configuración",
      language: "Idioma",
      accentColor: "Color de Acento",
      profileSelect: "Perfil Profesional",
      close: "Cerrar",
      
      // Textos dinámicos del "Acerca de mi" inicial
      aboutTitle: "¡Hola! Soy Mauro Ezequiel Gorosito",
      aboutDescDev: "Soy Técnico en Programación y Estudiante de Análisis de Sistemas radicado en Córdoba. Me apasiona el desarrollo de software y la creación de soluciones fullstack escalables.",
      aboutDescIT: "Soy Analista de Sistemas especializado en Infraestructura y Telecomunicaciones. Me apasiona administrar redes, configurar equipos y garantizar la continuidad operativa de sistemas críticos.",
      aboutProfile: "Mi perfil destacado:",
      
      aboutDev1: "Desarrollo Web: Frontend con ReactJS, JavaScript y Backend con Node.js, Django, C# y Python.",
      aboutDev2: "Bases de Datos & Versionado: Experiencia con MySQL, Firebase, MongoDB, Git y GitHub.",
      
      aboutIT1: "Mesa de Ayuda & Soporte: Nivel 1 y 2 en Ministerio de Salud, gestión de Active Directory, CRM y políticas de seguridad (IAM).",
      aboutIT2: "Telecomunicaciones & Redes: Configuración de routers Cisco, armado de cables, cableado estructurado, telefonía IP y administración de redes.",
      
      aboutPrompt: "Elegí una opción abajo, o preguntame sobre mi experiencia...",
      
      // Respuestas dinámicas
      respGreetings: "¡Hola! Qué bueno verte por acá. Soy Mauro_AI. ¿En qué te puedo ayudar hoy? Podés elegir una opción o preguntarme directamente.",
      respIdentity: "Me llamo Mauro Ezequiel Gorosito, vivo en Córdoba. Soy estudiante de Análisis de Sistemas y me adapto tanto al código como al hardware.",
      
      respSkillsDev: "Acá tenés mi stack tecnológico enfocado en desarrollo de software:",
      respSkillsIT: "Acá tenés mis herramientas y tecnologías enfocadas en Infraestructura, Telecomunicaciones y Soporte:",
      
      respStudies: "Soy egresado como **Técnico en Programación** (IPET 57) y actualmente curso **Analista de Sistemas** en la Institución Cervantes. También tengo conocimientos en Metodologías Ágiles (Scrum/Kanban) e Inglés Técnico.",
      
      respExperienceDev: "Tengo +2 años de experiencia combinada. He participado en proyectos de software y actualmente trabajo en el **Ministerio de Salud**, donde también aplico mis conocimientos analíticos para optimizar la carga de datos y sistemas provinciales.",
      respExperienceIT: "Tengo sólida experiencia en el área:\n\n• **Ministerio de Salud (2026-Actual):** Resolución de incidencias nivel 1 y 2, gestión de usuarios (IAM) y control de accesos.\n• **Consultores de Empresas (2025):** Soporte de servidores, Active Directory, telefonía IP y mejoras en cableado estructurado (reduje 15% los tiempos de respuesta).\n• **25 Watts (2024):** Mantenimiento preventivo, hardware y redes.",
      
      fallback: "No entendí muy bien. Puedo mostrarte mis **proyectos**, mi **stack/habilidades**, mis **estudios**, o mi información de **contacto**.",
      
      btnProjects: "Proyectos",
      btnSkills: "Habilidades",
      btnStudies: "Estudios",
      btnExperience: "Experiencia",
      btnContact: "Contacto",
      btnTelecom: "Telecomunicaciones"
    },
    en: {
      newChat: "New chat",
      recent: "Recent",
      emptyHistory: "Your history will appear here.",
      placeholder: "Ask Mauro_AI",
      disclaimer: "Mauro_AI is an interactive AI based on React.",
      settings: "Settings",
      language: "Language",
      accentColor: "Accent Color",
      profileSelect: "Professional Profile",
      close: "Close",
      
      aboutTitle: "Hi! I'm Mauro Ezequiel Gorosito",
      aboutDescDev: "I'm a Programming Technician and Systems Analysis Student based in Córdoba. I am passionate about software development and scalable fullstack solutions.",
      aboutDescIT: "I am a Systems Analyst specialized in IT Infrastructure and Telecommunications. I love managing networks, configuring routers, and ensuring system uptime.",
      aboutProfile: "My highlighted profile:",
      
      aboutDev1: "Web Development: Frontend with ReactJS, JavaScript, and Backend with Node.js, Django, C#, and Python.",
      aboutDev2: "Databases & Versioning: Experience with MySQL, Firebase, MongoDB, Git, and GitHub.",
      
      aboutIT1: "Help Desk & Support: Level 1 and 2 at the Ministry of Health, Active Directory, CRM, and security policies (IAM).",
      aboutIT2: "Telecommunications & Networks: Cisco router configuration, structured cabling, IP telephony, and network administration.",
      
      aboutPrompt: "Choose an option below, or ask me about my experience...",
      
      respGreetings: "Hello! Great to see you here. I'm Mauro_AI. How can I help you today?",
      respIdentity: "My name is Mauro Ezequiel Gorosito, I live in Córdoba. I am a Systems Analysis student adapting to both code and hardware.",
      
      respSkillsDev: "Here is my tech stack focused on software development:",
      respSkillsIT: "Here are my tools and technologies focused on Infrastructure, Telecom, and Support:",
      
      respStudies: "I graduated as a **Programming Technician** (IPET 57) and currently studying **Systems Analysis** at Institución Cervantes.",
      
      respExperienceDev: "I have +2 years of combined experience. I've participated in software projects and currently work at the **Ministry of Health** optimizing data loads and systems.",
      respExperienceIT: "Solid experience in IT:\n\n• **Ministry of Health (2026-Present):** L1/L2 incidents, IAM, access control.\n• **Consultores de Empresas (2025):** Servers, Active Directory, IP Telephony, cabling (reduced response times by 15%).\n• **25 Watts (2024):** Hardware & network maintenance.",
      
      fallback: "I didn't quite catch that. I can show you my **projects**, my **skills**, my **studies**, or my **contact** info.",
      
      btnProjects: "Projects",
      btnSkills: "Skills",
      btnStudies: "Studies",
      btnExperience: "Experience",
      btnContact: "Contact",
      btnTelecom: "Telecommunications"
    }
  };

  // ==========================================
  // LISTAS DE HABILIDADES POR PERFIL
  // ==========================================
  const devSkills = [
    { id: 'js', name: 'JavaScript', color: 'hover:border-[#F7DF1E]', icon: <svg className="w-5 h-5 text-[#F7DF1E]" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.27 17.48h-1.63v-3.79l-2.48-5.71h1.76l1.54 4.09 1.5-4.09h1.73l-2.42 5.71v3.79zm7.16 0h-1.68v-3.52c0-1.42-.8-1.89-1.89-1.89-.96 0-1.61.64-1.74 1.45l-1.57-.32c.28-1.55 1.63-2.6 3.39-2.6 1.94 0 3.49.95 3.49 3.12v3.76z"/></svg> },
    { id: 'react', name: 'ReactJS', color: 'hover:border-[#61DAFB]', icon: <svg className="w-5 h-5 text-[#61DAFB]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22.61C6.15 22.61 1.39 17.85 1.39 12S6.15 1.39 12 1.39 22.61 6.15 22.61 12 17.85 22.61 12 22.61zM12 2.39C6.7 2.39 2.39 6.7 2.39 12S6.7 21.61 12 21.61 21.61 17.3 21.61 12 17.3 2.39 12 2.39z"/><path d="M12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-6c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"/></svg> },
    { id: 'python', name: 'Python', color: 'hover:border-[#3776AB]', icon: <svg className="w-5 h-5 text-[#3776AB]" fill="currentColor" viewBox="0 0 24 24"><path d="M11.94 1.25c-5.83 0-5.5 2.5-5.5 2.5l-.01 2.76h5.63v.8H5.09s-2.88.08-2.88 3.65c0 3.58 2.5 3.73 2.5 3.73h1.76v-2.56s-.06-3.08 3.01-3.08h3.84s2.83.05 2.83-2.73V3.62s.15-2.37-4.21-2.37zm-.92 1.63c.4 0 .73.33.73.74 0 .4-.33.73-.73.73-.41 0-.74-.33-.74-.73 0-.41.33-.74.74-.74zm7.89 6.2c0-3.58-2.5-3.73-2.5-3.73h-1.76v2.56s.06 3.08-3.01 3.08h-3.84s-2.83-.05-2.83 2.73v2.7s-.15 2.37 4.21 2.37c5.83 0 5.5-2.5 5.5-2.5l.01-2.76h-5.63v-.8h6.97s2.88-.08 2.88-3.65zm-6.97 7.04c.41 0 .74.33.74.73 0 .4-.33.74-.74.74-.4 0-.73-.34-.73-.74 0-.4.33-.73.73-.73z"/></svg> },
    { id: 'csharp', name: 'C#', color: 'hover:border-[#239120]', icon: <span className="text-[#239120] font-bold text-sm">C#</span> },
    { id: 'mysql', name: 'MySQL', color: 'hover:border-[#4479A1]', icon: <svg className="w-5 h-5 text-[#4479A1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" /></svg> },
    { id: 'git', name: 'Git & GitHub', color: 'hover:border-[#F05032]', icon: <svg className="w-5 h-5 text-[#e3e3e3]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
    { id: 'django', name: 'Django / Node', color: 'hover:border-[#092E20]', icon: <svg className="w-5 h-5 text-[#44B78B]" fill="currentColor" viewBox="0 0 24 24"><path d="M11.4 5.34v9.85H9.28V5.34h2.12zm3.32 0v7.62c0 1.25.7 1.83 1.86 1.83 1.09 0 1.76-.57 1.76-1.74V5.34h2.12v7.7c0 2.35-1.5 3.65-3.8 3.65-2.38 0-3.84-1.32-3.84-3.58V5.34h1.9zm-8.87 0v9.85H3.72V5.34h2.13z"/></svg> }
  ];

  const itSkills = [
    { id: 'linux', name: 'Linux', color: 'hover:border-[#FCC624]', icon: <span className="text-[#FCC624] font-bold text-sm">🐧</span> },
    { id: 'redes', name: 'Redes & IP', color: 'hover:border-[#00BCEB]', icon: <svg className="w-5 h-5 text-[#00BCEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg> },
    { id: 'cisco', name: 'Cisco / Routers', color: 'hover:border-[#1BA0D7]', icon: <span className="text-[#1BA0D7] font-bold text-sm">🖧</span> },
    { id: 'ad', name: 'Active Directory', color: 'hover:border-[#0078D7]', icon: <span className="text-[#0078D7] font-bold text-sm">AD</span> },
    { id: 'crm', name: 'CRM & Profit', color: 'hover:border-[#FF9900]', icon: <svg className="w-5 h-5 text-[#FF9900]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg> },
    { id: 'hardware', name: 'Armado de Cables', color: 'hover:border-[#e3e3e3]', icon: <span className="text-[#e3e3e3] font-bold text-sm">🔌</span> },
    { id: 'helpdesk', name: 'Help Desk N1/N2', color: 'hover:border-[#47A248]', icon: <svg className="w-5 h-5 text-[#47A248]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg> }
  ];

  // ==========================================
  // CEREBRO BILINGÜE Y MULTI-PERFIL
  // ==========================================
  const generateResponse = (input) => {
    const text = input.toLowerCase();
    const currentT = t[lang];

    if (text.includes('hola') || text.includes('hi') || text.includes('hello') || text.includes('buenas')) return currentT.respGreetings;
    if (text.includes('nombre') || text.includes('llamas') || text.includes('name') || text.includes('quien sos')) return currentT.respIdentity;
    if (text.includes('estudio') || text.includes('estudias') || text.includes('analista') || text.includes('cervantes') || text.includes('education')) return currentT.respStudies;

    // 1. HABILIDADES / STACK
    if (text.includes('habilidad') || text.includes('tecnologia') || text.includes('stack') || text.includes('skill') || text.includes('herramienta') || text.includes('telecom')) {
      return {
        text: profileType === 'dev' ? currentT.respSkillsDev : currentT.respSkillsIT,
        hasSkills: true,
        skillsList: profileType === 'dev' ? devSkills : itSkills
      };
    }

    // 2. PROYECTOS
    if (text.includes('tancat') || text.includes('proyecto') || text.includes('project') || text.includes('portfolio') || text.includes('demo')) {
      return {
        text: lang === 'es' ? 'Acá tenés mis proyectos principales. Podés deslizar hacia los costados:' : 'Here are my main projects. You can swipe sideways to view them:',
        hasProjects: true,
        projects: [
          {
            id: 'p1', title: 'TanCat - Gestión Deportiva',
            description: lang === 'es' ? 'Sistema integral para reservas de canchas. Arquitectura en Firestore y chatbot.' : 'System for sports court reservations. Firestore architecture and chatbot.',
            tags: ['React', 'Node.js', 'Firebase'], demoLink: '#', codeLink: '#', gradient: 'from-blue-600/20 to-purple-600/20'
          },
          {
            id: 'p2', title: 'Gemini AI UI Clone',
            description: lang === 'es' ? 'Interfaz conversacional estilo Google Gemini. Motor interactivo en React.' : 'Google Gemini style conversational interface. Interactive React engine.',
            tags: ['React', 'Tailwind CSS', 'UI'], demoLink: '#', codeLink: 'https://github.com/mauro3687/CV-portafolio', gradient: 'from-emerald-600/20 to-teal-600/20'
          }
        ]
      };
    }
    
    // 3. CONTACTO 
    if (text.includes('contacto') || text.includes('contact') || text.includes('email') || text.includes('linkedin') || text.includes('whatsapp') || text.includes('github')) {
      return {
        text: lang === 'es' ? '¡Excelente! Podés contactarme directamente o ver mi código. Hacé clic en los botones para abrir mis perfiles:' : 'Great! You can contact me directly or check my code. Click the buttons to open my profiles:',
        hasContact: true,
        contactLinks: [
          { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/tu-perfil-aca', color: 'hover:border-[#0077b5]', icon: <svg className="w-6 h-6 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
          { id: 'github', name: 'GitHub', url: 'https://github.com/mauro3687', color: 'hover:border-[#ffffff]', icon: <svg className="w-6 h-6 text-[#e3e3e3]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
          { id: 'whatsapp', name: 'WhatsApp', url: 'https://wa.me/5493513360945', color: 'hover:border-[#25D366]', icon: <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> },
          { id: 'email', name: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=gorositoeze703@gmail.com', color: 'hover:border-[#EA4335]', icon: <svg className="w-6 h-6 text-[#EA4335]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> }
        ]
      };
    }

    // 4. EXPERIENCIA
    if (text.includes('experiencia') || text.includes('experencia') || text.includes('trabajo') || text.includes('hospital')) {
      return profileType === 'dev' ? currentT.respExperienceDev : currentT.respExperienceIT;
    }

    // 5. POR DEFECTO
    return {
      text: currentT.fallback,
      hasOptions: true,
      options: [
        { label: currentT.btnProjects, query: lang === 'es' ? 'proyectos' : 'projects' },
        { label: profileType === 'dev' ? currentT.btnSkills : currentT.btnTelecom, query: lang === 'es' ? 'habilidades' : 'skills' },
        { label: currentT.btnExperience, query: lang === 'es' ? 'experiencia' : 'experience' },
        { label: currentT.btnContact, query: lang === 'es' ? 'contacto' : 'contact' }
      ]
    };
  };

  const processMessage = (textMsg) => {
    if (!textMsg.trim()) return;
    const newUserMsg = { id: Date.now(), sender: 'user', text: textMsg };
    setMessages((prev) => [...prev, newUserMsg]);

    setTimeout(() => {
      const response = generateResponse(textMsg);
      let aiMessage = { id: Date.now() + 1, sender: 'ai' };

      if (typeof response === 'string') {
        aiMessage.text = response;
      } else {
        aiMessage.text = response.text;
        aiMessage.hasProjects = response.hasProjects;
        aiMessage.projects = response.projects;
        aiMessage.hasContact = response.hasContact;
        aiMessage.contactLinks = response.contactLinks;
        aiMessage.hasOptions = response.hasOptions; 
        aiMessage.options = response.options;
        aiMessage.hasSkills = response.hasSkills; 
        aiMessage.skillsList = response.skillsList;
      }
      setMessages((prev) => [...prev, aiMessage]);
    }, 600); 
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    processMessage(inputValue);
    setInputValue('');
  };

  const handleOptionClick = (query) => {
    processMessage(query);
  };

  const userHistory = messages.filter(msg => msg.sender === 'user');
  const currentT = t[lang]; 

  const initialOptions = [
    { label: currentT.btnProjects, query: lang === 'es' ? 'proyectos' : 'projects' },
    { label: profileType === 'dev' ? currentT.btnSkills : currentT.btnTelecom, query: lang === 'es' ? 'habilidades' : 'skills' },
    { label: currentT.btnExperience, query: lang === 'es' ? 'experiencia' : 'experience' },
    { label: currentT.btnContact, query: lang === 'es' ? 'contacto' : 'contact' }
  ];

  return (
    <div className="flex h-[100dvh] w-screen bg-[#131314] text-[#e3e3e3] font-sans antialiased overflow-hidden selection:bg-blue-500/20">
      
      {/* MODAL DE CONFIGURACIÓN Y PERFIL */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4 animate-fade-in-main">
          <div className="bg-[#1e1f20] border border-[#333537] rounded-2xl w-full max-w-sm p-6 shadow-2xl card-popup">
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-medium text-white flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {currentT.settings}
              </h3>
              <button onClick={() => setShowSettings(false)} className="text-[#8e918f] hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* SELECCIÓN DE PERFIL (NUEVO) */}
            <div className="mb-6 pb-6 border-b border-[#333537]">
              <p className="text-sm text-[#8e918f] mb-3">{currentT.profileSelect}</p>
              <div className="flex flex-col gap-2">
                <button onClick={() => { setProfileType('dev'); setMessages([{ id: Date.now(), sender: 'ai', isInitialAboutMe: true }]); setShowSettings(false); }} className={`w-full py-3 px-4 rounded-xl text-sm font-medium transition-all text-left flex items-center gap-3 ${profileType === 'dev' ? 'bg-[#a8c7fa] text-[#131314]' : 'bg-[#282a2c] text-[#e3e3e3] hover:bg-[#333537]'}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  Desarrollador de Software
                </button>
                <button onClick={() => { setProfileType('it'); setMessages([{ id: Date.now(), sender: 'ai', isInitialAboutMe: true }]); setShowSettings(false); }} className={`w-full py-3 px-4 rounded-xl text-sm font-medium transition-all text-left flex items-center gap-3 ${profileType === 'it' ? 'bg-[#a8c7fa] text-[#131314]' : 'bg-[#282a2c] text-[#e3e3e3] hover:bg-[#333537]'}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                  Soporte IT / Telecom
                </button>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-[#8e918f] mb-3">{currentT.language}</p>
              <div className="flex gap-2">
                <button onClick={() => setLang('es')} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${lang === 'es' ? 'bg-[#a8c7fa] text-[#131314]' : 'bg-[#282a2c] text-[#e3e3e3] hover:bg-[#333537]'}`}>Español</button>
                <button onClick={() => setLang('en')} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${lang === 'en' ? 'bg-[#a8c7fa] text-[#131314]' : 'bg-[#282a2c] text-[#e3e3e3] hover:bg-[#333537]'}`}>English</button>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm text-[#8e918f] mb-3">{currentT.accentColor}</p>
              <div className="flex gap-3 justify-center">
                <button onClick={() => setTheme('bg-[#282a2c]')} className={`w-10 h-10 rounded-full bg-[#282a2c] border-2 transition-all ${theme === 'bg-[#282a2c]' ? 'border-white scale-110' : 'border-transparent hover:scale-105'}`}></button>
                <button onClick={() => setTheme('bg-blue-600')} className={`w-10 h-10 rounded-full bg-blue-600 border-2 transition-all ${theme === 'bg-blue-600' ? 'border-white scale-110' : 'border-transparent hover:scale-105'}`}></button>
                <button onClick={() => setTheme('bg-emerald-600')} className={`w-10 h-10 rounded-full bg-emerald-600 border-2 transition-all ${theme === 'bg-emerald-600' ? 'border-white scale-110' : 'border-transparent hover:scale-105'}`}></button>
                <button onClick={() => setTheme('bg-purple-600')} className={`w-10 h-10 rounded-full bg-purple-600 border-2 transition-all ${theme === 'bg-purple-600' ? 'border-white scale-110' : 'border-transparent hover:scale-105'}`}></button>
              </div>
            </div>

            <button onClick={() => setShowSettings(false)} className="w-full py-3 rounded-xl bg-[#333537] hover:bg-[#4a4d4f] text-white font-medium transition-colors">
              {currentT.close}
            </button>
          </div>
        </div>
      )}

      {isSidebarOpen && <div className="fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity" onClick={() => setIsSidebarOpen(false)} />}

      {/* BARRA LATERAL */}
      <aside className={`fixed md:relative z-50 flex flex-col w-[280px] h-full bg-[#1e1f20] flex-shrink-0 border-r border-[#333537] transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="pt-3 px-3 pb-2 flex items-center gap-2">
          <button onClick={() => setIsSidebarOpen(false)} className="p-3 hover:bg-[#333537] rounded-full transition-colors md:cursor-default">
            <svg className="w-5 h-5 text-[#c4c7c5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <span className="text-[1.1rem] font-medium text-[#e3e3e3] flex items-center gap-2 ml-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0358 6.55135L14.7176 3.1906C14.4921 2.6152 13.6811 2.60742 13.445 3.17832L11.9704 6.64332C11.5367 7.66224 10.7259 8.48784 9.7208 8.9376L6.29415 10.471C5.72758 10.7246 5.7369 11.5323 6.3101 11.7758L9.77123 13.2458C10.7717 13.6706 11.5835 14.4842 12.0232 15.4851L13.5678 18.999C13.8239 19.5818 14.6369 19.5855 14.8981 19.0051L16.4853 15.4802C16.9202 14.5143 17.7022 13.7203 18.6601 13.2698L22.0913 11.656C22.6617 11.3877 22.6521 10.5759 22.0747 10.3197L18.6015 8.7781C17.6163 8.34091 16.8248 7.55171 16.0358 6.55135Z" fill="url(#gemini-grad)"/><defs><linearGradient id="gemini-grad" x1="5.9" y1="11.1" x2="22.4" y2="11.1" gradientUnits="userSpaceOnUse"><stop stopColor="#4285F4"/><stop offset="0.33" stopColor="#9B72CB"/><stop offset="0.67" stopColor="#D96570"/><stop offset="1" stopColor="#13A358"/></linearGradient></defs></svg>
            Gemini
          </span>
        </div>

        <div className="px-3 mt-4">
          <button onClick={() => setMessages([{ id: Date.now(), sender: 'ai', isInitialAboutMe: true }])} className="flex items-center gap-3 w-full hover:bg-[#333537] pr-4 pl-3 py-2.5 rounded-full text-[14px] font-medium text-[#e3e3e3] transition-colors bg-[#131314]">
            <svg className="w-[20px] h-[20px] text-[#c4c7c5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            {currentT.newChat}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto mt-6 custom-scrollbar flex flex-col">
          {userHistory.length > 0 ? (
            <>
              <h3 className="text-[13px] font-medium text-[#c4c7c5] px-6 mb-2">{currentT.recent}</h3>
              <ul className="space-y-0.5 px-3">
                {userHistory.map((msg) => (
                  <li key={msg.id} onClick={() => handleOptionClick(msg.text)} className="message-appear flex items-center justify-between px-4 py-2.5 text-[14px] text-[#e3e3e3] hover:bg-[#333537] rounded-full cursor-pointer group transition-colors">
                    <span className="truncate pr-2">{msg.text}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="px-6 text-[#8e918f] text-[13px] mt-4">{currentT.emptyHistory}</div>
          )}
        </div>

        <div className="mt-auto p-4 flex items-center justify-between border-t border-[#333537] hover:bg-[#333537] transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#e83e8c] flex items-center justify-center text-white font-medium text-sm">E</div>
            <div>
              <p className="text-[14px] font-medium text-[#e3e3e3]">Eze Gorosito</p>
              <p className="text-[12px] text-[#c4c7c5]">Pro</p>
            </div>
          </div>
          <button onClick={() => setShowSettings(true)} className="p-2 rounded-full text-[#c4c7c5] hover:text-white transition-colors cursor-pointer relative group">
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span className="absolute -top-2 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
          </button>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <main className="flex-1 flex flex-col relative h-full bg-[#131314] w-full">
        <header className="md:hidden flex items-center justify-between p-3 border-b border-[#333537] bg-[#131314] z-10">
          <div className="flex items-center gap-2">
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-[#333537] rounded-full transition-colors">
              <svg className="w-6 h-6 text-[#c4c7c5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <span className="text-[1.1rem] font-medium text-[#e3e3e3] flex items-center gap-2">Gemini</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-4 md:px-16 lg:px-48 flex flex-col custom-scrollbar pb-40">
          <div className="w-full max-w-[850px] mx-auto flex flex-col gap-6 md:gap-8 pt-6 md:pt-10">
            {messages.map((msg) => (
              <div key={msg.id} className={`message-appear flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'user' ? (
                  <div className={`${theme} px-5 py-3 rounded-3xl rounded-tr-sm text-[#e3e3e3] text-[15px] leading-relaxed max-w-[90%] md:max-w-[85%] shadow-sm transition-colors duration-300`}>
                    {msg.text}
                  </div>
                ) : (
                  <div className="w-full flex">
                    <div className="w-full">
                      
                      {msg.isInitialAboutMe && (
                        <div className="text-[16px] leading-[1.6] text-[#e3e3e3] font-normal">
                          <p className="mb-5 text-[20px] md:text-[22px] font-medium text-white flex items-center gap-2">
                            {currentT.aboutTitle} <span className="text-[24px]">👋</span>
                          </p>
                          <p className="mb-4 text-[15px] md:text-[16px]">
                            {profileType === 'dev' ? currentT.aboutDescDev : currentT.aboutDescIT}
                          </p>
                          <p className="mb-3 text-white font-medium mt-6 text-[15px] md:text-[16px]">{currentT.aboutProfile}</p>
                          <ul className="space-y-3 pl-2 mb-6 text-[14px] md:text-[15px]">
                            <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✦</span><div>{profileType === 'dev' ? currentT.aboutDev1 : currentT.aboutIT1}</div></li>
                            <li className="flex items-start gap-3"><span className="text-purple-400 mt-1">✦</span><div>{profileType === 'dev' ? currentT.aboutDev2 : currentT.aboutIT2}</div></li>
                          </ul>
                          <p className="text-[#c4c7c5] mt-6 italic text-[14px] md:text-[15px]">{currentT.aboutPrompt}</p>
                          
                          <div className="flex flex-wrap gap-2 mt-4">
                            {initialOptions.map((opt, idx) => (
                              <button key={idx} onClick={() => handleOptionClick(opt.query)} className="px-4 py-2 text-[13px] md:text-[14px] font-medium text-[#a8c7fa] bg-[#a8c7fa]/10 border border-[#a8c7fa]/20 hover:bg-[#a8c7fa]/20 rounded-full transition-colors">
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {!msg.isInitialAboutMe && msg.text && (
                        <div className="text-[15px] md:text-[16px] leading-[1.6] text-[#e3e3e3] font-normal whitespace-pre-wrap mb-4">
                          {msg.text.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-white">{part}</strong> : part)}
                        </div>
                      )}

                      {/* RENDERIZADO DE BADGES DE HABILIDADES */}
                      {msg.hasSkills && (
                        <div className="flex flex-wrap gap-3 mt-4">
                          {msg.skillsList.map((skill, index) => (
                            <div 
                              key={skill.id} 
                              className={`card-popup flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1e1f20] border border-[#333537] transition-all duration-300 hover:-translate-y-1 ${skill.color} cursor-default`}
                              style={{ animationDelay: `${index * 0.05}s` }} 
                            >
                              {skill.icon}
                              <span className="text-[13px] md:text-[14px] font-medium text-[#e3e3e3]">{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {msg.hasOptions && (
                        <div className="flex flex-wrap gap-2 mt-3 card-popup">
                          {msg.options.map((opt, idx) => (
                            <button key={idx} onClick={() => handleOptionClick(opt.query)} className="px-4 py-2 text-[13px] md:text-[14px] font-medium text-[#a8c7fa] bg-[#a8c7fa]/10 border border-[#a8c7fa]/20 hover:bg-[#a8c7fa]/20 rounded-full transition-colors">
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      )}

                      {msg.hasContact && (
                        <div className="flex flex-wrap gap-4 mt-2">
                          {msg.contactLinks.map((link, index) => (
                            <a key={link.id} href={link.url} target={link.id === 'email' ? '_self' : '_blank'} rel="noreferrer" className={`card-popup flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#1e1f20] border border-[#333537] transition-all duration-300 hover:-translate-y-2 ${link.color}`} style={{ animationDelay: `${index * 0.15}s` }}>
                              {link.icon}
                              <span className="font-medium text-[#e3e3e3]">{link.name}</span>
                            </a>
                          ))}
                        </div>
                      )}

                      {msg.hasProjects && (
                        <div className="flex overflow-x-auto gap-4 md:gap-5 mt-4 pb-10 pt-2 px-1 snap-x snap-mandatory custom-scrollbar-horizontal w-full">
                          {msg.projects.map((project, index) => (
                            <div key={project.id} className="card-popup min-w-[260px] md:min-w-[300px] max-w-[300px] snap-start flex-shrink-0 bg-[#1e1f20] rounded-2xl border border-[#333537] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 md:hover:-translate-y-4 hover:scale-[1.02] md:hover:scale-[1.03] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] md:hover:shadow-[0_25px_50px_rgba(0,0,0,0.6)] relative z-10 cursor-pointer" style={{ animationDelay: `${index * 0.15}s` }}>
                              <div className={`h-24 md:h-28 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center border-b border-[#333537]`}>
                                <span className="text-white/70 font-medium tracking-widest uppercase text-[12px] md:text-sm">{project.title.split(' - ')[0]}</span>
                              </div>
                              <div className="p-4 md:p-5 flex flex-col flex-1">
                                <h3 className="text-[16px] md:text-[17px] font-medium text-white mb-2">{project.title}</h3>
                                <p className="text-[13px] md:text-[14px] text-[#c4c7c5] leading-relaxed mb-4 flex-1">{project.description}</p>
                                <div className="flex items-center gap-2 md:gap-3 mt-auto">
                                  <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex-1 bg-[#a8c7fa]/10 hover:bg-[#a8c7fa]/20 text-[#a8c7fa] text-center text-[12px] md:text-[13px] font-medium py-2 rounded-full transition-colors">Demo</a>
                                  <a href={project.codeLink} target="_blank" rel="noreferrer" className="flex-1 bg-[#282a2c] hover:bg-[#333537] text-[#e3e3e3] text-center text-[12px] md:text-[13px] font-medium py-2 rounded-full transition-colors border border-[#333537]">Code</a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="absolute bottom-0 w-full bg-[#131314] pb-4 md:pb-6 pt-2 px-3 md:px-4 flex flex-col items-center z-20">
          <form onSubmit={handleSendMessage} className="w-full max-w-[850px] relative flex items-end bg-[#1e1f20] rounded-[24px] md:rounded-[28px] pl-2 md:pl-4 pr-2 md:pr-3 py-2 md:py-3 focus-within:bg-[#282a2c] transition-colors border border-transparent focus-within:border-[#333537] shadow-lg">
            <button type="button" className="hidden md:block text-[#c4c7c5] hover:bg-[#333537] p-2 rounded-full transition-colors mr-2 mb-[2px]">
              <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </button>
            <textarea
              rows="1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(e); } }}
              placeholder={currentT.placeholder}
              className="flex-1 bg-transparent border-none outline-none text-[#e3e3e3] placeholder-[#8e918f] text-[15px] md:text-[16px] resize-none pb-[8px] pt-[8px] md:pt-[6px] pl-2 md:pl-0"
              style={{ minHeight: '24px', maxHeight: '150px' }}
            />
            <div className="flex items-center gap-1 ml-1 md:ml-2 mb-[2px] md:mb-[2px]">
              <button type="button" className="hidden sm:flex text-[14px] font-medium text-[#c4c7c5] hover:bg-[#333537] px-3 py-1.5 rounded-lg transition-colors items-center gap-1">Pro</button>
              {inputValue.trim() && (
                <button type="submit" className={`${theme !== 'bg-[#282a2c]' ? theme : 'bg-[#a8c7fa]/20'} ${theme !== 'bg-[#282a2c]' ? 'text-white' : 'text-[#a8c7fa]'} hover:brightness-110 p-2 rounded-full transition-all md:ml-1`}>
                  <svg className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
              )}
            </div>
          </form>
          <p className="text-center text-[11px] md:text-[12px] text-[#c4c7c5] mt-2 md:mt-3 font-normal">{currentT.disclaimer}</p>
        </div>
      </main>
    </div>
  );
};

export default ChatPortfolio;