
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    /**
     * TRANSMISSION PROTOCOL: support@blackstarva.com
     * This simulates the secure dispatch of form data to the command node.
     */
    console.log('PROTOCOL INITIATED: Dispatching mission-critical inquiry to support@blackstarva.com', {
      timestamp: new Date().toISOString(),
      payload: formData,
      destination: 'support@blackstarva.com'
    });

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 8000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="py-24 bg-black min-h-screen relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#ab7e31]/30 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-[#ab7e31]/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute -bottom-48 -right-48 w-[50rem] h-[50rem] bg-[#ab7e31]/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24 reveal">
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] logo-font font-black text-white mb-6 uppercase tracking-tighter leading-none">
            CONTACT <span className="text-[#ab7e31] font-serif italic font-light">US.</span>
          </h1>
          <p className="text-gray-400 font-light max-w-lg mx-auto italic text-sm md:text-base leading-relaxed">
            Our command team is ready to synchronize with your mission. Reach out for a secure consultation regarding our elite executive support and bookkeeping services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Support Information Section */}
          <div className="space-y-12 reveal">
            <div className="glass p-12 rounded-[3.5rem] border-white/5 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ab7e31]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h2 className="text-3xl font-black logo-font text-white mb-12 uppercase tracking-widest">Command Center</h2>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-8 group/item">
                  <div className="w-14 h-14 bg-[#ab7e31]/10 rounded-2xl flex items-center justify-center border border-[#ab7e31]/20 group-hover/item:bg-[#ab7e31] transition-all duration-500 shadow-lg">
                    <i className="fas fa-envelope text-[#ab7e31] group-hover/item:text-black"></i>
                  </div>
                  <div>
                    <p className="text-white font-black uppercase tracking-widest text-[10px] mb-2">Primary Node</p>
                    <p className="text-gray-300 text-lg font-light group-hover/item:text-[#ab7e31] transition-colors">support@blackstarva.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-8 group/item">
                  <div className="w-14 h-14 bg-[#ab7e31]/10 rounded-2xl flex items-center justify-center border border-[#ab7e31]/20 group-hover/item:bg-[#ab7e31] transition-all duration-500 shadow-lg">
                    <i className="fas fa-clock text-[#ab7e31] group-hover/item:text-black"></i>
                  </div>
                  <div>
                    <p className="text-white font-black uppercase tracking-widest text-[10px] mb-2">Response Protocol</p>
                    <p className="text-gray-300 text-lg font-light group-hover/item:text-[#ab7e31] transition-colors">We will get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 bg-[#ab7e31]/5 border border-[#ab7e31]/20 rounded-[3rem] relative overflow-hidden group shadow-xl">
               <div className="absolute -right-12 -bottom-12 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <i className="fas fa-star text-[12rem] text-[#ab7e31]"></i>
               </div>
               <h3 className="text-[#ab7e31] font-black text-[11px] uppercase tracking-[0.6em] mb-6 italic">Strategic Guarantee</h3>
               <p className="text-gray-400 text-base leading-relaxed font-light italic">
                We believe that mission-critical support requires immediate clarity. Our specialists prioritize inquiries based on operational urgency. Expect a response from a Lead Strategist within 24 hours.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:mt-0 reveal">
            <div className="glass p-10 md:p-16 rounded-[4rem] border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.7)] relative overflow-hidden">
              {status === 'success' ? (
                <div className="py-24 text-center animate-cartoon-pop">
                  <div className="w-24 h-24 bg-[#ab7e31]/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-[#ab7e31]/40 shadow-2xl shadow-[#ab7e31]/20">
                    <i className="fas fa-paper-plane text-[#ab7e31] text-3xl"></i>
                  </div>
                  <h3 className="text-4xl font-black logo-font text-white mb-6 uppercase tracking-tighter">Transmission Successful</h3>
                  <p className="text-gray-400 font-light leading-relaxed mb-12 text-lg">
                    Your inquiry has been successfully dispatched to <br />
                    <span className="text-white font-black border-b border-[#ab7e31]/50 italic text-xl">support@blackstarva.com</span>
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-12 py-5 bg-white text-black font-black rounded-2xl text-[11px] uppercase tracking-widest hover:bg-[#ab7e31] transition-all shadow-xl"
                  >
                    SEND ANOTHER QUESTION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="block text-[11px] font-black text-gray-500 uppercase tracking-widest mb-3 ml-1">FULL NAME</label>
                      <input 
                        required 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 text-base text-white focus:outline-none focus:border-[#ab7e31]/60 transition-all font-medium" 
                        placeholder="John Smith" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[11px] font-black text-gray-500 uppercase tracking-widest mb-3 ml-1">WORK EMAIL</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 text-base text-white focus:outline-none focus:border-[#ab7e31]/60 transition-all font-medium" 
                        placeholder="john@company.com" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[11px] font-black text-gray-500 uppercase tracking-widest mb-3 ml-1">INQUIRY SUBJECT</label>
                    <input 
                      required 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 text-base text-white focus:outline-none focus:border-[#ab7e31]/60 transition-all font-medium" 
                      placeholder="e.g. Scaling Executive Support" 
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-[11px] font-black text-gray-500 uppercase tracking-widest mb-3 ml-1">MISSION DETAILS</label>
                    <textarea 
                      required 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6} 
                      className="w-full bg-black/50 border border-white/10 rounded-3xl px-6 py-5 text-base text-white focus:outline-none focus:border-[#ab7e31]/60 placeholder:text-gray-800 transition-all font-light leading-relaxed resize-none" 
                      placeholder="Describe your current operational requirements or bottlenecks..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-[#ab7e31] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
                      <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="relative z-10 w-full py-7 bg-[#ab7e31] text-black font-black rounded-[2rem] text-xs uppercase tracking-[0.4em] hover:bg-white transition-all shadow-2xl flex items-center justify-center disabled:opacity-50"
                      >
                        {status === 'submitting' ? (
                          <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <>SUBMIT QUESTION <i className="fas fa-paper-plane ml-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i></>
                        )}
                      </button>
                    </div>
                    
                    <div className="mt-10 flex items-center justify-center space-x-3">
                       <div className="h-px w-10 bg-white/10"></div>
                       <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em] font-black">
                        SECURE NODE @ BLACKSTAR VA
                       </p>
                       <div className="h-px w-10 bg-white/10"></div>
                    </div>
                    <p className="text-center text-[9px] text-gray-800 uppercase tracking-widest mt-4 font-bold">
                      Destination: support@blackstarva.com
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
