import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustSection } from '../components/sections/TrustSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProductsShowcase } from '../components/sections/ProductsShowcase';
import { ServicesSection } from '../components/sections/ServicesSection';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { StatsSection } from '../components/sections/StatsSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { PricingSection } from '../components/sections/PricingSection';
import { FaqAccordion } from '../components/sections/FaqAccordion';
import { ContactSection } from '../components/sections/ContactSection';

const homeSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://kdrsoftwares.in/#organization',
    'name': 'KDR Softwares',
    'url': 'https://kdrsoftwares.in',
    'logo': 'https://kdrsoftwares.in/logo.png',
    'image': 'https://kdrsoftwares.in/og-image.png',
    'description': 'KDR Softwares is an independent software product and custom technology engineering company based in Navlakha, Indore, developing CardFlow and bespoke enterprise software.',
    'telephone': '+91-98765-43210',
    'email': 'contact@kdrsoftwares.in',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Navlakha',
      'addressLocality': 'Indore',
      'addressRegion': 'Madhya Pradesh',
      'postalCode': '452001',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 22.7003,
      'longitude': 75.8797
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'opens': '09:30',
      'closes': '19:00'
    },
    'knowsAbout': [
      'Custom Software Development',
      'Identity Card Processing Automation',
      'CorelDRAW Integration',
      'Prepress Automation',
      'OCR Document Verification',
      'Python Django Engineering',
      'React Web Applications'
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://kdrsoftwares.in/#website',
    'url': 'https://kdrsoftwares.in',
    'name': 'KDR Softwares',
    'description': 'Software products and custom technology solutions engineering.',
    'publisher': {
      '@id': 'https://kdrsoftwares.in/#organization'
    }
  }
];

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      <SEOHead
        title="KDR Softwares — Software Products & Custom Technology Solutions | Indore, India"
        description="KDR Softwares builds high-performance software products like CardFlow (100k+ ID cards processed) and delivers custom software, web, mobile, and AI solutions in Indore."
        canonicalUrl="https://kdrsoftwares.in/"
        keywords="KDR Softwares, CardFlow, PrintFlow, EazeFlow, custom software development Indore, software company Madhya Pradesh, ID card management software, CorelDRAW print automation"
        ogType="website"
        ogImage="https://kdrsoftwares.in/og-image.png"
        schema={homeSchema}
      />

      {/* 1. Hero Section: 5-Second Clarity & Layered Interface Preview */}
      <HeroSection />

      {/* 2. Trust & Ecosystem Architectural Foundation */}
      <TrustSection />

      {/* 3. About KDR Softwares Editorial Narrative */}
      <AboutSection />

      {/* 4. Products Showcase (CardFlow, PrintFlow, EazeFlow) */}
      <ProductsShowcase />

      {/* 5. Services Section (Custom Software, Web, Mobile, AI) */}
      <div className="section-auto-render">
        <ServicesSection />
      </div>

      {/* 6. Why Choose KDR Softwares */}
      <div className="section-auto-render">
        <WhyChooseSection />
      </div>

      {/* 7. Statistics / Impact Metrics */}
      <div className="section-auto-render">
        <StatsSection />
      </div>

      {/* 8. Six-Stage Development Process */}
      <div className="section-auto-render">
        <ProcessSection />
      </div>

      {/* 9. Portfolio Projects Gallery */}
      <div className="section-auto-render">
        <PortfolioSection />
      </div>

      {/* 10. Genuine Verified Testimonials */}
      <div className="section-auto-render">
        <TestimonialsSection />
      </div>

      {/* 11. Transparent Pricing & Milestone Proposals */}
      <div className="section-auto-render">
        <PricingSection />
      </div>

      {/* 12. Categorized FAQ Accordion */}
      <div className="section-auto-render">
        <FaqAccordion />
      </div>

      {/* 13. Direct Contact & Consultation Booking */}
      <div className="section-auto-render">
        <ContactSection />
      </div>
    </div>
  );
};

