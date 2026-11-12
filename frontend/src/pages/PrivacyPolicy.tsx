import React from 'react';
import { Container } from '../components/common/Container';
import { Shield } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <SEOHead
        title="Privacy Policy | KDR Softwares — Data Protection & Client Confidentiality"
        description="Official Privacy Policy of KDR Softwares: How we protect client information, institutional records, CardFlow databases, and contact inquiries."
        canonicalUrl="https://kdrsoftwares.in/privacy"
        keywords="KDR Softwares privacy policy, data protection, client confidentiality, Indore software governance"
        ogType="article"
        breadcrumbs={[{ name: 'Privacy Policy', url: 'https://kdrsoftwares.in/privacy' }]}
      />

      <section className="pb-12 border-b border-slate-200/60 bg-gradient-to-b from-white to-[#FAFAFA]">
        <Container size="narrow">
          <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy' }]} />
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                Corporate Governance
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 font-mono">
              Last updated: November 2026 | KDR Softwares, Navlakha, Indore, MP, India
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container size="narrow">
          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Overview & Commitment</h2>
              <p>
                KDR Softwares ("we", "our", or "us"), located in Navlakha, Indore, Madhya Pradesh, India, is dedicated to protecting the privacy of our website visitors, customers, and client organizations. This Privacy Policy details how we collect, process, and protect your information when you visit our website (https://kdrsoftwares.in) or submit inquiries regarding our software products and services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Information We Collect</h2>
              <p>We collect information you explicitly provide to us via our contact and consultation forms, including:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Your full name and professional designation</li>
                <li>Your business or company name</li>
                <li>Business email address and optional phone number</li>
                <li>Inquiry classification, subject, and project description</li>
              </ul>
              <p className="mt-2">
                Additionally, for security and spam prevention, our servers temporarily record your IP address and standard HTTP request headers upon form submission.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. Product Data Privacy (CardFlow & Client Rosters)</h2>
              <p>
                For customers who license or evaluate our software products such as CardFlow: organizational datasets, student/employee rosters, and photos imported into your deployed instances remain strictly under your administrative ownership and custody. KDR Softwares does not monetize, distribute, or retain client identity datasets for third-party purposes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>To evaluate project scopes and deliver requested quotations</li>
                <li>To provide technical assistance and support to authorized users</li>
                <li>To maintain system security, detect bot abuse, and enforce our service terms</li>
                <li>To comply with applicable legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. Data Retention & Security</h2>
              <p>
                We employ industry-standard relational database security, environment-based credentials, SSL/TLS encryption in transit, and access controls to safeguard all stored inquiry records. We do not sell or lease personal or corporate information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">6. Contacting Our Data Privacy Team</h2>
              <p>
                For questions regarding this policy or to request removal of your inquiry data from our records, please contact our administrative desk at:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mt-2 font-mono text-xs">
                Email: contact@kdrsoftwares.in<br />
                Entity: KDR Softwares<br />
                Address: Navlakha, Indore, Madhya Pradesh, India
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

