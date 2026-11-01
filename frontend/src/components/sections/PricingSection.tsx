import React, { useEffect, useState } from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { getPricingPlans } from '../../api/client';
import { PricingPlan } from '../../types';
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPricingPlans()
      .then((data) => setPlans(data))
      .catch((err) => console.error('Failed to load pricing plans', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white border-b border-slate-200/60 relative">
      <Container>
        <SectionHeading
          badge="Pricing & Engagements"
          title="Transparent models built around your operational scope."
          description="We avoid confusing recurring tiers or arbitrary seat penalties. We offer tailored licensing for CardFlow and milestone-based engagements for custom software engineering."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 sm:p-10 border transition-all duration-200 flex flex-col justify-between ${
                plan.is_featured
                  ? 'bg-gradient-to-b from-blue-50/50 to-white border-blue-300 shadow-card ring-1 ring-blue-500/20'
                  : 'bg-[#FAFAFA] border-slate-200/90 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={plan.is_featured ? 'blue' : 'slate'} size="sm">
                    {plan.product_name || 'Custom Engineering'}
                  </Badge>
                  {plan.is_featured && (
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 pb-6 border-b border-slate-200 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    / {plan.billing_period}
                  </span>
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-3">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Included in this plan:
                  </h5>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {plan.feature_list.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <Button
                  href={plan.cta_url || '/contact'}
                  variant={plan.is_featured ? 'primary' : 'outline'}
                  size="md"
                  className="w-full"
                  withArrow
                >
                  {plan.cta_text}
                </Button>
                <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 mt-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>No hidden maintenance fees or recurring seat locks</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Consultation Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-slate-800 font-semibold text-sm">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Need a custom specification for your organization?</span>
          </div>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            We review requirements, review sample spreadsheets or operational workflows, and provide tailored proposals with clearly defined delivery milestones.
          </p>
          <div className="mt-4">
            <Button href="/contact" variant="secondary" size="sm" withArrow>
              Discuss Your Project
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
