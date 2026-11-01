import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, ChevronRight, Mail, MapPin } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-100">
            <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
              <img src="/logo.svg" alt="KDR Softwares Logo" className="w-8 h-8 rounded-lg shadow-sm" />
              <span className="font-bold text-slate-900 tracking-tight text-lg">KDR Softwares</span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="mt-6 space-y-1">
            <Link
              to="/"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/') ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Products Accordion */}
            <div>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-blue-100 ml-4 my-1">
                  <Link
                    to="/products"
                    onClick={onClose}
                    className="block px-3 py-2 text-xs font-semibold text-blue-600 hover:text-blue-700"
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
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-blue-100 ml-4 my-1">
                  <Link
                    to="/services"
                    onClick={onClose}
                    className="block px-3 py-2 text-xs font-semibold text-blue-600 hover:text-blue-700"
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
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/portfolio') ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Portfolio
            </Link>

            <Link
              to="/about"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/about') ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              About
            </Link>

            <Link
              to="/faq"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/faq') ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/contact') ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
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

          <div className="space-y-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <a href="mailto:contact@kdrsoftwares.in" className="hover:text-slate-800">
                contact@kdrsoftwares.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Navlakha, Indore, MP, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
