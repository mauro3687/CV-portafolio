export const t = {
  es: {
    newChat: "Nuevo chat", recent: "Recientes", emptyHistory: "Tu historial aparecerá aquí.",
    placeholder: "Preguntar a Mauro_IA", disclaimer: "Mauro_IA es una IA interactiva basada en React.",
    settings: "Configuración", language: "Idioma", accentColor: "Color de Acento", profileSelect: "Perfil Profesional", close: "Cerrar",
    aboutTitle: "¡Hola! Soy Mauro Ezequiel Gorosito",
    aboutDescDev: "Soy Técnico en Programación y Estudiante de Análisis de Sistemas radicado en Córdoba. Me apasiona el desarrollo de software y la creación de soluciones fullstack escalables.",
    aboutDescIT: "Soy Analista de Sistemas especializado en Infraestructura y Telecomunicaciones. Me apasiona administrar redes, configurar equipos y garantizar la continuidad operativa de sistemas críticos.",
    aboutProfile: "Mi perfil destacado:",
    aboutDev1: "Desarrollo Web: Frontend con ReactJS, JavaScript y Backend con Node.js, Django, C#, Python y Flask.",
    aboutDev2: "Bases de Datos & Diseño: Experiencia con MySQL, Firebase, MongoDB, Figma, Git y GitHub.",
    aboutIT1: "Mesa de Ayuda & Soporte: Nivel 1 y 2 en Ministerio de Salud, gestión de Active Directory, CRM y políticas de seguridad (IAM).",
    aboutIT2: "Telecomunicaciones & Redes: Configuración de routers Cisco, armado de cables, cableado estructurado, telefonía IP y administración de redes.",
    aboutPrompt: "Elegí una opción abajo para ver mis tecnologías y proyectos:",
    respGreetings: "¡Hola! Soy Mauro_IA. ¿En qué te puedo ayudar hoy? Podés elegir una opción o preguntarme directamente.",
    respIdentity: "Me llamo Mauro Ezequiel Gorosito, vivo en Córdoba. Soy estudiante de Análisis de Sistemas.",
    respSkillsDev: "Acá tenés mi stack tecnológico enfocado en desarrollo de software:",
    respSkillsIT: "Acá tenés mis herramientas enfocadas en Infraestructura, Telecomunicaciones y Soporte:",
    respStudies: "Egresado como **Técnico en Programación** (IPET 57) y actualmente estudiante de **Analista de Sistemas** (Inst. Cervantes).",
    respExperienceDev: "Tengo +2 años de experiencia. Trabajo en el **Ministerio de Salud**, optimizando la carga de datos y sistemas, además de proyectos freelance.",
    respExperienceIT: "Experiencia:\n• **Ministerio de Salud:** Incidencias N1/N2, IAM.\n• **Consultores de Empresas:** Servidores, AD, telefonía IP, cableado.\n• **25 Watts:** Hardware & redes.",
    fallback: "No entendí muy bien. Puedo mostrarte mis **proyectos**, mi **stack/habilidades**, mis **estudios**, o mi **contacto**.",
    spamWarning: "⚠️ Límite de seguridad: Solo se permite abrir el correo 2 veces por semana. Usá LinkedIn o WhatsApp.",
    btnProjects: "Proyectos", btnSkills: "Habilidades", btnStudies: "Estudios", btnContact: "Contacto", btnTelecom: "Telecomunicaciones"
  },
  en: {
    newChat: "New chat", recent: "Recent", emptyHistory: "Your history will appear here.",
    placeholder: "Ask Mauro_IA", disclaimer: "Mauro_IA is an interactive AI based on React.",
    settings: "Settings", language: "Language", accentColor: "Accent Color", profileSelect: "Professional Profile", close: "Close",
    aboutTitle: "Hi! I'm Mauro Ezequiel Gorosito",
    aboutDescDev: "Programming Technician and Systems Analysis Student based in Córdoba. I am passionate about software development and scalable fullstack solutions.",
    aboutDescIT: "Systems Analyst specialized in IT Infrastructure and Telecommunications. I love managing networks, configuring routers, and ensuring system uptime.",
    aboutProfile: "My highlighted profile:",
    aboutDev1: "Web Development: Frontend with ReactJS, JavaScript, and Backend with Node.js, Django, C#, Python, and Flask.",
    aboutDev2: "Databases & Design: Experience with MySQL, Firebase, MongoDB, Figma, Git, and GitHub.",
    aboutIT1: "Help Desk & Support: Level 1 and 2 at the Ministry of Health, Active Directory, CRM, and security policies (IAM).",
    aboutIT2: "Telecommunications & Networks: Cisco router configuration, structured cabling, IP telephony, and network administration.",
    aboutPrompt: "Choose an option below to see my tech stack and projects:",
    respGreetings: "Hello! I'm Mauro_IA. How can I help you today?",
    respIdentity: "My name is Mauro Ezequiel Gorosito, I live in Córdoba. I am a Systems Analysis student.",
    respSkillsDev: "Here is my tech stack focused on software development:",
    respSkillsIT: "Here are my tools focused on Infrastructure, Telecom, and Support:",
    respStudies: "I graduated as a **Programming Technician** (IPET 57) and currently studying **Systems Analysis** at Institución Cervantes.",
    respExperienceDev: "I have +2 years of experience. I work at the **Ministry of Health** optimizing data loads and systems.",
    respExperienceIT: "Experience:\n• **Ministry of Health:** L1/L2 incidents, IAM.\n• **Consultores de Empresas:** Servers, AD, IP Telephony, cabling.\n• **25 Watts:** Hardware & network maintenance.",
    fallback: "I didn't quite catch that. I can show you my **projects**, my **skills**, my **studies**, or my **contact** info.",
    spamWarning: "⚠️ Security limit: Email opening is limited to 2 times per week. Please reach me on LinkedIn or WhatsApp.",
    btnProjects: "Projects", btnSkills: "Skills", btnStudies: "Studies", btnContact: "Contact", btnTelecom: "Telecommunications"
  }
};

export const devSkills = [
  { id: 'js', name: 'JavaScript', color: 'hover:border-[#F7DF1E]', icon: <svg className="w-5 h-5 rounded-sm" viewBox="0 0 24 24" fill="#F7DF1E"><path d="M0 0h24v24H0V0z"/><path fill="#000" d="M11.146 17.308c-1.393-.114-2.227-.852-2.457-1.928l1.643-.635c.162.656.634 1.054 1.344 1.054.673 0 1.082-.32 1.082-.78 0-.469-.34-.693-1.464-1.077-1.686-.593-2.636-1.385-2.636-2.73 0-1.426 1.096-2.404 2.654-2.404 1.426 0 2.457.771 2.673 2.012l-1.603.626c-.114-.541-.5-1.002-1.125-1.002-.57 0-1.013.3-1.013.723 0 .423.32.617 1.353.984 1.83.645 2.76 1.365 2.76 2.85 0 1.564-1.164 2.503-2.812 2.307zM7.229 17.514c-1.326-.066-2.122-.723-2.285-1.565l1.643-.593c.123.46.541.802 1.092.802.593 0 1.036-.34 1.036-1.144V8.583H10.5v6.52c0 1.636-.934 2.512-3.271 2.411z"/></svg> },
  { id: 'react', name: 'ReactJS', color: 'hover:border-[#61DAFB]', icon: <svg className="w-5 h-5 text-[#61DAFB]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22.61C6.15 22.61 1.39 17.85 1.39 12S6.15 1.39 12 1.39 22.61 6.15 22.61 12 17.85 22.61 12 22.61zM12 2.39C6.7 2.39 2.39 6.7 2.39 12S6.7 21.61 12 21.61 21.61 17.3 21.61 12 17.3 2.39 12 2.39z"/><path d="M12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-6c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"/></svg> },
  { id: 'python', name: 'Python', color: 'hover:border-[#3776AB]', icon: <svg className="w-5 h-5 text-[#3776AB]" fill="currentColor" viewBox="0 0 24 24"><path d="M11.94 1.25c-5.83 0-5.5 2.5-5.5 2.5l-.01 2.76h5.63v.8H5.09s-2.88.08-2.88 3.65c0 3.58 2.5 3.73 2.5 3.73h1.76v-2.56s-.06-3.08 3.01-3.08h3.84s2.83.05 2.83-2.73V3.62s.15-2.37-4.21-2.37zm-.92 1.63c.4 0 .73.33.73.74 0 .4-.33.73-.73.73-.41 0-.74-.33-.74-.73 0-.41.33-.74.74-.74zm7.89 6.2c0-3.58-2.5-3.73-2.5-3.73h-1.76v2.56s.06 3.08-3.01 3.08h-3.84s-2.83-.05-2.83 2.73v2.7s-.15 2.37 4.21 2.37c5.83 0 5.5-2.5 5.5-2.5l.01-2.76h-5.63v-.8h6.97s2.88-.08 2.88-3.65zm-6.97 7.04c.41 0 .74.33.74.73 0 .4-.33.74-.74.74-.4 0-.73-.34-.73-.74 0-.4.33-.73.73-.73z"/></svg> },
  { id: 'flask', name: 'Flask', color: 'hover:border-[#e3e3e3]', icon: <svg className="w-5 h-5 text-[#e3e3e3]" fill="currentColor" viewBox="0 0 24 24"><path d="M8.7 11.23V3.5h6.61v7.73l4.58 10.3H4.11l4.59-10.3zm1.61-6.1v5.52l-3.23 7.24h9.83l-3.24-7.24V5.13h-3.36z"/></svg> },
  { id: 'django', name: 'Django', color: 'hover:border-[#092E20]', icon: <svg className="w-5 h-5 text-[#44B78B]" fill="currentColor" viewBox="0 0 24 24"><path d="M11.4 5.34v9.85H9.28V5.34h2.12zm3.32 0v7.62c0 1.25.7 1.83 1.86 1.83 1.09 0 1.76-.57 1.76-1.74V5.34h2.12v7.7c0 2.35-1.5 3.65-3.8 3.65-2.38 0-3.84-1.32-3.84-3.58V5.34h1.9zm-8.87 0v9.85H3.72V5.34h2.13z"/></svg> },
  { id: 'csharp', name: 'C#', color: 'hover:border-[#239120]', icon: <svg className="w-5 h-5 text-[#239120]" fill="currentColor" viewBox="0 0 24 24"><path d="M2 10l5-3 5 3v4l-5 3-5-3v-4zm15-4l5 3v8l-5 3-5-3V9l5-3zm-1.8 7.3h3.6l-.8 1.4h-2.8v1.3h2l-.8 1.4h-1.2v1.5h-1.6v-1.5h-1.2l.8-1.4h1.2v-1.3h-2l.8-1.4h1.2V9.8h1.6v1.5z"/></svg> },
  { id: 'mysql', name: 'MySQL', color: 'hover:border-[#4479A1]', icon: <svg className="w-5 h-5 text-[#4479A1]" fill="currentColor" viewBox="0 0 24 24"><path d="M22.5 16.5c0 2.5-4.7 4.5-10.5 4.5S1.5 19 1.5 16.5c0-1.2.9-2.3 2.5-3 1.3-.6 3.1-1 5-1.2v2.1c0 1.5 1.3 2.7 3 2.7s3-1.2 3-2.7v-2.1c1.9.2 3.7.6 5 1.2 1.6.7 2.5 1.8 2.5 3zM12 3c5.8 0 10.5 2 10.5 4.5S17.8 12 12 12 1.5 10 1.5 7.5 6.2 3 12 3zm0 2.5c-4.4 0-8 1.1-8 2.5s3.6 2.5 8 2.5 8-1.1 8-2.5-3.6-2.5-8-2.5z"/></svg> },
  { id: 'mongodb', name: 'MongoDB', color: 'hover:border-[#47A248]', icon: <svg className="w-5 h-5 text-[#47A248]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.28 2.45c-.24-1.2-1.32-2.1-2.48-2.45C10.6.2 10 .8 10 .8c0 0-2.3 2.7-3.4 6.1C5.4 10.6 5 15.5 5.5 18.2c.4 2.5 2.1 4.5 4.5 5.5.3.1.6.3.8.3.4.1.7-.1.9-.3 1.7-.8 3.5-2.2 4.4-4.5 1-2.7.9-6.3-.5-9.8-1.1-2.8-1.3-7-1.3-7z"/></svg> },
  { id: 'figma', name: 'Figma', color: 'hover:border-[#F24E1E]', icon: <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#F24E1E" d="M8.04 0h3.96v7.92H8.04a3.96 3.96 0 0 1 0-7.92z"/><path fill="#A259FF" d="M8.04 7.92h3.96v7.92H8.04a3.96 3.96 0 0 1 0-7.92z"/><path fill="#0ACF83" d="M8.04 15.84h3.96v3.96a3.96 3.96 0 0 1-3.96-3.96z"/><path fill="#1ABCFE" d="M12 7.92h3.96a3.96 3.96 0 0 1 0 7.92H12V7.92z"/><path fill="#FF7262" d="M12 0h3.96a3.96 3.96 0 0 1 0 7.92H12V0z"/></svg> },
  { id: 'git', name: 'Git & GitHub', color: 'hover:border-[#F05032]', icon: <svg className="w-5 h-5 text-[#F05032]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l3.28 3.28c.616-.2 1.306-.05 1.77.416.467.466.617 1.157.418 1.772l3.14 3.14c.614-.199 1.304-.05 1.77.417.848.847.848 2.22 0 3.067-.847.848-2.22.848-3.068 0-.466-.466-.616-1.157-.417-1.772l-3.023-3.023v4.298c.198.199.349.49.349.824 0 .848-.682 1.53-1.53 1.53-.847 0-1.529-.682-1.529-1.53 0-.334.15-.625.348-.824V9.664c-.198-.198-.348-.49-.348-.824 0-.395.148-.755.395-1.03l-3.2-3.2-6.505 6.504c-.604.604-.604 1.583 0 2.189l10.48 10.479c.604.604 1.582.604 2.188 0l10.479-10.48c.604-.603.604-1.582 0-2.188z"/></svg> },
  { id: 'agile', name: 'Agile', color: 'hover:border-[#FF9900]', icon: <svg className="w-5 h-5 text-[#FF9900]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg> }
];

export const itSkills = [
  { id: 'linux', name: 'Linux', color: 'hover:border-[#FCC624]', icon: <svg className="w-5 h-5 text-[#e3e3e3]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.08 22.8c-2.3 0-4.4-.98-5.87-2.68-.23-.28-.05-.73.32-.76 1.7-.15 3.25-.76 4.54-1.68a.46.46 0 00.11-.62c-1.07-1.61-1.72-3.53-1.72-5.58 0-2.48.98-4.71 2.57-6.35m3.78 17.65c1.28.93 2.84 1.53 4.54 1.68.38.03.55.48.32.76-1.47 1.7-3.57 2.68-5.87 2.68-1.39 0-2.69-.37-3.83-.99a7.92 7.92 0 011.54-3.92c.91.46 1.95.95 3.27.95 1.07 0 2.06-.35 2.89-.93V18.15z"/></svg> },
  { id: 'redes', name: 'Redes & IP', color: 'hover:border-[#00BCEB]', icon: <svg className="w-5 h-5 text-[#00BCEB]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg> },
  { id: 'cisco', name: 'Cisco / Routers', color: 'hover:border-[#1BA0D7]', icon: <svg className="w-5 h-5 text-[#1BA0D7]" fill="currentColor" viewBox="0 0 24 24"><path d="M5.4 15.6h-2V8.4h2v7.2zm3.1-1.8h-2V10.2h2v3.6zm3.1-3.6h-2V6.6h2v3.6zm3.1 1.8h-2V8.4h2v3.6zm3.1 1.8h-2v-7.2h2v7.2zm3.1-3.6h-2v-3.6h2v3.6zM23.5 15.7h-1.64V8.3h1.64v7.4z"/></svg> },
  { id: 'ad', name: 'Active Directory', color: 'hover:border-[#0078D7]', icon: <svg className="w-5 h-5 text-[#0078D7]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1-6h2v3h-2V10z"/></svg> },
  { id: 'crm', name: 'CRM & Profit', color: 'hover:border-[#FF9900]', icon: <svg className="w-5 h-5 text-[#FF9900]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg> },
  { id: 'hardware', name: 'Armado de Cables', color: 'hover:border-[#e3e3e3]', icon: <svg className="w-5 h-5 text-[#e3e3e3]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
  { id: 'helpdesk', name: 'Help Desk N1/N2', color: 'hover:border-[#47A248]', icon: <svg className="w-5 h-5 text-[#47A248]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg> }
];