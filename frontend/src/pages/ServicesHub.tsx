import React, { useEffect, useState } from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { getServices } from '../api/client';
import { Service } from '../types';
import { Code2, Globe, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

const servicesHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Custom Software & Technology Engineering Services',
  'provider': {
    '@type': 'Organization',
    'name': 'KDR Softwares',
    'url': 'https://kdrsoftwares.in'
  },
  'areaServed': {
    '@type': 'Country',
    'name': 'India'
  },
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'KDR Engineering Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Custom Software Development',
          'url': 'https://kdrsoftwares.in/services/custom-software'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Responsive Web Development',
          'url': 'https://kdrsoftwares.in/services/web-development'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Mobile Application Development',
          'url': 'https://kdrsoftwares.in/services/mobile-apps'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Applied AI Solutions & OCR Pipelines',
          'url': 'https://kdrsoftwares.in/services/ai-solutions'
        }
      }
    ]
  }
};

const ServiceIcon: React.FC<{ slug: string; className?: string }> = ({ slug, className }) => {
  switch (slug) {
    case 'custom-software':
      return <Code2 className={className} />;
    case 'web-development':
      return <Globe className={className} />;
    case 'mobile-apps':
      return <Smartphone className={className} />;
    case 'ai-solutions':
      return <Sparkles className={className} />;
    default:
      return <Code2 className={className} />;
  }
};

export const ServicesHub: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices()
      .then((data) => setServices(data))
      .catch((err) => console.error('Failed to load services', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <SEOHead
        title="Custom Technology Engineering Services — Web, Mobile, AI | KDR Softwares"
        description="Bespoke engineering solutions by KDR Softwares: Enterprise software, responsive React web apps, Android utilities, and applied AI/OCR document validation in Indore."
        canonicalUrl="https://kdrsoftwares.in/services"
        keywords="custom software development Indore, enterprise web development, Android business apps, applied AI solutions, OCR pipeline India, hire software developers Indore"
        ogType="website"
        breadcrumbs={[{ name: 'Services', url: 'https://kdrsoftwares.in/services' }]}
        schema={servicesHubSchema}
      />

      {/* Header */}
      <section className="pb-16 border-b border-slate-200/60 bg-gradient-to-b from-white to-[#FAFAFA]">
        <Container>
          <Breadcrumbs items={[{ name: 'Services', url: '/services' }]} />
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
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
              <div className="h-72 rounded-3xl bg-slate-100" />
              <div className="h-72 rounded-3xl bg-slate-100" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                return (
                  <div
                    key={service.id}
                    className="rounded-3xl bg-white p-8 sm:p-10 border border-slate-200/90 shadow-card hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                          <ServiceIcon slug={service.slug} className="w-6 h-6" />
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
          )}
        </Container>
      </section>
    </div>
  );
};
