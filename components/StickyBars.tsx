'use client';

import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import {
  AreaName,
  DISPLAY_PHONE,
  ServiceType,
  TEL_LINK,
  buildServiceInquiryText,
  buildWhatsAppUrl,
} from '@/lib/property-router';

interface StickyBarsProps {
  selectedArea: AreaName;
  onQuickWhatsApp: (
    service: ServiceType,
    area: AreaName,
    customText?: string
  ) => void;
}

export default function StickyBars({
  selectedArea,
  onQuickWhatsApp,
}: StickyBarsProps) {
  const generalWhatsAppMessage = buildServiceInquiryText(
    'Residential Plots',
    selectedArea
  );
  const generalWhatsAppUrl = buildWhatsAppUrl(generalWhatsAppMessage);

  return (
    <>
      {/* Sticky Top Bar — Crisp White/95 backdrop with Deep Navy (#0F172A) text, Gold accent, Solid Black Call & Official Green (#25D366) WhatsApp CTA */}
      <header className="sticky top-0 z-40 h-16 bg-white/95 backdrop-blur-md text-[#0F172A] border-b border-slate-200/80 px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 shadow-xs">
        {/* Zone 1: Typographic Logo + Required Top Bar Trust String (Stacked cleanly for zero overlap) */}
        <div className="flex flex-col justify-center min-w-0 shrink-0">
          <a
            href="#top"
            className="font-serif-heading text-xs sm:text-base md:text-lg font-bold uppercase tracking-wider text-[#0F172A] whitespace-nowrap leading-tight focus-visible:outline-2 focus-visible:outline-[#25D366]"
          >
            NEW BHOJPAL PROPERTIES<span className="text-[#F59E0B]">.</span>
          </a>
          <p className="text-[11px] sm:text-xs font-medium text-slate-600 whitespace-nowrap leading-tight mt-0.5">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#F59E0B] shrink-0 hidden sm:inline" />
              <span>New Jail Road, Karond | 5.0 ★ Justdial</span>
            </span>
          </p>
        </div>

        {/* Zone 2: Desktop Single-Line Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-700"
        >
          <a
            href="#area-router"
            className="hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Area Inventory
          </a>
          <a
            href="#paperwork-checklist"
            className="hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Kagaz Checklist
          </a>
          <a
            href="#social-proof"
            className="hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Reviews
          </a>
          <a
            href="#site-visit"
            className="hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Book Site Visit
          </a>
        </nav>

        {/* Zone 3: Desktop Actions — Solid Black (#000000) Call CTA + Strict Official Green (#25D366) WhatsApp CTA */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <a
            href={TEL_LINK}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#000000] hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <Phone className="w-4 h-4 shrink-0 text-white" />
            <span>{DISPLAY_PHONE}</span>
          </a>
          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              onQuickWhatsApp(
                'Residential Plots',
                selectedArea,
                generalWhatsAppMessage
              )
            }
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0 text-white" />
            <span>WhatsApp Now</span>
          </a>
        </div>
      </header>

      {/* Fixed Bottom Action Bar on Mobile — Two 50% width rounded-2xl buttons: [Call Now] (#000000) and [WhatsApp Now] (#25D366) */}
      <div
        role="region"
        aria-label="Mobile Quick Contact Actions"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 flex items-center gap-2 shadow-lg"
      >
        <a
          href={TEL_LINK}
          className="w-1/2 h-12 rounded-2xl flex items-center justify-center gap-2 bg-[#000000] hover:bg-neutral-800 text-white font-semibold text-sm whitespace-nowrap shadow-xs"
        >
          <Phone className="w-4 h-4 text-white shrink-0" />
          <span>Call Now</span>
        </a>
        <a
          href={generalWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            onQuickWhatsApp(
              'Residential Plots',
              selectedArea,
              generalWhatsAppMessage
            )
          }
          className="w-1/2 h-12 rounded-2xl flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold text-sm whitespace-nowrap shadow-xs"
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0 text-white" />
          <span>WhatsApp Now</span>
        </a>
      </div>
    </>
  );
}
