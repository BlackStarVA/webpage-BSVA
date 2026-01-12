import React from 'react';

const Careers: React.FC = () => {
  return (
    <div className="py-24 animate-fade-in bg-black min-h-screen relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#ab7e31]/30 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-[#ab7e31]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-[#ab7e31]/10 border border-[#ab7e31]/20 rounded-full text-[#ab7e31] font-bold tracking-[0.3em] uppercase text-[9px] mb-6">
            Recruiting the Top 0.1%
          </span>
          <h1 className="text-5xl md:text-7xl logo-font font-black text-white mt-4 mb-8 leading-tight">
            Careers at <br /><span className="text-[#ab7e31] italic font-light">Black Star</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            We are looking for individuals who view themselves as strategic partners, not task-takers. Join the Texas-based agency setting the global standard for elite support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-12 lg:sticky lg:top-32">
            {/* Qualifications Card */}
            <div className="glass p-10 rounded-[2.5rem] border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <i className="fas fa-user-check text-7xl text-[#ab7e31]"></i>
              </div>
              <h2 className="text-2xl font-black logo-font text-white mb-8 uppercase tracking-widest">Qualifications & Terms</h2>
              <div className="space-y-8">
                {[
                  { title: "Experience", desc: "7+ years supporting C-Suite executives or Founders.", icon: "fa-user-tie" },
                  { title: "Tech Stack", desc: "Advanced proficiency in MS Office, Google Workspace, and Zoom/Slack.", icon: "fa-laptop-code" },
                  { title: "Soft Skills", desc: "High EQ, exceptional communication, and strict confidentiality.", icon: "fa-comments" },
                  { title: "Work Style", desc: "Proactive, autonomous problem-solver.", icon: "fa-lightbulb" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mr-4 border border-white/10 group-hover:bg-[#ab7e31]/20 group-hover:border-[#ab7e31]/50 transition-all shrink-0">
                      <i className={`fas ${item.icon} text-[#ab7e31] text-sm`}></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center text-[9px] text-[#ab7e31]/60 font-black uppercase tracking-widest">
                <i className="fas fa-check-double mr-2"></i>
                <span className="uppercase">required to be considered for the position</span>
              </div>
            </div>

            {/* Terms Card (Gavel) */}
            <div className="glass p-10 rounded-[2.5rem] border-[#ab7e31]/20 relative overflow-hidden bg-[#ab7e31]/5">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <i className="fas fa-gavel text-6xl text-[#ab7e31]"></i>
              </div>
              <h3 className="text-[#ab7e31] font-black text-xl uppercase tracking-widest mb-8">Terms & Logistics</h3>
              <div className="space-y-6">
                {[
                  { desc: "1099 Independent Contractor (Self-employed; no benefits/insurance).", icon: "fa-file-contract" },
                  { desc: "Must provide own hardware, software, and high-speed internet.", icon: "fa-desktop" },
                  { desc: "Remote (U.S. Only), with availability during your time zone business hours.", icon: "fa-clock" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-8 h-8 flex items-center justify-center mr-3 shrink-0">
                      <i className={`fas ${item.icon} text-[#ab7e31]/70 text-xs`}></i>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center text-[9px] text-[#ab7e31]/60 font-black uppercase tracking-widest">
                <i className="fas fa-shield-halved mr-2"></i>
                <span className="uppercase">required to be considered for the position</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="glass rounded-[3.5rem] border-white/10 shadow-2xl relative overflow-hidden h-[800px] flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ab7e31]/20 via-[#ab7e31] to-[#ab7e31]/20 z-20"></div>
              
              <div className="flex-grow relative bg-black/20">
                {/* Loading State Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 opacity-50 pointer-events-none z-0">
                   <div className="w-8 h-8 border-2 border-[#ab7e31] border-t-transparent rounded-full animate-spin"></div>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Initializing Application Node...</p>
                </div>
                
                <iframe 
                  src="https://tally.so/r/NpXqOG?transparentBackground=1"
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Black Star Career Application"
                  className="relative z-10 w-full h-full border-none"
                ></iframe>
              </div>

              <div className="p-6 border-t border-white/5 bg-black/40 flex justify-center shrink-0">
                 <div className="flex items-center space-x-3 opacity-30">
                    <i className="fas fa-user-shield text-[#ab7e31] text-xs"></i>
                    <span className="text-[9px] font-black text-white uppercase tracking-[0.3em]">SECURE RECRUITMENT PROTOCOL ENABLED</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;