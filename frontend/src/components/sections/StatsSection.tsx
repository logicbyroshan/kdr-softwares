import React from 'react';
import { Container } from '../common/Container';
import { Layers, Clock, CheckCircle2 } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '100,000+',
      label: 'ID Cards Handled',
      description: 'Over 100k student and staff ID records processed and sent to print without duplicate errors.',
      icon: Layers,
      color: 'text-cyan-400',
    },
    {
      value: '10x Faster',
      label: 'Time Saved Every Season',
      description: 'What used to take 2 weeks of late-night manual data entry now gets finished in just 1 afternoon.',
      icon: Clock,
      color: 'text-blue-400',
    },
    {
      value: '100%',
      label: 'Accurate Photo Matching',
      description: 'Automatically pulls photos from messy Word files and matches them to student roll numbers.',
      icon: CheckCircle2,
      color: 'text-emerald-400',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#070D1A] text-white border-b border-slate-900 relative overflow-hidden">
      {/* Background Architectural Glow */}
      <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#0062E3]/15 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 border-b border-slate-800">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-2">
              Numbers That Speak For Themselves
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight text-white leading-tight">
              Real results for real businesses in{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-[#7CC2FD] bg-clip-text text-transparent">
                towns and cities.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
            We don't use complicated marketing words. Our software is judged by simple facts: how much time you save and how many printing mistakes you avoid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#0A1936]/60 border border-blue-900/40 backdrop-blur-xs relative group hover:border-blue-500/50 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <Icon className={`w-5 h-5 ${stat.color}`} aria-hidden="true" />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white mb-2">
                  {stat.value}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
