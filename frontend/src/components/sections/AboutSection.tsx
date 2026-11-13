import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { CheckCircle2, HeartHandshake, PhoneCall } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 lg:pb-28 bg-[#FAFAFA] border-b border-slate-200/80 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Simple & Clear Words for Everyday Clients */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="About KDR Softwares"
              title={
                <span>
                  Software made for <span className="text-[#0062E3]">everyday work</span>, not confusing computer theory.
                </span>
              }
              description="We build simple, practical software tools that solve real headaches for ID card printing presses, schools, and local business owners."
            />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Most software in the market is either too complicated, full of confusing settings, or requires months of training. At KDR Softwares, we do the exact opposite: we build straightforward tools like <strong className="text-slate-900 font-semibold">CardFlow</strong> and <strong className="text-slate-900 font-semibold">VidyaFlow</strong> that your office or shop staff can start using in just a few minutes, saving days of manual work and stopping costly errors.
            </p>

            {/* Simple Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062E3] flex items-center justify-center mb-2.5" aria-hidden="true">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Handles Messy Real Data</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Easily reads unstructured Excel files, photos pasted in Word, and WhatsApp records without freezing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5" aria-hidden="true">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Direct Phone & WhatsApp Help</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Call or WhatsApp our team in Indore directly whenever you need help or have questions.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Button 
                href="#contact" 
                variant="outline" 
                size="md" 
                withArrow
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, options?: Record<string, unknown>) => void } }).__lenis;
                  if (el) {
                    if (lenis) {
                      lenis.scrollTo(el, { offset: -70 });
                    } else {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                    window.history.pushState(null, '', '#contact');
                  }
                }}
              >
                Talk to Our Team
              </Button>
            </div>
          </div>

          {/* Right Column: Clean standalone PNG visual (No box, no card frame) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-lg flex items-center justify-center">
              <img
                src="/philosophy.png"
                alt="KDR Softwares System Design"
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain filter drop-shadow-[0_8px_24px_rgba(0,98,227,0.12)] hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
