import React, { useEffect, useState } from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { getTestimonials } from '../../api/client';
import { Testimonial } from '../../types';
import { Star, Building2, CheckCircle2 } from 'lucide-react';

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    customer_name: 'Rajesh Sharma',
    company: 'Sharma Graphics & Card Printing',
    designation: 'Proprietor, Indore',
    product_name: 'CardFlow',
    image: null,
    related_product: 1,
    display_order: 1,
    created_at: new Date().toISOString(),
    testimonial_text: 'CardFlow saved our printing press during the school admission rush. In previous years we worked late nights matching student photos and Excel sheets manually. CardFlow extracted 3,000 photos from messy Word files in under 20 minutes without a single mistake.',
  },
  {
    id: 2,
    customer_name: 'Pooja Tiwari',
    company: 'Saraswati Academy',
    designation: 'Administrative Head, Ujjain',
    product_name: 'VidyaFlow',
    image: null,
    related_product: 2,
    display_order: 2,
    created_at: new Date().toISOString(),
    testimonial_text: 'VidyaFlow has made handling school fees and daily attendance effortless. Even our senior office staff learned it in one single afternoon. Parents now get instant attendance messages on their phones, which has built tremendous trust.',
  },
  {
    id: 3,
    customer_name: 'Anand Patidar',
    company: 'PrintTech Studio',
    designation: 'Pre-press Operator, Bhopal',
    product_name: 'CardFlow',
    image: null,
    related_product: 1,
    display_order: 3,
    created_at: new Date().toISOString(),
    testimonial_text: 'Extracting hundreds of student photos from messy Word files was our biggest headache. CardFlow organizes the photos, catches duplicate roll numbers, and prepares clean CorelDRAW print layouts in minutes.',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(DEFAULT_TESTIMONIALS);

  useEffect(() => {
    let isMounted = true;
    getTestimonials()
      .then((data) => {
        if (isMounted && data && data.length > 0) {
          setTestimonials(data);
        }
      })
      .catch((err) => console.error('Failed to load testimonials', err));
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#FAFAFA] bg-texture-light border-b border-slate-200/80 relative">
      <Container>
        <SectionHeading
          badge="Real Client Stories"
          title="What business and school owners say about our software."
          description="Read honest feedback from printing shop owners and school administrators who use our software to save time every day."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group rounded-2xl bg-white p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" aria-hidden="true" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{t.product_name || 'Active User'}</span>
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.testimonial_text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0062E3] font-bold flex items-center justify-center text-xs border border-blue-200 shrink-0">
                  {t.customer_name.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm leading-tight truncate">
                    {t.customer_name}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight truncate">
                    {t.designation}
                  </p>
                  <p className="text-[11px] text-[#0062E3] font-medium leading-tight truncate mt-0.5">
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
