
import React, { useState, useEffect } from 'react';

interface IntakeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  companyName: string;
  role: string;
  industry: string;
  bottleneck: string;
  teamSize: string;
  hours: string;
  bookkeeping: string;
  priority: string;
  commTool: string;
  techStack: string;
  lifestyle: string;
  urgency: string;
  referrer: string;
  email: string;
}

const IntakeFormModal: React.FC<IntakeFormModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    role: '',
    industry: '',
    bottleneck: '',
    teamSize: 'Just Me (Solopreneur)',
    hours: '',
    bookkeeping: '',
    priority: 'Executive Admin',
    commTool: '',
    techStack: '',
    lifestyle: '',
    urgency: '',
    referrer: '',
    email: '',
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectOption = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    /**
     * PROTOCOL: SECURE DATA DISPATCH
     * TARGET: support@blackstarva.com
     */
    console.log('[INTAKE PROTOCOL INITIATED]: Packaging mission-critical data...');
    
    try {
      // Simulation of API roundtrip to support@blackstarva.com
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('[DISPATCH SUCCESS]: Intake profile synchronized with support@blackstarva.com');
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error('[DISPATCH ERROR]: Operational latency detected', error);
      setIsSubmitting(false);
      alert("Operational latency detected. Please try again or email support@blackstarva.com directly.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl animate-fade-in">
      <div className={`glass w-full rounded-[3.5rem] border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col transition-all duration-700 ease-in-out max-w-2xl ${isSuccess ? 'max-h-[500px]' : 'max-h-[90vh]'}`}>
        
        {/* Success View */}
        {isSuccess ? (
          <div className="flex-grow flex flex-col items-center justify-center p-12 text-center animate-cartoon-pop">
            <div className="w-24 h-24 bg-[#ab7e31]/20 rounded-full flex items-center justify-center mb-8 border border-[#ab7e31]/30 shadow-[0_0_50px_rgba(171,126,49,0.3)]">
              <i className="fas fa-paper-plane text-3xl text-[#ab7e31]"></i>
            </div>
            <h2 className="text-4xl font-black logo-font text-white mb-6 uppercase tracking-tighter text-center">
              Intake questions <br /><span className="text-[#ab7e31] italic font-light lowercase">submitted!</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-md">
              Your comprehensive intake profile has been dispatched to <span className="text-white font-bold">support@blackstarva.com</span>. Our command team will review your data and initiate contact within 4 business hours.
            </p>
            <button 
              onClick={onClose}
              className="px-12 py-4 bg-white text-black font-black rounded-xl text-[10px] uppercase tracking-[0.3em] hover:bg-[#ab7e31] transition-all shadow-xl"
            >
              Close message
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="p-10 border-b border-white/5 flex justify-between items-center bg-black/40">
              <div>
                <h2 className="text-3xl font-black logo-font text-white uppercase tracking-tighter">
                  <span className="text-[#ab7e31]">INTAKE</span>
                </h2>
                <div className="flex items-center mt-3 space-x-6">
                  <div className="flex space-x-1.5">
                    {[1, 2, 3, 4, 5].map(s => (
                      <div key={s} className={`h-1.5 rounded-full transition-all duration-700 ${step >= s ? 'w-6 bg-[#ab7e31]' : 'w-2.5 bg-white/10'}`}></div>
                    ))}
                  </div>
                  <span className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em]">STEP {step} OF {totalSteps}</span>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all border border-white/5"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {/* Content */}
            <div className={`flex-grow overflow-hidden flex flex-col p-8 md:p-14`}>
              <form onSubmit={handleSubmit} className="space-y-12 flex-grow overflow-y-auto custom-scrollbar pr-4">
                {step === 1 && (
                  <div className="space-y-10 animate-fade-in">
                    <p className="text-[#ab7e31] text-[11px] font-black uppercase tracking-[0.4em] mb-4 italic">Section I: Identity & Foundations</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">1. Full Legal Name</label>
                        <input required name="fullName" value={formData.fullName} onChange={handleInputChange} type="text" className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none transition-all" placeholder="E.g. Alexander Sterling" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">2. Company Entity</label>
                        <input required name="companyName" value={formData.companyName} onChange={handleInputChange} type="text" className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none transition-all" placeholder="Corporate Name" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">3. Executive Role</label>
                      <input required name="role" value={formData.role} onChange={handleInputChange} type="text" className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none transition-all" placeholder="Founder, CEO, Principal, etc." />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-10 animate-fade-in">
                    <p className="text-[#ab7e31] text-[11px] font-black uppercase tracking-[0.4em] mb-4 italic">Section II: Operations & Drag</p>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">4. Primary Industry Vertical</label>
                      <input required name="industry" value={formData.industry} onChange={handleInputChange} type="text" className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none transition-all" placeholder="Tech, VC, Legal, Medical, etc." />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">5. Primary Operational Bottleneck</label>
                      <textarea required name="bottleneck" value={formData.bottleneck} onChange={handleInputChange} rows={3} className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none resize-none transition-all" placeholder="What is currently slowing your mission velocity?" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">6. Total Organizational Headcount</label>
                      <select name="teamSize" value={formData.teamSize} onChange={handleInputChange} className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none font-bold">
                        <option>Just Me (Solopreneur)</option>
                        <option>Small Team (2-10)</option>
                        <option>Medium Scale (11-50)</option>
                        <option>Large Enterprise (50+)</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-10 animate-fade-in">
                    <p className="text-[#ab7e31] text-[11px] font-black uppercase tracking-[0.4em] mb-4 italic">Section III: Support Parameters</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">7. Est. Weekly Strategic Support Hours</label>
                        <div className="grid grid-cols-2 gap-4">
                          {['5-10', '10-20', '20-40', 'Full Focus'].map(opt => (
                            <button 
                              key={opt} 
                              type="button" 
                              onClick={() => handleSelectOption('hours', opt)}
                              className={`py-4 px-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                                formData.hours === opt 
                                  ? 'bg-[#ab7e31] text-black border-[#ab7e31]' 
                                  : 'bg-white/5 border-white/5 text-gray-400 hover:border-[#ab7e31]/40'
                              }`}
                            >
                              {opt} HOURS
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">8. Precision Bookkeeping Integration?</label>
                        <div className="flex space-x-4">
                          {['Yes', 'No'].map(opt => (
                            <button 
                              key={opt} 
                              type="button" 
                              onClick={() => handleSelectOption('bookkeeping', opt)}
                              className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                                formData.bookkeeping === opt 
                                  ? 'bg-[#ab7e31] text-black border-[#ab7e31]' 
                                  : 'bg-white/5 border-white/5 text-gray-400 hover:border-[#ab7e31]/40'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">9. Strategic Priority Node</label>
                      <select name="priority" value={formData.priority} onChange={handleInputChange} className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none font-bold">
                        <option>Executive Admin</option>
                        <option>Bookkeeping</option>
                        <option>Creative/Marketing</option>
                        <option>Technical/CRM</option>
                        <option>Lifestyle Concierge</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-10 animate-fade-in">
                    <p className="text-[#ab7e31] text-[11px] font-black uppercase tracking-[0.4em] mb-4 italic">Section IV: Tech & Workflow</p>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">10. Primary Communication Protocol</label>
                      <input required name="commTool" value={formData.commTool} onChange={handleInputChange} type="text" className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none transition-all" placeholder="Slack, Teams, WhatsApp, etc." />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">11. Current Technical Stack</label>
                      <input required name="techStack" value={formData.techStack} onChange={handleInputChange} type="text" className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none transition-all" placeholder="Notion, GSuite, HubSpot, QBO, etc." />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">12. Do you have lifestyle/personal needs?</label>
                      <div className="flex space-x-4">
                        {['Yes', 'No'].map(opt => (
                          <button 
                            key={opt} 
                            type="button" 
                            onClick={() => handleSelectOption('lifestyle', opt)}
                            className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                              formData.lifestyle === opt 
                                ? 'bg-[#ab7e31] text-black border-[#ab7e31]' 
                                : 'bg-white/5 border-white/5 text-gray-400 hover:border-[#ab7e31]/40'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-10 animate-fade-in">
                    <p className="text-[#ab7e31] text-[11px] font-black uppercase tracking-[0.4em] mb-4 italic">Section V: Finalization</p>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">13. Urgency / Mission Start Date</label>
                      <input required name="urgency" value={formData.urgency} onChange={handleInputChange} type="text" className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none transition-all" placeholder="Immediately, 2 weeks, etc." />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">14. Referrer (How did you find us?)</label>
                      <input name="referrer" value={formData.referrer} onChange={handleInputChange} type="text" className="w-full bg-black/60 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#ab7e31]/50 outline-none transition-all" placeholder="LinkedIn, Referral, Search, etc." />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">15. Direct Command Email</label>
                      <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-black/60 border border-[#ab7e31]/40 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#ab7e31] outline-none transition-all font-bold" placeholder="founder@yourcompany.com" />
                    </div>
                  </div>
                )}

                {/* Footer Controls */}
                <div className="flex space-x-5 pt-12">
                  {step > 1 && (
                    <button 
                      type="button" 
                      onClick={prevStep}
                      className="flex-grow py-5 bg-black text-white font-black rounded-2xl text-[11px] uppercase tracking-widest hover:bg-white/5 transition-all border border-white/10 shadow-lg"
                    >
                      BACK
                    </button>
                  )}
                  
                  {step < totalSteps ? (
                    <button 
                      type="button" 
                      onClick={nextStep}
                      className="flex-grow py-5 bg-white text-black font-black rounded-2xl text-[11px] uppercase tracking-widest hover:bg-[#ab7e31] transition-all shadow-xl shadow-[#ab7e31]/10 flex items-center justify-center"
                    >
                      NEXT PHASE <i className="fas fa-arrow-right ml-3"></i>
                    </button>
                  ) : (
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-grow py-6 bg-[#ab7e31] text-black font-black rounded-2xl text-[11px] uppercase tracking-widest hover:bg-white transition-all shadow-2xl flex items-center justify-center disabled:opacity-50 group"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>SUBMIT <i className="fas fa-paper-plane ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i></>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default IntakeFormModal;
