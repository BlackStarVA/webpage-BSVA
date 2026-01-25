import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="py-24 animate-fade-in bg-black min-h-screen relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#ab7e31]/30 to-transparent"></div>
      <div className="absolute top-1/4 -right-20 w-[30rem] h-[30rem] bg-[#ab7e31]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-32 relative pt-20">
          {/* Overlapping Header Branding */}
          <div className="absolute inset-0 flex flex-col items-center justify-center -top-10 pointer-events-none select-none">
            <span className="text-6xl md:text-[9rem] font-black text-white/10 uppercase tracking-tighter leading-none">
              KNOWLEDGE
            </span>
          </div>
          
          <span className="text-[#ab7e31] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block relative z-10">Knowledge Center</span>
          <h1 className="text-5xl md:text-8xl logo-font font-black text-white relative z-10 uppercase tracking-tighter leading-none mt-4">
            Strategic <br /><span className="text-[#ab7e31] italic font-light lowercase">Intelligence.</span>
          </h1>
          
          <p className="text-gray-400 font-light max-w-lg mx-auto italic text-sm md:text-base leading-relaxed mt-8">
            Everything you need to know about partnering with the world's most elite strategic assistant network.
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto mb-32">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl transition-all duration-500 overflow-hidden ${
                activeIndex === idx 
                  ? 'border-[#ab7e31] bg-[#ab7e31]/5 shadow-[0_20px_60px_rgba(0,0,0,0.6)]' 
                  : 'border-white/5 bg-[#0a0a0a] hover:border-white/10'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 md:p-10 text-left group"
              >
                <span className={`text-base md:text-lg font-bold tracking-tight transition-colors ${activeIndex === idx ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  activeIndex === idx ? 'border-[#ab7e31] bg-[#ab7e31] text-black' : 'border-white/10 text-gray-600 group-hover:border-white/20'
                }`}>
                  <i className={`fas ${activeIndex === idx ? 'fa-minus' : 'fa-plus'} text-[10px]`}></i>
                </div>
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  activeIndex === idx ? 'max-h-[500px] opacity-100 p-8 md:p-10 pt-0' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="border-t border-white/5 pt-8 pb-4">
                   <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA Styled per Screenshot */}
        <div className="max-w-2xl mx-auto glass p-12 md:p-20 rounded-[4rem] text-center border-white/5 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ab7e31]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h3 className="text-4xl font-black logo-font text-white mb-6 uppercase tracking-tighter">STILL HAVE QUESTIONS?</h3>
          <p className="text-gray-400 mb-12 font-light max-w-md mx-auto leading-relaxed text-sm">
            Our dedicated concierge team is standing by to provide the strategic clarity you need for your specific mission.
          </p>
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-[#ab7e31] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <Link 
              to="/contact" 
              className="relative z-10 inline-block px-14 py-6 bg-[#ab7e31] text-black font-black rounded-2xl text-[11px] uppercase tracking-[0.4em] hover:bg-white transition-all shadow-xl"
            >
              CONTACT SUPPORT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;