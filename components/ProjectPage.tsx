
import React, { useEffect } from 'react';
import { Project } from '../types';
import { UiTransformation } from './UiTransformation';

interface ProjectPageProps {
  project: Project;
  onBack: () => void;
}

interface FeatureSpotlight {
  id: string;
  label: string;
  desc: string;
  top: string;
  left: string;
  zoom: number;
  scrollRight?: boolean;
}

const FEATURES: FeatureSpotlight[] = [
  { 
    id: 'duplication', 
    label: 'Row Duplication', 
    desc: 'Rapid multi-payee creation. Clone row details instantly while clearing only the specific payment amount for safe re-entry. We identified this as the primary speed bottleneck for power users.', 
    top: '63%', 
    left: '94%',
    zoom: 2.8,
    scrollRight: true
  },
  { 
    id: 'defaults', 
    label: 'Smart Defaults', 
    desc: 'The system now auto-detects settlement currencies. When a claim is in USD, the payout defaults to USD, eliminating selection errors and repetitive typing.', 
    top: '63%', 
    left: '73%',
    zoom: 2.4
  },
  { 
    id: 'unified', 
    label: 'Unified Summary', 
    desc: 'A real-time financial roll-up. Brokers can toggle between currency tabs without leaving the payment context, ensuring they never lose visibility of the total claim impact.', 
    top: '80%', 
    left: '50%',
    zoom: 1.6
  }
];

export const ProjectPage: React.FC<ProjectPageProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isClaimMovement = project.title.toLowerCase().includes('claim');

  if (isClaimMovement) {
    return (
      <div className="w-full bg-stone-50 min-h-screen font-sans animate-fadeIn">
        
        {/* HERO: FULL MODAL VIEW */}
        <header className="relative w-full pt-48 pb-32 flex flex-col items-center bg-white border-b border-stone-100">
          <div className="max-w-6xl mx-auto px-6 z-10 text-center mb-24">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-blue-500 mb-8">Novidea Case Study</h4>
            <h1 className="font-serif text-[10vw] md:text-8xl leading-none text-black tracking-tight mb-10">
              Claim <span className="italic text-stone-300">Movement</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-stone-500 font-light leading-relaxed">
              Transforming complex multi-currency settlements into a streamlined, error-resistant interface.
            </p>
          </div>

          <div className="w-full max-w-[1200px] px-6">
            <div className="rounded-[24px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-stone-200 bg-white">
              <UiTransformation />
            </div>
          </div>
        </header>

        <main className="w-full bg-white">
          
          {/* LEGACY CONTEXT SECTION */}
          <section className="py-32 bg-stone-50 border-b border-stone-100 overflow-hidden">
             <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                   <div className="lg:col-span-4 order-2 lg:order-1">
                      <span className="text-stone-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">The Starting Point</span>
                      <h3 className="text-4xl font-serif mb-6 text-black leading-tight">Fragmented <br/>Legacy Workflows</h3>
                      <p className="text-stone-500 text-lg font-light leading-relaxed mb-8">
                         The previous interface required brokers to navigate multiple disconnected tabs to complete a single transaction. 
                         The cognitive load was high, with critical financial data scattered across disparate tables, leading to frequent manual errors.
                      </p>
                      <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-red-400/80">
                         <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                         High Cognitive Load
                      </div>
                   </div>
                   <div className="lg:col-span-8 order-1 lg:order-2">
                      <div className="relative rounded-xl overflow-hidden shadow-2xl border border-stone-200 group transform rotate-1 hover:rotate-0 transition-transform duration-700">
                         <img 
                           src="https://i.postimg.cc/6Q6S9bpm/2.jpg" 
                           alt="Legacy Interface Design" 
                           className="w-full h-auto object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                         />
                         <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                         
                         {/* Legacy Label */}
                         <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white text-[9px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-lg">
                            Legacy Interface
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* STAGGERED FEATURE SHOWCASE SECTION */}
          <section className="py-56 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
               
               <div className="text-center mb-40">
                  <h3 className="text-4xl md:text-6xl font-serif mb-6">Core Interface Principles</h3>
                  <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
               </div>

               <div className="space-y-64">
                  {FEATURES.map((feature, idx) => (
                    <div 
                      key={feature.id}
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    >
                       {/* Spotlight Visual (Circular) */}
                       <div className={`relative flex justify-center ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                          <div className="relative w-full max-w-[450px] aspect-square rounded-full overflow-hidden border-[12px] border-stone-50 shadow-[0_30px_90px_rgba(0,0,0,0.15)] ring-1 ring-stone-200">
                             <div 
                               className="absolute inset-0 transition-transform duration-1000"
                               style={{
                                 transform: `scale(${feature.zoom}) translate(${50 - parseFloat(feature.left)}%, ${50 - parseFloat(feature.top)}%)`,
                                 transformOrigin: 'center center'
                               }}
                             >
                                <div className="w-[1200px]">
                                   <UiTransformation forceScrollRight={feature.scrollRight} />
                                </div>
                             </div>
                             {/* Subtle inner shadow for depth */}
                             <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.1)] pointer-events-none"></div>
                          </div>
                          
                          {/* Background abstract element */}
                          <div className={`absolute -z-10 w-[120%] h-[120%] bg-blue-50 rounded-full blur-[80px] opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}></div>
                       </div>

                       {/* Feature Description */}
                       <div className={`max-w-md ${idx % 2 === 1 ? 'lg:order-1 lg:text-right lg:ml-auto' : ''}`}>
                          <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Principle 0{idx + 1}</span>
                          <h4 className="text-3xl md:text-5xl font-serif mb-8 text-black leading-tight">{feature.label}</h4>
                          <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed">
                             {feature.desc}
                          </p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </section>

          {/* IMPACT SECTION */}
          <section className="max-w-7xl mx-auto px-6 py-48 border-t border-stone-100">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                <div>
                  <h2 className="text-stone-300 text-[10px] font-bold uppercase tracking-[0.4em] mb-8">Design Impact</h2>
                  <h3 className="text-5xl md:text-7xl font-serif leading-none text-black mb-12">
                    Abstracting <span className="italic text-stone-300">Complexity.</span>
                  </h3>
                  <div className="flex gap-12 mt-16">
                    <div className="flex flex-col gap-1">
                      <span className="text-6xl font-serif text-black">70%</span>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Faster Workflow</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-6xl font-serif text-black">0%</span>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-stone-400">Currency Errors</span>
                    </div>
                  </div>
                </div>
                <div className="bg-stone-50 p-12 rounded-[48px] border border-stone-100 space-y-8">
                   <p className="text-xl text-stone-600 font-light leading-relaxed">
                     The core of the redesign was removing technical barriers that forced users to think like database administrators. 
                   </p>
                   <p className="text-stone-500 leading-relaxed italic border-l-2 border-blue-500 pl-8">
                     "By unifying the transaction steps and automating non-essential metadata, we returned the focus back to the business of insurance."
                   </p>
                </div>
             </div>
          </section>

          <footer className="py-48 text-center bg-stone-900 text-white rounded-[100px] mx-6 mb-20 shadow-2xl">
             <div className="max-w-4xl mx-auto px-6">
                <p className="font-serif text-5xl md:text-7xl mb-16 opacity-90">Ready to simplify <br/>the complex?</p>
                <button 
                  onClick={onBack}
                  className="px-16 py-6 bg-white text-black rounded-full font-bold uppercase text-[11px] tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                  Back to Portfolio
                </button>
             </div>
          </footer>
        </main>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen font-sans animate-fadeIn">
      <header className="pt-32 pb-16 text-center border-b border-stone-100">
        <h1 className="text-6xl font-serif mb-4">{project.title}</h1>
        <p className="text-stone-400">{project.description}</p>
      </header>
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <button onClick={onBack} className="px-10 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all">Close Project</button>
      </div>
    </div>
  );
};
