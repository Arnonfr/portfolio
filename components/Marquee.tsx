import React from 'react';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'slow';
  transparent?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  items, 
  direction = 'left',
  speed = 'slow',
  transparent = false
}) => {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  const durationClass = speed === 'fast' ? 'duration-[20s]' : 'duration-[40s]';

  // Duplicate items to ensure smooth loop
  const content = [...items, ...items, ...items, ...items];

  return (
    <div className={`w-full overflow-hidden py-6 ${transparent ? 'bg-transparent' : 'bg-white'} border-t border-gray-100`}>
      <div className="flex whitespace-nowrap">
        <div className={`flex shrink-0 ${animationClass} ${durationClass} items-center`}>
          {content.map((item, idx) => (
            <div 
              key={idx} 
              className={`mx-8 text-4xl md:text-6xl font-display font-bold uppercase ${transparent ? 'text-gray-200' : 'text-gray-900'}`}
            >
              {item}
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className={`flex shrink-0 ${animationClass} ${durationClass} items-center`}>
          {content.map((item, idx) => (
            <div 
              key={`dup-${idx}`} 
              className={`mx-8 text-4xl md:text-6xl font-display font-bold uppercase ${transparent ? 'text-gray-200' : 'text-gray-900'}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
