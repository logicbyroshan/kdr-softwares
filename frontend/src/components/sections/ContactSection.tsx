import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, MessageSquare, Send } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { submitEnquiry } from '../../api/client';
import { EnquiryPayload } from '../../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    city: '',
    product_interest: 'cardflow',
    message: '',
    website_url_hp: '', // Honeypot
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.full_name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your Phone or WhatsApp number so we can reach you.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const payload: EnquiryPayload = {
        full_name: formData.full_name,
        company_name: formData.city ? `Town: ${formData.city}` : 'Direct Customer',
        phone: formData.phone,
        email: formData.email.trim() || 'contact-request@kdrsoftwares.in',
        enquiry_type: 'product',
        subject: `Interest in ${formData.product_interest.toUpperCase()} (${formData.city || 'India'})`,
        message: formData.message || `Customer requested callback/demo for ${formData.product_interest}. City: ${formData.city || 'Not specified'}. Phone: ${formData.phone}`,
        website_url_hp: formData.website_url_hp,
      };

      const response = await submitEnquiry(payload);

      if (response.success) {
        setIsSuccess(true);
        setFormData({
          full_name: '',
          phone: '',
          email: '',
          city: '',
          product_interest: 'cardflow',
          message: '',
          website_url_hp: '',
        });
      } else {
        setErrorMessage(response.message || 'Unable to send message. Please try again or WhatsApp us.');
      }
    } catch (err: any) {
      console.error('Enquiry submission error:', err);
      setErrorMessage('Message received! You can also WhatsApp or call us directly at our phone number.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28 bg-slate-50/60 bg-texture-light border-b border-slate-200/80 relative">
      <Container>
        <SectionHeading
          badge="Get in Touch"
          title="Talk to us or request a free demo."
          description="Have questions about CardFlow, VidyaFlow, or EazeFlow? Fill out the quick form below or call/WhatsApp us directly. We are happy to help you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 mt-10 items-stretch">
          
          {/* Left Column: Balanced, Clean Modern Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
            {isSuccess ? (
              <div className="py-10 text-center space-y-4 my-auto animate-in fade-in duration-300" role="status">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200" aria-hidden="true">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900">
                  Thank You! We Received Your Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Our team in Indore will call or WhatsApp you shortly to answer your questions and arrange your demo.
                </p>
                <div className="pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5" noValidate>
                {/* Form Top Status Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                  <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active Support Desk • Quick Reply</span>
                  </div>
                  <span className="text-[11px] text-slate-400 hidden sm:inline">No obligation free demo</span>
                </div>

                {errorMessage && (
                  <div role="alert" className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot hidden input */}
                <input
                  type="text"
                  name="website_url_hp"
                  value={formData.website_url_hp}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Row 1: Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-full-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-full-name"
                      name="full_name"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.full_name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0062E3] focus:ring-3 focus:ring-blue-500/10 transition-all duration-150"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone / WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0062E3] focus:ring-3 focus:ring-blue-500/10 transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Row 2: Email and City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="e.g. ramesh@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0062E3] focus:ring-3 focus:ring-blue-500/10 transition-all duration-150"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-city" className="block text-xs font-bold text-slate-700 mb-1.5">
                      City / Town <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="contact-city"
                      name="city"
                      placeholder="e.g. Indore, Bhopal, Ujjain..."
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0062E3] focus:ring-3 focus:ring-blue-500/10 transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Row 3: Product Selector */}
                <div>
                  <label htmlFor="contact-product" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Which software are you interested in?
                  </label>
                  <div className="relative">
                    <select
                      id="contact-product"
                      name="product_interest"
                      value={formData.product_interest}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 pr-9 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#0062E3] focus:ring-3 focus:ring-blue-500/10 transition-all duration-150 appearance-none cursor-pointer"
                    >
                      <option value="cardflow">CardFlow — For ID Card Printing Agencies</option>
                      <option value="vidyaflow">VidyaFlow — For Schools &amp; Campuses</option>
                      <option value="eazeflow">EazeFlow — Document &amp; Excel Utility</option>
                      <option value="general">General Question / Other</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Message / Questions
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us what you need, ask about features, or request a quick live demo..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus:bg-white text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0062E3] focus:ring-3 focus:ring-blue-500/10 transition-all duration-150 resize-y"
                  />
                </div>

                <div className="pt-1">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto font-bold px-6 py-2.5 rounded-xl shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 active:scale-98 transition-all duration-150"
                    isLoading={isLoading}
                    withArrow
                  >
                    Send Message / Request Demo
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Help Cards + Office Map */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-5">
            
            {/* Direct Contact Options */}
            <div>
              <h3 className="font-heading font-extrabold text-slate-900 text-lg sm:text-xl mb-1">
                Direct Contact &amp; Support
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Reach our team directly by phone, WhatsApp, or email anytime.
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                {/* Phone & WhatsApp */}
                <a
                  href="https://wa.me/919876543210?text=Hello%20KDR%20Softwares%20team,%20I%20am%20interested%20in%20a%20demo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 hover:bg-emerald-50/40 border border-slate-200/80 hover:border-emerald-300 hover:shadow-2xs transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-0.5">
                      Phone &amp; WhatsApp (Fastest)
                    </span>
                    <span className="font-extrabold text-slate-900 group-hover:text-emerald-700 text-sm sm:text-base transition-colors">
                      +91 98765 43210
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@kdrsoftwares.in"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 hover:bg-blue-50/40 border border-slate-200/80 hover:border-blue-300 hover:shadow-2xs transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#0062E3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0062E3] block mb-0.5">
                      Email Us Directly
                    </span>
                    <span className="font-bold text-slate-900 group-hover:text-[#0062E3] text-xs sm:text-sm transition-colors">
                      contact@kdrsoftwares.in
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Google Map View */}
            <div className="flex-1 min-h-[190px] rounded-xl overflow-hidden border border-slate-200/90 shadow-2xs relative bg-slate-100 flex flex-col">
              <div className="px-3.5 py-2 bg-white/95 backdrop-blur-xs border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-800">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0062E3]" />
                  Office Location Map
                </span>
                <span className="text-slate-500 text-[11px]">Navlakha, Indore, MP</span>
              </div>
              <iframe
                title="KDR Softwares Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14723.364964673898!2d75.8711467!3d22.6974786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd27dbbc1c79%3A0xe5f9be8f9b98ff30!2sNavlakha%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full flex-1 border-0 min-h-[150px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
