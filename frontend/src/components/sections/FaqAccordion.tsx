import React, { useEffect, useState } from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { getFaqs } from '../../api/client';
import { FAQ } from '../../types';
import { ChevronDown } from 'lucide-react';

const DEFAULT_FAQS: FAQ[] = [
  {
    id: 1,
    question: 'How does CardFlow extract photos pasted inside Word files?',
    answer: 'Schools often paste student photos directly into Microsoft Word tables or send them with messy filenames. CardFlow scans the Word document, extracts each high-resolution photo automatically, and matches it with the correct student roll number and name from your Excel list in seconds.',
    category: 'cardflow',
    category_display: 'CardFlow (For Printing)',
    display_order: 1,
  },
  {
    id: 2,
    question: 'Does our office staff need computer training to use VidyaFlow?',
    answer: 'No. VidyaFlow is designed with simple, clear screens in plain language. Most school office staff and teachers learn how to mark attendance, collect fees, and print fee receipts in less than 15 minutes.',
    category: 'vidyaflow',
    category_display: 'VidyaFlow (For Schools)',
    display_order: 2,
  },
  {
    id: 3,
    question: 'Do we need high-end computers or expensive servers?',
    answer: 'Not at all. Our software is engineered to run fast and light on standard office desktop PCs or laptops running Windows 10 or 11 with normal internet connectivity.',
    category: 'general',
    category_display: 'General & Support',
    display_order: 3,
  },
  {
    id: 4,
    question: 'How does KDR Softwares provide customer support?',
    answer: 'We provide direct phone and WhatsApp support from our engineering and customer desk in Indore. During busy printing or school admission months, you can call or message us directly for instant help.',
    category: 'general',
    category_display: 'General & Support',
    display_order: 4,
  },
];

export const FaqAccordion: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>(DEFAULT_FAQS);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<number | null>(1);

  useEffect(() => {
    let isMounted = true;
    getFaqs()
      .then((data) => {
        if (isMounted && data && data.length > 0) {
          setFaqs(data);
          setOpenId(data[0].id);
        }
      })
      .catch((err) => console.error('Failed to load FAQs', err));
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = [
    { key: 'all', label: 'All Questions' },
    { key: 'cardflow', label: 'CardFlow (For Printing)' },
    { key: 'vidyaflow', label: 'VidyaFlow (For Schools)' },
    { key: 'general', label: 'General & Support' },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-28 lg:py-32 bg-[#FAFAFA] border-b border-slate-200/80 relative">
      <Container size="narrow">
        <SectionHeading
          badge="Got Questions?"
          title="Simple, clear answers to help you get started."
          description="Everything you need to know about how our software works, how easy it is to learn, and how we support you."
          align="center"
        />

        {/* Simple Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10" role="tablist" aria-label="FAQ categories">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E3] ${
                activeCategory === cat.key
                  ? 'bg-[#0062E3] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/90'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQs List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border bg-white shadow-2xs overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-[#0062E3]/60 shadow-sm ring-1 ring-blue-500/10' : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0062E3]"
                >
                  <span className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                    isOpen ? 'text-[#0062E3]' : 'text-slate-900'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-blue-50 text-[#0062E3] rotate-180 scale-105' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}>
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p>{faq.answer}</p>
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
