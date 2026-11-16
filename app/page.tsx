'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Star,
  ShieldCheck,
  MapPin,
  Phone,
  ArrowDownRight,
  FileCheck2,
} from 'lucide-react';
import StickyBars from '@/components/StickyBars';
import AreaWhatsAppRouter from '@/components/AreaWhatsAppRouter';
import PaperworkBento from '@/components/PaperworkBento';
import SocialProofAndVisit from '@/components/SocialProofAndVisit';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import {
  AreaName,
  HERO_IMAGE_BY_AREA,
  ServiceType,
  TEL_LINK,
  buildServiceInquiryText,
  buildWhatsAppUrl,
} from '@/lib/property-router';

export default function HomePage() {
  const [selectedArea, setSelectedArea] = useState<AreaName>('Karond');
  const [activeDispatch, setActiveDispatch] = useState<{
    service: ServiceType;
    area: AreaName;
    message: string;
    url: string;
  }>(() => {
    const initialMsg = buildServiceInquiryText('Residential Plots', 'Karond');
    return {
      service: 'Residential Plots',
      area: 'Karond',
      message: initialMsg,
      url: buildWhatsAppUrl(initialMsg),
    };
  });

  const handleSelectArea = (area: AreaName) => {
    setSelectedArea(area);
    const updatedMsg = buildServiceInquiryText(activeDispatch.service, area);
    setActiveDispatch({
      service: activeDispatch.service,
      area,
      message: updatedMsg,
      url: buildWhatsAppUrl(updatedMsg),
    });
  };

  const handleTriggerInquiry = (
    service: ServiceType,
    area: AreaName,
    customText?: string
  ) => {
    const message = customText || buildServiceInquiryText(service, area);
    setActiveDispatch({
      service,
      area,
      message,
      url: buildWhatsAppUrl(message),
    });
  };

  return (
    <div
      id="top"
      className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#0F172A]"
    >
      <StickyBars
        selectedArea={selectedArea}
        onQuickWhatsApp={handleTriggerInquiry}
      />

      <main className="flex-1">
        {/* SECTION 1 (HERO): Full-screen real estate image with dark, moody overlay & white text + 3 half-floating property types at bottom */}
        <section
          aria-labelledby="hero-heading"
          className="relative z-20 flex flex-col justify-between min-h-[86vh] pt-16 sm:pt-24 pb-0"
        >
          {/* Full-screen Background Image + Dark Moody Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={HERO_IMAGE_BY_AREA[selectedArea]}
              alt={`Featured Real Estate in ${selectedArea} - Sample Property`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover scale-105 transition-transform duration-[1200ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0F172A]/80 to-[#0F172A]/95" />
          </div>

          {/* Hero Main Content — Crisp White Text for Max Contrast */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <div className="max-w-3xl space-y-6 sm:space-y-8">
              {/* Prominent Trust Badge: '5.0 ★ Rated by Bhopal' */}
              <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <span className="inline-flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F59E0B]">
                    5.0 ★ Rated by Bhopal
                  </span>
                </span>
                <span aria-hidden="true" className="text-white/40">
                  ·
                </span>
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  Est. 2011 · New Jail Road, Karond
                </span>
                <span className="px-2.5 py-0.5 rounded-2xl bg-white/15 text-[11px] font-medium text-white">
                  Sample Property
                </span>
              </div>

              {/* Required Hero Tagline */}
              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-[1.12] tracking-tight"
              >
                Karond&apos;s Trusted Property Advisors Since 2011
              </motion.h1>

              {/* Required Subtext */}
              <p className="text-lg sm:text-2xl font-normal text-white/95 max-w-2xl leading-relaxed">
                Agricultural land, residential plots, and commercial spaces.
              </p>

              <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
                Direct landowner table meetings across{' '}
                <strong className="font-semibold text-white">Karond</strong>,{' '}
                <strong className="font-semibold text-white">
                  Ayodhya Bypass
                </strong>
                , and{' '}
                <strong className="font-semibold text-white">Bhanpur</strong>{' '}
                with complete Khasra B-1, Registry, Section 172 Diversion, and
                MP RERA verification.
              </p>

              {/* Primary CTAs: Official Green (#25D366) WhatsApp & Solid Black (#000000) Call */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={buildWhatsAppUrl(
                    buildServiceInquiryText('Residential Plots', selectedArea)
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    handleTriggerInquiry('Residential Plots', selectedArea)
                  }
                  className="px-6 sm:px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold text-sm sm:text-base inline-flex items-center gap-2.5 transition-colors whitespace-nowrap shadow-lg"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0 text-white" />
                  <span>WhatsApp Inquiry ({selectedArea})</span>
                </a>

                <a
                  href={TEL_LINK}
                  className="px-6 py-4 rounded-2xl bg-[#000000] hover:bg-neutral-900 text-white border border-white/20 font-semibold text-sm sm:text-base inline-flex items-center gap-2.5 transition-colors whitespace-nowrap shadow-lg"
                >
                  <Phone className="w-4 h-4 shrink-0 text-white" />
                  <span>Call +91 72472 44535</span>
                </a>

                <a
                  href="#area-router"
                  className="px-5 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium text-sm sm:text-base inline-flex items-center gap-2 transition-colors whitespace-nowrap"
                >
                  <span>Explore Inventory</span>
                  <ArrowDownRight className="w-4 h-4 text-[#F59E0B]" />
                </a>
              </div>

              {/* Trust Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-white/85">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                  <span>Zero Disputed Titles</span>
                </span>
                <span aria-hidden="true" className="text-white/40">
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-[#F59E0B]" />
                  <span>Khasra &amp; Diversion Checked</span>
                </span>
                <span aria-hidden="true" className="text-white/40">
                  ·
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#F59E0B]" />
                  <span>New Jail Road, Karond Desk</span>
                </span>
              </div>
            </div>
          </div>

          {/* HALF-FLOATING 3 PROPERTY TYPES AT HERO BOTTOM: Connects directly into Section 2 (#F9FAFB) */}
          <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 -mb-20 sm:-mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  shortLabel: 'Land',
                  service: 'Agricultural Land' as ServiceType,
                  tagline: 'Khasra B-1 Verified Farmland & Acreage',
                  rateHint: 'From ₹35L / Acre',
                },
                {
                  shortLabel: 'Plots',
                  service: 'Residential Plots' as ServiceType,
                  tagline: 'Diverted & RERA Ready-to-Build Colonies',
                  rateHint: 'From ₹1,350 / sq.ft',
                },
                {
                  shortLabel: 'Commercial',
                  service: 'Commercial' as ServiceType,
                  tagline: 'Main Road Showroom, Mandi & Godown Spaces',
                  rateHint: 'From ₹2,900 / sq.ft',
                },
              ].map((item) => {
                const isActiveService = activeDispatch.service === item.service;
                const waUrl = buildWhatsAppUrl(
                  buildServiceInquiryText(item.service, selectedArea)
                );

                return (
                  <div
                    key={item.service}
                    className={`rounded-3xl bg-white p-5 sm:p-6 shadow-xl border transition-all flex flex-col justify-between gap-4 ${
                      isActiveService
                        ? 'border-[#25D366] ring-2 ring-[#25D366]/20'
                        : 'border-slate-200/90 hover:border-slate-300'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-2xl bg-[#0F172A] text-white text-xs font-semibold uppercase tracking-wider">
                          {item.shortLabel}
                        </span>
                        <span className="text-xs font-semibold text-slate-600 tabular-nums">
                          {selectedArea} · {item.rateHint}
                        </span>
                      </div>
                      <h2 className="font-serif-heading text-xl sm:text-2xl font-medium text-[#0F172A]">
                        {item.service}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.tagline}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
                      <a
                        href="#area-router"
                        onClick={() =>
                          handleTriggerInquiry(item.service, selectedArea)
                        }
                        className="px-3.5 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
                      >
                        <span>View in {selectedArea}</span>
                        <ArrowDownRight className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          handleTriggerInquiry(item.service, selectedArea)
                        }
                        className="px-4 py-2 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5A] text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 shrink-0 text-white" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 2: Interactive Area Selector & WhatsApp Router on Clean Off-White (#F9FAFB) */}
        <AreaWhatsAppRouter
          selectedArea={selectedArea}
          onSelectArea={handleSelectArea}
          activeDispatch={activeDispatch}
          onTriggerInquiry={handleTriggerInquiry}
        />

        {/* SECTION 3: Paperwork Checklist Bento Box on Deep Navy/Slate (#0F172A) */}
        <PaperworkBento
          selectedArea={selectedArea}
          onQuickWhatsApp={handleTriggerInquiry}
        />

        {/* Social Proof Card + Validated Site Visit Form + Footer */}
        <SocialProofAndVisit
          selectedArea={selectedArea}
          onSelectArea={handleSelectArea}
          onQuickWhatsApp={handleTriggerInquiry}
        />
      </main>
    </div>
  );
}
