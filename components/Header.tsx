
import React, { useState, useEffect } from 'react';

export const Header: React.FC<{ isInternal?: boolean; onBack?: () => void }> = ({ isInternal, onBack }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`
      fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 transition-all duration-700
    `}>
      <nav className={`
        max-w-[1440px] mx-auto border rounded-2xl h-14 px-8 flex items-center justify-between transition-all duration-500
        ${isScrolled 
          ? 'bg-white/60 backdrop-blur-xl border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]' 
          : 'bg-white/40 backdrop-blur-md border-white/40 shadow-none'}
      `}>
        
        {/* Logo Section */}
        <div 
          onClick={() => isInternal ? onBack?.() : window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <span className="font-serif text-[20px] md:text-[22px] font-medium text-black group-hover:opacity-60 transition-opacity">
            {isInternal ? '← Back' : 'Arnon Friedman'}
          </span>
          {!isInternal && (
            <span className="text-[12px] font-sans font-medium text-black/20 tracking-wide mt-1">
              — Design Leader
            </span>
          )}
        </div>

        {/* Navigation Section */}
        <div className="flex items-center gap-6 md:gap-8">
          {['Projects', 'About', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => {
                const targetId = item.toLowerCase();
                if (isInternal) {
                  onBack?.();
                  setTimeout(() => {
                    const el = document.getElementById(targetId);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  const el = document.getElementById(targetId);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-[13px] font-sans font-medium text-black/50 hover:text-black transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};
