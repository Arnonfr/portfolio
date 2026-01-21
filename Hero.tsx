
import React, { useState, useEffect, useRef, useMemo } from 'react';

export const Hero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [offset1, setOffset1] = useState(0); 
  const [offset2, setOffset2] = useState(0); 
  const [animationStarted, setAnimationStarted] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const phraseWidth = useRef<number>(0);

  const corePhrase = "let’s simplify some complex things";
  const phraseChars = useMemo(() => corePhrase.toUpperCase().split(''), []);
  const separator = "  ●  ";
  const fullUnit = corePhrase + separator;
  
  const loopFontSize = "120px";

  // 1. Loop Timing (Impact Font)
  useEffect(() => {
    if (textRef.current) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.style.fontFamily = "Impact, sans-serif";
      text.style.fontSize = loopFontSize;
      text.style.textTransform = "uppercase";
      text.textContent = fullUnit;
      svg.appendChild(text);
      document.body.appendChild(svg);
      phraseWidth.current = text.getComputedTextLength();
      document.body.removeChild(svg);
    }
  }, []);

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      const speed = 2.0;
      setOffset1((prev) => (phraseWidth.current > 0 && Math.abs(prev - speed) >= phraseWidth.current) ? 0 : prev - speed);
      setOffset2((prev) => (phraseWidth.current > 0 && Math.abs(prev + speed * 1.5) >= phraseWidth.current) ? 0 : prev + (speed * 1.5));
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // 2. Scroll Physics
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger Automatic State change
  useEffect(() => {
    if (scrollProgress > 0.88 && !animationStarted) {
      setAnimationStarted(true);
    } else if (scrollProgress < 0.7 && animationStarted) {
      setAnimationStarted(false);
    }
  }, [scrollProgress, animationStarted]);

  // 3. Ultra-Smooth Loopy Path Definitions
  const startX = -1000;
  const endX = 2200;
  const midX = 600;
  const centerY = 500;

  const complex1 = {
    m: [startX, centerY + 200],
    c1: [startX + 400, centerY - 400],
    c2: [midX - 400, centerY - 600],
    to1: [midX - 200, centerY - 200],
    c3: [midX, centerY + 200],
    c4: [midX + 400, centerY + 600],
    to2: [midX + 600, centerY],
    c5: [midX + 800, centerY - 600],
    c6: [endX - 800, centerY - 400],
    to3: [endX - 400, centerY + 200],
    c7: [endX - 200, centerY + 400],
    c8: [endX, centerY + 200],
    to4: [endX, centerY + 100]
  };

  const complex2 = {
    m: [startX, centerY - 200],
    c1: [startX + 400, centerY + 400],
    c2: [midX - 400, centerY + 600],
    to1: [midX - 200, centerY + 200],
    c3: [midX, centerY - 200],
    c4: [midX + 400, centerY - 600],
    to2: [midX + 600, centerY],
    c5: [midX + 800, centerY + 600],
    c6: [endX - 800, centerY + 400],
    to3: [endX - 400, centerY - 200],
    c7: [endX - 200, centerY - 400],
    c8: [endX, centerY - 200],
    to4: [endX, centerY - 100]
  };

  const simple = {
    m: [startX, centerY],
    c1: [startX + 300, centerY],
    c2: [midX - 600, centerY],
    to1: [midX - 300, centerY],
    c3: [midX - 150, centerY],
    c4: [midX + 150, centerY],
    to2: [midX, centerY],
    c5: [midX + 300, centerY],
    c6: [midX + 600, centerY],
    to3: [midX + 900, centerY],
    c7: [endX - 300, centerY],
    c8: [endX - 150, centerY],
    to4: [endX, centerY]
  };

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const generatePath = (complex: any, t: number) => {
    const untangleProgress = Math.min(t / 0.85, 1);
    const eased = untangleProgress < 0.5 ? 4 * untangleProgress ** 3 : 1 - Math.pow(-2 * untangleProgress + 2, 3) / 2;
    
    const getPoint = (key: string, idx: number) => lerp(complex[key][idx], simple[key][idx], eased);

    const m = [getPoint('m', 0), getPoint('m', 1)];
    const c1 = [getPoint('c1', 0), getPoint('c1', 1)];
    const c2 = [getPoint('c2', 0), getPoint('c2', 1)];
    const to1 = [getPoint('to1', 0), getPoint('to1', 1)];
    const c3 = [getPoint('c3', 0), getPoint('c3', 1)];
    const c4 = [getPoint('c4', 0), getPoint('c4', 1)];
    const to2 = [getPoint('to2', 0), getPoint('to2', 1)];
    const c5 = [getPoint('c5', 0), getPoint('c5', 1)];
    const c6 = [getPoint('c6', 0), getPoint('c6', 1)];
    const to3 = [getPoint('to3', 0), getPoint('to3', 1)];
    const c7 = [getPoint('c7', 0), getPoint('c7', 1)];
    const c8 = [getPoint('c8', 0), getPoint('c8', 1)];
    const to4 = [getPoint('to4', 0), getPoint('to4', 1)];

    return `M ${m[0]},${m[1]} C ${c1[0]},${c1[1]} ${c2[0]},${c2[1]} ${to1[0]},${to1[1]} C ${c3[0]},${c3[1]} ${c4[0]},${c4[1]} ${to2[0]},${to2[1]} C ${c5[0]},${c5[1]} ${c6[0]},${c6[1]} ${to3[0]},${to3[1]} C ${c7[0]},${c7[1]} ${c8[0]},${c8[1]} ${to4[0]},${to4[1]}`;
  };

  const resolutionThreshold = 0.88;
  const isFinalState = scrollProgress > resolutionThreshold;
  const untanglePath = generatePath(complex1, scrollProgress);
  const untanglePathPurple = generatePath(complex2, scrollProgress);
  const infiniteText = fullUnit.repeat(20); 

  // Transition Opacities
  const complexOpacity = Math.max(0, 1 - (scrollProgress - 0.7) * 5); // Fades out between 0.7 and 0.9
  const resolvedOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.8) * 10)); // Fades in between 0.8 and 0.9

  // Final State Position Constants
  const finalXStart = 200;
  const finalXEnd = 1000;
  const finalY = 500;

  return (
    <section ref={sectionRef} className="relative w-full h-[1000vh] bg-[#F9E8B3]">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        <svg 
          viewBox="0 0 1200 1000" 
          className="w-full h-full relative z-10"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <path id="pathRed" d={untanglePath} />
            <path id="pathPurple" d={untanglePathPurple} />
          </defs>
          
          {/* Phase 1: Looping Complexity (Thick) */}
          <g style={{ opacity: complexOpacity }}>
            <text 
              ref={textRef}
              className="select-none pointer-events-none"
              style={{ 
                fill: '#D62B00',
                fontFamily: 'Impact, sans-serif',
                fontSize: loopFontSize,
                fontWeight: 900,
                textTransform: 'uppercase',
                textAnchor: 'start',
              }}
            >
              <textPath href="#pathRed" startOffset={offset1}>{infiniteText}</textPath>
            </text>

            <text 
              className="select-none pointer-events-none"
              style={{ 
                fill: '#9D22A3',
                fontFamily: 'Impact, sans-serif',
                fontSize: loopFontSize,
                fontWeight: 900,
                textTransform: 'uppercase',
                textAnchor: 'start',
                mixBlendMode: 'difference',
              }}
            >
              <textPath href="#pathPurple" startOffset={offset2}>{infiniteText}</textPath>
            </text>
          </g>

          {/* Phase 2: Resolved Phrase (Thin) */}
          <g style={{ opacity: resolvedOpacity }} className="transition-opacity duration-700">
            {phraseChars.map((char, i) => {
              const charX = finalXStart + (i / (phraseChars.length - 1)) * (finalXEnd - finalXStart);
              
              return (
                <text
                  key={i}
                  x={charX}
                  y={finalY - 20}
                  className="select-none pointer-events-none transition-all duration-1000"
                  style={{
                    fill: '#D62B00',
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '32px',
                    fontWeight: 200, // Thin style
                    textAnchor: 'middle',
                    letterSpacing: '0.18em',
                  }}
                >
                  {char}
                </text>
              );
            })}
          </g>
        </svg>

        {/* Scroll Hint */}
        <div 
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 transition-all duration-700 pointer-events-none z-20"
          style={{ 
            opacity: 1 - scrollProgress * 6,
            transform: `translate(-50%, ${scrollProgress * 150}px)`
          }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#D62B00]/40 font-sans">Untangle the complexity</span>
          <div className="w-px h-24 bg-gradient-to-b from-[#D62B00]/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
