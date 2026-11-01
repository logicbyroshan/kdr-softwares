import React from 'react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Check, Target, Wrench, Shield, ArrowRight, Building, Terminal, Layers, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Hero Header */}
      <section className="pb-16 border-b border-slate-200/60 bg-gradient-to-b from-white to-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 inline-block">
              About KDR Softwares
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Engineering practical software for real-world operational challenges.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We are an independent software product and custom technology engineering company based in Navlakha, Indore, Madhya Pradesh.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Narrative */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-slate-600 text-base leading-relaxed">
              <h2 className="text-2xl font-bold text-slate-900">
                Our Origin & Operational Philosophy
              </h2>
              <p>
                KDR Softwares was conceived with a straightforward premise: modern business software should solve tangible bottlenecks rather than introduce unnecessary complexity.
              </p>
              <p>
                In the commercial printing and identity production sector, we observed firsthand how agencies struggled with chaotic data collection. Commercial printing houses were receiving hundreds of unstandardized spreadsheets from schools and corporations, photo folders with missing admission numbers, and embedded images buried inside Word documents. Reconciling this data manually routinely wasted weeks, caused costly reprints, and burned out clerical staff.
              </p>
              <p>
                To resolve this, we engineered <strong className="text-slate-900 font-semibold">CardFlow</strong> from the ground up. Through active production deployment, CardFlow proved that focused software designed around the exact realities of production floors can reduce cycle times from weeks to days. Over 100,000 real identity records have now flowed through its verification and extraction pipelines.
              </p>
              <p>
                Today, KDR Softwares operates across two primary business areas:
              </p>
              <ul className="space-y-3 pl-2">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">1. Independent Software Products</strong>
                    <span>Deeply specialized platforms like CardFlow, PrintFlow, and EazeFlow built to solve systemic industry friction.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">2. Bespoke Technology Solutions</strong>
                    <span>Tailored enterprise software, web applications, Android tools, and practical AI integrations constructed to fit our clients' unique operations.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column: Architectural Principles */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block">
                  How We Work
                </span>
                <h3 className="text-xl font-bold leading-tight">
                  Pragmatic Engineering Principles
                </h3>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <strong className="text-white block font-semibold mb-1">Observation Precedes Code</strong>
                    <span>We audit existing documents, manual steps, and edge cases before drafting architectural schemas.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <strong className="text-white block font-semibold mb-1">Open Architectural Stack</strong>
                    <span>Built on Python, Django, React, and PostgreSQL for long-term auditability, maintainability, and zero vendor lock-in.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <strong className="text-white block font-semibold mb-1">Uncompromising Honesty</strong>
                    <span>We disclose roadmap milestones transparently, maintain honest pricing, and never present prototype features as finished deliverables.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button href="/contact" variant="primary" size="sm" className="w-full" withArrow>
                    Contact the Engineering Team
                  </Button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Location & Presence
                </span>
                <h4 className="font-bold text-slate-900 text-base">Navlakha, Indore, India</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Headquartered in Indore, Madhya Pradesh—a growing technological hub in Central India with rapid connectivity to commercial and industrial sectors nationwide.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
