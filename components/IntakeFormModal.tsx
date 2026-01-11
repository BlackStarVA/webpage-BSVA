import React, { useEffect, useRef } from 'react';

interface IntakeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntakeFormModal: React.FC<IntakeFormModalProps> = ({ isOpen, onClose }) => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  // Protocol: Dynamic Script Injection for Jotform
  useEffect(() => {
    if (isOpen && formContainerRef.current) {
      // Clear container to prevent duplicate renders
      formContainerRef.current.innerHTML = '';
      
      const script = document.createElement('script');
      script.src = "https://form.jotform.com/jsform/260097082254153";
      script.type = "text/javascript";
      script.async = true;
      
      formContainerRef.current.appendChild(script);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl animate-fade-in">
      <div className="glass w-full rounded-[3.5rem] border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col transition-all duration-700 ease-in-out max-w-2xl max-h-[90vh]">
        
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

        {/* External Form Container */}
        <div className="flex-grow overflow-y-auto custom-scrollbar p-4 md:p-8 bg-black/20">
          <div 
            ref={formContainerRef} 
            className="jotform-embed-wrapper min-h-[400px]"
          >
            {/* The script will inject the form here */}
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 opacity-50">
               <div className="w-8 h-8 border-2 border-[#ab7e31] border-t-transparent rounded-full animate-spin"></div>
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Synchronizing secure form node...</p>
            </div>
          </div>
        </div>

        {/* Modal Footer (Decorative/Brand) */}
        <div className="p-6 border-t border-white/5 bg-black/40 flex justify-center shrink-0">
           <div className="flex items-center space-x-3 opacity-30">
              <i className="fas fa-shield-halved text-[#ab7e31] text-xs"></i>
              <span className="text-[9px] font-black text-white uppercase tracking-[0.3em]">BLACK STAR SECURE PROTOCOL (BSSP) ENABLED</span>
           </div>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(171, 126, 49, 0.25); border-radius: 10px; }
        /* Style adjustments for embedded iFrames if needed */
        .jotform-embed-wrapper iframe {
          width: 100% !important;
          border: none !important;
          background: transparent !important;
        }
      `}</style>
    </div>
  );
};

export default IntakeFormModal;