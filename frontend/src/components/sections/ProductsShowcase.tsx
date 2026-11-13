import React from 'react';
import { 
  Layers, 
  GraduationCap, 
  Sparkles, 
  Check, 
  ArrowRight
} from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const ProductsShowcase: React.FC = () => {
  const products = [
    {
      id: 'cardflow',
      name: 'CardFlow',
      category: 'For ID Card Printing Agencies',
      tagline: 'Process Thousands of ID Cards Without Errors',
      description: 'Handles all your client schools in one place. Automatically extracts photos from Word files, checks for duplicate roll numbers, and exports files ready for CorelDRAW printing.',
      slug: 'cardflow',
      icon: Layers,
      badge: 'ID Card System',
      capabilities: [
        'Import messy Excel & Word files from schools',
        'Auto photo extraction & student matching',
        'Catches duplicate roll numbers & errors',
        'Exports clean files directly for CorelDRAW',
      ],
      ctaText: 'See How CardFlow Works',
    },
    {
      id: 'vidyaflow',
      name: 'VidyaFlow',
      category: 'For Schools & Colleges',
      tagline: 'Complete School & Campus Management',
      description: 'A single, simple system for student admissions, daily attendance with automated SMS to parents, fee collection with instant receipts, and easy report cards.',
      slug: 'vidyaflow',
      icon: GraduationCap,
      badge: 'School ERP',
      capabilities: [
        'Student & staff records in one place',
        'Daily attendance with parent SMS alerts',
        'Easy fee collection & printable receipts',
        'Print exam marks & report cards easily',
      ],
      ctaText: 'See How VidyaFlow Works',
    },
    {
      id: 'eazeflow',
      name: 'EazeFlow',
      category: 'For Office & Data Work',
      tagline: 'Clean & Fix Messy Spreadsheets Fast',
      description: 'Fixes broken Excel files, removes unnecessary spaces, corrects text mistakes, and formats messy tables in seconds without manual retyping.',
      slug: 'eazeflow',
      icon: Sparkles,
      badge: 'Excel & Data Utility',
      capabilities: [
        'Fixes messy Excel sheets in one click',
        'Cleans extra spaces & broken text',
        'Converts Word tables to clean Excel',
        'Works safely on your office computer',
      ],
      ctaText: 'See How EazeFlow Works',
    },
  ];

  return (
    <section id="products" className="py-20 sm:py-24 lg:py-28 bg-white bg-texture-light border-b border-slate-200/80 relative">
      <Container>
        <SectionHeading
          badge="Our Software Products"
          title="Simple, reliable software made for real daily work."
          description="Straightforward tools designed to save you hours of manual typing, prevent costly mistakes, and help your printing shop or school run smoothly."
          align="center"
        />

        {/* 3-Product Harmonized Grid (Balanced, clean, simple words) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {products.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden p-6 sm:p-7 relative"
              >
                <div>
                  {/* Header: Product Logo slot + Badge */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                    {/* Dedicated Place for Product Logo */}
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold shadow-xs shrink-0 group-hover:bg-[#0062E3] transition-colors duration-200">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                          {item.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 group-hover:text-[#0062E3] transition-colors leading-tight">
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold text-slate-700 bg-slate-100/90 border border-slate-200/90 px-2.5 py-0.5 rounded-full shadow-2xs">
                      {item.badge}
                    </span>
                  </div>

                  {/* Tagline & Description */}
                  <div className="pt-4">
                    <p className="text-xs font-bold text-slate-800">
                      {item.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Core Capabilities */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      What It Does For You:
                    </span>
                    <ul className="space-y-2">
                      {item.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-7 pt-4 border-t border-slate-100">
                  <Button
                    href={`/products/${item.slug}`}
                    variant="outline"
                    size="sm"
                    withArrow
                    className="w-full font-semibold justify-between group-hover:border-slate-400 group-hover:text-slate-900"
                  >
                    <span>{item.ctaText}</span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
