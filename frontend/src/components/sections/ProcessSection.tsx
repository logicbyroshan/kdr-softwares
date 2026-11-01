import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Search, Compass, Palette, Code, Rocket, LifeBuoy } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      subtitle: 'Operational Discovery',
      description: 'We analyze your actual day-to-day operations, pain points, data bottlenecks, and document realities before writing a single line of code.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Plan',
      subtitle: 'Architecture & Scope',
      description: 'We specify clear technical blueprints, relational database schemas, API contracts, milestones, and deliverable commitments.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Design',
      subtitle: 'UX & Interaction',
      description: 'We craft intuitive visual layouts, ergonomic interfaces, and ergonomic interaction flows that reduce clerical fatigue.',
      icon: Palette,
    },
    {
      num: '04',
      title: 'Develop',
      subtitle: 'Full-Stack Implementation',
      description: 'We build production-quality code using React, Python/Django, and PostgreSQL with rigorous test coverage and data validation.',
      icon: Code,
    },
    {
      num: '05',
      title: 'Deliver',
      subtitle: 'Deployment & Training',
      description: 'We orchestrate zero-downtime deployment, database migrations, staff walkthroughs, and operational handover with full asset ownership.',
      icon: Rocket,
    },
    {
      num: '06',
      title: 'Support',
      subtitle: 'Iterative Maintenance',
      description: 'We provide structured post-launch warranty, performance monitoring, backup management, and ongoing feature enhancements.',
      icon: LifeBuoy,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-slate-200/60 relative">
      <Container>
        <SectionHeading
          badge="Execution Methodology"
          title="From initial discovery to dependable production deployment."
          description="A disciplined six-stage development cycle engineered to eliminate surprises and guarantee that delivered software achieves its operational objectives."
          align="center"
        />

        {/* Process Flow Timeline */}
        <div className="relative mt-12">
          {/* Subtle Horizontal Connector Bar for large screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-card hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {step.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wide block mt-0.5">
                      {step.subtitle}
                    </span>

                    <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
