
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-black min-h-screen py-24 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#ab7e31]/30 to-transparent"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#ab7e31]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="text-center mb-20 reveal pt-10">
          <h1 className="text-5xl md:text-7xl logo-font font-black text-white mb-6 uppercase tracking-tighter">
            Refund & <br /><span className="text-[#ab7e31] italic font-light">Cancellation</span>
          </h1>
          <p className="text-gray-500 font-black uppercase tracking-[0.5em] text-[10px]">Effective Date: January 9, 2026</p>
        </div>

        <div className="glass p-10 md:p-16 rounded-[3rem] border-white/5 shadow-2xl space-y-12">
          <section className="space-y-4">
            <h2 className="text-xl font-black text-[#ab7e31] uppercase tracking-widest border-b border-white/5 pb-4">Black Star VA Policy</h2>
            <p className="text-gray-300 leading-relaxed font-light">
              At Black Star VA, we provide dedicated professional support through our Executive Assistant and Bookkeeping services. Because we allocate specific personnel and resources to your account immediately upon enrollment, we adhere to the following policy:
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center">
              <span className="w-8 h-px bg-[#ab7e31] mr-4"></span> 1. No Refunds
            </h3>
            <p className="text-gray-400 leading-relaxed font-light pl-12">
              All payments made to Black Star VA are non-refundable. This includes initial setup fees, monthly subscription deposits, and recurring service fees. Once a payment is processed, no refunds will be issued for the current billing cycle.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center">
              <span className="w-8 h-px bg-[#ab7e31] mr-4"></span> 2. Service Allocation
            </h3>
            <p className="text-gray-400 leading-relaxed font-light pl-12">
              Once payment is received and a Black Star Executive Assistant (EA) or Bookkeeping Professional has been assigned to your account, the service is considered active. The costs associated with staff allocation, onboarding, and software integration are incurred immediately; therefore, we cannot offer refunds once the assignment process has begun.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center">
              <span className="w-8 h-px bg-[#ab7e31] mr-4"></span> 3. Cancellation Policy
            </h3>
            <div className="text-gray-400 leading-relaxed font-light pl-12 space-y-4">
              <p>You may cancel your subscription at any time; however, the cancellation will only apply to the following month's billing cycle.</p>
              <ul className="space-y-3 list-disc list-inside marker:text-[#ab7e31]">
                <li><span className="font-bold text-gray-300">Written Notice Required:</span> To cancel your services, you must notify us in writing via email at <span className="text-white font-medium">support@blackstarva.com</span>.</li>
                <li><span className="font-bold text-gray-300">14-Day Notice Requirement:</span> To avoid being charged for the next billing cycle, your written cancellation notice must be received at least 14 days prior to your next scheduled billing date.</li>
                <li><span className="font-bold text-gray-300">Late Notification:</span> If notice is provided less than 14 days before your next billing date, the next scheduled payment will be processed, and your services will terminate at the end of the following month.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center">
              <span className="w-8 h-px bg-[#ab7e31] mr-4"></span> 4. Access to Services
            </h3>
            <p className="text-gray-400 leading-relaxed font-light pl-12">
              Upon providing notice of cancellation, you will continue to have full access to your assigned Black Star VA team member and bookkeeping services until the end of your current paid billing period. We do not offer prorated credits or partial refunds for unused hours or early termination within a billing cycle.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center">
              <span className="w-8 h-px bg-[#ab7e31] mr-4"></span> 5. Subscription Changes
            </h3>
            <p className="text-gray-400 leading-relaxed font-light pl-12">
              Any requests to upgrade or downgrade your service tier must also be submitted in writing 14 days before your next billing date to ensure proper staffing adjustments.
            </p>
          </section>

          <section className="pt-10 border-t border-white/5 text-center">
            <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-6">Contact & Authorization</h3>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-white font-bold">Black Star VA</p>
              <p className="text-gray-400 text-sm italic">support@blackstarva.com</p>
              <p className="text-[#ab7e31] text-xs font-black tracking-widest mt-4">WWW.BLACKSTARVA.COM</p>
            </div>
          </section>
        </div>

        <div className="mt-20 text-center">
           <button 
             onClick={() => window.history.back()}
             className="px-10 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"
           >
             <i className="fas fa-arrow-left mr-3"></i> Go Back
           </button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
