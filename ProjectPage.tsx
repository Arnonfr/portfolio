
import React, { useEffect } from 'react';
import { Project } from '../types';
import { UiTransformation } from './UiTransformation';

interface ProjectPageProps {
  project: Project;
  onBack: () => void;
}

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
          <div className="max-w-6xl mx-auto px-6 z-10 text-center mb-16">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-blue-500 mb-8">Novidea Case Study</h4>
            <h1 className="font-serif text-[10vw] md:text-8xl leading-none text-black tracking-tight mb-10">
              Claim <span className="italic text-stone-300">Movement</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-stone-500 font-light leading-relaxed">
              Transforming complex multi-currency settlements into a streamlined, error-resistant interface.
            </p>
          </div>

          {/* Project Meta */}
          <div className="max-w-4xl mx-auto px-6 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">Role</p>
                <p className="font-medium text-stone-700">Product Designer</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">Platform</p>
                <p className="font-medium text-stone-700">Salesforce B2B</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">Company</p>
                <p className="font-medium text-stone-700">Novidea</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">Year</p>
                <p className="font-medium text-stone-700">2024</p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[1200px] px-6">
            <div className="rounded-[24px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-stone-200 bg-white">
              <UiTransformation />
            </div>
          </div>
        </header>

        <main className="w-full bg-white">

          {/* CONTEXT & BACKGROUND */}
          <section className="py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-serif mb-16 text-black">Context & Background</h2>

              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-4">The Product</h3>
                  <p className="text-lg text-stone-600 font-light leading-relaxed">
                    A claim management system built on Salesforce, designed for insurance brokers who act as intermediaries between insurance companies and policyholders.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-4">The Users</h3>
                  <p className="text-lg text-stone-600 font-light leading-relaxed">
                    Insurance brokers managing complex, multi-currency payment workflows between insurance companies and multiple beneficiaries (policyholders, accountants, lawyers).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-4">The Business Challenge</h3>
                  <p className="text-lg text-stone-600 font-light leading-relaxed">
                    Brokers needed to efficiently process claim settlements where they receive payments in one currency from insurance companies and distribute them in different currencies to various parties. The existing system made this process cumbersome, error-prone, and time-consuming.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* THE PROBLEM */}
          <section className="py-32 bg-stone-50 border-y border-stone-100">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-serif mb-12 text-black">The Problem</h2>

              <div className="bg-white p-10 rounded-2xl border border-stone-200 mb-12">
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-stone-800 italic">
                  "Insurance brokers were unable to efficiently process multi-currency claim settlements due to a fragmented, error-prone interface that required navigating multiple disconnected screens and manual data entry for each currency combination."
                </p>
              </div>

              <div className="space-y-8 mb-12">
                <h3 className="text-xl font-bold text-stone-900">Why This Mattered</h3>
                <ul className="space-y-4 text-lg text-stone-600">
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0">✗</span>
                    <span><strong className="text-stone-900">High cognitive load:</strong> Users had to switch between multiple tabs and remember context across disconnected screens</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0">✗</span>
                    <span><strong className="text-stone-900">Fragmented workflow:</strong> Creating "statistics" (currency combinations) was a separate, mandatory step that added complexity</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0">✗</span>
                    <span><strong className="text-stone-900">Repetitive manual work:</strong> Each payment required creating two separate records (payment and collection)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 shrink-0">✗</span>
                    <span><strong className="text-stone-900">Frequent errors:</strong> Critical financial data scattered across different locations led to mistakes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                <h4 className="text-sm font-bold uppercase tracking-wider text-blue-900 mb-4">Real-World Example</h4>
                <p className="text-stone-700 mb-4 leading-relaxed">
                  If a broker received money from 3 insurance companies in 2 currencies, and needed to pay 3 parties (accountant, lawyer, client) in 3 different currencies, they had to:
                </p>
                <ol className="space-y-2 text-stone-700 mb-4 ml-5 list-decimal">
                  <li>Create 3 "statistics" (currency combinations)</li>
                  <li>Under each: Create 3 payments</li>
                  <li>Then create 3 matching collections</li>
                </ol>
                <p className="text-lg font-bold text-blue-900">Total: 9 manual operations for a single transaction</p>
              </div>
            </div>
          </section>

          {/* CONSTRAINTS */}
          <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-serif mb-12 text-black">Constraints</h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-4">Technical</h3>
                  <ul className="space-y-3 text-stone-600">
                    <li className="flex gap-2"><span>•</span><span>Limited to Salesforce environment - couldn't build from scratch</span></li>
                    <li className="flex gap-2"><span>•</span><span>Had to work within existing Salesforce components and Lightning Design System</span></li>
                    <li className="flex gap-2"><span>•</span><span>Backend logic required careful coordination with development team</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-4">Business</h3>
                  <ul className="space-y-3 text-stone-600">
                    <li className="flex gap-2"><span>•</span><span>Couldn't break existing workflows for current customers</span></li>
                    <li className="flex gap-2"><span>•</span><span>Had to maintain compliance with financial regulations</span></li>
                    <li className="flex gap-2"><span>•</span><span>Limited development resources</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* DISCOVERY & KEY INSIGHT */}
          <section className="py-32 bg-stone-50 border-y border-stone-100">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-serif mb-12 text-black">Discovery & Key Insight</h2>

              <div className="space-y-8 mb-16">
                <h3 className="text-lg font-bold text-stone-900">Understanding User Needs</h3>
                <p className="text-lg text-stone-600 font-light leading-relaxed">
                  I spent time analyzing the existing workflow and collaborated closely with the product manager and development team. The goal was clear: <strong className="text-stone-900">users needed to successfully complete the process by creating actual payment instructions</strong> (which happened in a different part of the system).
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl border-2 border-blue-200 mb-12">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-4">Key Insight</p>
                <h3 className="text-3xl md:text-4xl font-serif mb-6 text-black">Users Don't Need "Statistics" At All</h3>
                <p className="text-xl text-stone-700 leading-relaxed mb-4">
                  The "statistics" step—where users created currency combinations—was completely unnecessary. We could handle multi-currency scenarios directly within a single interface, without requiring a separate intermediate step.
                </p>
                <p className="text-lg font-bold text-blue-900">This realization fundamentally changed how we approached the solution.</p>
              </div>

              <p className="text-lg text-stone-600 font-light leading-relaxed">
                Working with the product manager and development team, we confirmed that we could eliminate the statistics layer from the user's perspective and handle currency combinations behind the scenes. This would dramatically simplify the workflow without losing any functionality.
              </p>
            </div>
          </section>

          {/* LEGACY INTERFACE */}
          <section className="py-32 bg-white overflow-hidden">
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
                      {/* PLACEHOLDER: Replace this image with your actual legacy interface screenshot */}
                      <div className="relative rounded-xl overflow-hidden shadow-2xl border border-stone-200 group transform rotate-1 hover:rotate-0 transition-transform duration-700">
                         <div className="w-full aspect-[16/10] bg-gradient-to-br from-stone-100 to-stone-200 flex flex-col items-center justify-center p-12 text-center">
                           <svg className="w-24 h-24 text-stone-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5"/>
                             <circle cx="8.5" cy="8.5" r="1.5"/>
                             <polyline points="21 15 16 10 5 21"/>
                           </svg>
                           <p className="text-stone-500 font-bold text-sm uppercase tracking-wider mb-2">PLACEHOLDER: Legacy Interface</p>
                           <p className="text-stone-400 text-xs max-w-sm">
                             Replace with screenshot of old "New Claim Movement" modal showing cluttered fields and multiple tabs
                           </p>
                           <p className="text-stone-300 text-xs mt-4 font-mono">
                             Filename suggestion: legacy-claim-movement-interface.png
                           </p>
                         </div>

                         {/* Legacy Label */}
                         <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white text-[9px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-lg">
                            Legacy Interface
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* DESIGN PROCESS */}
          <section className="py-32 bg-stone-50 border-y border-stone-100">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-serif mb-12 text-black">Design Process & Decisions</h2>

              <div className="bg-white p-10 rounded-2xl border border-stone-200 mb-16">
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-3">Guiding Principle</p>
                <p className="text-3xl md:text-4xl font-light leading-relaxed text-stone-800 italic mb-4">
                  "Everything in one place"
                </p>
                <p className="text-lg text-stone-600">
                  Users shouldn't have to leave the modal to complete their task.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl border border-stone-200">
                  <div className="text-3xl font-serif text-blue-500 mb-4">01</div>
                  <h4 className="text-xl font-bold text-stone-900 mb-3">Unified Modal</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Consolidated three separate screens into one modal containing all necessary information and actions.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-stone-200">
                  <div className="text-3xl font-serif text-blue-500 mb-4">02</div>
                  <h4 className="text-xl font-bold text-stone-900 mb-3">Eliminated Statistics Step</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Removed the intermediate "statistics" layer. Multi-currency handling now happens inline via simple dropdown selections.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-stone-200">
                  <div className="text-3xl font-serif text-blue-500 mb-4">03</div>
                  <h4 className="text-xl font-bold text-stone-900 mb-3">Automated Unnecessary Fields</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Movement name and status now generate automatically. Default currencies and recipients auto-populate when there's only one option.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-stone-200">
                  <div className="text-3xl font-serif text-blue-500 mb-4">04</div>
                  <h4 className="text-xl font-bold text-stone-900 mb-3">Power User Shortcuts</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Added duplicate row, quick add new row, and inline editing capabilities for efficiency.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* THE SOLUTION */}
          <section className="py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-serif mb-12 text-black">The Solution</h2>

              <div className="grid md:grid-cols-3 gap-8 items-center mb-20">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-4">Before</p>
                  <ul className="space-y-2 text-stone-700">
                    <li>• 3 separate screens</li>
                    <li>• Manual "statistics" creation</li>
                    <li>• Manual entry for every field</li>
                    <li>• 9 operations for typical scenario</li>
                  </ul>
                </div>

                <div className="text-center text-4xl text-stone-300 font-light">→</div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-green-600 mb-4">After</p>
                  <ul className="space-y-2 text-stone-700">
                    <li>• 1 unified modal</li>
                    <li>• Inline currency handling</li>
                    <li>• Auto-fill + smart defaults</li>
                    <li>• 3 operations for same scenario</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* KEY FEATURES WITH IMAGES */}
          <section className="py-32 bg-stone-50">
            <div className="max-w-6xl mx-auto px-6">

               <div className="text-center mb-20">
                  <h3 className="text-4xl md:text-5xl font-serif mb-6 text-black">Key Features</h3>
                  <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
               </div>

               {/* Feature 1: Row Duplication */}
               <div className="mb-32">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div>
                        <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Feature 01</span>
                        <h4 className="text-3xl md:text-4xl font-serif mb-6 text-black">Row Duplication</h4>
                        <p className="text-lg text-stone-600 leading-relaxed">
                           Rapid multi-payee creation. Clone row details instantly while clearing only the specific payment amount for safe re-entry. We identified this as the primary speed bottleneck for power users.
                        </p>
                     </div>
                     <div className="relative rounded-xl overflow-hidden shadow-2xl border border-stone-200">
                        {/* PLACEHOLDER 1: Row Duplication Feature */}
                        <div className="w-full aspect-[16/10] bg-gradient-to-br from-blue-50 to-stone-50 flex flex-col items-center justify-center p-12 text-center">
                          <svg className="w-16 h-16 text-blue-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <polyline points="21 15 16 10 5 21"/>
                          </svg>
                          <p className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">Image 1: Row Duplication</p>
                          <p className="text-stone-500 text-xs max-w-sm mb-3">
                            Screenshot showing the duplicate button in the table actions (right side of table row)
                          </p>
                          <p className="text-stone-400 text-xs font-mono">row-duplication-feature.png</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Feature 2: Smart Defaults */}
               <div className="mb-32">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div className="lg:order-2">
                        <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Feature 02</span>
                        <h4 className="text-3xl md:text-4xl font-serif mb-6 text-black">Smart Defaults</h4>
                        <p className="text-lg text-stone-600 leading-relaxed">
                           The system now auto-detects settlement currencies. When a claim is in USD, the payout defaults to USD, eliminating selection errors and repetitive typing.
                        </p>
                     </div>
                     <div className="lg:order-1 relative rounded-xl overflow-hidden shadow-2xl border border-stone-200">
                        {/* PLACEHOLDER 2: Smart Defaults Feature */}
                        <div className="w-full aspect-[16/10] bg-gradient-to-br from-green-50 to-stone-50 flex flex-col items-center justify-center p-12 text-center">
                          <svg className="w-16 h-16 text-green-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <polyline points="21 15 16 10 5 21"/>
                          </svg>
                          <p className="text-green-600 font-bold text-xs uppercase tracking-wider mb-2">Image 2: Smart Defaults</p>
                          <p className="text-stone-500 text-xs max-w-sm mb-3">
                            Screenshot showing currency dropdown with auto-selected default value (Settlement column)
                          </p>
                          <p className="text-stone-400 text-xs font-mono">smart-defaults-currency.png</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Feature 3: Unified Summary */}
               <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div>
                        <span className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Feature 03</span>
                        <h4 className="text-3xl md:text-4xl font-serif mb-6 text-black">Unified Summary</h4>
                        <p className="text-lg text-stone-600 leading-relaxed">
                           A real-time financial roll-up. Brokers can toggle between currency tabs without leaving the payment context, ensuring they never lose visibility of the total claim impact.
                        </p>
                     </div>
                     <div className="relative rounded-xl overflow-hidden shadow-2xl border border-stone-200">
                        {/* PLACEHOLDER 3: Unified Summary Feature */}
                        <div className="w-full aspect-[16/10] bg-gradient-to-br from-purple-50 to-stone-50 flex flex-col items-center justify-center p-12 text-center">
                          <svg className="w-16 h-16 text-purple-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <polyline points="21 15 16 10 5 21"/>
                          </svg>
                          <p className="text-purple-600 font-bold text-xs uppercase tracking-wider mb-2">Image 3: Unified Summary</p>
                          <p className="text-stone-500 text-xs max-w-sm mb-3">
                            Screenshot of Summary section showing currency tabs (USD-USD, GBP-GBP) and totals table
                          </p>
                          <p className="text-stone-400 text-xs font-mono">unified-summary-section.png</p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
          </section>

          {/* OUTCOMES & IMPACT */}
          <section className="py-32 bg-stone-50 border-t border-stone-100">
             <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-serif mb-12 text-black">Outcomes & Impact</h2>

                <div className="bg-white p-10 rounded-2xl border border-stone-200 space-y-6">
                   <div className="flex gap-3 items-start">
                     <span className="text-green-500 text-xl shrink-0">✓</span>
                     <p className="text-lg text-stone-700">The new interface was successfully launched to customers</p>
                   </div>
                   <div className="flex gap-3 items-start">
                     <span className="text-green-500 text-xl shrink-0">✓</span>
                     <p className="text-lg text-stone-700">Positive feedback from brokers - "Finally something that makes sense"</p>
                   </div>
                   <div className="flex gap-3 items-start">
                     <span className="text-green-500 text-xl shrink-0">✓</span>
                     <p className="text-lg text-stone-700">Support team reported fewer questions and support tickets related to claim movements</p>
                   </div>
                   <div className="flex gap-3 items-start">
                     <span className="text-green-500 text-xl shrink-0">✓</span>
                     <p className="text-lg text-stone-700">Reduced cognitive load enabled brokers to process settlements more confidently</p>
                   </div>
                </div>

                <div className="mt-16 bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl border border-blue-100">
                   <p className="text-xl text-stone-600 font-light leading-relaxed mb-6">
                     The core of the redesign was removing technical barriers that forced users to think like database administrators.
                   </p>
                   <p className="text-lg text-stone-700 leading-relaxed italic border-l-4 border-blue-500 pl-6">
                     "By unifying the transaction steps and automating non-essential metadata, we returned the focus back to the business of insurance."
                   </p>
                </div>
             </div>
          </section>

          {/* REFLECTION */}
          <section className="py-32 bg-white border-t border-stone-100">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-serif mb-12 text-black">Reflection</h2>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900">What Worked Well</h3>
                  <ul className="space-y-4 text-stone-600 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-blue-500 shrink-0">•</span>
                      <span>I challenged the existing process rather than accepting it as-is - eliminating the statistics step was crucial</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 shrink-0">•</span>
                      <span>Close collaboration with the product manager and development team ensured technical feasibility</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 shrink-0">•</span>
                      <span>Prioritizing simplicity over features led to a more usable solution</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-stone-900">What I Learned</h3>
                  <ul className="space-y-4 text-stone-600 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-blue-500 shrink-0">•</span>
                      <span>Sometimes the best solution is removing a feature, not adding one</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 shrink-0">•</span>
                      <span>Technical constraints (Salesforce) can actually drive creative solutions</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-500 shrink-0">•</span>
                      <span>Understanding the "why" before the "how" is essential for impactful design</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-stone-50 p-10 rounded-2xl border border-stone-200">
                <h3 className="text-xl font-bold text-stone-900 mb-4">What I'd Do Differently</h3>
                <p className="text-lg text-stone-600 leading-relaxed">
                  If I could revisit this project, I would conduct more structured user testing earlier in the process. While we worked closely with stakeholders and had informal feedback, formal usability testing with actual brokers would have provided additional validation and potentially uncovered edge cases sooner.
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
