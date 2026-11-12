import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { submitEnquiry } from '../../api/client';
import { EnquiryPayload } from '../../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryPayload>(() => {
    let initialType: any = 'general';
    let initialSubject = '';
    let initialMessage = '';

    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        const typeParam = params.get('type');
        const subjectParam = params.get('subject');
        const planParam = params.get('plan');

        if (typeParam) initialType = typeParam;
        if (subjectParam) initialSubject = subjectParam;
        else if (planParam) initialSubject = `${planParam} Inquiry`;

        if (planParam) {
          initialMessage = `Hello KDR Softwares team,\n\nWe are interested in discussing the ${planParam} plan for our operations.`;
        }
      } catch {
        // Ignore URL parsing errors
      }
    }

    return {
      full_name: '',
      company_name: '',
      email: '',
      phone: '',
      enquiry_type: initialType,
      subject: initialSubject,
      message: initialMessage,
      website_url_hp: '', // Honeypot
    };
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const enquiryTypes = [
    { value: 'general', label: 'General Enquiry' },
    { value: 'product', label: 'Product Enquiry (CardFlow / PrintFlow / EazeFlow)' },
    { value: 'custom_software', label: 'Custom Software Development' },
    { value: 'web_development', label: 'Web Development' },
    { value: 'mobile_apps', label: 'Mobile Application Development' },
    { value: 'ai_solutions', label: 'AI Solutions & OCR Extraction' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    // Validation
    if (!formData.full_name.trim() || !formData.company_name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }

    if (formData.message.trim().length < 10) {
      setErrorMessage('Please provide a message with at least 10 characters describing your inquiry.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await submitEnquiry(formData);
      if (response.success) {
        setIsSuccess(true);
        setFormData({
          full_name: '',
          company_name: '',
          email: '',
          phone: '',
          enquiry_type: 'general',
          subject: '',
          message: '',
          website_url_hp: '',
        });
      } else {
        setErrorMessage(response.message || 'Unable to submit enquiry. Please try again.');
      }
    } catch (err: any) {
      console.error('Enquiry submission error:', err);
      const serverMsg = err.response?.data?.message || err.response?.data?.detail || 'An error occurred while submitting your enquiry. Please reach us directly at contact@kdrsoftwares.in.';
      setErrorMessage(serverMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative">
      <Container>
        <SectionHeading
          badge="Start a Conversation"
          title="Let's discuss your software product or custom engineering requirements."
          description="Whether you want to license CardFlow for your printing agency or explore a custom technology build, our engineering team in Indore is ready to consult."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10 items-start">
          {/* Left Column: Validated Contact Form */}
          <div className="lg:col-span-7 bg-[#FAFAFA] rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card">
            {isSuccess ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300" role="status">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200" aria-hidden="true">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Thank You for Your Enquiry
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your message has been securely recorded and dispatched to our engineering desk. Our team will review your requirements and respond promptly to your email.
                </p>
                <div className="pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {errorMessage && (
                  <div role="alert" className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot hidden input for spam protection */}
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-full-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name <span className="text-rose-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-full-name"
                      name="full_name"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.full_name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E3] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Company / Organization <span className="text-rose-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-company-name"
                      name="company_name"
                      required
                      placeholder="e.g. Patel Print Solutions"
                      value={formData.company_name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E3] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Business Email Address <span className="text-rose-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      placeholder="ramesh@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E3] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E3] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-enquiry-type" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Enquiry Category <span className="text-rose-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="contact-enquiry-type"
                      name="enquiry_type"
                      value={formData.enquiry_type}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E3] transition-all"
                    >
                      {enquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Subject <span className="text-rose-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      required
                      placeholder="e.g. CardFlow Licensing Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E3] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Project Overview or Operational Requirements <span className="text-rose-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Please describe your current operational workflow, volume of records, or the custom software requirements you wish to discuss..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062E3] transition-all resize-y"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto min-w-[200px]"
                    isLoading={isLoading}
                    withArrow
                  >
                    Send Confidential Inquiry
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Location & Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#FAFAFA] border border-slate-200/90 shadow-card space-y-5">
              <h3 className="font-extrabold text-slate-900 text-lg">
                Direct Communication Desks
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/70">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0062E3] flex items-center justify-center shrink-0" aria-hidden="true">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-bold uppercase">General Enquiries</span>
                    <a href="mailto:contact@kdrsoftwares.in" className="font-bold text-slate-900 hover:text-[#0062E3] transition-colors">
                      contact@kdrsoftwares.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/70">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0084FF] flex items-center justify-center shrink-0" aria-hidden="true">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-bold uppercase">Technical Support</span>
                    <a href="mailto:support@kdrsoftwares.in" className="font-bold text-slate-900 hover:text-[#0084FF] transition-colors">
                      support@kdrsoftwares.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/70">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0A2558] flex items-center justify-center shrink-0" aria-hidden="true">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-bold uppercase">Registered Location</span>
                    <span className="font-semibold text-slate-900">
                      Navlakha, Indore, Madhya Pradesh, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/70">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0062E3] flex items-center justify-center shrink-0" aria-hidden="true">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-bold uppercase">Review Turnaround</span>
                    <span className="font-semibold text-slate-900">
                      Within 24–48 Business Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed for Navlakha, Indore, MP */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-card bg-slate-100">
              <div className="px-5 py-3 bg-white border-b border-slate-200/70 flex items-center justify-between text-xs font-bold text-slate-800">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0062E3]" aria-hidden="true" />
                  Navlakha, Indore, Madhya Pradesh
                </span>
                <span className="text-slate-500 font-mono text-[11px]">Map View</span>
              </div>
              <iframe
                title="KDR Softwares Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14723.364964673898!2d75.8711467!3d22.6974786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd27dbbc1c79%3A0xe5f9be8f9b98ff30!2sNavlakha%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-56 border-0"
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
