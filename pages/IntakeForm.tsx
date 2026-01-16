import React from 'react';

const IntakeForm: React.FC = () => {
  return (
    <div className="py-24 animate-fade-in bg-black min-h-screen relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#ab7e31]/30 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-[40rem] h-[40rem] bg-[#ab7e31]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-[#ab7e31]/10 border border-[#ab7e31]/20 rounded-full text-[#ab7e31] font-bold tracking-[0.3em] uppercase text-[9px] mb-6">
            Initialization Sequence
          </span>
          <h1 className="text-5xl md:text-7xl logo-font font-black text-white mt-4 mb-8 leading-tight">
            Client <span className="text-[#ab7e31] italic font-light">Intake</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Securely provide your mission requirements below. Our Lead Strategists will review your parameters to ensure perfect specialist alignment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-[3.5rem] border-white/10 shadow-2xl relative overflow-hidden h-[850px] flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ab7e31]/20 via-[#ab7e31] to-[#ab7e31]/20 z-20"></div>
            
            <div className="flex-grow relative bg-black/20">
              {/* Loading State Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 opacity-50 pointer-events-none z-0">
                 <div className="w-8 h-8 border-2 border-[#ab7e31] border-t-transparent rounded-full animate-spin"></div>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Synchronizing secure intake node...</p>
              </div>
              
              <iframe 
                src="https://tally.so/r/LZ7AYz?transparentBackground=1"
                width="100%" 
                height="100%" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Black Star Client Intake"
                className="relative z-10 w-full h-full border-none"
              ></iframe>
            </div>

            <div className="p-6 border-t border-white/5 bg-black/40 flex justify-center shrink-0">
               <div className="flex items-center space-x-3 opacity-30">
                  <i className="fas fa-shield-halved text-[#ab7e31] text-xs"></i>
                  <span className="text-[9px] font-black text-white uppercase tracking-[0.3em]">BLACK STAR SECURE PROTOCOL (BSSP) ENABLED</span>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center space-y-4">
             <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-10 h-10 rounded-full border-2 border-black" alt="EA Profile" />
                ))}
             </div>
             <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">Specialists standby for deployment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeForm;