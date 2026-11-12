import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Container } from '../common/Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-850">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <picture className="w-11 h-11 flex items-center justify-center shrink-0">
                <source srcSet="/logo.webp" type="image/webp" />
                <img 
                  src="/logo.png" 
                  alt="KDR Softwares" 
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,132,255,0.35)] transition-transform duration-300 group-hover:scale-105" 
                />
              </picture>
              <div>
                <span className="font-extrabold text-white tracking-tight text-xl block leading-tight group-hover:text-cyan-400 transition-colors">
                  KDR Softwares
                </span>
                <span className="text-[11px] font-semibold text-blue-400 tracking-wider uppercase">
                  Products & Solutions
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We develop practical software products like CardFlow and architect bespoke enterprise technology solutions that eliminate operational friction and accelerate growth.
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div className="flex flex-col text-xs">
                  <span className="text-slate-400">General Enquiries:</span>
                  <a href="mailto:contact@kdrsoftwares.in" className="text-white hover:text-blue-400 font-medium transition-colors">
                    contact@kdrsoftwares.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div className="flex flex-col text-xs">
                  <span className="text-slate-400">Technical Support:</span>
                  <a href="mailto:support@kdrsoftwares.in" className="text-white hover:text-purple-400 font-medium transition-colors">
                    support@kdrsoftwares.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="text-slate-400 block">Registered Office:</span>
                  <span className="text-white">Navlakha, Indore, Madhya Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-3">
              <a 
                href="https://linkedin.com/company/kdrsoftwares" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 1.53-1.53A1.53 1.53 0 0 0 6.46 5.7a1.53 1.53 0 0 0-1.53 1.53c0 .85.68 1.53 1.53 1.53m1.39 9.74v-8.37H5.07v8.37h2.78Z"/></svg>
              </a>
              <a 
                href="https://x.com/kdrsoftwares" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a 
                href="https://github.com/kdrsoftwares" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
              </a>
              <a 
                href="https://youtube.com/@kdrsoftwares" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products/cardflow" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>CardFlow Platform</span>
                  <span className="text-[10px] bg-blue-900/60 text-blue-300 px-1.5 py-0.5 rounded border border-blue-700/50">Active</span>
                </Link>
              </li>
              <li>
                <Link to="/products/printflow" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>PrintFlow Engine</span>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">Roadmap</span>
                </Link>
              </li>
              <li>
                <Link to="/products/eazeflow" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>EazeFlow Utility</span>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">Roadmap</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 pt-1">
                  <span>All Products Hub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/custom-software" className="hover:text-white transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="hover:text-white transition-colors">
                  Web Applications & SaaS
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-apps" className="hover:text-white transition-colors">
                  Mobile Application Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/ai-solutions" className="hover:text-white transition-colors">
                  AI & Intelligent Document OCR
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 pt-1">
                  <span>Services Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About KDR
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Consultations
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-900">
                <Link to="/privacy" className="text-xs text-slate-400 hover:text-slate-200 transition-colors block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-xs text-slate-400 hover:text-slate-200 transition-colors block">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} KDR Softwares. All rights reserved. Registered in Indore, Madhya Pradesh, India.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <a href="http://127.0.0.1:8000/admin/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-400 transition-colors">Admin Portal</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
