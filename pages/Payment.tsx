
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * SECURITY ARCHITECTURE NOTICE:
 * All secret keys must reside exclusively on a secure backend server.
 * Frontend code is public; putting keys here allows unauthorized access.
 * 
 * Replace the placeholder below with your actual Publishable Key from the Stripe Dashboard.
 */
const STRIPE_PUBLISHABLE_KEY = ''; 

// --- Simulated Backend Endpoint ---
// In production, this would be a POST request to your Node/Python/Go server.
const simulateStripeBackend = async (amount: number, currency: string = 'usd') => {
  console.log(`[BACKEND PROTOCOL]: Initializing PaymentIntent for ${amount} ${currency.toUpperCase()}`);
  console.log(`[BACKEND PROTOCOL]: Authenticating via secure server-side environment variables...`);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        client_secret: 'pi_3P..._secret_...', // Secure token returned to frontend
        id: `txn_${Math.random().toString(36).substr(2, 9)}`
      });
    }, 1500);
  });
};

const Payment: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [stripeError, setStripeError] = useState<string | null>(null);
  const [cardComplete, setCardComplete] = useState(false);
  const navigate = useNavigate();
  
  const cardElementRef = useRef<any>(null);
  const stripeRef = useRef<any>(null);

  useEffect(() => {
    if ((window as any).Stripe && STRIPE_PUBLISHABLE_KEY) {
      const stripe = (window as any).Stripe(STRIPE_PUBLISHABLE_KEY);
      stripeRef.current = stripe;
      
      const elements = stripe.elements({
        fonts: [{ cssSrc: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap' }],
        appearance: {
          theme: 'night',
          variables: {
            colorPrimary: '#ab7e31',
            colorBackground: '#000000',
            colorText: '#ffffff',
            colorDanger: '#ef4444',
            fontFamily: 'Inter, sans-serif',
            spacingUnit: '4px',
            borderRadius: '12px',
          },
        },
      });

      const style = {
        base: {
          color: '#ffffff',
          fontFamily: '"Inter", sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '16px',
          '::placeholder': { color: '#4b5563' },
        },
        invalid: { color: '#ef4444', iconColor: '#ef4444' },
      };

      const card = elements.create('card', { style, hidePostalCode: true });
      card.mount('#stripe-card-element');
      cardElementRef.current = card;

      card.on('change', (event: any) => {
        setCardComplete(event.complete);
        if (event.error) setStripeError(event.error.message);
        else setStripeError(null);
      });
    } else if (!STRIPE_PUBLISHABLE_KEY) {
      setStripeError("System Configuration Required: Stripe Publishable Key is missing.");
    }

    return () => {
      if (cardElementRef.current) cardElementRef.current.destroy();
    };
  }, []);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardComplete || loading) return;

    setLoading(true);
    setStripeError(null);

    try {
      const backendResponse: any = await simulateStripeBackend(109900);

      if (backendResponse.success) {
        setTimeout(() => {
          setSuccess(true);
          setLoading(false);
        }, 1000);
      } else {
        throw new Error("Backend synchronization failure.");
      }
    } catch (err: any) {
      setStripeError("Operational latency in payment node. Please verify credentials and retry.");
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#ab7e31]/10 blur-[150px] rounded-full translate-y-1/3 animate-pulse-slow"></div>
        <div className="max-w-md w-full text-center space-y-12 animate-cartoon-pop relative z-10">
          <div className="w-28 h-28 bg-[#ab7e31] rounded-3xl flex items-center justify-center mx-auto shadow-[0_20px_60px_rgba(171,126,49,0.5)] rotate-6">
            <i className="fas fa-check text-5xl text-black"></i>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-black logo-font text-white uppercase tracking-tighter leading-none">Onboarding <br /><span className="text-[#ab7e31] italic font-light">Synchronized.</span></h1>
            <p className="text-gray-400 font-light leading-relaxed text-lg px-4">
              Mission parameters accepted. Your elite specialist pairing protocol has been initiated. Expect communication within 4 business hours.
            </p>
          </div>
          <button 
            onClick={() => navigate('/portal')}
            className="w-full py-6 bg-white text-black font-black rounded-2xl text-xs uppercase tracking-[0.4em] hover:bg-[#ab7e31] transition-all shadow-2xl hover:scale-[1.02] active:scale-95"
          >
            Enter Client Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-40 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#ab7e31]/50 to-transparent"></div>
      <div className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-[#ab7e31]/5 rounded-full blur-[160px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24 reveal">
          <span className="text-[#ab7e31] font-black text-[11px] uppercase tracking-[0.6em] mb-6 block italic">Fiduciary Gateway</span>
          <h1 className="text-6xl md:text-8xl logo-font font-black text-white uppercase tracking-tighter leading-none">Finalize Your <br /><span className="text-[#ab7e31] italic font-light drop-shadow-2xl">Retainer.</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 reveal">
            <div className="glass p-10 md:p-16 rounded-[4rem] border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ab7e31]/20 via-[#ab7e31] to-[#ab7e31]/20"></div>
              
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-2xl font-black text-white uppercase tracking-widest flex items-center">
                  <i className="fas fa-shield-check text-[#ab7e31] mr-5"></i> Secure Authorization
                </h2>
                <div className="hidden sm:flex space-x-3 opacity-40 grayscale">
                  <i className="fab fa-cc-visa text-2xl"></i>
                  <i className="fab fa-cc-mastercard text-2xl"></i>
                  <i className="fab fa-cc-amex text-2xl"></i>
                </div>
              </div>
              
              <form onSubmit={handlePayment} className="space-y-12">
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.3em] ml-2">Cardholder Designation</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-black/60 border border-white/10 rounded-2xl px-7 py-5 text-base text-white focus:border-[#ab7e31] outline-none transition-all placeholder:text-gray-800 font-medium" 
                    placeholder="Full Legal Name" 
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center px-2">
                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[0.3em]">Payment Credentials</label>
                    <span className="text-[9px] text-[#ab7e31] font-black uppercase tracking-widest">PCI-DSS Level 1 Compliant</span>
                  </div>
                  
                  <div className="relative group">
                    <div id="stripe-card-element" className="w-full bg-black/60 border border-white/10 rounded-2xl px-7 py-6 transition-all group-hover:border-white/20 min-h-[64px]">
                      {!STRIPE_PUBLISHABLE_KEY && <p className="text-gray-600 text-xs italic">Awaiting secure key synchronization...</p>}
                    </div>
                    {stripeError && (
                      <div className="mt-4 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center">
                        <i className="fas fa-exclamation-circle text-red-500 mr-3 text-sm"></i>
                        <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">
                          {stripeError}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-8">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#ab7e31] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <button 
                      type="submit"
                      disabled={loading || !cardComplete || !STRIPE_PUBLISHABLE_KEY}
                      className="relative z-10 w-full py-8 bg-[#ab7e31] text-black font-black rounded-[2.5rem] text-xs uppercase tracking-[0.4em] hover:bg-white transition-all shadow-2xl flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed group"
                    >
                      {loading ? (
                        <div className="w-7 h-7 border-[4px] border-black border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>Submit Payment <i className="fas fa-lock-alt ml-5 group-hover:scale-125 transition-transform"></i></>
                      )}
                    </button>
                  </div>
                  
                  <div className="mt-12 flex flex-col items-center space-y-6">
                     <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em] font-black flex items-center">
                       <i className="fas fa-fingerprint mr-3 text-[#ab7e31]/60"></i> Encrypted via Black Star Secure Protocol (BSSP)
                     </p>
                     <div className="flex space-x-12 opacity-5 grayscale invert brightness-200">
                        <i className="fas fa-shield-halved text-2xl"></i>
                        <i className="fas fa-vault text-2xl"></i>
                        <i className="fas fa-network-wired text-2xl"></i>
                     </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10 reveal lg:sticky lg:top-36">
            <div className="glass p-12 rounded-[3.5rem] border border-[#ab7e31]/40 bg-[#ab7e31]/5 relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#ab7e31]/10 rounded-full blur-[80px] group-hover:bg-[#ab7e31]/20 transition-all duration-700"></div>
              <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.5em] mb-10">Strategic Summary</h3>
              
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <p className="text-white font-black text-2xl leading-tight uppercase tracking-tighter">Elite Partner Tier</p>
                    <div className="flex items-center text-[#ab7e31] text-[10px] font-black uppercase tracking-widest">
                       <i className="fas fa-sparkles mr-2"></i> U.S-Based Dedicated EA
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-black logo-font text-3xl tracking-tighter italic">$1,099</p>
                  </div>
                </div>
                
                <div className="h-px bg-white/10"></div>

                <div className="space-y-6">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 font-bold uppercase tracking-[0.3em]">Monthly Strategy Retainer</span>
                    <span className="text-white font-black">$1,099.00</span>
                  </div>
                  <div className="flex justify-between text-xs items-center">
                    <span className="text-gray-500 font-bold uppercase tracking-[0.3em]">Operational Onboarding</span>
                    <span className="text-green-500 font-black uppercase tracking-[0.3em] bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20">Waived</span>
                  </div>
                  
                  <div className="pt-10 mt-10 border-t border-white/5 flex flex-col items-end space-y-4">
                    <div className="text-right">
                      <span className="text-gray-600 font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Total Monthly Investment</span>
                    </div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-[#ab7e31] font-black logo-font text-6xl tracking-tighter italic leading-none">$1,099</span>
                      <span className="text-gray-500 font-black text-xs uppercase tracking-widest">/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 border border-white/5 rounded-[3.5rem] bg-white/[0.02] flex items-center space-x-8 group hover:bg-white/5 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#ab7e31]/10 flex items-center justify-center border border-[#ab7e31]/30 group-hover:bg-[#ab7e31] transition-all duration-700 shadow-2xl">
                <i className="fas fa-bolt-lightning text-[#ab7e31] text-2xl group-hover:text-black transition-colors"></i>
              </div>
              <div className="flex-grow">
                <p className="text-gray-400 text-base leading-relaxed font-light italic">
                  "Strategic momentum starts here. We handle the logistics; you execute the vision."
                </p>
                <div className="flex items-center mt-4">
                   <div className="h-px w-6 bg-[#ab7e31] mr-3"></div>
                   <p className="text-white font-black uppercase tracking-[0.4em] text-[10px]">Command Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
