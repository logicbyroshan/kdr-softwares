import React, { useEffect, useState } from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { getFaqs } from '../../api/client';
import { FAQ } from '../../types';
import { ChevronDown } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    getFaqs()
      .then((data) => {
        if (isMounted) {
          setFaqs(data);
          if (data.length > 0) setOpenId(data[0].id);
        }
      })
      .catch((err) => console.error('Failed to load FAQs', err));
    return () => {
      isMounted = false;
    };
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
    <section id="faq" className="py-20 md:py-28 bg-[#FAFAFA] border-b border-slate-200/80 relative">
      <Container size="narrow">
        <SectionHeading
          badge="Frequently Answered Questions"
          title="Clear answers to common questions about our products & services."
          description="Everything you need to know about our business areas, CardFlow's production capabilities, custom engineering, and technical support."
          align="center"
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10" role="tablist" aria-label="FAQ categories">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E3] ${
                activeCategory === cat.key
                  ? 'bg-[#0062E3] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200/90 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#0062E3]/40 shadow-sm ring-1 ring-blue-500/10'
                    : 'bg-white/80 border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E3]"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#0062E3] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">
                      {faq.category_display || faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0062E3]' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
