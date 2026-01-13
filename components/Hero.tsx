
import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [view, setView] = useState<'text' | 'image'>('text');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const interval = setInterval(() => {
      setView((prev) => (prev === 'text' ? 'image' : 'text'));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-32 px-6 text-center">
      
      {/* Animated Monogram / Image Pill - Refined Design */}
      <div className="mb-20 animate-fade" style={{ animationDelay: '100ms' }}>
        <div className="w-[110px] h-[65px] rounded-[32px] bg-black shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden group ring-1 ring-black/20">
          <div 
            className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: view === 'text' ? 'translateY(0)' : 'translateY(-100%)' }}
          >
            {/* AF Text View */}
            <div className="w-full h-full flex items-center justify-center text-white font-serif text-[24px] tracking-widest font-medium">
               AF
            </div>
            {/* Image View - Accurate B&W Portrait Representation */}
            <div className="w-full h-full flex items-center justify-center bg-stone-900 relative">
               <img 
                 src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=640&auto=format&fit=crop" 
                 alt="Arnon Friedman" 
                 className="w-full h-full object-cover grayscale brightness-90 contrast-110"
               />
               {/* Film Grain Overlay specifically for the photo */}
               <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
            </div>
          </div>
          
          {/* Subtle reflection on the glass surface of the pill */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <div className="max-w-[1250px] z-10">
        <h1 className={`font-serif text-[8vw] md:text-7xl lg:text-[100px] leading-[0.9] tracking-tight mb-16 title-pop transition-all duration-1000 ${hasMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-black">Let's </span>
          <span className="text-black/30 italic">simplify</span>
          <span className="text-black"> the </span>
          <span className="text-black/30 italic">complex</span>
          <span className="text-black"> together.</span>
        </h1>
        
        <div className={`max-w-2xl mx-auto mb-20 transition-all duration-1000 delay-500 ${hasMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-[#666] text-lg md:text-xl font-normal leading-relaxed text-balance font-sans">
            From complex processes to the smallest popup — I love making users' lives easier.
          </p>
        </div>

        <div className={`flex justify-center transition-all duration-1000 delay-700 ${hasMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
           <button 
             onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
             className="relative bg-white/40 backdrop-blur-3xl text-black px-12 py-5 rounded-full font-sans font-bold text-[11px] uppercase tracking-[0.4em] border border-white/80 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:bg-white/60 hover:scale-[1.03] hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.12)] transition-all flex items-center gap-6 group active:scale-95 overflow-hidden"
           >
             <span className="relative z-10">View work & portfolio</span>
             <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-1.5 transition-transform border border-black/10 shadow-lg relative z-10">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
             </div>
             
             {/* Refined glass highlight */}
             <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50 pointer-events-none"></div>
             <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
           </button>
        </div>
      </div>
    </section>
  );
};
