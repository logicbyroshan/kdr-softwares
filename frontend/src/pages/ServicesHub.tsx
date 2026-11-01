import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { getServices } from '../api/client';
import { Service } from '../types';
import { Code2, Globe, Smartphone, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesHub: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices()
      .then((data) => setServices(data))
      .catch((err) => console.error('Failed to load services', err))
      .finally(() => setLoading(false));
  }, []);

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'custom-software':
        return Code2;
      case 'web-development':
        return Globe;
      case 'mobile-apps':
        return Smartphone;
      case 'ai-solutions':
        return Sparkles;
      default:
        return Code2;
    }
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Header */}
      <section className="pb-16 border-b border-slate-200/60 bg-gradient-to-b from-white to-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 inline-block">
              Technology Solutions
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Bespoke software engineering built for durability and scale.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We design, build, and deploy enterprise applications, responsive web platforms, Android tools, and practical AI document pipelines tailored to your operations.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = getServiceIcon(service.slug);
              return (
                <div
                  key={service.id}
                  className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-200/90 shadow-card hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      {service.name}
                    </h3>

                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {service.short_description}
                    </p>

                    {/* Benefits List */}
                    <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                        Core Value:
                      </span>
                      {service.benefits.map((b) => (
                        <div key={b.id} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="font-medium leading-snug">{b.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Bespoke Architecture</span>
                    <Button href={`/services/${service.slug}`} variant="outline" size="sm" withArrow>
                      View Service Details
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};
