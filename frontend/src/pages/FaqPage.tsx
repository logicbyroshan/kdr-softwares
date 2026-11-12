import React, { useEffect, useState } from 'react';
import { Container } from '../components/common/Container';
import { getFaqs } from '../api/client';
import { FAQ } from '../types';
import { Search, ChevronDown, Mail, HelpCircle } from 'lucide-react';
import { Button } from '../components/common/Button';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const FaqPage: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
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

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.slice(0, 15).map((f) => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.answer
      }
    }))
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <SEOHead
        title="Frequently Asked Questions & Technical Knowledge Base | KDR Softwares"
        description="Detailed answers regarding CardFlow ID automation, CorelDRAW export, custom software timelines, licensing models, and support policies."
        canonicalUrl="https://kdrsoftwares.in/faq"
        keywords="KDR Softwares FAQ, CardFlow questions, CorelDRAW integration guide, software licensing India, custom software quotation"
        ogType="article"
        breadcrumbs={[{ name: 'Knowledge Base', url: 'https://kdrsoftwares.in/faq' }]}
        schema={faqSchema}
      />

      {/* Header */}
      <section className="pb-16 border-b border-slate-200/60 bg-gradient-to-b from-white to-[#FAFAFA]">
        <Container>
          <Breadcrumbs items={[{ name: 'Knowledge Base', url: '/faq' }]} />
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 inline-block">
              Knowledge Base
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Frequently Answered Questions
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore detailed answers regarding our software products, custom development procedures, licensing options, and support commitments.
            </p>

            {/* Live Search Bar */}
            <div className="pt-4 max-w-xl">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  aria-label="Search frequently asked questions"
                  placeholder="Search questions (e.g. CardFlow, CorelDRAW, custom software, quotation)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Accordion */}
      <section className="py-16 md:py-24">
        <Container size="narrow">
          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                  activeCategory === cat.key
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 text-base">No matching questions found</h3>
              <p className="text-xs text-slate-500 mt-1">Try another keyword or contact our support desk directly.</p>
              <div className="mt-4">
                <Button href="/contact" variant="primary" size="sm">
                  Contact Support
                </Button>
              </div>
            </div>
          ) : (
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
          )}

          {/* Help Box */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 text-center flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-bold text-slate-900 text-sm">Have a question not listed here?</h4>
              <p className="text-xs text-slate-500 mt-0.5">Reach our dedicated support team at support@kdrsoftwares.in.</p>
            </div>
            <a
              href="mailto:support@kdrsoftwares.in"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors shrink-0"
            >
              <Mail className="w-4 h-4 text-brand-cobalt" />
              <span>support@kdrsoftwares.in</span>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};
