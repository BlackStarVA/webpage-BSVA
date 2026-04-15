import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PricingCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [eaEnabled, setEaEnabled] = useState(true);
  const [bkEnabled, setBkEnabled] = useState(false);
  const [eaHours, setEaHours] = useState(25);
  const [bkHours, setBkHours] = useState(20);

  const RATE = 55;

  const calculatePrice = () => {
    let totalHours = 0;
    if (eaEnabled) totalHours += eaHours;
    if (bkEnabled) totalHours += bkHours;
    
    const price = totalHours * RATE;
    // Ensure starting rate is at least 1000 if any service is selected
    return Math.max(price, (eaEnabled || bkEnabled) ? 1000 : 0).toLocaleString();
  };

  return (
    <div className="mb-40 reveal">
      <div className="max-w-4xl mx-auto glass rounded-[3rem] p-8 md:p-16 border border-[#ab7e31]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <i className="fas fa-calculator text-9xl text-[#ab7e31]"></i>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black logo-font text-white mb-4 uppercase tracking-tighter">
              Smart <span className="text-[#ab7e31] italic font-light">Calculator</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.4em]">Combined strategic support for maximum velocity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              {/* Service Selection */}
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6">Select Services</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setEaEnabled(!eaEnabled)}
                    className={`py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                      eaEnabled ? 'bg-[#ab7e31] text-black border-[#ab7e31] shadow-lg' : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    Executive Assistant
                  </button>
                  <button 
                    onClick={() => setBkEnabled(!bkEnabled)}
                    className={`py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                      bkEnabled ? 'bg-[#ab7e31] text-black border-[#ab7e31] shadow-lg' : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    Bookkeeping
                  </button>
                </div>
              </div>

              {/* EA Hours Slider */}
              {eaEnabled && (
                <div className="reveal">
                  <div className="flex justify-between items-end mb-6">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">EA Monthly Hours</label>
                    <span className="text-xl font-black logo-font text-white">{eaHours === 160 ? 'Full Time' : `${eaHours} hrs`}</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="160" 
                    step="5"
                    value={eaHours}
                    onChange={(e) => setEaHours(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ab7e31]"
                  />
                </div>
              )}

              {/* BK Hours Slider */}
              {bkEnabled && (
                <div className="reveal">
                  <div className="flex justify-between items-end mb-6">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Bookkeeping Monthly Hours</label>
                    <span className="text-xl font-black logo-font text-white">{bkHours === 160 ? 'Full Time' : `${bkHours} hrs`}</span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="160" 
                    step="5"
                    value={bkHours}
                    onChange={(e) => setBkHours(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ab7e31]"
                  />
                </div>
              )}

              {(!eaEnabled && !bkEnabled) && (
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest italic text-center py-10">Select a service to begin calculation</p>
              )}
            </div>

            <div className="bg-black/40 rounded-[2rem] p-10 border border-white/5 text-center flex flex-col justify-center min-h-[350px]">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-4 block">Total Monthly Investment</span>
              <div className="flex items-baseline justify-center space-x-2 mb-8">
                <span className="text-5xl md:text-7xl font-black logo-font text-[#ab7e31] tracking-tighter italic">${calculatePrice()}</span>
              </div>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-center space-x-3 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                  <i className="fas fa-check text-[#ab7e31]"></i>
                  <span>Combined Strategic Rate: $55/hr</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                  <i className="fas fa-check text-[#ab7e31]"></i>
                  <span>U.S-Based Elite Talent</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/intake')}
                disabled={!eaEnabled && !bkEnabled}
                className={`w-full py-6 font-black rounded-2xl text-[10px] tracking-[0.3em] uppercase transition-all shadow-2xl ${
                  (eaEnabled || bkEnabled) 
                    ? 'bg-[#ab7e31] text-black hover:bg-white shadow-[#ab7e31]/20' 
                    : 'bg-white/5 text-gray-600 cursor-not-allowed'
                }`}
              >
                Initialize Partnership
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
