import React, { useState, useRef, useEffect } from 'react';

const ChatPortfolio = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      isInitialAboutMe: true
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // =======================================================================
  // EL CEREBRO DE MAURO_AI: Acá detecta palabras clave y arma la respuesta
  // =======================================================================
  const generateResponse = (input) => {
    const text = input.toLowerCase();

    // 1. Proyectos / TanCat
    if (text.includes('tancat') || text.includes('proyecto') || text.includes('portfolio')) {
      return 'El proyecto más destacado actualmente es **TanCat**. Es un sistema de gestión para complejos deportivos que incluye un chatbot integrado con IA. Está desarrollado utilizando React, Node.js y la arquitectura de base de datos corre sobre Firebase/Firestore. Lo estoy desarrollando en equipo junto a Juan Carballo.';
    }
    
    // 2. Experiencia / Trabajo / Soporte
    if (text.includes('experiencia') || text.includes('trabajo') || text.includes('soporte') || text.includes('help desk') || text.includes('hospital')) {
      return 'Trabajo en Soporte Técnico (Help Desk) enfocado en sistemas de información hospitalarios y personal administrativo (ingresé a este rol en abril de 2026). Además, realizo reparación de hardware, micro-soldadura, diagnóstico de PCBs y arreglo de periféricos gaming (como joysticks PS4/PS5 JDM-055 y JDS-030).';
    }

    // 3. Estudios / Analista / Inglés
    if (text.includes('estudio') || text.includes('estudias') || text.includes('analista') || text.includes('cervantes') || text.includes('ingles') || text.includes('inglés')) {
      return 'Soy estudiante de la carrera de Analista de Sistemas (en la Institución Cervantes) en Córdoba. También estoy cursando un roadmap intensivo para alcanzar un nivel avanzado de inglés técnico enfocado en IT.';
    }

    // 4. Habilidades / Tecnologías / Stack
    if (text.includes('habilidad') || text.includes('tecnologia') || text.includes('stack') || text.includes('lenguaje') || text.includes('programas')) {
      return 'Mi stack tecnológico principal incluye **React.js, Node.js, Next.js y Django**. Para bases de datos manejo Firebase/Firestore. A nivel hardware, manejo herramientas de diagnóstico con multímetro, estaciones de soldado y calor para microelectrónica.';
    }

    // 5. Intereses / Gaming / Seguridad
    if (text.includes('juego') || text.includes('gaming') || text.includes('valorant') || text.includes('hobby') || text.includes('seguridad') || text.includes('ciberseguridad')) {
      return 'Me interesa mucho la ciberseguridad y la optimización de redes. En mi tiempo libre juego Valorant, y me gusta aplicar mis conocimientos técnicos para optimizar las configuraciones de hardware, tasas de refresco de monitores y periféricos para sacar el máximo rendimiento.';
    }

    // 6. Contacto / Email
    if (text.includes('contacto') || text.includes('mail') || text.includes('email') || text.includes('linkedin') || text.includes('contratar')) {
      return '¡Genial! Podés contactarme directamente a través de mi [LinkedIn] o enviándome un correo a mauro.gorosito@email.com (reemplazar con tu email real). Estoy abierto a nuevas oportunidades en desarrollo o soporte IT.';
    }

    // 7. Respuesta por defecto si no entiende la pregunta
    return 'Qué interesante. Como asistente de Mauro, puedo darte detalles específicos sobre sus proyectos (como TanCat), su stack de desarrollo en React/Node, o su experiencia técnica en hospitales y hardware. ¿Qué te gustaría profundizar?';
  };

  // =======================================================================
  // MANEJO DE MENSAJES
  // =======================================================================
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Agregamos la pregunta del usuario
    const newUserMsg = { id: Date.now(), sender: 'user', text: inputValue };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue(''); // Limpia el input

    // Simulamos que la IA "piensa" 1 segundo y responde
    setTimeout(() => {
      const responseText = generateResponse(newUserMsg.text);
      setMessages((prev) => [
        ...prev, 
        { id: Date.now() + 1, sender: 'ai', text: responseText }
      ]);
    }, 1000);
  };

  const userHistory = messages.filter(msg => msg.sender === 'user');

  return (
    <div className="flex h-screen w-screen bg-[#131314] text-[#e3e3e3] font-sans antialiased overflow-hidden selection:bg-blue-500/20">
      
      {/* BARRA LATERAL */}
      <aside className="hidden md:flex flex-col w-[280px] bg-[#1e1f20] flex-shrink-0 border-r border-[#333537]">
        <div className="pt-3 px-3 pb-2 flex items-center gap-2">
          <button className="p-3 hover:bg-[#333537] rounded-full transition-colors">
            <svg className="w-5 h-5 text-[#c4c7c5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <span className="text-[1.1rem] font-medium text-[#e3e3e3] flex items-center gap-2 ml-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0358 6.55135L14.7176 3.1906C14.4921 2.6152 13.6811 2.60742 13.445 3.17832L11.9704 6.64332C11.5367 7.66224 10.7259 8.48784 9.7208 8.9376L6.29415 10.471C5.72758 10.7246 5.7369 11.5323 6.3101 11.7758L9.77123 13.2458C10.7717 13.6706 11.5835 14.4842 12.0232 15.4851L13.5678 18.999C13.8239 19.5818 14.6369 19.5855 14.8981 19.0051L16.4853 15.4802C16.9202 14.5143 17.7022 13.7203 18.6601 13.2698L22.0913 11.656C22.6617 11.3877 22.6521 10.5759 22.0747 10.3197L18.6015 8.7781C17.6163 8.34091 16.8248 7.55171 16.0358 6.55135Z" fill="url(#gemini-grad)"/><defs><linearGradient id="gemini-grad" x1="5.9" y1="11.1" x2="22.4" y2="11.1" gradientUnits="userSpaceOnUse"><stop stopColor="#4285F4"/><stop offset="0.33" stopColor="#9B72CB"/><stop offset="0.67" stopColor="#D96570"/><stop offset="1" stopColor="#13A358"/></linearGradient></defs></svg>
            Gemini
          </span>
        </div>

        <div className="px-3 mt-4">
          <button className="flex items-center gap-3 hover:bg-[#333537] pr-4 pl-3 py-2.5 rounded-full text-[14px] font-medium text-[#e3e3e3] transition-colors bg-[#131314]">
            <svg className="w-[20px] h-[20px] text-[#c4c7c5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Nuevo chat
          </button>
        </div>

        <div className="flex-1 overflow-y-auto mt-6 custom-scrollbar flex flex-col">
          {userHistory.length > 0 ? (
            <>
              <h3 className="text-[13px] font-medium text-[#c4c7c5] px-6 mb-2">Recientes</h3>
              <ul className="space-y-0.5 px-3">
                {userHistory.map((msg) => (
                  <li key={msg.id} className="flex items-center justify-between px-4 py-2.5 text-[14px] text-[#e3e3e3] hover:bg-[#333537] rounded-full cursor-pointer group transition-colors">
                    <span className="truncate pr-2">{msg.text}</span>
                    <svg className="w-[18px] h-[18px] text-[#c4c7c5] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="px-6 text-[#8e918f] text-[13px] mt-4">
              Tu historial de preguntas aparecerá aquí.
            </div>
          )}
        </div>

        <div className="mt-auto p-4 flex items-center justify-between cursor-pointer border-t border-[#333537] hover:bg-[#333537] transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-full bg-[#e83e8c] flex items-center justify-center text-white font-medium text-sm">
              E
            </div>
            <div>
              <p className="text-[14px] font-medium text-[#e3e3e3]">Eze Gorosito</p>
              <p className="text-[12px] text-[#c4c7c5]">Pro</p>
            </div>
          </div>
          <button className="p-2 rounded-full text-[#c4c7c5]">
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </button>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <main className="flex-1 flex flex-col relative h-full bg-[#131314]">
        <div className="flex-1 overflow-y-auto px-4 md:px-16 lg:px-48 flex flex-col custom-scrollbar pb-36">
          <div className="w-full max-w-[850px] mx-auto flex flex-col gap-8 pt-10">
            
            {messages.map((msg) => (
              <div key={msg.id} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                
                {msg.sender === 'user' ? (
                  <div className="bg-[#282a2c] px-5 py-3 rounded-3xl rounded-tr-sm text-[#e3e3e3] text-[15px] leading-relaxed max-w-[85%]">
                    {msg.text}
                  </div>
                ) : (
                  <div className="w-full flex">
                    <div className="w-full">
                      {msg.isInitialAboutMe ? (
                        <div className="text-[16px] leading-[1.6] text-[#e3e3e3] font-normal">
                          <p className="mb-5 text-[22px] font-medium text-white flex items-center gap-2">
                            ¡Hola! Soy Mauro Ezequiel Gorosito <span className="text-[24px]">👋</span>
                          </p>
                          
                          <p className="mb-4">
                            Soy un <strong>Estudiante de Análisis de Sistemas</strong> radicado en Córdoba, Argentina. Me apasiona resolver problemas complejos que conectan la infraestructura, el hardware y el código.
                          </p>
                          
                          <p className="mb-3 text-white font-medium mt-6">Mi perfil profesional:</p>
                          <ul className="space-y-3 pl-2 mb-6">
                            <li className="flex items-start gap-3">
                              <span className="text-blue-400 mt-1">✦</span>
                              <div>
                                <strong className="text-white">Soporte IT y Hardware:</strong> Experiencia en Help Desk en entornos hospitalarios, micro-soldadura, diagnóstico de PCBs y reparación avanzada de periféricos.
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-purple-400 mt-1">✦</span>
                              <div>
                                <strong className="text-white">Desarrollo Web:</strong> Frontend con React.js y Backend con Node.js / Firebase. Actualmente desarrollando <span className="bg-[#282a2c] px-1.5 py-0.5 rounded text-[14px]">TanCat</span>, un sistema de gestión.
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-green-400 mt-1">✦</span>
                              <div>
                                <strong className="text-white">Ciberseguridad:</strong> Fuerte enfoque en la seguridad de la información, buenas prácticas y optimización de redes.
                              </div>
                            </li>
                          </ul>

                          <p className="text-[#c4c7c5] mt-6 italic">
                            Escribí abajo para preguntarme sobre mi experiencia, stack tecnológico, o proyectos...
                          </p>
                        </div>
                      ) : (
                        <div className="text-[16px] leading-[1.6] text-[#e3e3e3] font-normal whitespace-pre-wrap">
                          {/* Esto procesa las negritas simples que pusimos en el cerebro del bot */}
                          {msg.text.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-white">{part}</strong> : part)}
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

        {/* ÁREA DE INPUT FIJA ABAJO */}
        <div className="absolute bottom-0 w-full bg-[#131314] pb-6 pt-2 px-4 flex flex-col items-center">
          <form 
            onSubmit={handleSendMessage} 
            className="w-full max-w-[850px] relative flex items-end bg-[#1e1f20] rounded-[28px] pl-4 pr-3 py-3 focus-within:bg-[#282a2c] transition-colors"
          >
            <button type="button" className="text-[#c4c7c5] hover:bg-[#333537] p-2 rounded-full transition-colors mr-2 mb-[2px]">
              <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </button>
            
            <textarea
              rows="1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                // Para que si apretás Enter, se envíe el mensaje (en lugar de bajar de línea)
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e);
                }
              }}
              placeholder="Preguntar a Mauro_AI"
              className="flex-1 bg-transparent border-none outline-none text-[#e3e3e3] placeholder-[#8e918f] text-[16px] resize-none pb-[8px] pt-[6px]"
              style={{ minHeight: '24px', maxHeight: '200px' }}
            />
            
            <div className="flex items-center gap-1 ml-2 mb-[2px]">
              <button type="button" className="text-[14px] font-medium text-[#c4c7c5] hover:bg-[#333537] px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                Pro <svg className="w-4 h-4 text-[#8e918f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              <button type="button" className="text-[#c4c7c5] hover:bg-[#333537] p-2 rounded-full transition-colors">
                <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </button>

              {inputValue.trim() && (
                <button type="submit" className="text-[#a8c7fa] hover:bg-[#333537] p-2 rounded-full transition-colors ml-1">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
              )}
            </div>
          </form>
          
          <p className="text-center text-[12px] text-[#c4c7c5] mt-3 font-normal">
            Mauro_AI es una IA y puede cometer errores.
          </p>
        </div>

      </main>
    </div>
  );
};

export default ChatPortfolio;