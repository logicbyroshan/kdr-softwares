import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { MegaMenu } from './MegaMenu';
import { MobileDrawer } from './MobileDrawer';

// Typing effect for KDR Softwares brand wordmark
const BrandTypewriter: React.FC<{ isDarkHeader: boolean }> = ({ isDarkHeader }) => {
  const fullText = "KDR Softwares";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const len = displayText.length;

    if (!isDeleting) {
      if (len < fullText.length) {
        timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, len + 1));
        }, 110);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 5000);
      }
    } else {
      if (len > 3) {
        timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, len - 1));
        }, 60);
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <span className={`font-black font-heading tracking-tight text-lg sm:text-xl leading-none transition-colors inline-flex items-center ${
      isDarkHeader
        ? 'text-white group-hover:text-cyan-300'
        : 'text-slate-900 group-hover:text-[#0062E3]'
    }`}>
      <span>{displayText || "KDR Softwares"}</span>
      <span className={`ml-0.5 inline-block w-[2px] h-[1em] ${
        isDarkHeader ? 'bg-cyan-400' : 'bg-[#0062E3]'
      } animate-pulse`} aria-hidden="true" />
    </span>
  );
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHomePage = location.pathname === '/';

  // Monitor scroll state for styling
  useEffect(() => {
    const handleScroll = () => {
      // On homepage, the dark hero is tall (~85vh-95vh), so stay in executive dark mode until passing hero
      const threshold = isHomePage ? 500 : 25;
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Close menu and drawer synchronously on route change
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setProductsOpen(false);
    setMobileDrawerOpen(false);
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleScrollTo = (e: React.MouseEvent, sectionId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, options?: Record<string, unknown>) => void } }).__lenis;
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { offset: -70 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.pushState(null, '', `#${sectionId}`);
      }
    }
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' && (!location.hash || location.hash === '#');
    return location.pathname.startsWith(path);
  };

  // Stays dark, executive and solid while viewing the dark hero section on home
  const isDarkHeader = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 py-3 ${
          isDarkHeader
            ? 'bg-[#070D1A] border-b border-slate-800/80 text-white'
            : isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/90 text-slate-900'
            : 'bg-white border-b border-slate-200/80 text-slate-900'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo / Wordmark */}
            <Link 
              to="/" 
              onClick={() => {
                const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, options?: Record<string, unknown>) => void } }).__lenis;
                if (lenis) {
                  lenis.scrollTo(0, { duration: 1 });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-0.5"
            >
              <picture className="w-9 h-9 sm:w-9.5 sm:h-9.5 flex items-center justify-center shrink-0">
                <source srcSet="/logo.webp" type="image/webp" />
                <img 
                  src="/logo.png" 
                  alt="KDR Softwares" 
                  width="38" 
                  height="38" 
                  decoding="async" 
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,132,255,0.35)] transition-transform duration-200 group-hover:scale-105" 
                />
              </picture>
              <div className="flex flex-col">
                <BrandTypewriter isDarkHeader={isDarkHeader} />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                to="/"
                onClick={() => {
                  const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, options?: Record<string, unknown>) => void } }).__lenis;
                  if (lenis) {
                    lenis.scrollTo(0, { duration: 1 });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 ${
                  isDarkHeader
                    ? isActive('/') && (!location.hash || location.hash === '#')
                      ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-800/60'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                    : isActive('/') && (!location.hash || location.hash === '#')
                    ? 'text-[#0062E3] bg-blue-50/90'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/80'
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
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 inline-flex items-center gap-1.5 ${
                    isDarkHeader
                      ? isActive('/products') || productsOpen
                        ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-800/60'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                      : isActive('/products') || productsOpen
                      ? 'text-[#0062E3] bg-blue-50/90'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/80'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                {productsOpen && <MegaMenu onClose={() => setProductsOpen(false)} />}
              </div>

              <a
                href="/#why-choose"
                onClick={(e) => handleScrollTo(e, 'why-choose')}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 ${
                  isDarkHeader
                    ? location.hash === '#why-choose'
                      ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-800/60'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                    : location.hash === '#why-choose'
                    ? 'text-[#0062E3] bg-blue-50/90'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                Why Choose Us
              </a>

              <a
                href="/#about"
                onClick={(e) => handleScrollTo(e, 'about')}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 ${
                  isDarkHeader
                    ? location.hash === '#about'
                      ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-800/60'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                    : location.hash === '#about'
                    ? 'text-[#0062E3] bg-blue-50/90'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                About
              </a>

              <a
                href="/#faq"
                onClick={(e) => handleScrollTo(e, 'faq')}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 ${
                  isDarkHeader
                    ? location.hash === '#faq'
                      ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-800/60'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                    : location.hash === '#faq'
                    ? 'text-[#0062E3] bg-blue-50/90'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                FAQ
              </a>

              <a
                href="/#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 ${
                  isDarkHeader
                    ? location.hash === '#contact'
                      ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-800/60'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                    : location.hash === '#contact'
                    ? 'text-[#0062E3] bg-blue-50/90'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                Contact
              </a>
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-2.5">
              <Button
                href="/#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex font-bold px-4 py-2 rounded-lg text-xs sm:text-sm"
                withArrow
              >
                Get in Touch
              </Button>

              <button
                type="button"
                onClick={() => setMobileDrawerOpen(true)}
                className={`p-2.5 rounded-xl transition-colors lg:hidden focus:outline-none focus-visible:ring-2 ${
                  isDarkHeader
                    ? 'text-white hover:bg-white/10 focus-visible:ring-cyan-400'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-[#0062E3]'
                }`}
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
