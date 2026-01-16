import React, { useEffect, useState } from 'react';

const IntakeForm: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-[#ab7e31]/5 rounded-full blur-[180px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60rem] h-[60rem] bg-[#ab7e31]/10 rounded-full blur-[200px] animate-float"></div>
      </div>

      <div className="relative z-10 pt-32 pb-40 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-24 reveal">
            <span className="inline-block px-5 py-2 bg-[#ab7e31]/10 border border-[#ab7e31]/30 rounded-full text-[#ab7e31] font-black tracking-[0.4em] uppercase text-[10px] mb-8">
              Protocol: Initialization
            </span>
            <h1 className="text-6xl md:text-9xl logo-font font-black mb-8 leading-[0.85] tracking-tighter uppercase">
              DISCOVERY <br />
              <span className="text-[#ab7e31] italic font-light drop-shadow-2xl">SESSION.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
              Precision starts with synchronization. Share your mission parameters below to begin your partnership with Black Star's elite specialist network.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Why & Process */}
            <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-36">
              <div className="space-y-10">
                <div className="reveal">
                  <h3 className="text-sm font-black text-[#ab7e31] uppercase tracking-[0.3em] mb-6 flex items-center">
                    <span className="w-8 h-px bg-[#ab7e31] mr-4"></span> Phase 1: Alignment
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Every discovery call is a deep dive into your operational ecosystem. We don't just assign tasks; we identify leverage points to reclaim your time.
                  </p>
                </div>

                <div className="reveal">
                  <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-6 flex items-center">
                    <span className="w-8 h-px bg-white/20 mr-4"></span> Phase 2: Specialist Mapping
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Based on your intake profile, our Lead Strategists curate a dedicated pairing with a specialist whose core competencies match your unique tech stack and workflow.
                  </p>
                </div>

                <div className="reveal">
                  <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-6 flex items-center">
                    <span className="w-8 h-px bg-white/20 mr-4"></span> Phase 3: Deployment
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Post-call, you'll receive a tailored Strategic Brief. Integration typically occurs within 48-72 hours of retainer initialization.
                  </p>
                </div>
              </div>

              <div className="glass p-10 rounded-[3rem] border-[#ab7e31]/20 bg-[#ab7e31]/5 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-5">
                    <i className="fas fa-shield-halved text-7xl text-white"></i>
                 </div>
                 <h4 className="text-white font-black text-xl mb-4 uppercase tracking-tighter">BSSP Encrypted</h4>
                 <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                   All data shared via this protocol is protected by Black Star Security Protocol. Your operational details remain confidential and secure.
                 </p>
                 <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] font-black">
                           <i className="fas fa-user-shield text-[#ab7e31]"></i>
                         </div>
                       ))}
                    </div>
                    <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Lead Strategists On Standby</span>
                 </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-7">
              <div className="reveal glass rounded-[4rem] border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden h-[900px] flex flex-col relative">
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ab7e31]/0 via-[#ab7e31] to-[#ab7e31]/0 z-20"></div>
                
                <div className="flex-grow relative bg-black/40">
                  {/* Loading State Overlay */}
                  {!isLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 z-0">
                      <div className="relative">
                        <div className="w-16 h-16 border-2 border-white/5 rounded-full"></div>
                        <div className="absolute inset-0 border-t-2 border-[#ab7e31] rounded-full animate-spin"></div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-[11px] font-black text-white uppercase tracking-[0.5em] animate-pulse">Initializing Secure Node</p>
                        <p className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Synchronizing Encrypted Data Stream...</p>
                      </div>
                    </div>
                  )}
                  
                  <iframe 
                    src="https://tally.so/r/LZ7AYz?transparentBackground=1"
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0} 
                    title="Black Star Discovery Intake"
                    className={`relative z-10 w-full h-full border-none transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setIsLoaded(true)}
                  ></iframe>
                </div>

                <div className="p-8 border-t border-white/5 bg-black/60 flex flex-col sm:flex-row items-center justify-between gap-6 shrink-0">
                  <div className="flex items-center space-x-4 opacity-40">
                    <i className="fas fa-fingerprint text-[#ab7e31] text-lg"></i>
                    <div>
                      <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] block">Identity Verified</span>
                      <span className="text-[8px] text-gray-500 font-bold uppercase tracking-[0.2em] block">Secure Intake Node BS-770</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Estimated Completion Time</p>
                    <p className="text-[#ab7e31] font-black text-xl italic logo-font tracking-tighter">~ 4 Minutes</p>
                  </div>
                </div>
              </div>

              {/* Support link for issues */}
              <div className="mt-8 text-center reveal">
                <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">
                  Issues with the protocol? <a href="mailto:support@blackstarva.com" className="text-[#ab7e31] hover:text-white transition-colors underline">Contact Tactical Support</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeForm;