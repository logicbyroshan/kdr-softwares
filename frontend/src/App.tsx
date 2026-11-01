import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/footer/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ProductsHub } from './pages/ProductsHub';
import { ProductDetail } from './pages/ProductDetail';
import { ServicesHub } from './pages/ServicesHub';
import { ServiceDetail } from './pages/ServiceDetail';
import { PortfolioHub } from './pages/PortfolioHub';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { Container } from './components/common/Container';
import { Button } from './components/common/Button';

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
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 selection:bg-blue-600 selection:text-white">
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Dynamic Route Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsHub />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<PortfolioHub />} />
            <Route path="/portfolio/:slug" element={<PortfolioHub />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
