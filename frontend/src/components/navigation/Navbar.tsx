import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { MegaMenu } from './MegaMenu';
import { MobileDrawer } from './MobileDrawer';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll state for styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or route change
  useEffect(() => {
    setProductsOpen(false);
    setMobileDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white/70 backdrop-blur-sm border-b border-slate-200/40 py-4.5'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo / Wordmark */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-0.5">
              <img 
                src="/logo.svg" 
                alt="KDR Softwares" 
                className="w-9 h-9 rounded-xl shadow-sm transition-transform duration-200 group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-slate-900 tracking-tight text-lg leading-none">
                  KDR Softwares
                </span>
                <span className="text-[10px] font-semibold text-blue-600 tracking-wider uppercase mt-1">
                  Products & Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-blue-600 bg-blue-50/70'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              {/* Products MegaMenu Trigger */}
              <div 
                className="relative" 
                ref={dropdownRef}
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setProductsOpen(!productsOpen)}
                  aria-expanded={productsOpen}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 inline-flex items-center gap-1 ${
                    isActive('/products') || productsOpen
                      ? 'text-blue-600 bg-blue-50/70'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                {productsOpen && <MegaMenu onClose={() => setProductsOpen(false)} />}
              </div>

              <Link
                to="/services"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                  isActive('/services')
                    ? 'text-blue-600 bg-blue-50/70'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Services
              </Link>

              <Link
                to="/portfolio"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                  isActive('/portfolio')
                    ? 'text-blue-600 bg-blue-50/70'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Portfolio
              </Link>

              <Link
                to="/about"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                  isActive('/about')
                    ? 'text-blue-600 bg-blue-50/70'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                About
              </Link>

              <Link
                to="/faq"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                  isActive('/faq')
                    ? 'text-blue-600 bg-blue-50/70'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                FAQ
              </Link>

              <Link
                to="/contact"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                  isActive('/contact')
                    ? 'text-blue-600 bg-blue-50/70'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
                withArrow
              >
                Get in Touch
              </Button>

              <button
                type="button"
                onClick={() => setMobileDrawerOpen(true)}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 lg:hidden transition-colors"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
      />
    </>
  );
};

