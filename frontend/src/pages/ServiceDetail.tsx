import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { getService } from '../api/client';
import { Service } from '../types';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Code2, 
  Globe, 
  Smartphone, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  Layers 
} from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getService(slug)
      .then((data) => {
        setService(data);
        setError(null);
      })
      .catch((err) => {
        console.error('Error fetching service:', err);
        setError('Service not found.');
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-36 pb-20 text-center">
        <Container>
          <div className="animate-pulse space-y-4 max-w-lg mx-auto">
            <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto" />
            <div className="h-12 bg-slate-200 rounded w-2/3 mx-auto" />
            <div className="h-32 bg-slate-200 rounded" />
          </div>
        </Container>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="pt-36 pb-20 text-center">
        <Container>
          <div className="max-w-md mx-auto p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Service Not Found</h2>
            <p className="text-sm text-slate-600">The service category you requested does not exist or has moved.</p>
            <Button href="/services" variant="primary">Back to Services</Button>
          </div>
        </Container>
      </div>
    );
  }

  const getServiceIcon = () => {
    switch (service.slug) {
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

  const Icon = getServiceIcon();

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Header */}
      <section className="pb-16 border-b border-slate-200/60 bg-gradient-to-b from-white to-[#FAFAFA]">
        <Container>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <Icon className="w-5 h-5" />
                </div>
                <Badge variant="blue" size="md">
                  Core Engineering Capability
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {service.short_description}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card shrink-0 space-y-4 lg:w-80">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                Engagement Model
              </span>
              <div className="text-xl font-bold text-slate-900">
                Milestone-Based Quotation
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Clear milestones, weekly progress reviews, and complete source code ownership with zero recurring seat fees.
              </p>
              <Button href="/contact" variant="primary" size="md" className="w-full" withArrow>
                Request Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Narrative Section */}
      <section className="py-16 md:py-20 border-b border-slate-200/60 bg-white">
        <Container size="narrow">
          <div className="space-y-6 text-slate-700 text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Technical Approach & Architecture
            </h2>
            <div className="whitespace-pre-line text-slate-600 leading-relaxed">
              {service.full_description}
            </div>
          </div>
        </Container>
      </section>

      {/* Key Strategic Benefits */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] border-b border-slate-200/60">
        <Container>
          <SectionHeading
            badge="Business Value"
            title="Why businesses partner with KDR for this service."
            description="Clear strategic and operational advantages engineered into every delivery milestone."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {service.benefits.map((b) => (
              <div
                key={b.id}
                className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-card hover:border-blue-200 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Proposal CTA */}
      <section className="py-16 bg-white">
        <Container size="narrow">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-5 shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to begin your {service.name} project?
            </h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
              Contact our engineering desk in Navlakha, Indore. We will review your scope, provide architectural feedback, and outline realistic delivery timelines.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Request a Custom Proposal
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
