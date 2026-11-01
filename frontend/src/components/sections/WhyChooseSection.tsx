import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Wrench, CheckCircle, Database, Layers, ShieldCheck, HeartHandshake } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const differentiators = [
    {
      title: 'Practical, Problem-First Approach',
      description: 'We do not sell theoretical roadmaps or unnecessary tech bloat. We observe how your team works, identify friction points, and engineer focused solutions.',
      icon: Wrench,
      highlight: 'Operational Clarity',
    },
    {
      title: 'Product-Grade Engineering Quality',
      description: 'Because we build and maintain our own standalone software products, our custom engineering adheres to strict architectural modularity and production standards.',
      icon: Layers,
      highlight: 'Code Longevity',
    },
    {
      title: 'Full Source Ownership',
      description: 'You are never trapped in restrictive per-seat subscription models for bespoke work. Your organization owns its codebase, schemas, and assets.',
      icon: Database,
      highlight: 'Zero Lock-In',
    },
    {
      title: 'Production-Hardened Security',
      description: 'From relational constraints in PostgreSQL to role-based access control and encrypted credentials, security is part of the initial database design.',
      icon: ShieldCheck,
      highlight: 'Enterprise Integrity',
    },
    {
      title: 'Direct Engineering Access',
      description: 'Work directly with the architects and engineers writing your software, ensuring nuance is understood and changes happen promptly without middle-management friction.',
      icon: HeartHandshake,
      highlight: 'Responsive Collaboration',
    },
    {
      title: 'Honest Commitments & Verifiable Truth',
      description: 'We communicate genuine capabilities with confidence, clearly disclose roadmap status, and never exaggerate achievements or customer numbers.',
      icon: CheckCircle,
      highlight: 'Uncompromising Trust',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/60">
      <Container>
        <SectionHeading
          badge="Why KDR Softwares"
          title="Practical engineering over hype. Built to solve real business challenges."
          description="We distinguish ourselves through pragmatic software design, rigorous technical execution, and genuine operational transparency."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={index}
                className="p-7 rounded-2xl bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:border-blue-200 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50/80 px-2 py-0.5 rounded border border-blue-100">
                      {diff.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {diff.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

