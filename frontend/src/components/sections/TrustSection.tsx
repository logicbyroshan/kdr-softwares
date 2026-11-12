import React from 'react';
import { Container } from '../common/Container';
import { Terminal, Database, Code, Cpu, Smartphone, Layers } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const techStack = [
    { name: 'Python & Django REST', role: 'API & Business Logic Engine', icon: Terminal },
    { name: 'PostgreSQL Relational DB', role: 'ACID Integrity & Performance', icon: Database },
    { name: 'React & TypeScript', role: 'Responsive Frontends & SPAs', icon: Code },
    { name: 'CorelDRAW Integration', role: 'Pre-Press Production Formats', icon: Layers },
    { name: 'Android SDK Platform', role: 'On-Ground Field Verification', icon: Smartphone },
    { name: 'Intelligent Vision & OCR', role: 'Document & Photo Extraction', icon: Cpu },
  ];

  return (
    <section className="pt-24 sm:pt-28 md:pt-28 lg:pt-32 pb-14 bg-white border-b border-slate-200/80 relative">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0062E3] block">
              Architectural Foundation
            </span>
            <p className="text-sm font-semibold text-slate-800 mt-1">
              Built on battle-tested, open technologies engineered for real-world production reliability.
            </p>
          </div>
          <div className="text-xs text-slate-600 max-w-md leading-relaxed">
            We prioritize deterministic performance, zero vendor lock-in, and strict data security across all software products and custom deliverables.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-6">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div 
                key={tech.name} 
                className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-white hover:border-blue-300 hover:shadow-card transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0062E3] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform" aria-hidden="true">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">{tech.name}</h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-snug">{tech.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
