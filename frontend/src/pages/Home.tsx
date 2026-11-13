import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProductsShowcase } from '../components/sections/ProductsShowcase';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { StatsSection } from '../components/sections/StatsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
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
        keywords="KDR Softwares, CardFlow, VidyaFlow, EazeFlow, ID card management software, school management ERP, CorelDRAW print automation, document utility"
        ogType="website"
        ogImage="https://kdrsoftwares.in/og-image.png"
        schema={homeSchema}
      />

      {/* 1. Hero Section: 5-Second Clarity & Dedicated Demo Preview */}
      <HeroSection />

      {/* 2. About KDR Softwares Editorial Narrative & Philosophy */}
      <AboutSection />

      {/* 3. Products Showcase (CardFlow, VidyaFlow, EazeFlow) */}
      <ProductsShowcase />

      {/* 4. Why Choose KDR Softwares */}
      <div className="section-auto-render">
        <WhyChooseSection />
      </div>

      {/* 5. Numbers That Speak For Themselves */}
      <div className="section-auto-render">
        <StatsSection />
      </div>

      {/* 6. What Real Clients Say */}
      <div className="section-auto-render">
        <TestimonialsSection />
      </div>

      {/* 7. Clear & Helpful Answers (FAQ) */}
      <div className="section-auto-render">
        <FaqAccordion />
      </div>

      {/* 8. Direct Contact & Office Location */}
      <div className="section-auto-render">
        <ContactSection />
      </div>
    </div>
  );
};

