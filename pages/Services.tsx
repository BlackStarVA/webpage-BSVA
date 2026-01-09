
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

interface ServicesProps {
  onBookNow: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBookNow }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[70vh] flex items-center">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ab7e31]/10 via-transparent to-transparent opacity-50 transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0005})` }}
        ></div>
        
        <div 
          className="max-w-7xl mx-auto relative z-10 text-center transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="reveal">
            <span className="text-[#ab7e31] font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Our Capabilities</span>
            <h1 className="text-6xl md:text-8xl logo-font font-black text-white mb-8 leading-tight">
              Precision <span className="text-[#ab7e31] italic font-light">Leverage</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              We provide the invisible infrastructure that allows the world's most 
              prolific founders to operate at their absolute peak.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <div 
              key={s.id} 
              className="reveal glass group p-10 rounded-[3rem] border-white/5 hover:border-[#ab7e31]/50 transition-all duration-700 flex flex-col h-full hover:-translate-y-4 relative overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(171,126,49,0.2)]"
              style={{ 
                transitionDelay: `${i * 100}ms`,
                transform: `translateY(${(scrollY - 300) * (i % 2 === 0 ? -0.02 : 0.02)}px)` 
              }}
            >
              {/* Card Icon */}
              <div className="w-16 h-16 bg-[#ab7e31] rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-[#ab7e31]/20 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500">
                <i className={`fas ${s.icon} text-2xl text-black`}></i>
              </div>
              
              {/* Card Title */}
              <h3 className="text-2xl font-black logo-font text-white mb-6 uppercase tracking-widest group-hover:text-[#ab7e31] transition-colors duration-500">
                {s.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-gray-400 font-light leading-relaxed mb-6 transition-colors duration-500 group-hover:text-white/90">
                {s.description}
              </p>
              
              {/* Expanding/Revealing Content Wrapper */}
              <div className="flex-grow flex flex-col justify-end">
                <div className="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                  <div className="h-px bg-white/5 w-full mb-8 group-hover:bg-[#ab7e31]/20 transition-colors duration-500"></div>
                  
                  <ul className="space-y-4 mb-10">
                    {["Elite Strategic Logic", "Absolute Data Privacy", "Texas-Based Management"].map((feat, idx) => (
                      <li key={idx} className="flex items-center text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-gray-300">
                        <i className="fas fa-check text-[#ab7e31] mr-4 text-[8px]"></i> {feat}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/pricing" 
                    className="inline-flex items-center bg-[#ab7e31] text-black px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] group/link hover:bg-white transition-all shadow-lg shadow-[#ab7e31]/10"
                  >
                    Explore Retainers 
                    <i className="fas fa-arrow-right ml-3 group-hover/link:translate-x-2 transition-transform"></i>
                  </Link>
                </div>
              </div>

              {/* Decorative Subtle Light Effect on Hover */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#ab7e31]/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-40 bg-black/50 border-y border-white/5 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 pointer-events-none transition-transform duration-500 ease-out"
          style={{ transform: `translateY(${(scrollY - 1500) * 0.1}px)` }}
        >
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ab7e31]/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="reveal text-center mb-24">
            <h2 className="text-5xl md:text-7xl logo-font font-black text-white mb-8">The <span className="text-[#ab7e31] italic font-light">Method</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto font-light">Our four-pillar approach to seamless operational partnership.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ab7e31]/20 to-transparent -translate-y-1/2"></div>
            
            {[
              { step: "01", title: "Diagnostic", desc: "We audit your current friction points and operational drag.", speed: -0.05 },
              { step: "02", title: "Allocation", desc: "You are matched with a specialist vetted from the top 0.1%.", speed: 0.05 },
              { step: "03", title: "Integration", desc: "Seamless onboarding into your existing tech stack and workflow.", speed: -0.05 },
              { step: "04", title: "Evolution", desc: "Proactive management that scales alongside your business.", speed: 0.05 }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="reveal relative z-10 glass p-8 rounded-[2.5rem] border-white/5 text-center group hover:border-[#ab7e31]/40 transition-all"
                style={{ transform: `translateY(${(scrollY - 1800) * item.speed}px)` }}
              >
                <div className="text-5xl font-black logo-font text-white/5 mb-4 group-hover:text-[#ab7e31]/10 transition-colors">{item.step}</div>
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{item.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-4 relative overflow-hidden">
        <div 
          className="reveal max-w-5xl mx-auto glass p-16 md:p-32 rounded-[5rem] border-white/10 relative overflow-hidden text-center transition-transform duration-500 ease-out"
          style={{ transform: `translateY(${(scrollY - 2500) * 0.05}px)` }}
        >
          <div className="reveal">
            <h2 className="text-4xl md:text-6xl logo-font font-black text-white mb-10 leading-tight">
              Universal <span className="text-[#ab7e31]">Integration</span>
            </h2>
            <p className="text-gray-400 text-lg mb-16 font-light max-w-2xl mx-auto">
              We don't ask you to change your workflow. We integrate into your universe. 
              Our specialists are native in the industry's most powerful platforms.
            </p>
            
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0">
              {['fa-slack', 'fa-notion', 'fa-trello', 'fa-microsoft', 'fa-google', 'fa-atlassian'].map((icon, i) => (
                <i 
                  key={i} 
                  className={`fab ${icon} text-5xl md:text-6xl text-white hover:text-[#ab7e31] transition-colors animate-float`} 
                  style={{ 
                    animationDelay: `${i * 0.5}s`,
                    transform: `translateY(${Math.sin((scrollY + i * 100) * 0.01) * 10}px)`
                  }}
                ></i>
              ))}
              <div className="flex items-center space-x-2 text-white text-2xl font-bold transition-transform hover:scale-110">
                 <i className="fas fa-file-invoice-dollar text-4xl"></i>
                 <span>QBO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-40 px-4 relative">
        <div 
          className="reveal max-w-3xl mx-auto text-center transition-transform duration-500 ease-out"
          style={{ transform: `translateY(${(scrollY - 3000) * 0.1}px)` }}
        >
          <h2 className="text-4xl font-black text-white mb-10 logo-font">Ready for High-Precision Support?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/pricing" className="px-10 py-5 bg-white text-black font-black rounded-xl uppercase tracking-widest hover:bg-[#ab7e31] transition-all shadow-xl">
              View Retainers
            </Link>
            <button 
              onClick={onBookNow}
              className="px-10 py-5 bg-[#ab7e31] text-black font-black rounded-xl uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-[#ab7e31]/20 border border-transparent"
            >
              Discovery Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
