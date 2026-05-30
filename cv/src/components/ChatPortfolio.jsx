import React, { useState, useRef, useEffect } from 'react';
import { t, devSkills, itSkills } from '../data/portfolioData.jsx';
import Sidebar from '../components/Sidebar.jsx';
import SettingsModal from '../components/SettingsModal.jsx';
import MessageList from '../components/MenssageList.jsx'; 
import ChatInput from '../components/ChatInput.jsx';

const ChatPortfolio = () => {
  const [messages, setMessages] = useState([{ id: 1, sender: 'ai', isInitialAboutMe: true }]);
  const [inputValue, setInputValue] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [lang, setLang] = useState(() => localStorage.getItem('mauroLang') || 'es'); 
  const [theme, setTheme] = useState('bg-[#282a2c]'); 
  const [profileType, setProfileType] = useState('dev'); 
  
  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('mauroLang', lang);
  }, [lang]);

  useEffect(() => {
    setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  }, [messages, showSettings]);

  const handleEmailClick = (e, url) => {
    e.preventDefault();
    const SPAM_LIMIT = 2;
    const WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;
    let emailData = JSON.parse(localStorage.getItem('mauroEmailLimit')) || { count: 0, firstSentDate: Date.now() };
    const now = Date.now();
    if (now - emailData.firstSentDate > WEEK_IN_MS) emailData = { count: 0, firstSentDate: now };
    
    if (emailData.count >= SPAM_LIMIT) {
      setMessages(prev => [...prev, { id: Date.now(), sender: 'ai', text: t[lang].spamWarning }]);
      return;
    }
    emailData.count += 1;
    localStorage.setItem('mauroEmailLimit', JSON.stringify(emailData));
    window.open(url, '_blank');
  };

  const generateResponse = (input) => {
    const text = input.toLowerCase();
    const currentT = t[lang];

    if (text.includes('hola') || text.includes('hi') || text.includes('hello') || text.includes('buenas')) return currentT.respGreetings;
    if (text.includes('nombre') || text.includes('llamas') || text.includes('name') || text.includes('quien sos')) return currentT.respIdentity;
    if (text.includes('estudio') || text.includes('estudias') || text.includes('analista') || text.includes('cervantes')) return currentT.respStudies;

    if (text.includes('habilidad') || text.includes('tecnologia') || text.includes('stack') || text.includes('skill') || text.includes('telecom')) {
      return { text: profileType === 'dev' ? currentT.respSkillsDev : currentT.respSkillsIT, hasSkills: true, skillsList: profileType === 'dev' ? devSkills : itSkills };
    }

    if (text.includes('tancat') || text.includes('proyecto') || text.includes('project') || text.includes('portfolio') || text.includes('demo')) {
      return {
        text: lang === 'es' ? 'Acá tenés mis proyectos principales. Podés deslizar hacia los costados:' : 'Here are my main projects. You can swipe sideways to view them:',
        hasProjects: true,
        projects: [
          { id: 'p1', title: 'TanCat - Gestión Deportiva', description: lang === 'es' ? 'Sistema integral para reservas de canchas. Arquitectura en Firestore y chatbot.' : 'System for sports court reservations.', demoLink: '#', codeLink: '#', gradient: 'from-blue-600/20 to-purple-600/20' },
          { id: 'p2', title: 'Mauro_IA UI Clone', description: lang === 'es' ? 'Interfaz conversacional estilo Mauro_IA. Motor interactivo en React.' : 'Mauro_IA style conversational interface.', demoLink: '#', codeLink: 'https://github.com/mauro3687/CV-portafolio', gradient: 'from-emerald-600/20 to-teal-600/20' }
        ]
      };
    }
    
    if (text.includes('contacto') || text.includes('contact') || text.includes('email') || text.includes('linkedin') || text.includes('whatsapp') || text.includes('github')) {
      return {
        text: lang === 'es' ? '¡Excelente! Podés contactarme directamente o ver mi código:' : 'Great! You can contact me directly or check my code:',
        hasContact: true,
        contactLinks: [
          { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/tu-perfil-aca', color: 'hover:border-[#0077b5]', icon: <svg className="w-6 h-6 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
          { id: 'github', name: 'GitHub', url: 'https://github.com/mauro3687', color: 'hover:border-[#ffffff]', icon: <svg className="w-6 h-6 text-[#e3e3e3]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
          { id: 'whatsapp', name: 'WhatsApp', url: 'https://wa.me/5493513360945', color: 'hover:border-[#25D366]', icon: <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> },
          { id: 'email', name: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=gorositoeze703@gmail.com', color: 'hover:border-[#EA4335]', icon: <svg className="w-6 h-6 text-[#EA4335]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> }
        ]
      };
    }

    if (text.includes('experi') || text.includes('experen') || text.includes('trabajo')) return profileType === 'dev' ? currentT.respExperienceDev : currentT.respExperienceIT;

    return {
      text: currentT.fallback,
      hasOptions: true,
      options: [
        { label: profileType === 'dev' ? currentT.btnSkills : currentT.btnTelecom, query: lang === 'es' ? 'habilidades' : 'skills' },
        { label: currentT.btnProjects, query: lang === 'es' ? 'proyectos' : 'projects' },
        { label: currentT.btnContact, query: lang === 'es' ? 'contacto' : 'contact' }
      ]
    };
  };

  const processMessage = (textMsg) => {
    if (!textMsg.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: textMsg }]);
    setTimeout(() => {
      const response = generateResponse(textMsg);
      let aiMessage = { id: Date.now() + 1, sender: 'ai' };
      if (typeof response === 'string') { aiMessage.text = response; } 
      else { aiMessage = { ...aiMessage, ...response }; }
      setMessages(prev => [...prev, aiMessage]);
    }, 600); 
  };

  const handleSendMessage = (e) => { e.preventDefault(); processMessage(inputValue); setInputValue(''); };
  const handleOptionClick = (query) => processMessage(query);

  const currentT = t[lang]; 
  const userHistory = messages.filter(msg => msg.sender === 'user');
  const initialOptions = [
    { label: profileType === 'dev' ? currentT.btnSkills : currentT.btnTelecom, query: lang === 'es' ? 'habilidades' : 'skills' },
    { label: currentT.btnProjects, query: lang === 'es' ? 'proyectos' : 'projects' },
    { label: currentT.btnContact, query: lang === 'es' ? 'contacto' : 'contact' }
  ];

  return (
    <>
      <style>{`
        @keyframes aiRing {
          0% { transform: scale(0.8); opacity: 0.5; border-width: 2px; }
          100% { transform: scale(1.5); opacity: 0; border-width: 1px; }
        }
        .ai-speaking-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: solid #00e5ff;
          animation: aiRing 2s ease-out infinite;
        }
        .ai-speaking-ring-2 { animation-delay: 0.6s; }
        .ai-speaking-ring-3 { animation-delay: 1.2s; }
        
        @keyframes slideUpFade { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        
        .animate-slide-up { animation: slideUpFade 0.4s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.3s ease-out forwards; }
        
        .cyber-card { border: 1px solid rgba(0, 195, 255, 0.2); position: relative; overflow: hidden; transition: all 0.3s ease; }
        .cyber-card:hover { border-color: rgba(0, 195, 255, 0.6); transform: translateY(-4px); box-shadow: 0 4px 20px rgba(0, 195, 255, 0.1); }
      `}</style>

      <div className="flex h-[100dvh] w-screen bg-[#131314] text-[#e3e3e3] font-sans antialiased overflow-hidden selection:bg-blue-500/20">
        {showSettings && (
          <SettingsModal 
            setShowSettings={setShowSettings} setProfileType={setProfileType} profileType={profileType} 
            setMessages={setMessages} setLang={setLang} lang={lang} setTheme={setTheme} theme={theme} currentT={currentT} 
          />
        )}

        <Sidebar 
          isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setMessages={setMessages} 
          userHistory={userHistory} handleOptionClick={handleOptionClick} setShowSettings={setShowSettings} currentT={currentT} 
        />

        <main className="flex-1 flex flex-col relative h-full bg-[#131314] w-full">
          <header className="md:hidden flex items-center justify-between p-3 border-b border-[#333537] bg-[#131314] z-10">
            <div className="flex items-center gap-2">
              <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-[#333537] rounded-full transition-colors">
                <svg className="w-6 h-6 text-[#c4c7c5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              <span className="text-[1.1rem] font-medium text-[#e3e3e3] flex items-center gap-2">Mauro_IA</span>
            </div>
          </header>

          <MessageList 
            messages={messages} theme={theme} currentT={currentT} profileType={profileType} 
            handleOptionClick={handleOptionClick} handleEmailClick={handleEmailClick} 
            messagesEndRef={messagesEndRef} initialOptions={initialOptions} 
          />

          <ChatInput 
            inputValue={inputValue} setInputValue={setInputValue} handleSendMessage={handleSendMessage} 
            theme={theme} currentT={currentT} 
          />
        </main>
      </div>
    </>
  );
};

export default ChatPortfolio;