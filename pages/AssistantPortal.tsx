import React, { useState, useEffect, useMemo } from 'react';

interface Task {
  id: number;
  client: string;
  task: string;
  status: 'Scheduled' | 'In Progress' | 'Review' | 'Complete';
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  timerActive: boolean;
  timeSpent: number; // in seconds
}

interface EarningLog {
  id: number;
  period: string;
  hours: number;
  amount: number;
  status: 'Pending' | 'Paid';
}

const AssistantPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  // Shared state simulation (Mocking data that would connect to the same source as ClientPortal)
  const [tasks, setTasks] = useState<Task[]>([
    { 
      id: 1, 
      client: "Alexandra S. (TechnoNova)",
      task: "Quarterly Board Deck Preparation", 
      status: "In Progress", 
      priority: "High", 
      dueDate: "2024-09-15",
      timerActive: false,
      timeSpent: 12400 // ~3.4 hrs
    },
    { 
      id: 2, 
      client: "Alexandra S. (TechnoNova)",
      task: "Booking Tokyo Logistics", 
      status: "Review", 
      priority: "Medium", 
      dueDate: "2024-09-10",
      timerActive: false,
      timeSpent: 3600
    },
    { 
      id: 4, 
      client: "Marcus R. (GreenScale)",
      task: "Monthly Payroll Audit", 
      status: "Scheduled", 
      priority: "High", 
      dueDate: "2024-09-05",
      timerActive: false,
      timeSpent: 0
    },
  ]);

  const earnings: EarningLog[] = [
    { id: 1, period: "Aug 15 - Aug 31", hours: 42.5, amount: 1912.50, status: 'Pending' },
    { id: 2, period: "Aug 01 - Aug 14", hours: 38.0, amount: 1710.00, status: 'Paid' },
  ];

  // Timer Effect
  useEffect(() => {
    let interval: any;
    if (activeTaskId !== null) {
      interval = setInterval(() => {
        setCurrentTime(prev => prev + 1);
        setTasks(prev => prev.map(t => 
          t.id === activeTaskId ? { ...t, timeSpent: t.timeSpent + 1 } : t
        ));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeTaskId]);

  const toggleTimer = (id: number) => {
    if (activeTaskId === id) {
      setActiveTaskId(null);
      setTasks(prev => prev.map(t => t.id === id ? { ...t, status: 'In Progress' } : t));
    } else {
      setActiveTaskId(id);
      setTasks(prev => prev.map(t => t.id === id ? { ...t, status: 'In Progress' } : t));
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 bg-black">
        <div className="glass p-10 rounded-[2.5rem] w-full max-w-md border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#ab7e31]"></div>
          <div className="text-center mb-8">
             <span className="text-2xl font-black logo-font text-white tracking-tighter uppercase">
                BLACK<span className="text-[#ab7e31]">STAR</span> <span className="text-xs italic lowercase text-gray-500 font-light">Specialist</span>
              </span>
              <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest font-bold">Specialist Portal Access</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Internal ID</label>
              <input 
                type="text" 
                defaultValue="specialist_009"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ab7e31]/50"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Access Key</label>
              <input 
                type="password" 
                defaultValue="••••••••••••"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ab7e31]/50"
              />
            </div>
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="w-full bg-white text-black font-black uppercase tracking-widest py-4 rounded-xl hover:bg-[#ab7e31] transition-all shadow-lg"
            >
              Initialize Session
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 animate-fade-in pb-32 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black logo-font text-white flex items-center">
              Specialist Dashboard
              <span className="ml-4 px-3 py-1 bg-green-500/10 text-green-500 text-[10px] uppercase tracking-widest rounded-full border border-green-500/20">Operational</span>
            </h1>
            <p className="text-gray-500 font-light mt-1">Status: Active • Texas (CST) Command Center</p>
          </div>
          <div className="flex items-center space-x-4">
            {activeTaskId !== null && (
               <div className="glass px-6 py-2.5 rounded-xl border border-[#ab7e31]/30 flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#ab7e31] rounded-full animate-ping"></div>
                  <span className="text-xs font-black text-white font-mono tracking-widest">
                    {formatTime(tasks.find(t => t.id === activeTaskId)?.timeSpent || 0)}
                  </span>
               </div>
            )}
            <button onClick={() => setIsLoggedIn(false)} className="bg-white/5 text-gray-400 border border-white/10 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:text-white hover:bg-white/10">Terminate Session</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Task Feed */}
          <div className="lg:col-span-8 space-y-8">
            <div className="glass p-8 rounded-3xl border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black logo-font text-white flex items-center uppercase tracking-widest">
                  <i className="fas fa-layer-group text-[#ab7e31] mr-3"></i> Mission Control
                </h3>
                <div className="flex space-x-2">
                   <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-3 py-1 bg-white/5 rounded-lg">Active Clients: 3</span>
                </div>
              </div>

              <div className="space-y-4">
                {tasks.map((t) => (
                  <div 
                    key={t.id} 
                    className={`p-6 rounded-2xl border transition-all duration-300 ${
                      activeTaskId === t.id 
                        ? 'bg-[#ab7e31]/5 border-[#ab7e31]/50 shadow-[0_0_30px_rgba(171,126,49,0.1)]' 
                        : 'bg-white/5 border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div className="flex-grow">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-[9px] font-black text-[#ab7e31] uppercase tracking-[0.2em]">{t.client}</span>
                          <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                            t.priority === 'High' ? 'bg-red-500/10 text-red-500' : 'bg-gray-500/10 text-gray-500'
                          }`}>
                            {t.priority} Priority
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-1">{t.task}</h4>
                        <div className="flex items-center space-x-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                          <span><i className="far fa-calendar-alt mr-1.5 text-[#ab7e31]"></i> Due {t.dueDate}</span>
                          <span><i className="far fa-clock mr-1.5 text-[#ab7e31]"></i> Logged: {formatTime(t.timeSpent)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 shrink-0">
                        <button 
                          onClick={() => toggleTimer(t.id)}
                          className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                            activeTaskId === t.id 
                              ? 'bg-red-500 text-white shadow-lg' 
                              : 'bg-white text-black hover:bg-[#ab7e31]'
                          }`}
                          title={activeTaskId === t.id ? "Stop Timer" : "Start Timer"}
                        >
                          <i className={`fas ${activeTaskId === t.id ? 'fa-stop' : 'fa-play'} text-sm`}></i>
                        </button>
                        <div className="flex flex-col space-y-2">
                           <button className="px-4 py-2 glass text-[9px] font-black text-gray-400 uppercase tracking-widest rounded-lg hover:text-white border border-white/5">Update Status</button>
                           <button className="px-4 py-2 glass text-[9px] font-black text-gray-400 uppercase tracking-widest rounded-lg hover:text-white border border-white/5">Client Chat</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick Actions / Integration Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="glass p-8 rounded-3xl border border-white/5">
                  <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-6">Integration Health</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Slack Sync', status: 'Optimal' },
                      { name: 'G-Suite Access', status: 'Authenticated' },
                      { name: 'QuickBooks Ledger', status: 'Live' }
                    ].map((n, i) => (
                      <div key={i} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                        <span className="text-gray-400">{n.name}</span>
                        <span className="text-green-500">{n.status}</span>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="glass p-8 rounded-3xl border border-white/5 flex flex-col justify-center items-center text-center">
                  <i className="fas fa-file-export text-2xl text-[#ab7e31] mb-4"></i>
                  <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-2">Daily Summary Report</h3>
                  <p className="text-[10px] text-gray-500 leading-relaxed max-w-[180px]">Automate your end-of-day briefing for client visibility.</p>
                  <button className="mt-6 px-6 py-2.5 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-[#ab7e31] transition-all">Generate Now</button>
               </div>
            </div>
          </div>

          {/* Sidebar: Earnings & Productivity */}
          <div className="lg:col-span-4 space-y-8">
             {/* Earnings Card */}
             <div className="glass p-8 rounded-3xl border border-[#ab7e31]/30 bg-[#ab7e31]/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <i className="fas fa-hand-holding-dollar text-7xl text-white"></i>
                </div>
                <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-6">Financial Summary</h3>
                <div className="space-y-6 mb-8">
                  <div>
                    <span className="text-gray-400 text-[9px] font-black uppercase tracking-widest">Current Period Earnings</span>
                    <div className="text-4xl font-black logo-font text-white mt-1">$1,912.50</div>
                  </div>
                  <div className="flex justify-between items-end border-t border-white/5 pt-6">
                    <div>
                      <span className="text-gray-500 text-[9px] font-black uppercase tracking-widest">Log Status</span>
                      <p className="text-xs text-[#ab7e31] font-bold uppercase tracking-widest mt-0.5">Awaiting Audit</p>
                    </div>
                    <div className="text-right">
                       <span className="text-gray-500 text-[9px] font-black uppercase tracking-widest">Total Hours</span>
                       <p className="text-xl text-white font-black logo-font">42.5h</p>
                    </div>
                  </div>
                </div>
                <button className="w-full py-4 bg-white text-black font-black rounded-xl text-[10px] uppercase tracking-widest hover:bg-[#ab7e31] transition-all">Request Payout</button>
             </div>

             {/* Earnings History */}
             <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-6">Pay History</h3>
                <div className="space-y-6">
                  {earnings.map(e => (
                    <div key={e.id} className="flex justify-between items-center group">
                      <div>
                        <p className="text-[10px] text-white font-bold uppercase tracking-widest">{e.period}</p>
                        <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">{e.hours} Hours Logged</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-white font-black">${e.amount.toFixed(2)}</p>
                        <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                          e.status === 'Paid' ? 'bg-green-500/10 text-green-500' : 'bg-[#ab7e31]/10 text-[#ab7e31]'
                        }`}>
                          {e.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
             </div>

             {/* Specialist Performance */}
             <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-6">Sync Stats</h3>
                <div className="space-y-6">
                   <div>
                      <div className="flex justify-between text-[9px] font-black uppercase tracking-widest mb-2">
                        <span className="text-gray-400">Response Speed</span>
                        <span className="text-white">Elite (8m avg)</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#ab7e31] w-[92%]"></div>
                      </div>
                   </div>
                   <div>
                      <div className="flex justify-between text-[9px] font-black uppercase tracking-widest mb-2">
                        <span className="text-gray-400">Client Satisfaction</span>
                        <span className="text-white">4.9 / 5.0</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#ab7e31] w-[98%]"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantPortal;