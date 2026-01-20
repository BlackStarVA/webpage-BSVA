import React, { useState, useEffect, useRef } from 'react';

// Fix: Corrected the broken import and started DynamicLogo definition properly.
export const DynamicLogo = () => (
  <div className="flex items-center space-x-4 group cursor-pointer relative">
    <div className="relative logo-star-pulse shrink-0">
      <svg width="46" height="46" viewBox="0 0 100 100">
        <defs>
          <filter id="goldGlow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <polygon 
          className="transition-all duration-700 group-hover:rotate-[72deg] origin-center"
          points="50,5 63,40 97,40 70,60 81,95 50,75 19,95 30,60 3,40 37,40" 
          fill="#000000" 
          stroke="#ab7e31" 
          strokeWidth="3"
          filter="url(#goldGlow)"
        />
        <polygon 
          points="50,20 56,40 75,40 60,52 66,73 50,60 34,73 40,52 25,40 44,40" 
          fill="rgba(171,126,49,0.15)"
        />
      </svg>
      <div className="absolute inset-0 border-2 border-[#ab7e31]/40 rounded-full animate-ping opacity-20 group-hover:opacity-40 scale-110"></div>
    </div>
    
    <div className="flex flex-col logo-shimmer-container">
      <div className="flex flex-col leading-none">
        <span className="text-[20px] font-black logo-font text-white tracking-tighter group-hover:text-[#ab7e31] transition-colors uppercase">
          BLACK STAR <span className="text-[#ab7e31]">VA</span>
        </span>
        <div className="flex items-center mt-1">
          <span className="text-[10px] font-black logo-font text-gray-400 group-hover:text-white transition-colors uppercase tracking-tight">
            Virtual Assistant <span className="text-[#ab7e31] mx-1">&</span> Bookkeeping
          </span>
        </div>
      </div>
      <div className="logo-shimmer-overlay"></div>
    </div>
  </div>
);

import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const secondaryLinks = [
    { name: 'About', path: '/about', icon: 'fa-info-circle' },
    { name: 'Client Portal', path: '/portal', icon: 'fa-user-shield' },
    { name: 'FAQ', path: '/faq', icon: 'fa-question-circle' },
  ];

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 h-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <DynamicLogo />
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-10">
              <Link
                to="/"
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all ${
                  location.pathname === '/' ? 'text-[#ab7e31]' : 'text-gray-400 hover:text-white'
                }`}
              >
                Home
              </Link>

              <Link
                to="/services"
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all ${
                  location.pathname === '/services' || location.pathname === '/bookkeeping' ? 'text-[#ab7e31]' : 'text-gray-400 hover:text-white'
                }`}
              >
                Services
              </Link>

              <Link
                to="/pricing"
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all ${
                  location.pathname === '/pricing' ? 'text-[#ab7e31]' : 'text-gray-400 hover:text-white'
                }`}
              >
                Pricing
              </Link>

              <button
                onClick={() => navigate('/intake')}
                className="bg-[#ab7e31] hover:bg-white text-black px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-[0_0_25px_rgba(171,126,49,0.5)] border border-[#ab7e31]/20 hover:border-white"
              >
                BOOK DISCOVERY CALL
              </button>

              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onMouseEnter={() => setDropdownOpen(true)}
                  className={`flex items-center p-2 rounded-lg transition-all ${
                    dropdownOpen ? 'text-[#ab7e31] bg-white/5' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex flex-col space-y-1 w-5">
                    <div className={`h-0.5 bg-current transition-all duration-300 w-5`}></div>
                    <div className={`h-0.5 bg-current transition-all duration-300 w-5`}></div>
                    <div className={`h-0.5 bg-current transition-all duration-300 w-5`}></div>
                  </div>
                </button>

                <div 
                  className={`absolute top-full right-0 mt-4 w-56 glass border border-white/10 rounded-2xl p-2 shadow-2xl transition-all duration-300 origin-top-right z-[60] ${
                    dropdownOpen 
                      ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {secondaryLinks.map((link, idx) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-gray-400 hover:text-white group"
                    >
                      <i className={`fas ${link.icon} text-xs text-gray-600 group-hover:text-[#ab7e31]`}></i>
                      <span className="text-[10px] font-black uppercase tracking-widest">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass border-t border-white/10 animate-fade-in-down">
          <div className="px-4 py-8 space-y-4">
            <Link to="/" className="block px-3 py-3 rounded-xl text-lg font-black text-gray-300 hover:text-white uppercase tracking-widest transition-all">Home</Link>
            <Link to="/services" className="block px-3 py-3 rounded-xl text-lg font-black text-gray-300 hover:text-white uppercase tracking-widest transition-all">Services</Link>
            <Link to="/pricing" className="block px-3 py-3 rounded-xl text-lg font-black text-gray-300 hover:text-white uppercase tracking-widest transition-all">Pricing</Link>
            
            <div className="px-3 py-4 space-y-2 border-t border-white/10 mt-4">
              {secondaryLinks.map(link => (
                <Link key={link.path} to={link.path} className="block px-3 py-3 text-sm font-bold text-gray-500 hover:text-white uppercase tracking-widest">{link.name}</Link>
              ))}
            </div>

            <div className="pt-6">
              <button onClick={() => navigate('/intake')} className="w-full py-4 bg-[#ab7e31] text-black font-black rounded-xl text-xs uppercase tracking-widest shadow-2xl">
                BOOK DISCOVERY CALL
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;