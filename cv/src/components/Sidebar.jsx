import React from 'react';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, setMessages, userHistory, handleOptionClick, setShowSettings, currentT }) => {
  return (
    <>
      {isSidebarOpen && <div className="fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity" onClick={() => setIsSidebarOpen(false)} />}
      <aside className={`fixed md:relative z-50 flex flex-col w-[280px] h-full bg-[#1e1f20] flex-shrink-0 border-r border-[#333537] transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="pt-3 px-3 pb-2 flex items-center gap-2">
          <button onClick={() => setIsSidebarOpen(false)} className="p-3 hover:bg-[#333537] rounded-full transition-colors md:cursor-default">
            <svg className="w-5 h-5 text-[#c4c7c5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <span className="text-[1.1rem] font-medium text-[#e3e3e3] flex items-center gap-2 ml-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0358 6.55135L14.7176 3.1906C14.4921 2.6152 13.6811 2.60742 13.445 3.17832L11.9704 6.64332C11.5367 7.66224 10.7259 8.48784 9.7208 8.9376L6.29415 10.471C5.72758 10.7246 5.7369 11.5323 6.3101 11.7758L9.77123 13.2458C10.7717 13.6706 11.5835 14.4842 12.0232 15.4851L13.5678 18.999C13.8239 19.5818 14.6369 19.5855 14.8981 19.0051L16.4853 15.4802C16.9202 14.5143 17.7022 13.7203 18.6601 13.2698L22.0913 11.656C22.6617 11.3877 22.6521 10.5759 22.0747 10.3197L18.6015 8.7781C17.6163 8.34091 16.8248 7.55171 16.0358 6.55135Z" fill="url(#gemini-grad)"/><defs><linearGradient id="gemini-grad" x1="5.9" y1="11.1" x2="22.4" y2="11.1" gradientUnits="userSpaceOnUse"><stop stopColor="#4285F4"/><stop offset="0.33" stopColor="#9B72CB"/><stop offset="0.67" stopColor="#D96570"/><stop offset="1" stopColor="#13A358"/></linearGradient></defs></svg>
            Mauro_IA
          </span>
        </div>
        <div className="px-3 mt-4">
          <button onClick={() => setMessages([{ id: Date.now(), sender: 'ai', isInitialAboutMe: true }])} className="w-full pr-4 pl-3 py-2.5 rounded-full text-[14px] font-medium text-[#e3e3e3] bg-[#131314] hover:bg-[#282a2c] flex items-center gap-3 transition-colors border border-[#333537]">
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
                  <li key={msg.id} onClick={() => handleOptionClick(msg.text)} className="flex items-center justify-between px-4 py-2.5 text-[14px] text-[#e3e3e3] hover:bg-cyan-500/10 hover:text-cyan-300 rounded-full cursor-pointer transition-all">
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
              <p className="text-[12px] text-cyan-400">Pro</p>
            </div>
          </div>
          <button onClick={() => setShowSettings(true)} className="p-2 rounded-full text-[#c4c7c5] hover:text-cyan-400 transition-colors">
            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;