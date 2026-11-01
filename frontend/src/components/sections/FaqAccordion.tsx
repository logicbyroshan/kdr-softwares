import React, { useEffect, useState } from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { getFaqs } from '../../api/client';
import { FAQ } from '../../types';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    getFaqs()
      .then((data) => {
        setFaqs(data);
        if (data.length > 0) setOpenId(data[0].id);
      })
      .catch((err) => console.error('Failed to load FAQs', err));
  }, []);

  const categories = [
    { key: 'all', label: 'All Questions' },
    { key: 'general', label: 'General' },
    { key: 'products', label: 'Products' },
    { key: 'services', label: 'Services' },
    { key: 'support', label: 'Support & Maintenance' },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAFAFA] border-b border-slate-200/60 relative">
      <Container size="narrow">
        <SectionHeading
          badge="Frequently Answered Questions"
          title="Clear answers to common questions about our products & services."
          description="Everything you need to know about our business areas, CardFlow's production capabilities, custom engineering, and technical support."
          align="center"
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                activeCategory === cat.key
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-blue-200 shadow-sm'
                    : 'bg-white/80 border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 shrink-0">
                      {faq.category_display || faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Card */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 text-center flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-slate-900 text-sm">Have a question not listed here?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Our technical team in Indore is ready to assist you.</p>
          </div>
          <a
            href="mailto:contact@kdrsoftwares.in"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors shrink-0"
          >
            <Mail className="w-4 h-4 text-blue-600" />
            <span>contact@kdrsoftwares.in</span>
          </a>
        </div>
      </Container>
    </section>
  );
};
