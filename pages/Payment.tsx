
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate high-security processing
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2800);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#ab7e31]/5 blur-[120px] rounded-full translate-y-1/2"></div>
        <div className="max-w-md w-full text-center space-y-10 animate-cartoon-pop relative z-10">
          <div className="w-24 h-24 bg-[#ab7e31] rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(171,126,49,0.5)]">
            <i className="fas fa-check text-4xl text-black"></i>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-black logo-font text-white uppercase tracking-tighter">Onboarding Synchronized</h1>
            <p className="text-gray-400 font-light leading-relaxed">
              Payment confirmed. Your profile is being matched with our elite specialist pool. Your Success Manager will reach out via email within 4 business hours.
            </p>
          </div>
          <button 
            onClick={() => navigate('/portal')}
            className="w-full py-5 bg-white text-black font-black rounded-2xl text-[10px] uppercase tracking-[0.3em] hover:bg-[#ab7e31] transition-all shadow-2xl"
          >
            Enter Client Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#ab7e31] font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Secure Checkout</span>
          <h1 className="text-4xl md:text-6xl logo-font font-black text-white uppercase tracking-tighter">Finalize Your <span className="text-[#ab7e31] italic font-light">Retainer</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="glass p-8 md:p-12 rounded-[3rem] border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ab7e31] to-transparent"></div>
              
              <h2 className="text-xl font-bold text-white mb-10 flex items-center uppercase tracking-widest">
                <i className="fas fa-shield-halved text-[#ab7e31] mr-4"></i> Secure Payment
              </h2>
              
              <form onSubmit={handlePayment} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Cardholder Designation</label>
                  <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none transition-all" placeholder="E.g. Alexandra Sterling" />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Credit Card Number</label>
                  <div className="relative">
                    <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none transition-all" placeholder="•••• •••• •••• ••••" />
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 flex space-x-3 grayscale opacity-30">
                      <i className="fab fa-cc-visa text-2xl"></i>
                      <i className="fab fa-cc-mastercard text-2xl"></i>
                      <i className="fab fa-cc-amex text-2xl"></i>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Expiration</label>
                    <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none transition-all" placeholder="MM / YY" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">CVV / CVC</label>
                    <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none transition-all" placeholder="•••" />
                  </div>
                </div>

                <div className="pt-8">
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-6 bg-[#ab7e31] text-black font-black rounded-2xl text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl flex items-center justify-center disabled:opacity-50 group"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-3 border-black border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>Initialize Partnership <i className="fas fa-lock ml-4 group-hover:scale-110 transition-transform"></i></>
                    )}
                  </button>
                  <div className="flex flex-col items-center mt-8 space-y-4">
                     <p className="text-[9px] text-gray-600 uppercase tracking-[0.4em] font-black">
                       Encrypted via Black Star Secure Protocol (BSSP)
                     </p>
                     <div className="flex space-x-6 opacity-20 grayscale">
                        <i className="fas fa-shield text-2xl"></i>
                        <i className="fas fa-lock text-2xl"></i>
                        <i className="fas fa-fingerprint text-2xl"></i>
                     </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="glass p-8 rounded-[2.5rem] border border-[#ab7e31]/30 bg-[#ab7e31]/5 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ab7e31]/10 rounded-full blur-2xl"></div>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-8">Strategic Summary</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-black text-xl leading-tight">Elite Retainer</p>
                    <p className="text-[#ab7e31] text-[9px] font-black uppercase tracking-widest mt-1">Pending Intake Validation</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-black logo-font text-2xl tracking-tighter">$---</p>
                  </div>
                </div>
                
                <div className="h-px bg-white/10"></div>

                <div className="space-y-5">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 font-bold uppercase tracking-widest">Monthly Subtotal</span>
                    <span className="text-white font-black">$---</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 font-bold uppercase tracking-widest">Onboarding Fee</span>
                    <span className="text-green-500 font-black uppercase tracking-[0.2em] bg-green-500/10 px-3 py-1 rounded-full">Waived</span>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/5 flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-gray-600 font-black uppercase tracking-[0.3em] text-[9px] mb-1">Total Recurring Investment</span>
                      <span className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Monthly Retainer</span>
                    </div>
                    <span className="text-[#ab7e31] font-black logo-font text-4xl tracking-tighter">$---</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 border border-white/5 rounded-[2.5rem] bg-white/[0.02] flex items-center space-x-6 group">
              <div className="w-14 h-14 rounded-2xl bg-[#ab7e31]/10 flex items-center justify-center border border-[#ab7e31]/20 group-hover:bg-[#ab7e31] transition-all duration-500">
                <i className="fas fa-star text-[#ab7e31] group-hover:text-black transition-colors"></i>
              </div>
              <div>
                <p className="text-gray-400 text-[11px] leading-relaxed font-light italic">
                  "Your investment represents strategic leverage. We handle the friction; you handle the impact."
                </p>
                <p className="text-white font-black uppercase tracking-widest text-[9px] mt-2">— Black Star Strategic Command</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
