import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowUpRight, Heart } from 'lucide-react';
import { Container } from '../common/Container';

export const Footer: React.FC = () => {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer className="bg-[#050B16] text-slate-300 pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* Column 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-0.5">
              <picture className="w-11 h-11 flex items-center justify-center shrink-0">
                <source srcSet="/logo.webp" type="image/webp" />
                <img 
                  src="/logo.png" 
                  alt="KDR Softwares Logo" 
                  width="44" 
                  height="44" 
                  loading="lazy" 
                  decoding="async"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,132,255,0.35)] transition-transform duration-300 group-hover:scale-105" 
                />
              </picture>
              <div>
                <span className="font-extrabold text-white tracking-tight text-2xl block leading-tight group-hover:text-cyan-400 transition-colors">
                  KDR Softwares
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Practical, easy-to-use software tools built for ID card printing agencies, schools, and local businesses. Made in Indore to eliminate manual headaches.
            </p>

            <div className="space-y-2.5 pt-1 text-sm text-slate-300">
              <a 
                href="https://wa.me/919876543210?text=Hello%20KDR%20Softwares%20team" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm sm:text-base text-slate-200 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>+91 98765 43210 (Phone &amp; WhatsApp)</span>
              </a>

              <a 
                href="mailto:contact@kdrsoftwares.in" 
                className="flex items-center gap-2.5 text-sm sm:text-base text-slate-200 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
                <span>contact@kdrsoftwares.in</span>
              </a>

              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-[#0062E3] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Navlakha, Indore, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Software Products (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm sm:text-base font-heading font-bold text-white uppercase tracking-wider mb-4">
              Our Products
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link to="/products/cardflow" className="hover:text-white transition-colors">
                  CardFlow (ID Cards)
                </Link>
              </li>
              <li>
                <Link to="/products/vidyaflow" className="hover:text-white transition-colors">
                  VidyaFlow (Schools)
                </Link>
              </li>
              <li>
                <Link to="/products/eazeflow" className="hover:text-white transition-colors">
                  EazeFlow (File Utility)
                </Link>
              </li>
              <li className="pt-1">
                <Link to="/products" className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 text-sm">
                  <span>Explore All Products</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm sm:text-base font-heading font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <a 
                  href="/#about" 
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      const el = document.getElementById('about');
                      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, options?: Record<string, unknown>) => void } }).__lenis;
                      if (el) {
                        if (lenis) lenis.scrollTo(el, { offset: -70 });
                        else el.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', '#about');
                      }
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/#why-choose" 
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      const el = document.getElementById('why-choose');
                      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, options?: Record<string, unknown>) => void } }).__lenis;
                      if (el) {
                        if (lenis) lenis.scrollTo(el, { offset: -70 });
                        else el.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', '#why-choose');
                      }
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a 
                  href="/#faq" 
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      const el = document.getElementById('faq');
                      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, options?: Record<string, unknown>) => void } }).__lenis;
                      if (el) {
                        if (lenis) lenis.scrollTo(el, { offset: -70 });
                        else el.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', '#faq');
                      }
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Questions &amp; FAQ
                </a>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      const el = document.getElementById('contact');
                      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, options?: Record<string, unknown>) => void } }).__lenis;
                      if (el) {
                        if (lenis) lenis.scrollTo(el, { offset: -70 });
                        else el.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', '#contact');
                      }
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Help & Legal (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm sm:text-base font-heading font-bold text-white uppercase tracking-wider mb-4">
              Assistance &amp; Policies
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <a 
                  href="https://wa.me/919876543210?text=Hello%20KDR%20Softwares,%20I%20want%20to%20request%20a%20demo" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>Request a Quick Demo</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      const el = document.getElementById('contact');
                      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, options?: Record<string, unknown>) => void } }).__lenis;
                      if (el) {
                        if (lenis) lenis.scrollTo(el, { offset: -70 });
                        else el.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', '#contact');
                      }
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Customer Support Desk
                </a>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link to="/privacy" className="text-sm text-slate-400 hover:text-slate-200 transition-colors block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-slate-400 hover:text-slate-200 transition-colors block">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </Container>

      {/* Full-Bleed Signature Brand Wordmark (Takes exact full width of website, flawless outline with zero intersection lines) */}
      <div className="w-full pt-8 sm:pt-12 pb-4 overflow-hidden select-none pointer-events-none">
        <svg 
          viewBox="0 0 1440 140" 
          width="100%" 
          height="auto" 
          preserveAspectRatio="xMidYMid meet" 
          className="w-full block overflow-visible select-none pointer-events-none"
        >
          <defs>
            <linearGradient id="footerTextFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="35%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="75%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="76%"
            textAnchor="middle"
            fill="transparent"
            stroke="url(#footerTextFade)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            style={{
              fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
              fontSize: '136px',
              letterSpacing: '0.045em',
              textTransform: 'uppercase',
            }}
          >
            KDR SOFTWARES
          </text>
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400 gap-4">
          <p>© {CURRENT_YEAR} KDR Softwares. All rights reserved. Navlakha, Indore, Madhya Pradesh, India.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <a href="/#faq" className="hover:text-slate-300 transition-colors">FAQs</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
