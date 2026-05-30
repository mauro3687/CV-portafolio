import React from 'react';

const WelcomeScreen = ({ onSelectProfile }) => {
  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#050505]/80 backdrop-blur-lg px-4">
      <div className="bg-[#0c1217] border border-[#23282f] rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-[0_0_50px_rgba(0,229,255,0.05)] animate-slide-up flex flex-col items-center text-center">
        
        <div className="w-16 h-16 bg-[#131415] border border-[#282a2c] rounded-full flex items-center justify-center mb-6 shadow-inner">
          <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <h1 className="text-[28px] md:text-[38px] font-bold text-white mb-4 tracking-tight">
          Bienvenido al portafolio
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#9ba4ad] mb-10 font-light max-w-xl">
          Seleccioná el perfil profesional que deseas explorar para adaptar la experiencia a tus intereses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          <button 
            onClick={() => onSelectProfile('dev')}
            className="group flex flex-col items-center text-center p-8 rounded-2xl bg-[#131415] border border-[#282a2c] hover:border-cyan-500/50 hover:bg-gradient-to-b hover:from-[#161b22] hover:to-[#0d1117] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 rounded-full bg-[#1e1f20] border border-[#333537] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-[20px] font-semibold text-white mb-2 tracking-wide">Desarrollador</h3>
            <p className="text-[14px] text-[#9ba4ad] font-light">Especialista en React, Node.js y desarrollo web escalable.</p>
          </button>

          <button 
            onClick={() => onSelectProfile('it')}
            className="group flex flex-col items-center text-center p-8 rounded-2xl bg-[#131415] border border-[#282a2c] hover:border-purple-500/50 hover:bg-gradient-to-b hover:from-[#161b22] hover:to-[#0d1117] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-14 h-14 rounded-full bg-[#1e1f20] border border-[#333537] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <h3 className="text-[20px] font-semibold text-white mb-2 tracking-wide">Técnico en Telecomunicaciones</h3>
            <p className="text-[14px] text-[#9ba4ad] font-light">Soporte técnico, hardware, redes y atención Help Desk.</p>
          </button>

        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;