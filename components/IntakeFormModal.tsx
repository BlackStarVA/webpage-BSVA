import React from 'react';

interface IntakeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntakeFormModal: React.FC<IntakeFormModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl animate-fade-in">
      <div className="glass w-full rounded-[3.5rem] border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col transition-all duration-700 ease-in-out max-w-2xl h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-black/40 shrink-0">
          <div>
            <h2 className="text-3xl font-black logo-font text-white uppercase tracking-tighter">
              <span className="text-[#ab7e31]">INTAKE</span> <span className="text-white">PROTOCOL</span>
            </h2>
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mt-2">SECURE ONBOARDING GATEWAY</p>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all border border-white/5"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Tally Form Embed Container */}
        <div className="flex-grow relative bg-black/20">
          {/* Loading State Overlay (hidden once iframe loads) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 opacity-50 pointer-events-none z-0">
             <div className="w-8 h-8 border-2 border-[#ab7e31] border-t-transparent rounded-full animate-spin"></div>
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Synchronizing secure form node...</p>
          </div>
          
          <iframe 
            src="https://tally.so/r/LZ7AYz?transparentBackground=1"
            width="100%" 
            height="100%" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0} 
            title="Black Star Intake Form"
            className="relative z-10 w-full h-full border-none"
            onLoad={(e) => {
              // Optional: Handle load event if needed
            }}
          ></iframe>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/5 bg-black/40 flex justify-center shrink-0">
           <div className="flex items-center space-x-3 opacity-30">
              <i className="fas fa-shield-halved text-[#ab7e31] text-xs"></i>
              <span className="text-[9px] font-black text-white uppercase tracking-[0.3em]">BLACK STAR SECURE PROTOCOL (BSSP) ENABLED</span>
           </div>
        </div>
      </div>
      
      <style>{`
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default IntakeFormModal;