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
  const [servicesOpen, setServicesOpen] = useState(false);
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
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isActive('/') ? 'text-[#0062E3] bg-blue-50/80 font-bold' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
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
                    to="/products/printflow"
                    onClick={onClose}
                    className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    PrintFlow (Printing Automation)
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

            {/* Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-[#0062E3]' : ''}`} aria-hidden="true" />
              </button>
              {servicesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-blue-200 ml-4 my-1">
                  <Link
                    to="/services"
                    onClick={onClose}
                    className="block px-3 py-2 text-xs font-bold text-[#0062E3] hover:underline"
                  >
                    All Services Overview →
                  </Link>
                  <Link
                    to="/services/custom-software"
                    onClick={onClose}
                    className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    Custom Software Development
                  </Link>
                  <Link
                    to="/services/web-development"
                    onClick={onClose}
                    className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/services/mobile-apps"
                    onClick={onClose}
                    className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    Mobile App Development
                  </Link>
                  <Link
                    to="/services/ai-solutions"
                    onClick={onClose}
                    className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    AI Solutions
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isActive('/portfolio') ? 'text-[#0062E3] bg-blue-50/80 font-bold' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Portfolio
            </Link>

            <Link
              to="/about"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isActive('/about') ? 'text-[#0062E3] bg-blue-50/80 font-bold' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              About
            </Link>

            <Link
              to="/faq"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isActive('/faq') ? 'text-[#0062E3] bg-blue-50/80 font-bold' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                isActive('/contact') ? 'text-[#0062E3] bg-blue-50/80 font-bold' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Footer info inside mobile drawer */}
        <div className="pt-6 border-t border-slate-100 space-y-4">
          <Button href="/contact" variant="primary" className="w-full" onClick={onClose} withArrow>
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
