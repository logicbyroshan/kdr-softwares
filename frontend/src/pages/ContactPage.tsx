import React from 'react';
import { Container } from '../components/common/Container';
import { ContactSection } from '../components/sections/ContactSection';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://kdrsoftwares.in/contact#webpage',
  'name': 'Contact KDR Softwares Engineering Desk',
  'description': 'Inquiries for CardFlow agency licensing, VidyaFlow school onboarding, and EazeFlow productivity deployments.',
  'url': 'https://kdrsoftwares.in/contact',
  'mainEntity': {
    '@type': 'ProfessionalService',
    'name': 'KDR Softwares',
    'email': 'contact@kdrsoftwares.in',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Navlakha',
      'addressLocality': 'Indore',
      'addressRegion': 'Madhya Pradesh',
      'postalCode': '452001',
      'addressCountry': 'IN'
    }
  }
};

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <SEOHead
        title="Contact Engineering Desk & Consultations | KDR Softwares — Indore"
        description="Connect with KDR Softwares in Navlakha, Indore. Schedule a CardFlow demonstration or request a custom software engineering quotation."
        canonicalUrl="https://kdrsoftwares.in/contact"
        keywords="contact KDR Softwares, software development quotation, CardFlow agency license, hire developers Indore, software office Navlakha"
        ogType="website"
        breadcrumbs={[{ name: 'Contact', url: 'https://kdrsoftwares.in/contact' }]}
        schema={contactSchema}
      />

      {/* Header */}
      <section className="pb-16 border-b border-slate-200/60 bg-gradient-to-b from-white to-[#FAFAFA]">
        <Container>
          <Breadcrumbs items={[{ name: 'Contact Us', url: '/contact' }]} />
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 inline-block">
              Contact & Consultations
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Get in touch with the KDR engineering desk.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We welcome inquiries for CardFlow agency licensing, VidyaFlow school onboarding, and EazeFlow productivity deployments.
            </p>
          </div>
        </Container>
      </section>

      {/* Embedded Contact Section */}
      <ContactSection />
    </div>
  );
};

