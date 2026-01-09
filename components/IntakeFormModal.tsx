
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface IntakeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntakeFormModal: React.FC<IntakeFormModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  // Reset form when opened/closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setIsSuccess(false);
      }, 300);
    }
  }, [isOpen]);

  const totalSteps = 5;

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Automatically redirect to the payment page
      setTimeout(() => {
        onClose();
        navigate('/pay');
      }, 2500);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in">
      <div className={`glass w-full rounded-[3rem] border-white/10 shadow-2xl overflow-hidden flex flex-col transition-all duration-700 ease-in-out max-w-2xl max-h-[90vh]`}>
        {/* Header */}
        {!isSuccess && (
          <div className="p-8 border-b border-white/5 flex justify-between items-center bg-black/20">
            <div>
              <h2 className="text-2xl font-black logo-font text-white uppercase tracking-tighter">
                <span className="text-[#ab7e31]">Intake</span>
              </h2>
              <div className="flex items-center mt-2 space-x-4">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map(s => (
                    <div key={s} className={`h-1 rounded-full transition-all duration-500 ${step >= s ? 'w-4 bg-[#ab7e31]' : 'w-2 bg-white/10'}`}></div>
                  ))}
                </div>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Step {step} of {totalSteps}</span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}

        {/* Content */}
        <div className={`flex-grow overflow-hidden flex flex-col p-8 md:p-12`}>
          {isSuccess ? (
            <div className="py-12 text-center animate-cartoon-pop flex-grow flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-[#ab7e31]/20 rounded-full flex items-center justify-center mb-8 border border-[#ab7e31]/30">
                <i className="fas fa-fingerprint text-[#ab7e31] text-4xl"></i>
              </div>
              <h3 className="text-4xl font-black logo-font text-white mb-4 uppercase tracking-widest">Protocol Verified</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-sm mx-auto mb-10 text-lg">
                Your profile has been synchronized. One moment while we transfer you to the secure payment portal...
              </p>
              <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mx-auto">
                <div className="h-full bg-[#ab7e31] animate-[progress_2s_ease-in-out_infinite]"></div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10 flex-grow overflow-y-auto custom-scrollbar pr-2">
              {step === 1 && (
                <div className="space-y-8 animate-fade-in">
                  <p className="text-[#ab7e31] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Identity & Foundations</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">1. Full Name</label>
                      <input required type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ab7e31]/50 outline-none" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">2. Company Name</label>
                      <input required type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ab7e31]/50 outline-none" placeholder="Business Name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">3. Current Role</label>
                    <input required type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ab7e31]/50 outline-none" placeholder="Founder, CEO, etc." />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 animate-fade-in">
                  <p className="text-[#ab7e31] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Operations & Drag</p>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">4. Primary Industry</label>
                    <input required type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ab7e31]/50 outline-none" placeholder="Tech, Legal, Med, etc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">5. Current #1 Bottleneck</label>
                    <textarea required rows={2} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ab7e31]/50 outline-none resize-none" placeholder="What's slowing you down most?" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">6. Total Team Size</label>
                    <select className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ab7e31]/50 outline-none font-bold">
                      <option>Just Me (Solopreneur)</option>
                      <option>Small Team (2-10)</option>
                      <option>Medium (11-50)</option>
                      <option>Large (50+)</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 animate-fade-in">
                  <p className="text-[#ab7e31] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Support Parameters</p>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">7. Est. Weekly Support Hours</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['5-10', '10-20', '20-40', 'Full Time'].map(opt => (
                        <button key={opt} type="button" className="py-3 px-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-gray-400 hover:border-[#ab7e31] hover:text-[#ab7e31] transition-all">
                          {opt} Hours
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">8. Precision Bookkeeping Needed?</label>
                    <div className="flex space-x-4">
                      {['Yes', 'No'].map(opt => (
                        <button key={opt} type="button" className="flex-1 py-3 px-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-gray-400 hover:border-[#ab7e31] hover:text-[#ab7e31] transition-all">
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">9. Core Service Priority</label>
                    <select className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ab7e31]/50 outline-none font-bold">
                      <option>Executive Admin</option>
                      <option>Bookkeeping</option>
                      <option>Creative/Marketing</option>
                      <option>Technical/CRM</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-8 animate-fade-in">
                  <p className="text-[#ab7e31] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Tech & Workflow</p>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">10. Primary Comm Tool</label>
                    <input required type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ab7e31]/50 outline-none" placeholder="Slack, Teams, WhatsApp, etc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">11. Current Tech Stack</label>
                    <input required type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ab7e31]/50 outline-none" placeholder="Notion, GSuite, HubSpot, etc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">12. Do you have lifestyle needs?</label>
                    <p className="text-[9px] text-gray-600 uppercase mb-2">Travel, Gift Booking, Personal Errands</p>
                    <div className="flex space-x-4">
                      {['Yes', 'No'].map(opt => (
                        <button key={opt} type="button" className="flex-1 py-3 px-4 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-gray-400 hover:border-[#ab7e31] hover:text-[#ab7e31] transition-all">
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-8 animate-fade-in">
                  <p className="text-[#ab7e31] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Finalization</p>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">13. Urgency / Start Date</label>
                    <input required type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ab7e31]/50 outline-none" placeholder="Immediately, 2 weeks, etc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">14. Referrer (How did you find us?)</label>
                    <input type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ab7e31]/50 outline-none" placeholder="LinkedIn, Referral, Search, etc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">15. Direct Contact Email</label>
                    <input required type="email" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#ab7e31]/50 outline-none font-bold" placeholder="founder@yourcompany.com" />
                  </div>
                </div>
              )}

              {/* Footer Controls */}
              <div className="flex space-x-4 pt-8">
                {step > 1 && (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="flex-grow py-4 bg-white/5 text-white font-black rounded-xl text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10"
                  >
                    Back
                  </button>
                )}
                
                {step < totalSteps ? (
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="flex-grow py-4 bg-white text-black font-black rounded-xl text-[10px] uppercase tracking-widest hover:bg-[#ab7e31] transition-all shadow-xl"
                  >
                    Next Phase <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                ) : (
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-grow py-4 bg-[#ab7e31] text-black font-black rounded-xl text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-2xl flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>Continue to Payment <i className="fas fa-credit-card ml-3"></i></>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntakeFormModal;
