import React, { useEffect, useState } from 'react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { getPortfolio } from '../api/client';
import { PortfolioProject } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const PortfolioHub: React.FC = () => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPortfolio()
      .then((data) => setProjects(data))
      .catch((err) => console.error('Failed to load portfolio', err))
      .finally(() => setLoading(false));
  }, []);

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'Software Product', label: 'Software Products' },
    { key: 'Automation Engine', label: 'Automation Engines' },
    { key: 'Productivity Utility', label: 'Productivity Utilities' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <SEOHead
        title="Selected Portfolio & Production Deployments | KDR Softwares"
        description="Case studies and deployed software systems by KDR Softwares: CardFlow ID automation, prepress layout engines, and bespoke enterprise systems in Indore."
        canonicalUrl="https://kdrsoftwares.in/portfolio"
        keywords="software portfolio, CardFlow case studies, custom software case studies India, production software examples"
        ogType="website"
        breadcrumbs={[{ name: 'Portfolio', url: 'https://kdrsoftwares.in/portfolio' }]}
      />

      {/* Header */}
      <section className="pb-16 border-b border-slate-200/60 bg-gradient-to-b from-white to-[#FAFAFA]">
        <Container>
          <Breadcrumbs items={[{ name: 'Portfolio', url: '/portfolio' }]} />
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 inline-block">
              Portfolio & Selected Work
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Production systems engineered for commercial workflows.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Examine our software products and custom operational platforms deployed in active production environments.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2" role="tablist" aria-label="Portfolio filters">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={filter === cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                  filter === cat.key
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
              <div className="h-72 rounded-3xl bg-slate-100" />
              <div className="h-72 rounded-3xl bg-slate-100" />
              <div className="h-72 rounded-3xl bg-slate-100" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl bg-white border border-slate-200/90 shadow-card hover:border-slate-300 transition-all duration-200 flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4 text-xs">
                      <span className="font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                        {item.category}
                      </span>
                      <Badge variant="emerald" size="sm">
                        Production Active
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs font-medium text-slate-500 mt-1">
                      Context: {item.client_or_context}
                    </p>

                    <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                      {item.short_summary}
                    </p>

                    <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        Technologies Applied:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tech_list.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Detailed Architecture</span>
                    <Link
                      to={item.project_url || `/portfolio/${item.slug}`}
                      className="font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group"
                    >
                      <span>View Overview</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};
