import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/footer/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { SkipToContent } from './components/common/SkipToContent';
import { Container } from './components/common/Container';
import { Button } from './components/common/Button';

// Eagerly load Homepage for instant LCP and zero hydration layout shift
import { Home } from './pages/Home';

// Route-level code splitting for secondary pages
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const ProductsHub = lazy(() => import('./pages/ProductsHub').then((m) => ({ default: m.ProductsHub })));
const ProductDetail = lazy(() => import('./pages/ProductDetail').then((m) => ({ default: m.ProductDetail })));
const ServicesHub = lazy(() => import('./pages/ServicesHub').then((m) => ({ default: m.ServicesHub })));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then((m) => ({ default: m.ServiceDetail })));
const PortfolioHub = lazy(() => import('./pages/PortfolioHub').then((m) => ({ default: m.PortfolioHub })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const FaqPage = lazy(() => import('./pages/FaqPage').then((m) => ({ default: m.FaqPage })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })));
const TermsConditions = lazy(() => import('./pages/TermsConditions').then((m) => ({ default: m.TermsConditions })));

// Accessible Route Loading Skeleton
const RouteLoadingSkeleton: React.FC = () => (
  <div className="pt-36 pb-24 min-h-[60vh] flex items-center justify-center" aria-busy="true" aria-live="polite">
    <Container size="narrow">
      <div className="space-y-4 max-w-md mx-auto text-center animate-pulse">
        <div className="w-12 h-12 rounded-2xl bg-blue-100 mx-auto" />
        <div className="h-6 bg-slate-200 rounded-md w-3/4 mx-auto" />
        <div className="h-4 bg-slate-100 rounded-md w-1/2 mx-auto" />
        <span className="sr-only">Loading page content...</span>
      </div>
    </Container>
  </div>
);

// 404 Component
const NotFound: React.FC = () => (
  <div className="pt-36 pb-24 text-center">
    <Container size="narrow">
      <div className="p-12 rounded-3xl bg-white border border-slate-200/90 shadow-card max-w-lg mx-auto space-y-5">
        <span className="font-mono text-4xl font-extrabold text-blue-600 block">404</span>
        <h1 className="text-2xl font-bold text-slate-900">Page Not Found</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The page or resource you are looking for has been moved or does not exist.
        </p>
        <div className="pt-2">
          <Button href="/" variant="primary" withArrow>
            Return to Homepage
          </Button>
        </div>
      </div>
    </Container>
  </div>
);

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis Smooth Momentum Scrolling
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    (window as any).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return (
    <Router>
      <SkipToContent />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 selection:bg-blue-600 selection:text-white">
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Dynamic Route Content with Suspense Boundary */}
        <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
          <Suspense fallback={<RouteLoadingSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Navigate to="/#about" replace />} />
              <Route path="/contact" element={<Navigate to="/#contact" replace />} />
              <Route path="/faq" element={<Navigate to="/#faq" replace />} />
              <Route path="/products" element={<ProductsHub />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/services" element={<ServicesHub />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/portfolio" element={<PortfolioHub />} />
              <Route path="/portfolio/:slug" element={<PortfolioHub />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
