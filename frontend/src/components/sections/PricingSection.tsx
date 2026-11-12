import React, { useEffect, useState } from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { getPricingPlans } from '../../api/client';
import { PricingPlan } from '../../types';
import { Check, ShieldCheck } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);

  useEffect(() => {
    let isMounted = true;
    getPricingPlans()
      .then((data) => {
        if (isMounted) setPlans(data);
      })
      .catch((err) => console.error('Failed to load pricing plans', err));
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative">
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
                  ? 'bg-gradient-to-b from-blue-50/60 to-white border-[#0062E3]/40 shadow-card ring-1 ring-blue-500/20'
                  : 'bg-[#FAFAFA] border-slate-200/90 shadow-2xs hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={plan.is_featured ? 'blue' : 'slate'} size="sm">
                    {plan.product_name || 'Custom Engineering'}
                  </Badge>
                  {plan.is_featured && (
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0062E3] bg-blue-100/80 px-2.5 py-0.5 rounded-full border border-blue-200">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 pb-6 border-b border-slate-200/80 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    / {plan.billing_period}
                  </span>
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-3">
                  <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Included in this plan:
                  </h5>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {plan.feature_list.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80">
                <Button
                  href={plan.cta_url || `/contact?type=product&plan=${encodeURIComponent(plan.name)}&subject=${encodeURIComponent(plan.name + ' Inquiry')}`}
                  variant={plan.is_featured ? 'primary' : 'outline'}
                  size="md"
                  className="w-full"
                  withArrow
                >
                  {plan.cta_text}
                </Button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 mt-3 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                  <span>No hidden maintenance fees or recurring seat locks</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
