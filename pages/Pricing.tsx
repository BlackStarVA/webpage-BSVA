import React, { useState, useMemo, useEffect } from 'react';
import { PRICING_PLANS, SERVICES, BOOKKEEPING_PLANS, PERKS, FAQS } from '../constants';

interface PricingProps {
  onBookNow: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onBookNow }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const calculatorServices = useMemo(() => 
    SERVICES.filter(s => s.id === 'admin' || s.id === 'bookkeeping')
  , []);

  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(['admin']);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);
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
    const baseRate = selectedServiceIds.length > 1 
      ? (45 + 47) / 2 
      : (selectedServiceIds.includes('admin') ? 45 : 47);

    return Math.floor(baseRate * hoursPerWeek * 4.33);
  }, [selectedServiceIds, hoursPerWeek]);

  const [displayCost, setDisplayCost] = useState<number>(monthlyCost);
  
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

  const renderPlanButton = (plan: any) => {
    const isExternal = plan.stripeLink && plan.stripeLink !== '#' && plan.stripeLink !== '';
    
    if (isExternal) {
      return (
        <a 
          href={plan.stripeLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`w-full py-5 rounded-2xl font-black text-[11px] tracking-[0.2em] uppercase transition-all flex items-center justify-center ${
            plan.recommended 
              ? 'bg-[#ab7e31] text-black hover:bg-white shadow-xl shadow-[#ab7e31]/20' 
              : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
          }`}
        >
          SELECT PLAN
        </a>
      );
    }

    return (
      <button 
        onClick={onBookNow}
        className={`w-full py-5 rounded-2xl font-black text-[11px] tracking-[0.2em] uppercase transition-all ${
          plan.recommended 
            ? 'bg-[#ab7e31] text-black hover:bg-white shadow-xl shadow-[#ab7e31]/20' 
            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
        }`}
      >
        SELECT PLAN
      </button>
    );
  };

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-32 max-w-3xl mx-auto">
          <span className="text-[#ab7e31] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Tailored Investment</span>
          <h1 className="text-5xl md:text-8xl logo-font font-black text-white mt-4 mb-8 leading-none tracking-tighter">
            Scalable <br />
            <span className="text-[#ab7e31] italic font-light drop-shadow-xl">Leverage.</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Whether you need a full-time Chief of Staff or a surgical bookkeeper, we have a strategic tier designed for your current scale.
          </p>
        </div>

        {/* Executive Assistant Section */}
        <div className="mb-40">
           <div className="flex items-center space-x-4 mb-16">
              <div className="h-px bg-white/10 flex-grow"></div>
              <h2 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em] whitespace-nowrap">Executive Assistant Plans</h2>
              <div className="h-px bg-white/10 flex-grow"></div>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {PRICING_PLANS.map((plan, i) => (
              <div 
                key={i} 
                className={`flex flex-col relative p-10 rounded-[2.5rem] border transition-all duration-500 h-full ${
                  plan.recommended 
                    ? 'bg-black border-[#ab7e31] shadow-[0_0_40px_rgba(171,126,49,0.15)] scale-105 z-10' 
                    : 'bg-[#0a0a0a] border-white/5 hover:border-white/10'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#ab7e31] text-black text-[9px] font-black py-2.5 px-8 rounded-full uppercase tracking-[0.2em] shadow-xl whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-10 text-center sm:text-left">
                  <h3 className="text-xl font-black logo-font text-white mb-6 uppercase tracking-tighter">{plan.name}</h3>
                  <div className="flex items-baseline justify-center sm:justify-start space-x-2">
                    <span className="text-5xl logo-font font-black text-white tracking-tighter">{plan.price}</span>
                    <span className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">/mo</span>
                  </div>
                  <p className="text-[#ab7e31] text-[10px] font-black mt-6 uppercase tracking-[0.2em]">
                    {plan.hours} Hours Monthly Support
                  </p>
                </div>

                <ul className="space-y-5 mb-12 flex-grow">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start text-gray-400 text-xs leading-relaxed font-medium">
                      <i className="fas fa-check text-[9px] text-[#ab7e31] mt-1 mr-4"></i>
                      {f}
                    </li>
                  ))}
                </ul>

                {renderPlanButton(plan)}
              </div>
            ))}
          </div>
        </div>

        {/* Bookkeeping Section */}
        <div className="mb-40">
           <div className="flex items-center space-x-4 mb-16">
              <div className="h-px bg-white/10 flex-grow"></div>
              <h2 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em] whitespace-nowrap">Bookkeeping Plans</h2>
              <div className="h-px bg-white/10 flex-grow"></div>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BOOKKEEPING_PLANS.map((plan, i) => (
              <div 
                key={i} 
                className={`flex flex-col relative p-12 rounded-[3rem] border transition-all duration-500 h-full ${
                  plan.recommended 
                    ? 'bg-black border-[#ab7e31] shadow-[0_0_40px_rgba(171,126,49,0.15)] scale-105 z-10' 
                    : 'bg-[#0a0a0a] border-white/5 hover:border-white/10'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#ab7e31] text-black text-[9px] font-black py-2.5 px-8 rounded-full uppercase tracking-[0.2em] shadow-xl whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-10 text-center sm:text-left">
                  <h3 className="text-2xl font-black logo-font text-white mb-6 uppercase tracking-tighter">{plan.name}</h3>
                  <div className="flex items-baseline justify-center sm:justify-start space-x-2">
                    <span className="text-6xl logo-font font-black text-white tracking-tighter">{plan.price}</span>
                    <span className="text-gray-500 text-[12px] font-bold uppercase tracking-widest">/mo</span>
                  </div>
                  <p className="text-gray-500 text-[11px] font-bold mt-6 uppercase tracking-[0.2em] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-5 mb-12 flex-grow">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start text-gray-400 text-sm leading-relaxed font-medium">
                      <i className="fas fa-check text-[10px] text-[#ab7e31] mt-1 mr-4"></i>
                      {f}
                    </li>
                  ))}
                </ul>

                {renderPlanButton(plan)}
              </div>
            ))}
          </div>
        </div>

        {/* Perks Cards Section */}
        <div className="mb-40">
          <div className="text-center mb-16">
            <h2 className="text-4xl logo-font font-black text-white mb-4 uppercase tracking-tighter">The Black Star <span className="text-[#ab7e31] italic font-light">Edge</span></h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto uppercase text-[10px] tracking-[0.4em]">Elite standards for global impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERKS.map((perk, idx) => (
              <div key={idx} className="glass p-12 rounded-[2.5rem] border border-white/5 hover:border-[#ab7e31]/30 transition-all group">
                <div className="w-14 h-14 bg-[#ab7e31]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#ab7e31]/20 group-hover:bg-[#ab7e31] transition-all">
                  <i className={`fas ${perk.icon} text-xl text-[#ab7e31] group-hover:text-black`}></i>
                </div>
                <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{perk.title}</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Workload Estimator */}
        <div className="relative mb-60">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl logo-font font-black text-white mb-4">Workload Estimator</h2>
              <p className="text-gray-500 font-light">Scale your hours to match your current velocity.</p>
            </div>

            <div className="glass rounded-[4rem] p-8 md:p-20 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                  <div>
                    <label className="block text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">1. Partnership Type</label>
                    <div className="grid grid-cols-1 gap-4">
                      {calculatorServices.map((s) => {
                        const isSelected = selectedServiceIds.includes(s.id);
                        return (
                          <button
                            key={s.id}
                            onClick={() => toggleService(s.id)}
                            className={`p-6 rounded-2xl text-left border transition-all group flex items-center relative overflow-hidden ${
                              isSelected 
                                ? 'bg-[#ab7e31]/20 border-[#ab7e31]/50 text-[#ab7e31]' 
                                : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10'
                            }`}
                          >
                            <div className="mr-6 flex items-center justify-center">
                               <i className={`fas ${s.icon} text-2xl ${isSelected ? 'text-[#ab7e31]' : 'text-gray-600'}`}></i>
                            </div>
                            <div>
                              <span className="text-sm font-bold block leading-tight">{s.title}</span>
                              <span className="text-[10px] mt-1 block opacity-50 uppercase tracking-widest">
                                ${s.priceRate}/hr Partner Rate
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <label className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">2. Weekly Hour Volume</label>
                      <div className="text-right">
                        <span className="px-4 py-1.5 bg-[#ab7e31]/20 text-[#ab7e31] rounded-full text-xs font-black">{hoursPerWeek} Hours / Week</span>
                      </div>
                    </div>
                    <div className="relative py-4">
                      <input
                        type="range"
                        min="3"
                        max="60"
                        step="1"
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ab7e31]"
                      />
                    </div>
                  </div>
                </div>

                <div className={`bg-black p-14 rounded-[3.5rem] border border-white/10 text-center flex flex-col justify-center min-h-[450px] relative transition-all duration-300 ${isUpdating ? 'scale-[1.02] border-[#ab7e31]/30 shadow-2xl' : 'scale-100'}`}>
                  <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 relative z-10">Monthly Strategy Retainer</span>
                  
                  <div className={`text-8xl logo-font font-black mb-8 tracking-tighter relative z-10 transition-all duration-300 ${isUpdating ? 'text-[#ab7e31]' : 'text-white'}`}>
                    <span className="text-3xl text-[#ab7e31] align-top mt-2 mr-1">$</span>
                    {displayCost.toLocaleString()}
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-12 leading-relaxed font-light relative z-10">
                    Includes dedicated U.S-based specialist support, mission-ready tech stack integration, and BSSP security encryption.
                  </div>
                  <button 
                    onClick={onBookNow}
                    className="w-full py-6 bg-[#ab7e31] text-black font-black rounded-2xl text-[10px] tracking-[0.2em] uppercase hover:bg-white transition-all shadow-2xl shadow-[#ab7e31]/20"
                  >
                    SELECT PLAN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-16">
            <span className="text-[#ab7e31] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Knowledge Center</span>
            <h2 className="text-4xl md:text-6xl logo-font font-black text-white mb-4 uppercase tracking-tighter">Strategic <span className="text-[#ab7e31] italic font-light">Intelligence</span></h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border rounded-[2rem] transition-all overflow-hidden ${
                  activeIndex === idx ? 'border-[#ab7e31] bg-[#ab7e31]/5' : 'border-white/10 bg-black'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <span className={`text-lg font-bold tracking-tight transition-colors ${activeIndex === idx ? 'text-[#ab7e31]' : 'text-white group-hover:text-[#ab7e31]'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${activeIndex === idx ? 'border-[#ab7e31] bg-[#ab7e31] text-black' : 'border-white/10 text-gray-600'}`}>
                    <i className={`fas ${activeIndex === idx ? 'fa-minus' : 'fa-plus'} text-[10px]`}></i>
                  </div>
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    activeIndex === idx ? 'max-h-[500px] opacity-100 p-8 pt-0' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-400 leading-relaxed font-light text-base border-t border-white/5 pt-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;