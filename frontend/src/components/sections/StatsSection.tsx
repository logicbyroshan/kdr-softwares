import React, { useEffect, useState } from 'react';
import { Container } from '../common/Container';
import { getStatistics } from '../../api/client';
import { Statistic } from '../../types';
import { CheckCircle2, TrendingUp, Sparkles, Layers } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const [stats, setStats] = useState<Statistic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStatistics()
      .then((data) => setStats(data))
      .catch((err) => console.error('Failed to load stats', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white border-b border-slate-900 relative overflow-hidden">
      {/* Background Architectural Glow */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-slate-850">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block mb-2">
              Verified Production Metrics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Measurable impact grounded in <span className="text-blue-400">real operational production.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
            We measure our work by actual records processed, errors prevented, and manual hours saved—never exaggerated marketing figures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          {stats.map((stat, idx) => (
            <div
              key={stat.id || idx}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xs relative group hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                {idx === 0 && <Layers className="w-4 h-4 text-blue-400" />}
                {idx === 1 && <Sparkles className="w-4 h-4 text-purple-400" />}
                {idx === 2 && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                  {stat.value}
                </span>
                <span className="text-lg font-bold text-blue-400">
                  {stat.suffix}
                </span>
              </div>

              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

