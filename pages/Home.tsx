
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';

interface HomeProps {
  onBookNow: () => void;
}

const Home: React.FC<HomeProps> = ({ onBookNow }) => {
  const coreServices = SERVICES.filter(s => s.id === 'admin' || s.id === 'bookkeeping' || s.id === 'creative');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = 8000;
    const step = 100;
    const progressTimer = setInterval(() => {
      setProgress(prev => Math.min(prev + (100 / (interval / step)), 100));
    }, step);

    const autoTimer = setInterval(nextTestimonial, interval);
    
    return () => {
      clearInterval(progressTimer);
      clearInterval(autoTimer);
    };
  }, [nextTestimonial, activeTestimonial]);

  return (
    <div className="overflow-x-hidden bg-black">
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-[#ab7e31]/10 rounded-full blur-[160px] animate-float transition-transform duration-75"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          
          <div 
            className="absolute inset-0 opacity-40 transition-transform duration-150 ease-out"
            style={{ transform: `scale(1.05) translateY(${scrollY * 0.05}px)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
              alt="Elite Workspace" 
              className="w-full h-full object-cover grayscale brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-7xl mx-auto flex flex-col items-center">
          <div className="reveal relative flex flex-col items-center">
            <h1 className="text-8xl md:text-9xl lg:text-[14rem] font-black logo-font text-white leading-[0.85] tracking-tighter uppercase relative z-0 flex flex-col items-center">
              <span>BLACK</span>
              <span>STAR</span>
            </h1>
            <h2 className="text-7xl md:text-9xl lg:text-[11rem] font-serif text-[#ab7e31] italic font-light leading-none tracking-tighter -mt-8 md:-mt-16 lg:-mt-24 relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,1)]">
              Specialists
            </h2>
          </div>
          
          <div className="reveal mt-12 mb-16">
            <p className="text-gray-300 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              We operate as the silent engine behind the world's most innovative founders.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-gray-300 text-lg md:text-2xl font-light">
              High-precision 
              <span className="text-white font-bold border-b-2 border-[#ab7e31] px-1">Executive Support</span> 
              meets 
              <span className="text-white font-bold border-b-2 border-[#ab7e31] px-1">Financial Integrity</span>.
            </div>
          </div>
          
          <div className="reveal flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link to="/pricing" className="group w-full sm:w-auto px-12 py-6 bg-white text-black font-black rounded-2xl hover:bg-[#ab7e31] transition-all text-[11px] uppercase tracking-[0.3em] shadow-2xl flex items-center justify-center">
              EXPLORE PLANS <i className="fas fa-arrow-right ml-4 group-hover:translate-x-1 transition-transform"></i>
            </Link>
            <button 
              onClick={onBookNow}
              className="w-full sm:w-auto px-12 py-6 bg-[#ab7e31] text-black font-black rounded-2xl hover:bg-white transition-all text-[11px] uppercase tracking-[0.3em] shadow-[0_20px_50px_rgba(171,126,49,0.3)] group flex items-center justify-center"
            >
              BOOK DISCOVERY CALL <i className="fas fa-phone ml-4 group-hover:rotate-12 transition-transform"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="py-24 border-y border-white/5 bg-black/40 relative z-20 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4">
          <div className="reveal text-center mb-16">
            <h3 className="text-[#ab7e31] font-black text-[12px] uppercase tracking-[0.6em] mb-2 italic">Who do We support</h3>
            <div className="w-16 h-0.5 bg-[#ab7e31]/20 mx-auto mt-6"></div>
          </div>
          
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 items-center justify-items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 group">
             {['FOUNDER', 'CEO', 'PARTNER'].map((title, idx) => (
               <div key={idx} className="text-xl md:text-3xl font-black logo-font text-white tracking-[0.3em] flex items-center whitespace-nowrap">
                 <i className="fas fa-star text-xs text-[#ab7e31] mr-4"></i> {title}
               </div>
             ))}
             <div className="col-span-1 md:col-span-3 flex justify-center mt-6">
                <div className="text-xl md:text-3xl font-black logo-font text-white tracking-[0.3em] flex items-center whitespace-nowrap">
                  <i className="fas fa-star text-xs text-[#ab7e31] mr-4"></i> SMALL BUSINESS OWNER
                </div>
             </div>
          </div>
        </div>
      </div>

      <section className="py-40 max-w-7xl mx-auto px-4">
        <div className="reveal mb-24 text-center">
          <span className="text-[#ab7e31] font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Precision Services</span>
          <h2 className="text-5xl md:text-7xl logo-font font-black text-white leading-tight">Elite Support, <br /><span className="text-[#ab7e31] italic font-light">Zero Friction</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {coreServices.map((service, i) => (
            <div 
              key={service.id} 
              className="reveal relative p-10 rounded-[3rem] bg-black border border-white/5 hover-glow transition-all duration-500 group overflow-hidden h-[500px] flex flex-col justify-end"
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                <img 
                  src={i === 0 ? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" : i === 1 ? "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" : "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt={service.title} 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#ab7e31] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#ab7e31]/20 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <i className={`fas ${service.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-[#ab7e31] transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-10 font-light group-hover:text-white transition-colors">
                  {service.description}
                </p>
                <Link to="/pricing" className="text-[#ab7e31] font-black text-[10px] uppercase tracking-widest flex items-center group/link">
                  Learn More <i className="fas fa-chevron-right ml-3 group-hover/link:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-60 px-4 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="reveal mb-32 flex flex-col items-center">
             <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-10">
                <i className="fas fa-quote-left text-[#ab7e31] text-2xl"></i>
             </div>
          </div>

          <div className="reveal relative h-[480px]">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform flex flex-col items-center justify-center ${
                  idx === activeTestimonial 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
                }`}
              >
                <h2 className="text-3xl md:text-6xl font-serif text-white italic leading-[1.2] mb-16 px-4 md:px-20 tracking-tight">
                  "{testimonial.text}"
                </h2>
                
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <img 
                      src={testimonial.img} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-[2rem] border-2 border-[#ab7e31]/40 object-cover shadow-2xl shadow-[#ab7e31]/20" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#ab7e31]/10 to-transparent pointer-events-none rounded-[2rem]"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-black tracking-[0.2em] uppercase text-sm mb-1">{testimonial.name}</p>
                    <p className="text-[#ab7e31] text-[10px] font-bold tracking-[0.3em] uppercase opacity-80">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation and Progress */}
          <div className="reveal max-w-3xl mx-auto mt-20 relative">
             <div className="flex items-center justify-center mb-12 space-x-12">
                <button onClick={prevTestimonial} className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-[#ab7e31] transition-all group active:scale-90">
                  <i className="fas fa-arrow-left text-sm group-hover:-translate-x-1 transition-transform"></i>
                </button>
                
                <div className="flex space-x-3">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveTestimonial(idx);
                        setProgress(0);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-700 ${
                        idx === activeTestimonial ? 'bg-[#ab7e31] w-8' : 'bg-white/10 w-1.5'
                      }`}
                    />
                  ))}
                </div>

                <button onClick={nextTestimonial} className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-[#ab7e31] transition-all group active:scale-90">
                  <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                </button>
             </div>
             
             <div className="flex flex-col items-center space-y-4">
                <div className="w-full h-px bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#ab7e31] transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em]">
                  {activeTestimonial + 1} <span className="mx-3 opacity-30">/</span> {TESTIMONIALS.length}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Something Else Section */}
      <section className="py-60 bg-black relative">
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="reveal p-16 md:p-24 bg-black inline-block w-full">
             <h2 className="text-6xl md:text-[8.5rem] font-black logo-font text-white mb-6 leading-[0.85] tracking-tighter uppercase">
               NEED AN EXECUTIVE <br /> ASSISTANT FOR <br /> <span className="text-[#ab7e31] italic font-light">SOMETHING ELSE?</span>
             </h2>
             <p className="text-gray-400 text-lg md:text-2xl mb-16 max-w-4xl mx-auto font-light leading-relaxed">
               Our specialists are equipped for bespoke missions beyond standard tiers—from <br className="hidden md:block" /> technical architecture to discrete personal concierge services.
             </p>
             <button 
               onClick={onBookNow}
               className="px-16 py-6 bg-white text-black font-black rounded-xl hover:bg-[#ab7e31] transition-all text-[11px] font-black tracking-[0.4em] uppercase shadow-2xl flex items-center justify-center mx-auto"
             >
               BOOK DISCOVERY CALL
             </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-4">
        <div className="reveal max-w-7xl mx-auto glass p-16 md:p-32 rounded-[5rem] text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#ab7e31]/5 group-hover:bg-[#ab7e31]/10 transition-colors"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000')] bg-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-[10s]"></div>
          
          <div className="relative z-10">
             <h2 className="text-5xl md:text-[6rem] logo-font font-black text-white mb-10 leading-none uppercase tracking-tighter">Your Next Move is <br /><span className="text-[#ab7e31] italic font-light drop-shadow-xl">Legendary</span></h2>
             <p className="text-gray-400 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
               Strategic leverage for world-class founders. Are you ready to operate at your highest potential?
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <button 
                  onClick={onBookNow}
                  className="px-14 py-6 bg-[#ab7e31] text-black font-black rounded-xl hover:bg-white transition-all text-sm tracking-[0.3em] uppercase hover:scale-105 shadow-2xl"
                >
                  BOOK DISCOVERY CALL
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
