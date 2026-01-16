import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PRICING_PLANS, BOOKKEEPING_PLANS } from '../constants';

const ServiceCard = ({ title, icon, tasks }: { title: string, icon: string, tasks: string[] }) => (
  <div className="reveal glass p-10 rounded-[2.5rem] border-white/5 hover:border-[#ab7e31]/30 transition-all group h-full flex flex-col">
    <div className="w-14 h-14 bg-[#ab7e31]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#ab7e31]/20 group-hover:bg-[#ab7e31] transition-all">
      <i className={`fas ${icon} text-xl text-[#ab7e31] group-hover:text-black`}></i>
    </div>
    <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">{title}</h3>
    <ul className="space-y-4 flex-grow">
      {tasks.map((task, i) => (
        <li key={i} className="flex items-start text-gray-400 text-sm font-light">
          <i className="fas fa-check text-[10px] text-[#ab7e31] mt-1 mr-3"></i>
          {task}
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'ea' | 'bookkeeping'>('ea');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type === 'bookkeeping' || location.pathname === '/bookkeeping') {
      setActiveTab('bookkeeping');
    } else {
      setActiveTab('ea');
    }
  }, [location]);

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
              ? 'bg-[#ab7e31] text-black shadow-lg shadow-[#ab7e31]/10' 
              : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
          }`}
        >
          Select Plan
        </a>
      );
    }

    return (
      <button 
        onClick={() => navigate('/intake')} 
        className={`w-full py-5 rounded-2xl font-black text-[11px] tracking-[0.2em] uppercase transition-all ${
          plan.recommended 
            ? 'bg-[#ab7e31] text-black shadow-lg shadow-[#ab7e31]/10' 
            : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
        }`}
      >
        Select Plan
      </button>
    );
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-6xl mx-auto reveal">
          <span className="text-[#ab7e31] font-black tracking-[0.5em] uppercase text-[12px] mb-8 block">The Elite Workforce</span>
          <h1 className="text-7xl md:text-[9rem] lg:text-[11rem] logo-font font-black text-white mb-4 leading-none tracking-tighter uppercase">
            {activeTab === 'ea' ? 'EXECUTIVE' : 'STRATEGIC'}
          </h1>
          <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] logo-font text-[#ab7e31] italic font-light leading-none tracking-tighter mb-16">
            {activeTab === 'ea' ? 'ASSISTANCE.' : 'FINANCE.'}
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button 
              onClick={() => setActiveTab('ea')}
              className={`w-full sm:w-[320px] px-10 py-7 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] transition-all border-2 ${
                activeTab === 'ea' 
                  ? 'bg-[#ab7e31] text-black border-[#ab7e31] shadow-[0_20px_60px_rgba(171,126,49,0.3)]' 
                  : 'bg-transparent border-white/10 text-gray-500 hover:border-white/20'
              }`}
            >
              Executive Assistant support
            </button>
            <button 
              onClick={() => setActiveTab('bookkeeping')}
              className={`w-full sm:w-[320px] px-10 py-7 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] transition-all border-2 ${
                activeTab === 'bookkeeping' 
                  ? 'bg-[#ab7e31] text-black border-[#ab7e31] shadow-[0_20px_60px_rgba(171,126,49,0.3)]' 
                  : 'bg-transparent border-white/10 text-gray-500 hover:border-white/20'
              }`}
            >
              Bookkeeping
            </button>
          </div>
          
          <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-4xl mx-auto">
            {activeTab === 'ea' 
              ? "Delegation is the fuel of elite performance. Our U.S-based strategic assistants handle your operational drag so you can dominate your vision."
              : "Your ledger is the map of your impact. We provide the crystal-clear financial oversight founders need to make high-stakes decisions with absolute confidence."
            }
          </p>
        </div>
      </section>

      {/* Content Sections */}
      {activeTab === 'ea' ? (
        <>
          <section className="py-20 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard title="Inbox & Schedule" icon="fa-envelope-open-text" tasks={["Strategic Email Filtering", "Complex Calendar Management", "Meeting Briefings & Follow-ups", "Appointment Scheduling", "Contact Management & Hygiene"]} />
              <ServiceCard title="Logistics & Travel" icon="fa-plane-departure" tasks={["End-to-End Travel Planning", "Itinerary Orchestration", "Restaurant & Event Booking", "Transportation Logistics", "Discreet Errand Execution"]} />
              <ServiceCard title="Strategic Research" icon="fa-magnifying-glass" tasks={["Competitive Intel Audits", "Tool & Software Vetting", "Market Analysis Reports", "Executive Summaries", "Opportunity Identification"]} />
              <ServiceCard title="Digital Operations" icon="fa-gears" tasks={["CRM Optimization & Cleanup", "Notion / Slack Management", "Workflow Automation Setup", "Digital File Architecture", "Basic Web Maintenance"]} />
              <ServiceCard title="Content & Design" icon="fa-pen-nib" tasks={["Social Media Coordination", "Graphic Design (Canva/Adobe)", "Newsletter Management", "Copywriting & Editing", "Brand Asset Management"]} />
              <ServiceCard title="Personal Concierge" icon="fa-star" tasks={["Gifting & Occasions", "Personal Appointment Booking", "Household Vendor Management", "Lifestyle Research", "Private Event Logistics"]} />
            </div>
          </section>

          <section className="py-40 bg-[#ab7e31]/5 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-6xl logo-font font-black text-white mb-20 uppercase tracking-tighter">EXECUTIVE ASSISTANT <span className="text-[#ab7e31] italic font-light lowercase">Plans</span></h2>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {PRICING_PLANS.map((plan, i) => (
                  <div key={i} className={`flex flex-col relative p-10 rounded-[2.5rem] border transition-all duration-500 h-full ${plan.recommended ? 'bg-black border-[#ab7e31] shadow-[0_0_40px_rgba(171,126,49,0.15)] scale-105 z-10' : 'bg-[#0a0a0a] border-white/5 hover:border-white/10'}`}>
                    {plan.recommended && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#ab7e31] text-black text-[9px] font-black py-2.5 px-8 rounded-full uppercase tracking-[0.2em] shadow-xl whitespace-nowrap">
                        Most Popular
                      </div>
                    )}
                    <div className="mb-8 text-left">
                      <h3 className="text-xl font-black logo-font text-white mb-4 uppercase tracking-tighter">{plan.name}</h3>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-5xl logo-font font-black text-white tracking-tighter">{plan.price}</span>
                        <span className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">/mo</span>
                      </div>
                      <p className="text-[#ab7e31] text-[10px] font-black mt-4 uppercase tracking-[0.2em]">{plan.hours} Hours Monthly</p>
                    </div>
                    <ul className="space-y-5 mb-10 flex-grow text-left">
                      {plan.features.slice(0, 5).map((f, idx) => (
                        <li key={idx} className="flex items-start text-gray-400 text-xs leading-relaxed font-medium">
                          <i className="fas fa-check text-[9px] text-[#ab7e31] mt-1 mr-4"></i> {f}
                        </li>
                      ))}
                    </ul>
                    {renderPlanButton(plan)}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-40 px-4 text-center">
            <div className="max-w-5xl mx-auto reveal p-16 md:p-24 bg-black inline-block w-full">
              <h2 className="text-6xl md:text-[8rem] font-black logo-font text-white mb-6 leading-[0.85] tracking-tighter uppercase">
                NEED AN EXECUTIVE <br /> ASSISTANT FOR <br /> <span className="text-[#ab7e31] italic font-light">SOMETHING ELSE?</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-2xl mb-16 max-w-4xl mx-auto font-light leading-relaxed">
                Our specialists are equipped for bespoke missions beyond standard tiers—from <br className="hidden md:block" /> technical architecture to discrete personal concierge services.
              </p>
              <button onClick={() => navigate('/intake')} className="px-16 py-6 bg-white text-black font-black rounded-xl hover:bg-[#ab7e31] transition-all text-[11px] font-black tracking-[0.4em] uppercase shadow-2xl flex items-center justify-center mx-auto">
                BOOK DISCOVERY CALL
              </button>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="py-20 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard title="Core Compliance" icon="fa-file-invoice" tasks={["Monthly Bank Reconciliation", "Expense Categorization", "Balance Sheet Accuracy", "P&L Statement Generation", "Journal Entry Oversight"]} />
              <ServiceCard title="Accounts Control" icon="fa-money-bill-transfer" tasks={["Accounts Payable Management", "Accounts Receivable Tracking", "Invoicing & Collections", "Vendor Communication", "Credit Card Reconciliation"]} />
              <ServiceCard title="Payroll & HR" icon="fa-users-gear" tasks={["Full-Cycle Payroll Processing", "1099 Contractor Compliance", "Benefit Allocation Tracking", "Payroll Tax Facilitation", "Employee Expense Audits"]} />
              <ServiceCard title="Strategic Insights" icon="fa-chart-pie" tasks={["Cash Flow Forecasting", "Budget vs. Actual Analysis", "Burn Rate Calculation", "KPI Financial Dashboarding", "Quarterly Strategic Reviews"]} />
              <ServiceCard title="Tax Preparation" icon="fa-vault" tasks={["Clean Books for CPA Handoff", "Sales Tax Filing Support", "Estimated Tax Tracking", "Year-End Financial Cleanup", "Audit-Ready Documentation"]} />
              <ServiceCard title="Systems & Cleanup" icon="fa-wand-magic-sparkles" tasks={["QBO / Xero Integration", "Historical Mess Cleanup", "Chart of Accounts Design", "Automated Receipt Storage", "Tech Stack Sync (Hubdoc/Bill)"]} />
            </div>
          </section>

          <section className="py-40 bg-[#ab7e31]/5 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-6xl logo-font font-black text-white mb-20 uppercase tracking-tighter">BOOKKEEPING <span className="text-[#ab7e31] italic font-light lowercase">Plans</span></h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {BOOKKEEPING_PLANS.map((plan, i) => (
                  <div key={i} className={`flex flex-col relative p-12 rounded-[3rem] border transition-all duration-500 h-full ${plan.recommended ? 'bg-black border-[#ab7e31] shadow-[0_0_40px_rgba(171,126,49,0.15)] scale-105 z-10' : 'bg-[#0a0a0a] border-white/5 hover:border-white/10'}`}>
                    {plan.recommended && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#ab7e31] text-black text-[9px] font-black py-2.5 px-8 rounded-full uppercase tracking-[0.2em] shadow-xl whitespace-nowrap">
                        Most Popular
                      </div>
                    )}
                    <div className="mb-8 text-left">
                      <h3 className="text-2xl font-black logo-font text-white mb-4 uppercase tracking-tighter">{plan.name}</h3>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-6xl logo-font font-black text-white tracking-tighter">{plan.price}</span>
                        <span className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">/mo</span>
                      </div>
                      <p className="text-gray-500 text-[11px] font-bold mt-4 uppercase tracking-[0.2em] leading-relaxed">{plan.description}</p>
                    </div>
                    <ul className="space-y-5 mb-10 flex-grow text-left">
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="flex items-start text-gray-400 text-sm leading-relaxed font-medium">
                          <i className="fas fa-check text-[10px] text-[#ab7e31] mt-1 mr-4"></i> {f}
                        </li>
                      ))}
                    </ul>
                    {renderPlanButton(plan)}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-40 px-4 text-center">
            <div className="max-w-6xl mx-auto reveal py-16 px-4 bg-black inline-block w-full">
              <div className="relative inline-block mb-12">
                <span className="text-7xl md:text-[14rem] font-black opacity-10 uppercase tracking-tighter leading-none select-none" style={{ WebkitTextStroke: '1px white', WebkitTextFillColor: 'transparent' }}>
                  MOMENTUM
                </span>
                <div className="absolute inset-0 flex items-center justify-center pt-4 md:pt-12">
                   <h2 className="text-5xl md:text-[10rem] font-light logo-font text-[#ab7e31] italic leading-none tracking-tighter">
                      PERFECTED.
                   </h2>
                </div>
              </div>

              <p className="text-gray-400 text-xl md:text-2xl mb-16 font-light max-w-3xl mx-auto leading-relaxed">
                Precision isn't optional. It's the standard. Let's stabilize your foundation.
              </p>
              
              <div className="mb-20">
                 <h3 className="text-[#ab7e31] font-black text-3xl uppercase tracking-widest mb-6 italic">NEED A BOOKKEEPER FOR MORE HOURS NOT REFLECTED?</h3>
                 <p className="text-gray-500 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                    If your business velocity exceeds our standard plans, we offer bespoke high-volume bookkeeping support for complex enterprises.
                 </p>
              </div>

              <button 
                onClick={() => navigate('/intake')} 
                className="px-20 py-8 bg-[#ab7e31] text-black font-black rounded-xl text-[12px] tracking-[0.4em] uppercase hover:bg-white transition-all shadow-2xl shadow-[#ab7e31]/20 mx-auto"
              >
                BOOK DISCOVERY CALL
              </button>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Services;