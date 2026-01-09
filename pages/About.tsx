
import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="animate-fade-in overflow-hidden bg-black relative">
      {/* Deep Background Parallax Layer */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.07] transition-transform duration-300 ease-out will-change-transform"
        style={{ transform: `scale(1.2) translateY(${scrollY * 0.15}px)` }}
      >
         <img 
          src="https://images.unsplash.com/photo-1449156003053-c306a5bb8117?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover grayscale" 
          alt="Abstract Architecture" 
         />
      </div>

      {/* Floating Particles/Dust Layer */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-[#ab7e31]/10 blur-xl animate-pulse-slow will-change-transform"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${i * 20}%`,
              left: `${(i % 2 === 0 ? 10 : 80)}%`,
              transform: `translateY(${scrollY * (0.05 + i * 0.02)}px)`,
              transition: 'transform 0.4s ease-out'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
        {/* Built for Impact Section - Refined for Screenshot 2 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-60 pt-10">
           <div 
             className="reveal transition-transform duration-500 ease-out will-change-transform"
             style={{ transform: `translateY(${scrollY * -0.05}px)` }}
           >
              <span className="text-[#ab7e31] font-black tracking-[0.6em] uppercase text-[10px] mb-6 block">The Narrative</span>
              <h1 className="text-6xl md:text-[9.5rem] logo-font font-black text-white mb-10 leading-none tracking-tighter uppercase">
                Built for <br /><span className="text-[#ab7e31] italic font-light drop-shadow-2xl">Impact.</span>
              </h1>
              <div className="space-y-8 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  <span className="text-white font-bold">Black Star VA</span> was born in the U.S with a simple philosophy: The greatest minds shouldn't be bogged down by the mundane.
                </p>
                <p>
                  We are a boutique agency designed for the top 1%. We don't just provide "assistants"—we provide <span className="text-[#ab7e31] font-medium">Strategic Partners</span> who operate with the same intensity and precision as the leaders they support.
                </p>
                <p>
                  Our DNA is rooted in integrity, absolute discretion, and a proactive "Anticipatory Logic" that eliminates operational drag before it starts.
                </p>
              </div>
           </div>
           
           <div className="reveal relative flex justify-center items-center h-[600px]">
              {/* Central Glow Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ab7e31]/10 rounded-full blur-[100px] animate-pulse-slow"></div>
              
              {/* Image with Precision Badge - Ref Screenshot 2 */}
              <div 
                className="relative z-10 w-full max-w-md aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.8)] group transition-all duration-700 ease-out will-change-transform"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                  alt="U.S Based Excellence" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>

              {/* Floating Badge - Screenshot 2 Style */}
              <div 
                className="absolute -bottom-10 -right-10 w-64 h-64 glass p-10 rounded-[3rem] border-[#ab7e31]/30 flex flex-col justify-center animate-float transition-transform duration-300 ease-out z-20 will-change-transform"
                style={{ transform: `translateY(${scrollY * -0.15}px)` }}
              >
                 <div className="text-4xl font-black text-[#ab7e31] logo-font mb-2 tracking-tighter italic">Precision</div>
                 <p className="text-white font-bold text-[10px] uppercase tracking-widest leading-tight">ELITE ANTICIPATORY <br /> LOGIC ENGINE</p>
              </div>
           </div>
        </div>

        {/* Culture of Excellence Section - Refined for Screenshot 1 layout */}
        <div 
          className="reveal relative glass p-16 md:p-24 rounded-[5rem] overflow-hidden border-white/10 group mb-60 shadow-2xl"
        >
           <div 
             className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000')] opacity-5 bg-cover"
           ></div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-2">
                 <h2 className="text-6xl md:text-[8.5rem] logo-font font-black text-white mb-10 leading-none tracking-tighter uppercase">
                   The <span className="text-[#ab7e31]">Culture</span> of Excellence.
                 </h2>
                 <p className="text-gray-300 text-xl font-light leading-relaxed mb-16 max-w-2xl">
                   Our specialists aren't just remote workers; they are highly trained strategic partners. 
                   We invest in continuous training, security protocols, and U.S-style work ethics 
                   to ensure we deliver unmatched value every day.
                 </p>
                 <div className="flex flex-wrap gap-12 sm:gap-16">
                    {[
                      { label: "Elite Retention", value: "98%" },
                      { label: "U.S Based", value: "100%" },
                      { label: "Uptime Support", value: "24/7" }
                    ].map((stat, i) => (
                      <div key={i} className="text-left group/stat">
                        <div className="text-5xl font-black text-[#ab7e31] logo-font group-hover/stat:scale-110 transition-transform mb-2">{stat.value}</div>
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">{stat.label}</div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="flex justify-center">
                 <div 
                   className="w-56 h-56 bg-[#ab7e31] rounded-full flex items-center justify-center relative animate-float shadow-[0_0_80px_rgba(171,126,49,0.4)]"
                 >
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-white/20 animate-[spin_20s_linear_infinite]"></div>
                    <i className="fas fa-star text-black text-7xl"></i>
                 </div>
              </div>
           </div>
        </div>

        {/* Perks Grid - Refined for Screenshot 3 layout */}
        <div className="mb-60">
           <div className="reveal text-center mb-24">
              <h2 className="text-5xl md:text-8xl logo-font font-black text-white mb-8 tracking-tighter uppercase">Our Strategic <br /><span className="text-[#ab7e31] italic font-light">Ecosystem</span></h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-light uppercase tracking-[0.4em] text-[10px]">The standards that define the 0.1%</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { 
                  title: "100% U.S-BASED", 
                  desc: "Every specialist is a vetted, US-based professional for maximum cultural and strategic alignment.",
                  icon: "fa-map-location-dot"
                },
                { 
                  title: "THE 0.1% STANDARD", 
                  desc: "Our rigorous vetting process ensures we only hire the absolute top-tier of administrative talent.",
                  icon: "fa-trophy"
                },
                { 
                  title: "BSSP SECURITY", 
                  desc: "Black Star Protocol ensures enterprise-grade encryption for all passwords and financial data.",
                  icon: "fa-user-lock"
                },
                { 
                  title: "PROACTIVE CONTINUITY", 
                  desc: "We maintain internal 'shadow' specialists to ensure seamless coverage during emergencies.",
                  icon: "fa-infinity"
                },
                { 
                  title: "MISSION-READY TECH", 
                  desc: "We integrate natively into your tech stack (Slack, Notion, QBO) on day one.",
                  icon: "fa-bolt-lightning"
                },
                { 
                  title: "STRATEGIC PAIRING", 
                  desc: "We use behavioral mapping to pair you with an assistant who thinks like you do.",
                  icon: "fa-people-arrows"
                }
              ].map((value, idx) => (
                <div key={idx} className="reveal group h-full">
                  <div className="glass h-full p-12 rounded-[3.5rem] border-white/5 hover-glow transition-all duration-700 relative overflow-hidden flex flex-col justify-between hover:border-[#ab7e31]/30">
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-[#ab7e31]/10 border border-[#ab7e31]/20 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#ab7e31] transition-all duration-500">
                        <i className={`fas ${value.icon} text-xl text-[#ab7e31] group-hover:text-black`}></i>
                      </div>
                      <h3 className="text-2xl font-black logo-font text-white mb-6 uppercase tracking-widest group-hover:text-[#ab7e31] transition-colors">{value.title}</h3>
                      <p className="text-gray-400 text-base font-light leading-relaxed group-hover:text-white transition-colors duration-500">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
