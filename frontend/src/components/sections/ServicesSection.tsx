import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Globe, Smartphone, Sparkles, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number>(0);

  const services = [
    {
      id: 1,
      num: '01',
      title: 'Custom Software Development',
      slug: 'custom-software',
      tagline: 'Tailored Business Engines & Workflow Automation',
      icon: Code2,
      summary: 'Architecting robust business management software, workflow automation engines, custom dashboards, and specialized enterprise applications tailored to your operational realities.',
      deliverables: [
        'Bespoke Business Management Systems (ERP/CRM modules)',
        'Automated Workflow & Data Pipeline Engines',
        'Interactive Analytics & Operational Dashboards',
        'Full Source Code Ownership & Zero Per-Seat Licensing',
      ],
      technologies: 'Python, Django REST Framework, PostgreSQL, Docker, Linux, Redis',
    },
    {
      id: 2,
      num: '02',
      title: 'Web Development',
      slug: 'web-development',
      tagline: 'High-Performance Web Platforms & SaaS',
      icon: Globe,
      summary: 'Crafting responsive corporate websites, complex multi-tenant SaaS platforms, customer portals, and intuitive administrative backends with modern React and Tailwind CSS.',
      deliverables: [
        'Authority-Building Corporate Websites & Brand Hubs',
        'Scalable Multi-Tenant SaaS Web Applications',
        'Secure Client Portals & Role-Based Admin Consoles',
        'Core Web Vitals Optimization, Technical SEO & Responsive Design',
      ],
      technologies: 'React, TypeScript, Tailwind CSS, Vite, REST APIs, Next.js / SSR',
    },
    {
      id: 3,
      num: '03',
      title: 'Mobile Application Development',
      slug: 'mobile-apps',
      tagline: 'Native Android & Business Mobile Solutions',
      icon: Smartphone,
      summary: 'Engineering dependable Android and cross-platform business mobile applications that empower on-ground field personnel, verification operators, and mobile teams in real time.',
      deliverables: [
        'Native Android & High-Performance Business Mobile Apps',
        'Offline-First Data Storage & Automatic Synchronization',
        'Hardware Integration (Camera, Barcode / QR Scanning, Biometrics)',
        'Secure API Authentication & Encrypted Local Caching',
      ],
      technologies: 'Android SDK, Kotlin, React Native, REST Webhooks, SQLite',
    },
    {
      id: 4,
      num: '04',
      title: 'AI Solutions',
      slug: 'ai-solutions',
      tagline: 'Intelligent Document Processing & Computer Vision',
      icon: Sparkles,
      summary: 'Pragmatic artificial intelligence: Intelligent Document Processing (IDP), OCR data extraction, face detection, automated photo matching, and intelligent workflow automation.',
      deliverables: [
        'Intelligent Document Processing (IDP) for PDFs & Scans',
        'OCR Data Extraction & Automated Structured Mapping',
        'Facial Detection, Automated Photo Cropping & Quality Audits',
        'Pragmatic ML Pipelines Integrated Directly into Production',
      ],
      technologies: 'OpenCV, PyTorch, Tesseract / TrOCR, Computer Vision, Python APIs',
    },
  ];

  const current = services[selectedService];
  const IconComponent = current.icon;

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAFAFA] border-b border-slate-200/80 relative">
      <Container>
        <SectionHeading
          badge="Engineering Services"
          title="Custom technology development built for durability and scale."
          description="Beyond our standalone products, we partner with businesses to engineer custom software, web platforms, mobile solutions, and practical AI automation."
        />

        {/* Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service Selector List (Left Column) */}
          <div className="lg:col-span-5 space-y-3" role="tablist" aria-label="Engineering services">
            {services.map((item, index) => {
              const ItemIcon = item.icon;
              const isSelected = selectedService === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`service-tab-${item.id}`}
                  aria-selected={isSelected}
                  aria-controls={`service-panel-${item.id}`}
                  onClick={() => setSelectedService(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 border flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E3] ${
                    isSelected
                      ? 'bg-white border-[#0062E3] shadow-md ring-1 ring-blue-500/20'
                      : 'bg-white/70 hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#0062E3]' : 'text-slate-400'}`}>
                      {item.num}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                      isSelected 
                        ? 'bg-blue-50 border-blue-200 text-[#0062E3]' 
                        : 'bg-slate-50 border-slate-200 text-slate-500 group-hover:text-slate-900'
                    }`} aria-hidden="true">
                      <ItemIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm sm:text-base font-bold transition-colors ${
                        isSelected ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{item.tagline}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${
                    isSelected ? 'text-[#0062E3] translate-x-1' : 'text-slate-300 group-hover:text-slate-500'
                  }`} aria-hidden="true" />
                </button>
              );
            })}
          </div>

          {/* Service Detail Showcase Panel (Right Column) */}
          <div 
            id={`service-panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${current.id}`}
            className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/90 shadow-card relative"
          >
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#0062E3] flex items-center justify-center" aria-hidden="true">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0062E3] block">
                    Service Pillar {current.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {current.title}
                  </h3>
                </div>
              </div>

              <Link
                to={`/services/${current.slug}`}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#0062E3] hover:underline"
              >
                Full Service Page <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            <p className="text-sm sm:text-base text-slate-600 mt-6 leading-relaxed">
              {current.summary}
            </p>

            {/* Deliverables Checklist */}
            <div className="mt-8 space-y-3">
              <h5 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                What We Deliver:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.deliverables.map((deliv, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-xs font-medium text-slate-700 leading-snug">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs">
                <span className="text-slate-400 block font-mono uppercase text-[10px] font-semibold">Primary Architecture:</span>
                <span className="font-bold text-slate-800">{current.technologies}</span>
              </div>

              <div className="flex items-center gap-3">
                <Button href={`/contact?type=custom_software&subject=${encodeURIComponent(current.title + ' Consultation')}`} variant="primary" size="sm" withArrow>
                  Enquire for {current.title}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
