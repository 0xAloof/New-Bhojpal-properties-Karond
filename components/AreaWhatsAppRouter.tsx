'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Landmark,
  Compass,
  Building2,
} from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import {
  AREAS,
  AreaName,
  SERVICE_CATALOG,
  ServiceOffering,
  ServiceType,
  WHATSAPP_NUMBER,
  buildServiceInquiryText,
  buildServiceWhatsAppUrl,
} from '@/lib/property-router';

interface AreaWhatsAppRouterProps {
  selectedArea: AreaName;
  onSelectArea: (area: AreaName) => void;
  activeDispatch: {
    service: ServiceType;
    area: AreaName;
    message: string;
    url: string;
  };
  onTriggerInquiry: (
    service: ServiceType,
    area: AreaName,
    customText?: string
  ) => void;
}

export default function AreaWhatsAppRouter({
  selectedArea,
  onSelectArea,
  activeDispatch,
  onTriggerInquiry,
}: AreaWhatsAppRouterProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentAreaMeta =
    AREAS.find((a) => a.name === selectedArea) || AREAS[0];
  const serviceCards: ServiceOffering[] = SERVICE_CATALOG[selectedArea];

  const handleCopyMessage = async (text: string, id: string) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      }
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section
      id="area-router"
      aria-labelledby="area-router-heading"
      className="bg-[#F9FAFB] pt-32 sm:pt-36 pb-24 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#0F172A]/70">
              — Interactive Area Selector &amp; WhatsApp Router
            </p>
            <motion.h2
              id="area-router-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-serif-heading text-3xl sm:text-5xl font-medium text-[#0F172A] tracking-tight"
            >
              Explore Verified Inventory by Bhopal Corridor
            </motion.h2>
            <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
              Select your preferred micro-market below to inspect current rates,
              legal titles, and connect directly with our senior advisor via
              3-line Hinglish WhatsApp routing.
            </p>
          </div>

          {/* Floating Area Selector Pill Box (rounded-3xl container with rounded-2xl buttons) */}
          <div
            role="group"
            aria-label="Select Bhopal Property Area"
            className="inline-flex flex-wrap sm:flex-nowrap items-center gap-2 p-2 rounded-3xl bg-white shadow-md border border-slate-200/90 self-start lg:self-auto"
          >
            {AREAS.map((areaObj) => {
              const isSelected = selectedArea === areaObj.name;
              return (
                <button
                  key={areaObj.name}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onSelectArea(areaObj.name)}
                  className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A] ${
                    isSelected
                      ? 'bg-[#0F172A] text-white shadow-sm'
                      : 'bg-transparent text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {areaObj.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Corridor Intelligence Strip — Crisp White rounded-3xl Card */}
        <div className="mb-12 p-6 sm:p-7 rounded-3xl bg-white shadow-sm border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0F172A]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-2xl bg-slate-100 text-[#0F172A]">
                <Compass className="w-4 h-4 text-[#F59E0B]" />
                <span>Active Zone: {currentAreaMeta.name}</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>{currentAreaMeta.corridorTag}</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span className="tabular-nums text-slate-600">
                {currentAreaMeta.officeDistance}
              </span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span className="tabular-nums text-[#0F172A]">
                {currentAreaMeta.avgAppreciation}
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {currentAreaMeta.description}
            </p>
          </div>
          <div className="shrink-0 px-4 py-2 rounded-2xl bg-slate-100 text-xs font-semibold tracking-wider uppercase text-[#0F172A]">
            3 Categories in {selectedArea}
          </div>
        </div>

        {/* 3 Service Offerings — Crisp White rounded-3xl Cards on #F9FAFB Background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card) => {
            const inquiryText = buildServiceInquiryText(
              card.service,
              selectedArea
            );
            const whatsappUrl = buildServiceWhatsAppUrl(
              card.service,
              selectedArea
            );

            return (
              <article
                key={card.id}
                className="group bg-white rounded-3xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-shadow border border-slate-200/80 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-5">
                  {/* Realistic Indian Real Estate Imagery with rounded-2xl & 1.2s Ken Burns Hover Scale */}
                  <div className="relative aspect-[4/3] w-full bg-[#0F172A] overflow-hidden rounded-2xl">
                    <img
                      src={card.imageUrl}
                      alt={`${card.service} in ${selectedArea} - ${card.imageLabel}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 bg-[#0F172A]/90 backdrop-blur-xs text-white px-3 py-1 rounded-2xl text-xs font-semibold tracking-wide">
                      {selectedArea}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-xs text-white px-3 py-1 rounded-2xl text-xs font-medium tracking-wide">
                      {card.imageLabel}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2 text-xs font-semibold">
                      <span className="uppercase tracking-wider text-[#0F172A] px-3 py-1 rounded-2xl bg-slate-100">
                        {card.service}
                      </span>
                      <span className="tabular-nums text-slate-600">
                        {card.plotSizeRange}
                      </span>
                    </div>

                    <h3 className="font-serif-heading text-2xl font-medium text-[#0F172A] leading-snug">
                      {card.service}
                    </h3>

                    <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                      {card.headline}
                    </p>

                    {/* Price & Legal Status */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-xs font-medium text-slate-500">
                          Indicative Rate
                        </span>
                        <span className="text-base font-bold text-[#0F172A] tabular-nums">
                          {card.priceRange}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <Landmark className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                        <span>{card.legalStatus}</span>
                      </div>
                    </div>

                    {/* Landmark & Highlights */}
                    <p className="text-xs sm:text-sm font-medium text-slate-700 flex items-start gap-2 leading-relaxed">
                      <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-1" />
                      <span>{card.landmark}</span>
                    </p>

                    <ul className="space-y-2 pt-1">
                      {card.highlights.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-sm text-slate-600 flex items-start gap-2.5 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-1" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3-Line Hinglish Pre-filled Message Preview & Official Green (#25D366) WhatsApp Action */}
                <div className="pt-5 border-t border-slate-200/80 space-y-4">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                    <span className="font-semibold text-[#0F172A] block mb-1">
                      3-Line Hinglish WhatsApp Payload:
                    </span>
                    <code className="font-mono text-[11px] sm:text-xs text-slate-800 whitespace-pre-line block">
                      {inquiryText}
                    </code>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        onTriggerInquiry(card.service, selectedArea)
                      }
                      aria-label={`Inquire about ${card.service} in ${selectedArea}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold text-sm transition-colors whitespace-nowrap shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A]"
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0 text-white" />
                      <span>Inquire</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-90" />
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        onTriggerInquiry(card.service, selectedArea);
                        handleCopyMessage(inquiryText, card.id);
                      }}
                      aria-label={`Copy inquiry message for ${card.service} in ${selectedArea}`}
                      className="px-4 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-semibold text-xs inline-flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      {copiedId === card.id ? (
                        <>
                          <Check className="w-4 h-4 text-[#25D366]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#0F172A]" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Live Active WhatsApp Router Dispatch Status Bar — Rounded-3xl Floating Card */}
        <div
          role="status"
          aria-live="polite"
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-white shadow-md border border-slate-200/90 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#0F172A] uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
              <span>Active 3-Line WhatsApp Router Payload</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums text-[#25D366]">
                +91 72472 44535
              </span>
            </div>
            <p className="text-sm sm:text-base font-medium text-[#0F172A] leading-relaxed whitespace-pre-line">
              {activeDispatch.message}
            </p>
            <p className="text-xs text-slate-500 font-mono break-all">
              Endpoint: {activeDispatch.url}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() =>
                handleCopyMessage(activeDispatch.message, 'dispatch-bar')
              }
              className="px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
            >
              {copiedId === 'dispatch-bar' ? (
                <>
                  <Check className="w-4 h-4 text-[#25D366]" />
                  <span>Message Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#0F172A]" />
                  <span>Copy 3-Line Text</span>
                </>
              )}
            </button>

            <a
              href={activeDispatch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors whitespace-nowrap shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0 text-white" />
              <span>Open in WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
