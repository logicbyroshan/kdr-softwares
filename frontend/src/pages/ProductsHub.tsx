import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { getProducts } from '../api/client';
import { Product } from '../types';
import { ArrowRight, CheckCircle2, Layers, Grid, Sparkles, AlertCircle } from 'lucide-react';

export const ProductsHub: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to load products', err))
      .finally(() => setLoading(false));
  }, []);

  const getProductIcon = (slug: string) => {
    switch (slug) {
      case 'cardflow':
        return Layers;
      case 'printflow':
        return Grid;
      case 'eazeflow':
        return Sparkles;
      default:
        return Layers;
    }
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Header */}
      <section className="pb-16 border-b border-slate-200/60 bg-gradient-to-b from-white to-[#FAFAFA]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 inline-block">
              Product Suite
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Purpose-built software platforms engineered for practical operations.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our software products designed from first principles to automate data-heavy workflows, remove clerical friction, and eliminate print errors.
            </p>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="space-y-12">
            {products.map((prod) => {
              const Icon = getProductIcon(prod.slug);
              const isCardFlow = prod.slug === 'cardflow';

              return (
                <div
                  key={prod.id}
                  className={`rounded-3xl p-8 sm:p-12 border transition-all duration-200 ${
                    isCardFlow
                      ? 'bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white border-slate-800 shadow-2xl'
                      : 'bg-white text-slate-900 border-slate-200/90 shadow-card'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200/20">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                        isCardFlow
                          ? 'bg-blue-600/20 text-blue-400 border-blue-500/40'
                          : 'bg-purple-50 text-purple-600 border-purple-200'
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h2 className={`text-2xl sm:text-3xl font-extrabold ${isCardFlow ? 'text-white' : 'text-slate-900'}`}>
                            {prod.name}
                          </h2>
                          <Badge variant={prod.status === 'active' ? 'emerald' : 'roadmap'} size="sm">
                            {prod.status === 'active' ? 'Production Active' : 'In Development'}
                          </Badge>
                          {isCardFlow && (
                            <Badge variant="blue" size="sm">
                              100,000+ Cards Handled
                            </Badge>
                          )}
                        </div>
                        <p className={`text-xs sm:text-sm font-medium mt-1 ${isCardFlow ? 'text-blue-300' : 'text-purple-600'}`}>
                          {prod.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button
                        href={`/products/${prod.slug}`}
                        variant={isCardFlow ? 'primary' : 'outline'}
                        withArrow
                      >
                        Explore {prod.name}
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
                    <div className="lg:col-span-6 space-y-4">
                      <p className={`text-sm sm:text-base leading-relaxed ${isCardFlow ? 'text-slate-300' : 'text-slate-600'}`}>
                        {prod.short_description}
                      </p>

                      {isCardFlow && (
                        <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-800/60 text-xs text-blue-200 leading-relaxed">
                          <strong className="block text-blue-300 mb-1">Print Integration Notice:</strong>
                          CardFlow manages data and production workflows. Customers use CorelDRAW or external design tools for card layout and physical printing. Integration with PrintFlow for automated print-ready rendering is on our active roadmap.
                        </div>
                      )}
                    </div>

                    <div className="lg:col-span-6">
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider block mb-3 ${
                        isCardFlow ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Key Capabilities:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {prod.features.slice(0, 6).map((feat) => (
                          <div
                            key={feat.id}
                            className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                              isCardFlow
                                ? 'bg-slate-800/60 border-slate-700/60 text-slate-200'
                                : 'bg-slate-50 border-slate-100 text-slate-700'
                            }`}
                          >
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                              feat.is_roadmap ? 'text-indigo-400' : 'text-emerald-500'
                            }`} />
                            <div>
                              <span className="font-semibold block leading-tight">{feat.title}</span>
                              {feat.is_roadmap && (
                                <span className="text-[10px] text-indigo-400 font-mono block mt-0.5">
                                  [Roadmap Capability]
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};
