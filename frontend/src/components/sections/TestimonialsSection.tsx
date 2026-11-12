import React, { useEffect, useState } from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { getTestimonials } from '../../api/client';
import { Testimonial } from '../../types';
import { Quote, CheckCircle2, Building2 } from 'lucide-react';
import { Badge } from '../common/Badge';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    let isMounted = true;
    getTestimonials()
      .then((data) => {
        if (isMounted) setTestimonials(data);
      })
      .catch((err) => console.error('Failed to load testimonials', err));
    return () => {
      isMounted = false;
    };
  }, []);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-slate-200/80 relative">
      <Container size="narrow">
        <SectionHeading
          badge="Verified Client Experience"
          title="Direct operational feedback from the production floor."
          description="We value genuine practitioner feedback from commercial teams who rely on our software for active production output."
          align="center"
        />

        <div className="mt-8 space-y-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200/90 shadow-card relative overflow-hidden"
            >
              {/* Background decorative quote symbol */}
              <Quote className="absolute -top-2 -right-2 w-28 h-28 text-slate-100 -rotate-12 pointer-events-none" aria-hidden="true" />

              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <Badge variant="emerald" size="sm">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-700 inline" aria-hidden="true" />
                  Verified Commercial Agency Partner
                </Badge>
                {t.product_name && (
                  <Badge variant="blue" size="sm">
                    {t.product_name} Production Workflow
                  </Badge>
                )}
              </div>

              <blockquote className="text-base sm:text-xl text-slate-800 font-medium leading-relaxed italic relative z-10">
                "{t.testimonial_text}"
              </blockquote>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4 relative z-10">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-blue-50 text-[#0062E3] font-bold flex items-center justify-center text-sm border border-blue-200 shrink-0">
                    {t.customer_name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                      {t.customer_name}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 flex items-center gap-1.5 font-medium">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                      <span>{t.designation} — {t.company}</span>
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                  CardFlow Production Deployment
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
