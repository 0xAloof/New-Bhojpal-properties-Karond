'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Star,
  Quote,
  CheckCircle2,
  MapPin,
  Phone,
  Calendar,
  Clock,
  Shield,
} from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import {
  AREAS,
  AreaName,
  DISPLAY_PHONE,
  ServiceType,
  TEL_LINK,
  buildWhatsAppUrl,
  validateSiteVisitForm,
} from '@/lib/property-router';

interface SocialProofAndVisitProps {
  selectedArea: AreaName;
  onSelectArea: (area: AreaName) => void;
  onQuickWhatsApp: (
    service: ServiceType,
    area: AreaName,
    customText?: string
  ) => void;
}

export default function SocialProofAndVisit({
  selectedArea,
  onSelectArea,
  onQuickWhatsApp,
}: SocialProofAndVisitProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState<ServiceType>('Residential Plots');
  const [visitDate, setVisitDate] = useState('This Weekend (11:00 AM)');
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>(
    {}
  );
  const [submittedPass, setSubmittedPass] = useState<{
    fullName: string;
    cleanedPhone: string;
    area: AreaName;
    service: ServiceType;
    visitDate: string;
    whatsappUrl: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateSiteVisitForm({
      fullName,
      phone,
      area: selectedArea,
      service,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      setSubmittedPass(null);
      return;
    }

    setErrors({});
    const customMsg = `Namaste New Bhojpal Properties,\nMain aapki website se property inquiry kar raha/rahi hoon.\nMujhe ${selectedArea} mein ${service} ki details chahiye (Visitor: ${fullName.trim()}, ${validation.cleanedPhone}, Slot: ${visitDate}).`;
    const url = buildWhatsAppUrl(customMsg);
    setSubmittedPass({
      fullName: fullName.trim(),
      cleanedPhone: validation.cleanedPhone,
      area: selectedArea,
      service,
      visitDate,
      whatsappUrl: url,
    });
    onQuickWhatsApp(service, selectedArea, customMsg);
  };

  return (
    <>
      {/* Social Proof & Verified Testimonial Section — Clean Off-White (#F9FAFB) with Crisp White rounded-3xl Card */}
      <section
        id="social-proof"
        aria-labelledby="social-proof-heading"
        className="bg-[#F9FAFB] py-24 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Quantitative Local Track Record */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#0F172A]/70">
              — Verified Bhopal Track Record (Est. 2011)
            </p>
            <motion.h2
              id="social-proof-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-serif-heading text-3xl sm:text-5xl font-medium text-[#0F172A] tracking-tight"
            >
              15 Years of Clear-Title Advisory on New Jail Road
            </motion.h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Families, farmers, and commercial investors across North Bhopal
              rely on our ground-verified plots and transparent table meetings
              with landowners.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <p className="font-serif-heading text-2xl sm:text-3xl font-medium text-[#0F172A] tabular-nums">
                  2011
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  Est. in Karond
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <p className="font-serif-heading text-2xl sm:text-3xl font-medium text-[#F59E0B] tabular-nums">
                  5.0 ★
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  Justdial Rating
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <p className="font-serif-heading text-2xl sm:text-3xl font-medium text-[#0F172A] tabular-nums">
                  100%
                </p>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  Kagaz Audit
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Social Proof Card (Ritika Singh) — Rounded-3xl Floating White Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200/80 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-amber-50 text-[#D97706] font-semibold text-xs uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                <span>5.0 ★ Verified Justdial Review</span>
              </div>
              <span className="text-xs font-medium text-slate-500">
                New Jail Road, Karond Branch
              </span>
            </div>

            <blockquote className="space-y-5">
              <Quote
                aria-hidden="true"
                className="w-8 h-8 text-[#F59E0B]"
              />
              <p className="font-serif-heading text-3xl sm:text-4xl font-medium text-[#0F172A] leading-snug">
                &ldquo;...balance of affordability and quality.&rdquo;
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Guided us through every registry and Khasra verification step
                in Karond without hidden brokerage fees, helping our family
                secure a diverted residential plot within budget.
              </p>
            </blockquote>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-100">
              <p className="text-sm sm:text-base font-bold text-[#0F172A]">
                - Ritika Singh (Verified on Justdial)
              </p>
              <span className="text-xs font-semibold text-[#25D366] inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Buyer · Residential Plot</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Site Visit & Office Consultation Section — Clean Off-White (#F9FAFB) */}
      <section
        id="site-visit"
        aria-labelledby="site-visit-heading"
        className="bg-[#F9FAFB] py-24 sm:py-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Office Details & Visit Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#0F172A]/70">
                — Schedule Site Visit or Office Table Meeting
              </p>
              <motion.h2
                id="site-visit-heading"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="font-serif-heading text-3xl sm:text-5xl font-medium text-[#0F172A] tracking-tight"
              >
                Visit Our New Jail Road Office in Karond
              </motion.h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Inspect original B-1 Khasra maps, T&amp;CP layout blueprints,
                and SDM diversion orders at our desk before visiting the site in
                person.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#F59E0B] shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif-heading text-lg font-medium text-[#0F172A]">
                    Registered Office Address
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    New Bhojpal Properties, Main New Jail Road, Karond, Bhopal,
                    Madhya Pradesh 462038
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#F59E0B] shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif-heading text-lg font-medium text-[#0F172A]">
                    Site Visit &amp; Desk Timings
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed tabular-nums">
                    Monday – Sunday: 9:30 AM to 8:00 PM (Prior WhatsApp slot
                    recommended for weekend site vehicles)
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <Shield className="w-5 h-5 text-[#25D366] shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif-heading text-lg font-medium text-[#0F172A]">
                    Direct Phone &amp; WhatsApp Desk
                  </h3>
                  <p className="text-sm font-bold text-[#0F172A] mt-1 tabular-nums">
                    {DISPLAY_PHONE}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Validated Site Visit Form — Crisp White rounded-3xl Floating Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 shadow-lg border border-slate-200/80">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-medium text-[#0F172A]">
                  Generate Your Site Visit Pass &amp; WhatsApp Slot
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Fill in your details below to prepare a custom site-visit pass
                  for Karond, Ayodhya Bypass, or Bhanpur.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-6 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="visitor-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-2"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="visitor-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[#0F172A] text-sm font-normal focus:outline-2 focus:outline-[#0F172A]"
                    />
                    {errors.fullName && (
                      <p
                        role="alert"
                        className="mt-2 text-xs font-semibold text-red-600"
                      >
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="visitor-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-2"
                    >
                      10-Digit Mobile Number *
                    </label>
                    <input
                      id="visitor-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9826012345"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[#0F172A] text-sm font-normal tabular-nums focus:outline-2 focus:outline-[#0F172A]"
                    />
                    {errors.phone && (
                      <p
                        role="alert"
                        className="mt-2 text-xs font-semibold text-red-600"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label
                      htmlFor="visitor-area"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-2"
                    >
                      Preferred Area
                    </label>
                    <select
                      id="visitor-area"
                      value={selectedArea}
                      onChange={(e) =>
                        onSelectArea(e.target.value as AreaName)
                      }
                      className="w-full px-3.5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[#0F172A] text-sm font-medium focus:outline-2 focus:outline-[#0F172A]"
                    >
                      {AREAS.map((a) => (
                        <option key={a.name} value={a.name}>
                          {a.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="visitor-service"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-2"
                    >
                      Property Category
                    </label>
                    <select
                      id="visitor-service"
                      value={service}
                      onChange={(e) =>
                        setService(e.target.value as ServiceType)
                      }
                      className="w-full px-3.5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[#0F172A] text-sm font-medium focus:outline-2 focus:outline-[#0F172A]"
                    >
                      <option value="Agricultural Land">
                        Agricultural Land
                      </option>
                      <option value="Residential Plots">
                        Residential Plots
                      </option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="visitor-slot"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-2"
                    >
                      Preferred Visit Slot
                    </label>
                    <select
                      id="visitor-slot"
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="w-full px-3.5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[#0F172A] text-sm font-medium focus:outline-2 focus:outline-[#0F172A]"
                    >
                      <option value="Today Evening (5:00 PM)">
                        Today Evening (5:00 PM)
                      </option>
                      <option value="Tomorrow Morning (11:00 AM)">
                        Tomorrow Morning (11:00 AM)
                      </option>
                      <option value="This Weekend (11:00 AM)">
                        This Weekend (11:00 AM)
                      </option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold text-sm inline-flex items-center justify-center gap-2.5 transition-colors cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Site Visit &amp; Generate WhatsApp Pass</span>
                </button>
              </form>

              {submittedPass && (
                <div
                  role="status"
                  className="mt-6 p-5 rounded-2xl bg-slate-50 border border-[#25D366] space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#25D366]">
                      Site Visit Pass Ready
                    </span>
                    <span className="text-xs font-mono text-[#0F172A] tabular-nums">
                      +91 {submittedPass.cleanedPhone}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#0F172A] leading-relaxed">
                    Visitor: {submittedPass.fullName} · {submittedPass.service}{' '}
                    in {submittedPass.area} ({submittedPass.visitDate})
                  </p>
                  <a
                    href={submittedPass.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold text-xs shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0 text-white" />
                    <span>Send Pass to Advisor on WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Navy (#0F172A) Footer with Solid Black (#000000) Call CTA & Official Green (#25D366) WhatsApp CTA */}
      <footer className="bg-[#0F172A] text-white border-t border-slate-800 pt-16 pb-28 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3">
            <p className="font-serif-heading text-xl font-bold uppercase tracking-wider text-white">
              NEW BHOJPAL PROPERTIES<span className="text-[#F59E0B]">.</span>
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Est. 2011 · New Jail Road, Karond, Bhopal · Agricultural Land,
              Residential Plots &amp; Commercial Spaces
            </p>
            <p className="text-xs text-[#F59E0B] font-medium leading-relaxed">
              Bina kagaz check kiye deal mat kijiye — Khasra (खसरा B-1 / P-II) ·
              Registry (पंजीकृत विक्रय पत्र) · Diversion (धारा 172 डायवर्सन) ·
              RERA (रेरा पंजीकरण)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={TEL_LINK}
              className="px-5 py-3 rounded-2xl bg-[#000000] hover:bg-neutral-900 text-white border border-white/20 font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap shadow-sm"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call {DISPLAY_PHONE}</span>
            </a>
            <a
              href={buildWhatsAppUrl(
                `Namaste New Bhojpal Properties,\nMain aapki website se property inquiry kar raha/rahi hoon.\nMujhe ${selectedArea} mein Residential Plots ki details chahiye.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0 text-white" />
              <span>WhatsApp Advisor</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
