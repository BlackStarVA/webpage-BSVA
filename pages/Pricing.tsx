import React from 'react';
import { useNavigate } from 'react-router-dom';
import PricingCalculator from '../components/PricingCalculator';
import { PRICING_PLANS, BOOKKEEPING_PLANS, PERKS } from '../constants';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const renderPlanButton = (plan: any) => {
    const isEnterprise = plan.name.toLowerCase().includes('enterprise');
    const isFullTimeBookkeeping = plan.name.toLowerCase().includes('full-cycle');
    return (
      <button 
        onClick={() => navigate('/intake')}
        className={`w-full py-5 rounded-2xl font-black text-[11px] tracking-[0.2em] uppercase transition-all ${
          plan.recommended 
            ? 'bg-[#ab7e31] text-black hover:bg-white shadow-xl shadow-[#ab7e31]/20' 
            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
        }`}
      >
        {isEnterprise || isFullTimeBookkeeping ? 'SUBMIT REQUEST FOR MORE INFO' : 'BOOK DISCOVERY CALL'}
      </button>
    );
  };

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Executive Assistant Section */}
        <div className="mb-40">
           <div className="flex items-center space-x-4 mb-16">
              <div className="h-px bg-white/10 flex-grow"></div>
              <h2 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em] whitespace-nowrap">Executive Assistant Tiers</h2>
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
                  <div className="flex flex-col items-center sm:items-start mb-4">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">starting at</span>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl logo-font font-black text-[#ab7e31] tracking-tighter uppercase italic">{plan.price}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
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
              <h2 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em] whitespace-nowrap">Financial Oversight Tiers</h2>
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
                  <div className="flex flex-col items-center sm:items-start mb-4">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">starting at</span>
                    <div className="flex items-baseline justify-center sm:justify-start space-x-2">
                      <span className="text-3xl logo-font font-black text-[#ab7e31] tracking-tighter uppercase italic">{plan.price}</span>
                    </div>
                  </div>
                  {plan.hours && (
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                      {plan.hours} Hours Monthly Support
                    </p>
                  )}
                  <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed">
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

        {/* Pricing Calculator Section */}
        <PricingCalculator />

        {/* Bespoke Request Section */}
        <div className="relative mb-20">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="glass rounded-[4rem] p-12 md:p-24 border border-[#ab7e31]/20 bg-[#ab7e31]/5 text-center relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ab7e31]/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h2 className="text-5xl md:text-7xl font-black logo-font text-white mb-8 tracking-tighter uppercase leading-none">
                Bespoke <br /><span className="text-[#ab7e31] italic font-light">Complexity?</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                For complex enterprises requiring multi-specialist coordination or custom technical architecture, we design proprietary support nodes from the ground up.
              </p>
              <button 
                onClick={() => navigate('/intake')}
                className="px-16 py-8 bg-[#ab7e31] text-black font-black rounded-2xl text-xs tracking-[0.4em] uppercase hover:bg-white transition-all shadow-2xl shadow-[#ab7e31]/20"
              >
                REQUEST CUSTOM PROPOSAL
              </button>
            </div>
          </div>
        </div>

        {/* Help Center Shortcut */}
        <div className="text-center pb-20">
          <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Have more questions?</p>
          <button 
            onClick={() => navigate('/faq')}
            className="text-[#ab7e31] font-black text-[11px] uppercase tracking-widest border-b border-[#ab7e31]/30 hover:border-[#ab7e31] transition-all"
          >
            Visit the Knowledge Center <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;