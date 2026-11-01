import React from 'react';
import { Container } from '../common/Container';
import { Terminal, Database, Code, Cpu, Smartphone, Layers } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const techStack = [
    { name: 'Python & Django REST', role: 'API & Business Logic Engine', icon: Terminal },
    { name: 'PostgreSQL Relational DB', role: 'ACID Data Integrity & Scalability', icon: Database },
    { name: 'React & TypeScript', role: 'Responsive Frontends & SPAs', icon: Code },
    { name: 'CorelDRAW Workflow Integration', role: 'Pre-Press Production Formats', icon: Layers },
    { name: 'Android SDK Platform', role: 'On-Ground Field Verification', icon: Smartphone },
    { name: 'Intelligent Vision & OCR', role: 'Document & Photo Extraction', icon: Cpu },
  ];

  return (
    <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 bg-white border-b border-slate-200/60">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
              Architectural Foundation
            </span>
            <p className="text-sm font-medium text-slate-700 mt-0.5">
              Built on battle-tested, open technologies engineered for real-world production reliability.
            </p>
          </div>
          <div className="text-xs text-slate-500 max-w-md">
            We prioritize deterministic performance, zero vendor lock-in, and strict data security across all software products and custom deliverables.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-6">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div 
                key={tech.name} 
                className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-150 flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">{tech.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">{tech.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

