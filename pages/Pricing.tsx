
import React, { useState, useMemo, useEffect } from 'react';
import { PRICING_PLANS, SERVICES, BOOKKEEPING_PLANS, BOOKKEEPING_CHECKLIST } from '../constants';

interface PricingProps {
  onBookNow: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onBookNow }) => {
  const calculatorServices = useMemo(() => 
    SERVICES.filter(s => s.id === 'admin' || s.id === 'bookkeeping')
  , []);

  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(['admin']);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [isUpdating, setIsUpdating] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServiceIds(prev => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev;
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const monthlyCost = useMemo(() => {
    let totalRate = 0;
    let totalMin = 0;

    selectedServiceIds.forEach(id => {
      const service = calculatorServices.find(s => s.id === id);
      if (service) {
        totalRate += service.priceRate;
        totalMin += id === 'bookkeeping' ? 300 : 1000;
      }
    });

    const calculated = totalRate * hoursPerWeek * 4.33;
    return Math.max(totalMin, calculated);
  }, [selectedServiceIds, hoursPerWeek, calculatorServices]);

  const [displayCost, setDisplayCost] = useState(monthlyCost);
  
  useEffect(() => {
    setIsUpdating(true);
    const timer = setTimeout(() => setIsUpdating(false), 400);

    let startTimestamp: number | null = null;
    const duration = 600;
    const startValue = displayCost;
    const endValue = monthlyCost;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeOutExpo = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };
      
      const current = Math.floor(easeOutExpo(progress) * (endValue - startValue) + startValue);
      setDisplayCost(current);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animFrame = window.requestAnimationFrame(step);
    return () => {
      window.cancelAnimationFrame(animFrame);
      clearTimeout(timer);
    };
  }, [monthlyCost]);

  return (
    <div className="py-24 animate-fade-in bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-[#ab7e31] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Tailored Investment</span>
          <h1 className="text-5xl md:text-7xl logo-font font-black text-white mt-4 mb-8">Executive & <span className="text-[#ab7e31] italic font-light">Bookkeeping</span></h1>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Our Texas-based experts provide the leverage you need. Select a fixed Executive Assistant plan or add Precision Bookkeeping services.
          </p>
        </div>

        <div className="mb-40">
           <div className="flex items-center space-x-4 mb-12">
              <div className="h-px bg-white/10 flex-grow"></div>
              <h2 className="text-sm font-black text-gray-500 uppercase tracking-[0.5em] whitespace-nowrap">Executive Assistant Support</h2>
              <div className="h-px bg-white/10 flex-grow"></div>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {PRICING_PLANS.map((plan, i) => (
              <div 
                key={i} 
                className={`flex flex-col relative p-10 rounded-[3rem] border transition-all duration-500 h-full ${
                  plan.recommended 
                    ? 'bg-[#ab7e31]/5 border-[#ab7e31]/50 shadow-[0_20px_60px_-15px_rgba(171,126,49,0.15)] scale-105 z-10' 
                    : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#ab7e31] text-black text-[10px] font-black py-2 px-6 rounded-full uppercase tracking-[0.2em] shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-10">
                  <h3 className="text-2xl font-black logo-font text-white mb-4 flex items-center">
                    {plan.name}
                    {plan.recommended && <i className="fas fa-crown text-[#ab7e31] ml-3 text-sm"></i>}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl logo-font font-black text-white tracking-tighter">{plan.price}</span>
                    <span className="text-gray-500 text-xs font-bold uppercase">/month</span>
                  </div>
                  <p className="text-[#ab7e31]/80 text-[10px] font-black mt-4 uppercase tracking-[0.2em]">
                    {plan.hours} Hours of Support Included
                  </p>
                </div>

                <div className="flex-grow">
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-2">Plan Includes:</div>
                  <ul className="space-y-4 mb-12">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start text-gray-400 text-sm leading-relaxed font-light">
                        <div className="shrink-0 mt-1 mr-4 w-5 h-5 bg-[#ab7e31]/10 rounded-full flex items-center justify-center">
                          <i className="fas fa-check text-[10px] text-[#ab7e31]"></i>
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={onBookNow}
                  className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase transition-all ${
                    plan.recommended 
                      ? 'bg-[#ab7e31] text-black hover:bg-white shadow-xl shadow-[#ab7e31]/20' 
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  Secure This Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-40">
           <div className="flex items-center space-x-4 mb-12">
              <div className="h-px bg-white/10 flex-grow"></div>
              <h2 className="text-sm font-black text-gray-500 uppercase tracking-[0.5em] whitespace-nowrap">Precision Bookkeeping Options</h2>
              <div className="h-px bg-white/10 flex-grow"></div>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                 <div className="glass p-12 rounded-[3rem] border-white/5">
                    <h3 className="text-2xl font-black logo-font text-white mb-6 uppercase tracking-widest">Service Checklist</h3>
                    <p className="text-gray-500 text-sm mb-10 font-light">Select any combination of services. Our bookkeeping plans start at <span className="text-[#ab7e31] font-bold">$300/month</span>.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {BOOKKEEPING_CHECKLIST.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-3 group cursor-pointer">
                             <div className="w-5 h-5 rounded border border-white/20 group-hover:border-[#ab7e31]/50 transition-colors flex items-center justify-center bg-white/5">
                                <i className="fas fa-check text-[10px] text-[#ab7e31] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                             </div>
                             <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{item}</span>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="glass p-12 rounded-[3rem] border-white/5 bg-[#ab7e31]/5">
                    <div className="flex items-center mb-6">
                       <i className="fas fa-file-invoice-dollar text-3xl text-[#ab7e31] mr-4"></i>
                       <h3 className="text-xl font-bold text-white">Why Outsource Bookkeeping?</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                       Precision financial tracking is the foundation of scale. Our Texas-based bookkeepers ensure your records are tax-ready and decision-optimized every single month.
                    </p>
                 </div>
              </div>

              <div className="space-y-6">
                 {BOOKKEEPING_PLANS.map((plan, i) => (
                    <div key={i} className="glass p-8 rounded-3xl border border-white/5 hover:border-[#ab7e31]/30 transition-all group">
                       <div className="flex justify-between items-start mb-4">
                          <div>
                             <h4 className="text-xl font-black logo-font text-white mb-1">{plan.name}</h4>
                             <p className="text-xs text-gray-500 font-light">{plan.description}</p>
                          </div>
                          <div className="text-right">
                             <span className="text-2xl font-black text-[#ab7e31]">{plan.price}</span>
                             <span className="text-[10px] text-gray-600 block uppercase font-bold tracking-widest">/mo</span>
                          </div>
                       </div>
                       <ul className="flex flex-wrap gap-2 mb-6">
                          {plan.features.map((f, idx) => (
                             <li key={idx} className="text-[9px] font-black uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full text-gray-400 border border-white/5">
                                {f}
                             </li>
                          ))}
                       </ul>
                       <button 
                         onClick={onBookNow}
                         className="w-full py-3 bg-white/5 text-white border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#ab7e31] hover:text-black transition-all"
                       >
                          Select Bookkeeping Tier
                       </button>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="relative">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#ab7e31]/5 rounded-full blur-[150px] pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl logo-font font-black text-white mb-4">Custom Workload Estimator</h2>
              <p className="text-gray-500 font-light">Scale your hours to match your growth. Select multiple services for a combined estimate.</p>
            </div>

            <div className="glass rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8">
                 <i className="fas fa-calculator text-[#ab7e31]/10 text-8xl rotate-12"></i>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-12">
                  <div>
                    <label className="block text-gray-400 text-[10px] mb-6 font-bold uppercase tracking-[0.3em]">1. Choose Your Core Services (Select One or Both)</label>
                    <div className="grid grid-cols-1 gap-4">
                      {calculatorServices.map((s) => {
                        const isSelected = selectedServiceIds.includes(s.id);
                        return (
                          <button
                            key={s.id}
                            onClick={() => toggleService(s.id)}
                            className={`p-6 rounded-2xl text-left border transition-all group flex items-center relative overflow-hidden ${
                              isSelected 
                                ? 'bg-[#ab7e31]/15 border-[#ab7e31]/50 text-[#ab7e31]' 
                                : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10'
                            }`}
                          >
                            <div className="mr-6 flex items-center justify-center relative">
                               <i className={`fas ${s.icon} text-2xl ${isSelected ? 'text-[#ab7e31]' : 'text-gray-600'}`}></i>
                               {isSelected && (
                                 <div className="absolute -top-2 -right-2 bg-[#ab7e31] w-4 h-4 rounded-full flex items-center justify-center border-2 border-black">
                                   <i className="fas fa-check text-[8px] text-black"></i>
                                 </div>
                               )}
                            </div>
                            <div>
                              <span className="text-sm font-bold block leading-tight">{s.title}</span>
                              <span className="text-[10px] mt-1 block opacity-50">${s.priceRate}/hr Base</span>
                            </div>
                            {isSelected && <div className="absolute top-0 right-0 w-1 h-full bg-[#ab7e31]"></div>}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <label className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">2. Combined Weekly Volume</label>
                      <div className="text-right">
                        <span className="px-4 py-1.5 bg-[#ab7e31]/20 text-[#ab7e31] rounded-full text-xs font-black">{hoursPerWeek} Hours/Week</span>
                        <div className="text-[9px] text-gray-600 uppercase mt-2 font-bold tracking-widest">~{Math.round(hoursPerWeek * 4.33)} Hours/Month</div>
                      </div>
                    </div>
                    <div className="relative py-4">
                      <input
                        type="range"
                        min="2"
                        max="80"
                        step="1"
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ab7e31]"
                      />
                    </div>
                  </div>
                </div>

                <div className={`bg-black/80 p-12 rounded-[3rem] border border-white/5 text-center flex flex-col justify-center min-h-[400px] relative transition-all duration-300 ${isUpdating ? 'scale-[1.02] border-[#ab7e31]/20 shadow-[0_0_40px_rgba(171,126,49,0.1)]' : 'scale-100'}`}>
                  <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                    <i className="fas fa-star text-[20rem] text-white"></i>
                  </div>
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 relative z-10">Estimated Monthly Combined Retainer</span>
                  
                  <div className={`text-7xl logo-font font-black mb-6 tracking-tighter relative z-10 transition-all duration-300 ${isUpdating ? 'text-[#ab7e31]' : 'text-white'}`}>
                    <span className="text-3xl text-[#ab7e31] align-top mt-2 mr-1">$</span>
                    {displayCost.toLocaleString()}
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-10 relative z-10">
                    {selectedServiceIds.map(id => (
                      <span key={id} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase text-[#ab7e31] tracking-widest">
                        {calculatorServices.find(s => s.id === id)?.title}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-gray-500 mb-10 leading-relaxed font-light relative z-10">
                    Includes dedicated Texas-based specialists, bulletproof security protocols, and 24/7 internal backup coverage.
                  </div>
                  <button 
                    onClick={onBookNow}
                    className="w-full py-5 bg-white text-black font-black rounded-xl text-xs tracking-[0.2em] uppercase hover:bg-[#ab7e31] transition-all relative z-10"
                  >
                    Request Custom Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
