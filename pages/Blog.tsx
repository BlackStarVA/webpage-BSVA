import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', ...new Set(BLOG_POSTS.map(p => p.category))];

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <div className="py-24 animate-fade-in bg-black min-h-screen relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#ab7e31]/30 to-transparent"></div>
      <div className="absolute top-1/4 -right-20 w-[40rem] h-[40rem] bg-[#ab7e31]/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#ab7e31]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Digital Business Card Section - Precision Design Matching User's Screenshot */}
        <div className="reveal mb-40 flex justify-center">
          <div className="w-full max-w-4xl bg-white rounded-[1.5rem] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.6)] flex flex-col md:flex-row min-h-[450px]">
            {/* Left Column: Branding & Contact */}
            <div className="md:w-3/5 p-12 md:p-16 flex flex-col justify-center bg-white">
              <h2 className="font-serif italic text-6xl md:text-8xl text-black leading-none mb-6">
                Hasanna Garcia
              </h2>
              <p className="text-gray-900 font-bold text-lg md:text-xl mb-12 uppercase tracking-tight">
                Founder of Black Star VA | Virtual Assistant Guru
              </p>
              
              <div className="space-y-6">
                <a 
                  href="https://www.blackstarva.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-5 transition-transform group-hover:scale-110">
                    <i className="fas fa-globe text-white text-xl"></i>
                  </div>
                  <span className="text-black text-xl md:text-2xl font-light border-b border-black pb-1 hover:text-[#ab7e31] hover:border-[#ab7e31] transition-all">
                    www.blackstarva.com
                  </span>
                </a>
                
                <a 
                  href="mailto:hasanna@blackstarva.com" 
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-5 transition-transform group-hover:scale-110">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <span className="text-black text-xl md:text-2xl font-light border-b border-black pb-1 hover:text-[#ab7e31] hover:border-[#ab7e31] transition-all">
                    hasanna@blackstarva.com
                  </span>
                </a>
              </div>
            </div>
            
            {/* Right Column: Headshot (Corrected to Professional Photo of Black Woman with Braids/Glasses) */}
            <div className="md:w-2/5 relative h-[450px] md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1627161683077-e34782c24d81?auto=format&fit=crop&q=80&w=800" 
                alt="Hasanna Garcia Professional Headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-24 relative pt-10">
           <div className="absolute inset-0 flex flex-col items-center justify-center -top-10 pointer-events-none select-none overflow-hidden">
            <span className="text-6xl md:text-[11rem] font-black text-white/5 uppercase tracking-tighter leading-none whitespace-nowrap">
              STRATEGIC INSIGHTS
            </span>
          </div>
          
          <span className="inline-block px-4 py-1.5 bg-[#ab7e31]/10 border border-[#ab7e31]/20 rounded-full text-[#ab7e31] font-bold tracking-[0.4em] uppercase text-[9px] mb-6 relative z-10">
            THE INTELLIGENCE FEED
          </span>
          <h1 className="text-5xl md:text-8xl logo-font font-black text-white relative z-10 uppercase tracking-tighter leading-none mt-4">
            Insights for <br /><span className="text-[#ab7e31] italic font-light lowercase">High-Velocity Founders.</span>
          </h1>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20 reveal">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                activeCategory === cat 
                  ? 'bg-[#ab7e31] text-black border-[#ab7e31] shadow-lg shadow-[#ab7e31]/20' 
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-20">
          {filteredPosts.map((post, idx) => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id}
              className="reveal group block relative glass rounded-[3.5rem] border-white/5 hover:border-[#ab7e31]/30 transition-all duration-700 overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-2 bg-[#ab7e31] text-black text-[9px] font-black uppercase tracking-widest rounded-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-10 md:p-14">
                <div className="flex items-center space-x-4 mb-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-[#ab7e31] rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black logo-font text-white mb-6 leading-tight group-hover:text-[#ab7e31] transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 font-light leading-relaxed mb-10 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-[#ab7e31] font-black text-[10px] uppercase tracking-[0.3em] group/link">
                  Read Full Intelligence Brief 
                  <i className="fas fa-arrow-right ml-4 group-hover/link:translate-x-2 transition-transform"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter / CTA Section */}
        <div className="max-w-4xl mx-auto reveal glass p-12 md:p-24 rounded-[5rem] text-center border-white/5 relative overflow-hidden mt-40">
           <div className="absolute inset-0 bg-gradient-to-br from-[#ab7e31]/10 to-transparent pointer-events-none"></div>
           <h3 className="text-4xl md:text-6xl font-black logo-font text-white mb-6 uppercase tracking-tighter">SUBSCRIBE TO THE <br /><span className="text-[#ab7e31] italic font-light lowercase">Command Brief.</span></h3>
           <p className="text-gray-400 mb-12 font-light max-w-lg mx-auto leading-relaxed">
             Get proprietary strategies for executive leverage and small business operations delivered directly to your command node.
           </p>
           
           <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
              <input 
                type="email" 
                placeholder="Secure Email Address" 
                className="flex-grow bg-black/60 border border-white/10 rounded-2xl px-6 py-5 text-sm text-white focus:border-[#ab7e31] outline-none transition-all placeholder:text-gray-700"
              />
              <button className="px-10 py-5 bg-[#ab7e31] text-black font-black rounded-2xl text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-xl">
                JOIN NOW
              </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;