import React from 'react';
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

export const Home: React.FC = () => {
  return (
    <main className="w-full">
      {/* 1. Hero Section: 5-Second Clarity & Layered Interface Preview */}
      <HeroSection />

      {/* 2. Trust & Ecosystem Architectural Foundation */}
      <TrustSection />

      {/* 3. About KDR Softwares Editorial Narrative */}
      <AboutSection />

      {/* 4. Products Showcase (CardFlow, PrintFlow, EazeFlow) */}
      <ProductsShowcase />

      {/* 5. Services Section (Custom Software, Web, Mobile, AI) */}
      <ServicesSection />

      {/* 6. Why Choose KDR Softwares */}
      <WhyChooseSection />

      {/* 7. Statistics / Impact Metrics */}
      <StatsSection />

      {/* 8. Six-Stage Development Process */}
      <ProcessSection />

      {/* 9. Portfolio Projects Gallery */}
      <PortfolioSection />

      {/* 10. Genuine Verified Testimonials */}
      <TestimonialsSection />

      {/* 11. Transparent Pricing & Milestone Proposals */}
      <PricingSection />

      {/* 12. Categorized FAQ Accordion */}
      <FaqAccordion />

      {/* 13. Direct Contact & Consultation Booking */}
      <ContactSection />
    </main>
  );
};

