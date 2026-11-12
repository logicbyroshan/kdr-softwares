import React, { useEffect, useState } from 'react';
import { Container } from '../common/Container';
import { getStatistics } from '../../api/client';
import { Statistic } from '../../types';
import { CheckCircle2, Sparkles, Layers } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const [stats, setStats] = useState<Statistic[]>([]);

  useEffect(() => {
    let isMounted = true;
    getStatistics()
      .then((data) => {
        if (isMounted) setStats(data);
      })
      .catch((err) => console.error('Failed to load stats', err));
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#070D1A] text-white border-b border-slate-900 relative overflow-hidden">
      {/* Background Architectural Glow */}
      <div className="absolute inset-0 bg-grid-dark opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#0062E3]/15 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-slate-800">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-2">
              Verified Production Metrics
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Measurable impact grounded in <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-[#7CC2FD] bg-clip-text text-transparent">real operational production.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
            We measure our work by actual records processed, errors prevented, and manual hours saved—never exaggerated marketing figures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          {stats.map((stat, idx) => (
            <div
              key={stat.id || idx}
              className="p-8 rounded-3xl bg-[#0A1936]/60 border border-blue-900/40 backdrop-blur-xs relative group hover:border-blue-500/50 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                {idx === 0 && <Layers className="w-5 h-5 text-cyan-400" aria-hidden="true" />}
                {idx === 1 && <Sparkles className="w-5 h-5 text-[#36A5FC]" aria-hidden="true" />}
                {idx === 2 && <CheckCircle2 className="w-5 h-5 text-emerald-400" aria-hidden="true" />}
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                  {stat.value}
                </span>
                <span className="text-lg font-bold text-cyan-300">
                  {stat.suffix}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mt-3.5 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
