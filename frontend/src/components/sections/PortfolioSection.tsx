import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code2, Layers, CheckCircle } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { getPortfolio } from '../../api/client';
import { PortfolioProject } from '../../types';

export const PortfolioSection: React.FC = () => {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPortfolio()
      .then((data) => setProjects(data))
      .catch((err) => console.error('Failed to load portfolio', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white border-b border-slate-200/60 relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Selected Work & Products"
            title="Production systems engineered for commercial operations."
            description="Explore our in-house software products and selected development platforms deployed in active production environments."
            className="mb-0 max-w-2xl"
          />
          <Button href="/portfolio" variant="outline" withArrow className="self-start md:self-auto shrink-0">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#FAFAFA] border border-slate-200/90 overflow-hidden hover:border-slate-300 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div className="p-7">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-mono font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {item.category}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    Verified
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mt-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-medium text-slate-500 mt-1">
                  Context: {item.client_or_context}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed line-clamp-3">
                  {item.short_summary}
                </p>

                {/* Tech Chips */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                  {item.tech_list.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.tech_list.length > 4 && (
                    <span className="text-[11px] font-mono text-slate-400 px-1 py-0.5">
                      +{item.tech_list.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4 bg-white border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">In Production / Roadmap</span>
                <Link
                  to={item.project_url || `/portfolio/${item.slug}`}
                  className="font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group"
                >
                  <span>Explore Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

