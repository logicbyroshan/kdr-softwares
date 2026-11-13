import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, Mail, MapPin } from 'lucide-react';
import { Button } from '../common/Button';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  if (!isOpen) return null;

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200 z-10">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-100">
            <Link to="/" onClick={onClose} className="flex items-center gap-3">
              <picture className="w-9 h-9 flex items-center justify-center shrink-0">
                <source srcSet="/logo.webp" type="image/webp" />
                <img src="/logo.png" alt="KDR Softwares Logo" width="36" height="36" loading="lazy" decoding="async" className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(0,98,227,0.25)]" />
              </picture>
              <span className="font-extrabold text-slate-900 tracking-tight text-lg">KDR Softwares</span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-slate-500 hover:text-slate-800 rounded-xl hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="mt-6 space-y-1">
            <Link
              to="/"
              onClick={() => {
                onClose();
                const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, options?: Record<string, unknown>) => void } }).__lenis;
                if (lenis) {
                  lenis.scrollTo(0, { duration: 0.8 });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isActive('/') && (!location.hash || location.hash === '#') ? 'text-[#0062E3] bg-blue-50/80 font-bold' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Products Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setProductsOpen(!productsOpen)}
                aria-expanded={productsOpen}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180 text-[#0062E3]' : ''}`} aria-hidden="true" />
              </button>
              {productsOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-blue-200 ml-4 my-1">
                  <Link
                    to="/products"
                    onClick={onClose}
                    className="block px-3 py-2 text-xs font-bold text-[#0062E3] hover:underline"
                  >
                    All Products Overview →
                  </Link>
                  <Link
                    to="/products/cardflow"
                    onClick={onClose}
                    className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    CardFlow (ID Production Platform)
                  </Link>
                  <Link
                    to="/products/vidyaflow"
                    onClick={onClose}
                    className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    VidyaFlow (Smart School System)
                  </Link>
                  <Link
                    to="/products/eazeflow"
                    onClick={onClose}
                    className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    EazeFlow (Document Utility)
                  </Link>
                </div>
              )}
            </div>

            <a
              href="/#why-choose"
              onClick={(e) => {
                onClose();
                if (location.pathname === '/') {
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
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              Why Choose Us
            </a>

            <a
              href="/#about"
              onClick={(e) => {
                onClose();
                if (location.pathname === '/') {
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
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              About
            </a>

            <a
              href="/#faq"
              onClick={(e) => {
                onClose();
                if (location.pathname === '/') {
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
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              FAQ
            </a>

            <a
              href="/#contact"
              onClick={(e) => {
                onClose();
                if (location.pathname === '/') {
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
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Footer info inside mobile drawer */}
        <div className="pt-6 border-t border-slate-100 space-y-4">
          <Button 
            href="/#contact" 
            variant="primary" 
            className="w-full" 
            onClick={(e) => {
              onClose();
              if (location.pathname === '/') {
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
            withArrow
          >
            Get in Touch
          </Button>

          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#0062E3] shrink-0" aria-hidden="true" />
              <a href="mailto:contact@kdrsoftwares.in" className="hover:text-slate-900">
                contact@kdrsoftwares.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#0062E3] shrink-0" aria-hidden="true" />
              <span>Navlakha, Indore, MP, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
