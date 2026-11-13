import React from 'react';
import { Container } from '../components/common/Container';
import { FileText } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const TermsConditions: React.FC = () => {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <SEOHead
        title="Terms & Conditions | KDR Softwares — Commercial Agreements & Licensing"
        description="Terms and conditions governing CardFlow agency licenses, custom software development milestones, source code ownership, and warranties."
        canonicalUrl="https://kdrsoftwares.in/terms"
        keywords="KDR Softwares terms, CardFlow software agreement, custom development contract India, commercial software terms Indore"
        ogType="article"
        breadcrumbs={[{ name: 'Terms & Conditions', url: 'https://kdrsoftwares.in/terms' }]}
      />

      <section className="pb-12 border-b border-slate-200/60 bg-gradient-to-b from-white to-[#FAFAFA]">
        <Container size="narrow">
          <Breadcrumbs items={[{ name: 'Terms & Conditions', url: '/terms' }]} />
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                Legal Agreement
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xs text-slate-500 font-mono">
              Effective Date: November 2026 | KDR Softwares, Navlakha, Indore, MP, India
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container size="narrow">
          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing https://kdrsoftwares.in, licensing software products developed by KDR Softwares (including CardFlow, VidyaFlow, and EazeFlow), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should discontinue use of our site and services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Software Product Licensing</h2>
              <p>
                Software products such as CardFlow are licensed, not sold, on an agency or institutional tier as specified in individual commercial agreements. Users agree not to decompile, reverse-engineer, or redistribute proprietary product binaries without prior written consent from KDR Softwares.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. Custom Engineering & Source Ownership</h2>
              <p>
                For custom development engagements, source code ownership, intellectual property rights, delivery milestones, and warranty parameters are governed by individual master service agreements and milestone quotation contracts executed between KDR Softwares and the client organization.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. Disclaimers & Roadmap Features</h2>
              <p>
                We strive for absolute precision in our software architecture across all products and deployments. Commercial agreements govern specific delivery parameters, support windows, and SLAs.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. Governing Law & Jurisdiction</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these Terms or software engagements shall be subject to the exclusive jurisdiction of the courts located in Indore, Madhya Pradesh, India.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">6. Contact Information</h2>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mt-2 font-mono text-xs">
                Email: contact@kdrsoftwares.in<br />
                Entity: KDR Softwares<br />
                Location: Navlakha, Indore, Madhya Pradesh, India
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

