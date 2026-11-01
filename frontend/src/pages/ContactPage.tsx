import React from 'react';
import { Container } from '../components/common/Container';
import { ContactSection } from '../components/sections/ContactSection';
import { Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Header */}
      <section className="pb-16 border-b border-slate-200/60 bg-gradient-to-b from-white to-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 inline-block">
              Contact & Consultations
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Get in touch with the KDR engineering desk.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We welcome inquiries for CardFlow agency licensing, PrintFlow integration, and bespoke enterprise software development engagements.
            </p>
          </div>
        </Container>
      </section>

      {/* Embedded Contact Section */}
      <ContactSection />
    </div>
  );
};
