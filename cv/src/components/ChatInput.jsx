import React from 'react';


const ChatInput = ({ inputValue, setInputValue, handleSendMessage, theme, currentT }) => {
  return (
    <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#131314] via-[#131314] to-transparent pb-4 md:pb-6 pt-10 px-3 md:px-4 flex flex-col items-center z-20">
      <form onSubmit={handleSendMessage} className="w-full max-w-[850px] relative flex items-end bg-[#1e1f20] rounded-[24px] md:rounded-[28px] pl-2 md:pl-4 pr-2 md:pr-3 py-2 md:py-3 focus-within:bg-[#1a1b1d] transition-colors border border-transparent focus-within:border-cyan-500/50 shadow-lg">
        <button type="button" className="hidden md:block text-[#c4c7c5] hover:text-cyan-400 p-2 rounded-full transition-colors mr-2 mb-[2px]">
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
          <button type="button" className="hidden sm:flex text-[14px] font-medium text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 px-3 py-1.5 rounded-lg transition-colors items-center gap-1 border border-cyan-500/30">Pro</button>
          {inputValue.trim() && (
            <button type="submit" className={`${theme !== 'bg-[#282a2c]' ? theme : 'bg-cyan-500/20 border border-cyan-500/50'} ${theme !== 'bg-[#282a2c]' ? 'text-white' : 'text-cyan-300'} hover:brightness-110 p-2 rounded-full transition-all md:ml-1`}>
              <svg className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          )}
        </div>
      </form>
      <p className="text-center text-[11px] md:text-[12px] text-[#8e918f] mt-2 md:mt-3 font-normal tracking-wide">{currentT.disclaimer}</p>
    </div>
  );
};

export default ChatInput;