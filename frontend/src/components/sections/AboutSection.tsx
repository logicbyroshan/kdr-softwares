import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { Check, Target, Wrench, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-slate-200/80 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="Our Philosophy & Mission"
              title={
                <span>
                  Software designed around <span className="text-[#0062E3]">how businesses actually operate</span>, not generic ideals.
                </span>
              }
              description="We believe software should solve real operational problems, simplify everyday work, and create clear opportunities for businesses to achieve more with fewer bottlenecks."
            />

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Too often, commercial businesses and production agencies find themselves trapped between rigid off-the-shelf software packages that do not reflect their daily workflow and bespoke agency developments that prove fragile and overpriced.
              </p>
              <p>
                <strong className="text-slate-900 font-bold">KDR Softwares was founded to bridge this divide.</strong> We operate at the intersection of focused software products—like our industry-proven ID card data management platform <strong className="text-slate-900 font-bold">CardFlow</strong>—and tailor-made engineering services. Every tool we construct is designed from first principles with direct feedback from operational staff in the field.
              </p>
            </div>

            {/* Core Values / Operational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0062E3] flex items-center justify-center mb-2.5" aria-hidden="true">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Direct Operational Fit</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  We study manual bottlenecks first and craft software that mirrors the reality of real documents, dirty spreadsheets, and field constraints.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0062E3] flex items-center justify-center mb-2.5" aria-hidden="true">
                  <Wrench className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Independent Engineering</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  We write clean, modular Python, React, and PostgreSQL backends with full ownership granted to our enterprise clients.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/about" variant="outline" withArrow>
                Read More About Our Approach
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Manifest Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white p-7 sm:p-8 shadow-card border border-slate-200/90 relative">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <picture className="w-6 h-6 flex items-center justify-center shrink-0">
                    <source srcSet="/logo.webp" type="image/webp" />
                    <img src="/logo.png" alt="KDR Logo" width="24" height="24" loading="lazy" decoding="async" className="w-full h-full object-contain filter drop-shadow-xs" />
                  </picture>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                    Engineering Tenets
                  </span>
                </div>
                <span className="text-xs font-bold text-[#0062E3] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">KDR Standard</span>
              </div>

              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Zero Fabricated Claims</h5>
                    <p className="text-xs text-slate-600 mt-0.5">We state only verified metrics, genuine capabilities, and clear roadmap milestones.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Battle-Tested Under Production</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Over 100,000 real student and staff ID records processed through CardFlow in active production.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Practical Pragmatism Over Hype</h5>
                    <p className="text-xs text-slate-600 mt-0.5">We apply AI, automation, and OCR where they generate tangible efficiency, never as marketing fluff.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Indore-Based Engineering Craft</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Proudly based in Navlakha, Indore, building software solutions for regional and global businesses.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>Want to collaborate or discuss a project?</span>
                <a href="mailto:contact@kdrsoftwares.in" className="font-bold text-[#0062E3] hover:underline inline-flex items-center gap-1">
                  Contact Us <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
