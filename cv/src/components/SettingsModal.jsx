import React from 'react';

const SettingsModal = ({ setShowSettings, setProfileType, profileType, setMessages, setLang, lang, setTheme, theme, currentT }) => {
  return (
    <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4">
      <div className="bg-[#1e1f20] border border-cyan-500/30 rounded-2xl w-full max-w-sm p-6 shadow-xl animate-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-medium text-white flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {currentT.settings}
          </h3>
          <button onClick={() => setShowSettings(false)} className="text-[#8e918f] hover:text-cyan-400 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="mb-6 pb-6 border-b border-[#333537]">
          <p className="text-sm text-[#8e918f] mb-3">{currentT.profileSelect}</p>
          <div className="flex flex-col gap-2">
            <button onClick={() => { setProfileType('dev'); setMessages([{ id: Date.now(), sender: 'ai', isInitialAboutMe: true }]); setShowSettings(false); }} className={`w-full py-3 px-4 rounded-xl text-sm font-medium transition-all text-left flex items-center gap-3 border ${profileType === 'dev' ? 'bg-[#a8c7fa]/20 text-cyan-300 border-cyan-500/50' : 'bg-[#282a2c] text-[#e3e3e3] border-transparent'}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              Desarrollador de Software
            </button>
            <button onClick={() => { setProfileType('it'); setMessages([{ id: Date.now(), sender: 'ai', isInitialAboutMe: true }]); setShowSettings(false); }} className={`w-full py-3 px-4 rounded-xl text-sm font-medium transition-all text-left flex items-center gap-3 border ${profileType === 'it' ? 'bg-[#a8c7fa]/20 text-cyan-300 border-cyan-500/50' : 'bg-[#282a2c] text-[#e3e3e3] border-transparent'}`}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
              Soporte IT / Telecom
            </button>
          </div>
        </div>
        <div className="mb-6">
          <p className="text-sm text-[#8e918f] mb-3">{currentT.language}</p>
          <div className="flex gap-2">
            <button onClick={() => { setLang('es'); setMessages([{ id: Date.now(), sender: 'ai', isInitialAboutMe: true }]); setShowSettings(false); }} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all border ${lang === 'es' ? 'bg-[#a8c7fa]/20 text-cyan-300 border-cyan-500/50' : 'bg-[#282a2c] text-[#e3e3e3] border-transparent'}`}>Español</button>
            <button onClick={() => { setLang('en'); setMessages([{ id: Date.now(), sender: 'ai', isInitialAboutMe: true }]); setShowSettings(false); }} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all border ${lang === 'en' ? 'bg-[#a8c7fa]/20 text-cyan-300 border-cyan-500/50' : 'bg-[#282a2c] text-[#e3e3e3] border-transparent'}`}>English</button>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-sm text-[#8e918f] mb-3">{currentT.accentColor}</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => setTheme('bg-[#282a2c]')} className={`w-10 h-10 rounded-full bg-[#282a2c] border-2 transition-all ${theme === 'bg-[#282a2c]' ? 'border-cyan-400 scale-110' : 'border-transparent hover:scale-105'}`}></button>
            <button onClick={() => setTheme('bg-blue-600')} className={`w-10 h-10 rounded-full bg-blue-600 border-2 transition-all ${theme === 'bg-blue-600' ? 'border-cyan-400 scale-110' : 'border-transparent hover:scale-105'}`}></button>
            <button onClick={() => setTheme('bg-emerald-600')} className={`w-10 h-10 rounded-full bg-emerald-600 border-2 transition-all ${theme === 'bg-emerald-600' ? 'border-cyan-400 scale-110' : 'border-transparent hover:scale-105'}`}></button>
            <button onClick={() => setTheme('bg-purple-600')} className={`w-10 h-10 rounded-full bg-purple-600 border-2 transition-all ${theme === 'bg-purple-600' ? 'border-cyan-400 scale-110' : 'border-transparent hover:scale-105'}`}></button>
          </div>
        </div>
        <button onClick={() => setShowSettings(false)} className="w-full py-3 rounded-xl bg-[#333537] text-white font-medium transition-colors hover:bg-[#4a4d4f]">
          {currentT.close}
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;