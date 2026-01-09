
import React from 'react';
import { BOOKKEEPING_PLANS } from '../constants';

interface BookkeepingProps {
  onBookNow: () => void;
}

const FinanceBlock = ({ title, icon, tasks }: { title: string, icon: string, tasks: string[] }) => (
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

const Bookkeeping: React.FC<BookkeepingProps> = ({ onBookNow }) => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto reveal">
          <span className="text-[#ab7e31] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Fiduciary Precision</span>
          <h1 className="text-6xl md:text-8xl logo-font font-black text-white mb-10 leading-none tracking-tighter">
            Strategic <br />
            <span className="text-[#ab7e31] italic font-light drop-shadow-xl">Finance.</span>
          </h1>
          <p className="text-gray-400 text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Your ledger is the map of your impact. We provide the crystal-clear financial oversight founders need to make high-stakes decisions with absolute confidence.
          </p>
          <button 
            onClick={onBookNow}
            className="px-12 py-5 bg-[#ab7e31] text-black font-black rounded-2xl text-sm uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl"
          >
            Book Discovery Call
          </button>
        </div>
      </section>

      {/* Task Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FinanceBlock 
            title="Core Compliance" 
            icon="fa-file-invoice"
            tasks={[
              "Monthly Bank Reconciliation",
              "Expense Categorization",
              "Balance Sheet Accuracy",
              "P&L Statement Generation",
              "Journal Entry Oversight"
            ]}
          />
          <FinanceBlock 
            title="Accounts Control" 
            icon="fa-money-bill-transfer"
            tasks={[
              "Accounts Payable Management",
              "Accounts Receivable Tracking",
              "Invoicing & Collections",
              "Vendor Communication",
              "Credit Card Reconciliation"
            ]}
          />
          <FinanceBlock 
            title="Payroll & HR" 
            icon="fa-users-gear"
            tasks={[
              "Full-Cycle Payroll Processing",
              "1099 Contractor Compliance",
              "Benefit Allocation Tracking",
              "Payroll Tax Facilitation",
              "Employee Expense Audits"
            ]}
          />
          <FinanceBlock 
            title="Strategic Insights" 
            icon="fa-chart-pie"
            tasks={[
              "Cash Flow Forecasting",
              "Budget vs. Actual Analysis",
              "Burn Rate Calculation",
              "KPI Financial Dashboarding",
              "Quarterly Strategic Reviews"
            ]}
          />
          <FinanceBlock 
            title="Tax Preparation" 
            icon="fa-vault"
            tasks={[
              "Clean Books for CPA Handoff",
              "Sales Tax Filing Support",
              "Estimated Tax Tracking",
              "Year-End Financial Cleanup",
              "Audit-Ready Documentation"
            ]}
          />
          <FinanceBlock 
            title="Systems & Cleanup" 
            icon="fa-wand-magic-sparkles"
            tasks={[
              "QBO / Xero Integration",
              "Historical Mess Cleanup",
              "Chart of Accounts Design",
              "Automated Receipt Storage",
              "Tech Stack Sync (Hubdoc/Bill)"
            ]}
          />
        </div>
      </section>

      {/* Bookkeeping Plans at Bottom */}
      <section className="py-40 bg-[#ab7e31]/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl logo-font font-black text-white mb-6 tracking-tighter uppercase">Bookkeeping <span className="text-[#ab7e31] italic font-light">Plans</span></h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BOOKKEEPING_PLANS.map((plan, i) => (
              <div 
                key={i} 
                className={`flex flex-col relative p-10 rounded-[3rem] border transition-all duration-500 h-full ${
                  plan.recommended 
                    ? 'bg-[#ab7e31]/10 border-[#ab7e31]/50 shadow-2xl scale-105 z-10' 
                    : 'bg-black border-white/5 hover:border-white/10'
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-black logo-font text-white mb-3">{plan.name}</h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl logo-font font-black text-white tracking-tighter">{plan.price}</span>
                    <span className="text-gray-500 text-[10px] font-bold uppercase">/mo</span>
                  </div>
                  <p className="text-gray-500 text-[10px] font-bold mt-4 uppercase tracking-[0.2em] leading-relaxed">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start text-gray-400 text-sm leading-relaxed font-light">
                      <i className="fas fa-check text-[10px] text-[#ab7e31] mt-1 mr-3"></i>
                      {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={onBookNow}
                  className={`w-full py-5 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase transition-all ${
                    plan.recommended ? 'bg-[#ab7e31] text-black shadow-lg shadow-[#ab7e31]/20' : 'bg-white/5 text-white border border-white/10'
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-4 text-center">
        <div className="max-w-4xl mx-auto reveal glass p-20 rounded-[4rem] border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#ab7e31]/5 pointer-events-none"></div>
          <h2 className="text-4xl md:text-6xl font-black logo-font text-white mb-8 leading-none tracking-tighter uppercase">Your Ledger <span className="text-[#ab7e31] italic font-light">Perfected.</span></h2>
          <p className="text-gray-400 text-lg mb-12 font-light">Precision isn't optional. It's the standard. Let's stabilize your foundation.</p>
          <button onClick={onBookNow} className="px-12 py-5 bg-[#ab7e31] text-black font-black rounded-2xl text-[10px] tracking-[0.3em] uppercase hover:bg-white transition-all shadow-2xl">Select Plan</button>
        </div>
      </section>
    </div>
  );
};

export default Bookkeeping;
