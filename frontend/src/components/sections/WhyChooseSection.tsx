import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { 
  Target, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Users, 
  Sparkles
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const differentiators = [
    {
      title: 'Easy For Anyone to Use',
      description: 'Your shop or office staff does not need special computer degrees. Everything is in simple words with clear steps so anyone can start in minutes.',
      icon: Target,
      tag: 'No Training Needed',
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Tested on 100,000+ Real Records',
      description: 'Proven with high-pressure school seasons—handling messy Excel sheets, mixed photo formats, and large databases without freezing.',
      icon: Layers,
      tag: '100k+ Cards Proven',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      title: 'Runs on Normal Office PCs',
      description: 'You do not need expensive servers or high-end machines. Our software works fast and light on standard Windows computers you already have.',
      icon: Zap,
      tag: 'Works on Any PC',
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Your School Data Stays Safe',
      description: 'Student records, phone numbers, and school fees stay secure on your own system with simple password controls and instant backup options.',
      icon: ShieldCheck,
      tag: 'Safe & Private',
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
      gradient: 'from-cyan-600 to-blue-600',
    },
    {
      title: 'Direct WhatsApp & Phone Help',
      description: 'Whenever you need quick assistance or have questions during busy printing days, call or message our team in Indore directly.',
      icon: Users,
      tag: 'Direct Phone Help',
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      gradient: 'from-purple-600 to-indigo-600',
    },
    {
      title: 'Clear & Honest Pricing',
      description: 'No hidden charges, complicated annual contracts, or surprise costs. Practical software at fair pricing designed for growing businesses.',
      icon: Sparkles,
      tag: 'Honest Pricing',
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      gradient: 'from-rose-500 to-pink-600',
    },
  ];

  return (
    <section id="why-choose" className="py-24 sm:py-28 lg:py-32 bg-[#FAFAFA] border-b border-slate-200/80 relative overflow-hidden">
      <Container>
        <SectionHeading
          badge="Why KDR Softwares"
          title="Software built for real daily work, not complicated IT theory."
          description="Here is why ID card printing agencies, school administrators, and business owners choose KDR Softwares."
          align="center"
        />

        {/* Polished 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-400/80 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Top Accent Glow on Hover */}
                <div 
                  className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${diff.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} 
                  aria-hidden="true" 
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-xs group-hover:scale-105 transition-transform ${diff.color}`} aria-hidden="true">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                      {diff.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {diff.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
