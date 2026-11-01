import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { getProduct } from '../api/client';
import { Product, ProductFeature } from '../types';
import { 
  CheckCircle2, 
  Layers, 
  ArrowLeft, 
  Info, 
  ArrowRight, 
  Download, 
  FileCheck, 
  Smartphone, 
  Wand2, 
  Database, 
  ShieldCheck 
} from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getProduct(slug)
      .then((data) => {
        setProduct(data);
        setError(null);
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
        setError('Product not found.');
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-36 pb-20 text-center">
        <Container>
          <div className="animate-pulse space-y-4 max-w-lg mx-auto">
            <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto" />
            <div className="h-12 bg-slate-200 rounded w-2/3 mx-auto" />
            <div className="h-32 bg-slate-200 rounded" />
          </div>
        </Container>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="pt-36 pb-20 text-center">
        <Container>
          <div className="max-w-md mx-auto p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Product Not Found</h2>
            <p className="text-sm text-slate-600">The product you requested does not exist or has been updated.</p>
            <Button href="/products" variant="primary">Back to Products</Button>
          </div>
        </Container>
      </div>
    );
  }

  const isCardFlow = product.slug === 'cardflow';
  const verifiedFeatures = product.features.filter((f) => !f.is_roadmap);
  const roadmapFeatures = product.features.filter((f) => f.is_roadmap);

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Top Breadcrumb & Hero */}
      <section className="pb-16 border-b border-slate-200/60 bg-gradient-to-b from-white to-[#FAFAFA]">
        <Container>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Products</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <Badge variant={product.status === 'active' ? 'emerald' : 'roadmap'} size="md">
                  {product.status === 'active' ? 'Production Active' : 'In Development / Roadmap'}
                </Badge>
                {isCardFlow && (
                  <Badge variant="blue" size="md">
                    100,000+ Production Cards Processed
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-lg sm:text-xl text-blue-600 font-semibold">
                {product.tagline}
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {product.short_description}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card shrink-0 space-y-4 lg:w-80">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                Licensing & Access
              </span>
              <div className="text-xl font-bold text-slate-900">
                {isCardFlow ? 'Commercial Agency License' : 'Available on Launch'}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {isCardFlow 
                  ? 'Custom agency quotation based on institution volume and annual production season.'
                  : 'Currently in development. Early access testing available upon request.'}
              </p>
              <Button href="/contact" variant="primary" size="md" className="w-full" withArrow>
                {isCardFlow ? 'Enquire for CardFlow' : 'Request Early Access'}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CardFlow Workflow & External Print Notice */}
      {isCardFlow && (
        <section className="py-8 bg-blue-50/50 border-b border-blue-100">
          <Container>
            <div className="p-5 rounded-2xl bg-white border border-blue-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="font-semibold text-slate-900 block mb-0.5">
                    How CardFlow Fits Into Physical Printing Operations:
                  </strong>
                  CardFlow manages data collection, spreadsheets, photo extraction, duplicate checks, and verified exports. Agencies use CorelDRAW or external design software for physical layout and printing. Automated print-ready card generation with PrintFlow is actively on our roadmap.
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full shrink-0 self-start md:self-auto">
                CorelDRAW Integrated
              </span>
            </div>
          </Container>
        </section>
      )}

      {/* Narrative Section */}
      <section className="py-16 md:py-20 border-b border-slate-200/60 bg-white">
        <Container size="narrow">
          <div className="space-y-6 text-slate-700 text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Platform Architecture & Purpose
            </h2>
            <div className="whitespace-pre-line text-slate-600 leading-relaxed">
              {product.full_description}
            </div>
          </div>
        </Container>
      </section>

      {/* Verified Capabilities */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] border-b border-slate-200/60">
        <Container>
          <SectionHeading
            badge="Verified Capabilities"
            title="Production-tested features available now."
            description={`Every capability below is fully operational in ${product.name} and built for high-throughput daily use.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {verifiedFeatures.map((feat) => (
              <div
                key={feat.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-card hover:border-blue-200 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <DynamicIcon name={feat.icon_name} className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Production Ready</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Roadmap Capabilities */}
      {roadmapFeatures.length > 0 && (
        <section className="py-16 md:py-20 bg-white border-b border-slate-200/60">
          <Container>
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/60 inline-block mb-3">
                Roadmap Milestones
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Future capabilities under active development.
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                In adherence to our strict transparency principles, the following features are actively progressing along our product roadmap and are not yet released for general production.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {roadmapFeatures.map((feat) => (
                <div
                  key={feat.id}
                  className="p-6 rounded-2xl bg-indigo-50/40 border border-indigo-200/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                        <DynamicIcon name={feat.icon_name} className="w-5 h-5" />
                      </div>
                      <Badge variant="roadmap" size="sm">
                        In Progress
                      </Badge>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-indigo-100/80 text-[11px] font-mono text-indigo-700 font-semibold">
                    Planned Integration Phase
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Box */}
      <section className="py-16 bg-[#FAFAFA]">
        <Container size="narrow">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-5 shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to streamline your {product.name} operations?
            </h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
              Schedule a technical demonstration or request a licensing quote tailored to your institution volume.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Request a Demonstration
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
