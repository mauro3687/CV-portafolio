import React from 'react';
import InteractiveGlobe from './ui/InteractiveGlove.jsx';

const MessageList = ({ messages, theme, currentT, profileType, handleOptionClick, handleEmailClick, messagesEndRef, initialOptions }) => {

  const getSkillIcon = (name, fallbackIcon) => {
    const n = name.toLowerCase();
    const base = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";
    
    if (n.includes('javascript')) return <img src={`${base}javascript/javascript-original.svg`} alt="JS" className="w-[18px] h-[18px]" />;
    if (n.includes('react')) return <img src={`${base}react/react-original.svg`} alt="React" className="w-[18px] h-[18px]" />;
    if (n.includes('python')) return <img src={`${base}python/python-original.svg`} alt="Python" className="w-[18px] h-[18px]" />;
    if (n.includes('flask')) return <img src={`${base}flask/flask-original.svg`} alt="Flask" className="w-[18px] h-[18px] invert brightness-200" />;
    if (n.includes('django')) return <img src={`${base}django/django-plain.svg`} alt="Django" className="w-[18px] h-[18px]" />;
    if (n.includes('c#')) return <img src={`${base}csharp/csharp-original.svg`} alt="C#" className="w-[18px] h-[18px]" />;
    if (n.includes('mysql')) return <img src={`${base}mysql/mysql-original.svg`} alt="MySQL" className="w-[18px] h-[18px]" />;
    if (n.includes('mongo')) return <img src={`${base}mongodb/mongodb-original.svg`} alt="MongoDB" className="w-[18px] h-[18px]" />;
    if (n.includes('figma')) return <img src={`${base}figma/figma-original.svg`} alt="Figma" className="w-[18px] h-[18px]" />;
    if (n.includes('git')) return <img src={`${base}git/git-original.svg`} alt="Git" className="w-[18px] h-[18px]" />;
    if (n.includes('agile')) return (
      <svg className="w-[18px] h-[18px] text-[#FFA500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    );
    
    return fallbackIcon;
  };

  const getContactIcon = (id, fallbackIcon) => {
    const base = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";
    if (id === 'linkedin') return <img src={`${base}linkedin/linkedin-original.svg`} alt="LinkedIn" className="w-[20px] h-[20px]" />;
    if (id === 'github') return <img src={`${base}github/github-original.svg`} alt="GitHub" className="w-[20px] h-[20px] invert" />;
    if (id === 'whatsapp') return (
      <svg className="w-[20px] h-[20px] text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    );
    if (id === 'email') return (
      <svg className="w-[20px] h-[20px] text-[#EA4335]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    );
    return fallbackIcon;
  };

  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-16 lg:px-48 flex flex-col custom-scrollbar pb-40">
      <div className="w-full max-w-[900px] mx-auto flex flex-col gap-10 pt-8 md:pt-12">
        {messages.map((msg) => (
          <div key={msg.id} className={`animate-slide-up flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            
            {msg.sender === 'user' ? (
              <div className="bg-[#1c1d1e] border border-[#2e3032] px-6 py-3.5 rounded-3xl rounded-tr-sm text-[#e3e3e3] text-[15px] md:text-[16px] leading-relaxed max-w-[90%] md:max-w-[80%] font-medium">
                {msg.text}
              </div>
            ) : (
              
              <div className="w-full">
                
                {msg.isInitialAboutMe && (
                  <div className="w-full">
                    <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 mb-12 w-full">
                      <div className="flex-1 w-full text-left pt-2 md:pt-4">
                        <h1 className="mb-6 text-[32px] md:text-[40px] font-bold text-white leading-tight tracking-tight flex items-center gap-3">
                          {currentT.aboutTitle} 
                          <span className="text-[28px] md:text-[34px]">👋</span>
                        </h1>
                        <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#a0aab2] font-light">
                          {profileType === 'dev' ? currentT.aboutDescDev : currentT.aboutDescIT}
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-[240px] h-[240px] md:w-[320px] md:h-[320px] flex justify-center items-center">
                        <InteractiveGlobe />
                      </div>
                    </div>
                    
                    <div className="w-full">
                      <h2 className="mb-5 text-white font-semibold text-[15px] md:text-[16px] tracking-widest uppercase flex items-center gap-2">
                        {currentT.aboutProfile}
                      </h2>
                      <ul className="space-y-4 mb-10 text-[15px] md:text-[16px] text-[#c4cbd1] leading-[1.7] font-light">
                        <li className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1.5 text-[12px]">◈</span>
                          <div>{profileType === 'dev' ? currentT.aboutDev1 : currentT.aboutIT1}</div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-purple-400 mt-1.5 text-[12px]">◈</span>
                          <div>{profileType === 'dev' ? currentT.aboutDev2 : currentT.aboutIT2}</div>
                        </li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-3 mt-6">
                        {initialOptions.map((opt, idx) => (
                          <button 
                            key={idx} 
                            onClick={() => handleOptionClick(opt.query)} 
                            className="px-6 py-2.5 text-[13px] md:text-[14px] font-medium text-cyan-100 bg-[#161719] border border-[#282a2c] rounded-full hover:bg-[#1e1f20] hover:border-[#333537] transition-all duration-300"
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {!msg.isInitialAboutMe && msg.text && (
                  <div className="text-[15px] md:text-[16px] leading-[1.8] text-[#c4cbd1] font-light whitespace-pre-wrap mb-2">
                    {msg.text.split('**').map((part, i) => 
                      i % 2 === 1 
                        ? <strong key={i} className="text-white font-medium tracking-wide">{part}</strong> 
                        : part
                    )}
                  </div>
                )}

                {msg.hasSkills && (
                  <div className="flex flex-wrap gap-3 mt-5">
                    {msg.skillsList.map((skill) => (
                      <div 
                        key={skill.id} 
                        className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#131415] border border-[#282a2c] hover:border-[#3a3e42] hover:bg-[#161719] transition-all cursor-default"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center">
                          {getSkillIcon(skill.name, skill.icon)}
                        </div>
                        <span className="text-[14px] font-medium text-[#e3e3e3]">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {msg.hasOptions && (
                  <div className="flex flex-wrap gap-3 mt-5">
                    {msg.options.map((opt, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => handleOptionClick(opt.query)} 
                        className="px-6 py-2.5 text-[13px] md:text-[14px] font-medium text-cyan-100 bg-[#161719] border border-[#282a2c] rounded-full hover:bg-[#1e1f20] hover:border-[#333537] transition-all duration-300"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}

                {msg.hasContact && (
                  <div className="flex flex-wrap gap-3 mt-5">
                    {msg.contactLinks.map((link) => {
                      const baseClass = "flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#131415] border border-[#282a2c] hover:border-[#3a3e42] hover:bg-[#161719] transition-all group";
                      if (link.id === 'email') {
                        return (
                          <button key={link.id} onClick={(e) => handleEmailClick(e, link.url)} className={baseClass}>
                            <span className="group-hover:scale-110 transition-transform duration-300">
                              {getContactIcon(link.id, link.icon)}
                            </span>
                            <span className="font-medium text-[#e3e3e3] text-[15px]">{link.name}</span>
                          </button>
                        );
                      }
                      return (
                        <a key={link.id} href={link.url} target="_blank" rel="noreferrer" className={baseClass}>
                          <span className="group-hover:scale-110 transition-transform duration-300">
                            {getContactIcon(link.id, link.icon)}
                          </span>
                          <span className="font-medium text-[#e3e3e3] text-[15px]">{link.name}</span>
                        </a>
                      );
                    })}
                  </div>
                )}

                {msg.hasProjects && (
                  <div className="flex overflow-x-auto gap-6 mt-8 pb-8 pt-2 snap-x snap-mandatory custom-scrollbar-horizontal w-full">
                    {msg.projects.map((project) => (
                      <div key={project.id} className="min-w-[300px] md:min-w-[340px] max-w-[340px] snap-start flex-shrink-0 bg-[#131415] border border-[#282a2c] rounded-2xl overflow-hidden hover:border-[#3a3e42] transition-all duration-300 flex flex-col">
                        <div className={`h-32 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <span className="text-white font-bold tracking-[0.2em] uppercase text-[12px] z-10 drop-shadow-md">
                            {project.title.split(' - ')[0]}
                          </span>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-[18px] font-semibold text-white mb-3 tracking-wide">{project.title}</h3>
                          <p className="text-[14px] text-[#9ba4ad] leading-relaxed mb-8 flex-1 font-light">{project.description}</p>
                          <div className="flex items-center gap-3 mt-auto">
                            <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex-1 bg-[#2e82ff] hover:bg-[#4390ff] text-white text-center text-[13px] font-bold py-2.5 rounded-full transition-colors">
                              Ver Demo
                            </a>
                            <a href={project.codeLink} target="_blank" rel="noreferrer" className="flex-1 bg-transparent text-[#e3e3e3] border border-[#38404a] hover:bg-[#1e1f20] text-center text-[13px] font-semibold py-2.5 rounded-full transition-all">
                              Código
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} className="h-6" />
      </div>
    </div>
  );
};

export default MessageList;