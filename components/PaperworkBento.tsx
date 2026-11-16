'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileCheck2,
  ShieldCheck,
  Stamp,
  Scale,
  Building,
  CheckSquare,
  Square,
  RotateCcw,
} from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import {
  AreaName,
  PAPERWORK_CHECKLIST,
  PaperworkItem,
  ServiceType,
  buildPaperworkAuditWhatsAppUrl,
} from '@/lib/property-router';

interface PaperworkBentoProps {
  selectedArea: AreaName;
  onQuickWhatsApp: (
    service: ServiceType,
    area: AreaName,
    customText?: string
  ) => void;
}

export default function PaperworkBento({
  selectedArea,
  onQuickWhatsApp,
}: PaperworkBentoProps) {
  const [checkedItems, setCheckedItems] = useState<string[]>([
    'khasra',
    'registry',
  ]);

  const toggleItem = (id: string) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const checkAll = () => {
    setCheckedItems(PAPERWORK_CHECKLIST.map((item) => item.id));
  };

  const resetAll = () => {
    setCheckedItems([]);
  };

  const auditWhatsAppUrl = buildPaperworkAuditWhatsAppUrl(
    checkedItems,
    selectedArea
  );

  const getIconForDoc = (id: PaperworkItem['id']) => {
    switch (id) {
      case 'khasra':
        return <FileCheck2 className="w-5 h-5 text-[#F59E0B] shrink-0" />;
      case 'registry':
        return <Stamp className="w-5 h-5 text-[#F59E0B] shrink-0" />;
      case 'diversion':
        return <Scale className="w-5 h-5 text-[#F59E0B] shrink-0" />;
      case 'rera':
        return <Building className="w-5 h-5 text-[#F59E0B] shrink-0" />;
    }
  };

  return (
    <section
      id="paperwork-checklist"
      aria-labelledby="paperwork-heading"
      className="bg-[#0F172A] text-white py-24 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header — White & Gold Accents on Deep Navy (#0F172A) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#F59E0B]">
              — Legal Due Diligence &amp; Paperwork Checklist
            </p>
            <motion.h2
              id="paperwork-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-serif-heading text-3xl sm:text-5xl font-medium text-white tracking-tight"
            >
              Bina kagaz check kiye deal mat kijiye.
            </motion.h2>
            <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
              Every plot or land parcel routed through New Bhojpal Properties
              undergoes a 4-point Tehsil and RERA document verification before
              we arrange a table meeting. Use our interactive checklist below to
              audit your deal.
            </p>
          </div>

          {/* Checklist Progress & Quick Controls — Rounded-3xl Floating Control Pill */}
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto p-2.5 rounded-3xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center gap-2 px-3 py-1">
              <ShieldCheck className="w-5 h-5 text-[#F59E0B]" />
              <span className="text-sm font-semibold text-white tabular-nums">
                {checkedItems.length} / {PAPERWORK_CHECKLIST.length} Verified
              </span>
            </div>
            <button
              type="button"
              onClick={checkAll}
              className="px-4 py-2 rounded-2xl bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] text-xs font-bold transition-colors cursor-pointer"
            >
              Check All 4
            </button>
            <button
              type="button"
              onClick={resetAll}
              aria-label="Reset paperwork checklist"
              className="px-3.5 py-2 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Asymmetric Bento Grid — Rounded-3xl Cards on Deep Navy (#0F172A) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PAPERWORK_CHECKLIST.map((item) => {
            const isChecked = checkedItems.includes(item.id);
            const spanClass =
              item.bentoSpan === 'large' ? 'md:col-span-2' : 'md:col-span-1';

            return (
              <div
                key={item.id}
                className={`${spanClass} rounded-3xl p-6 sm:p-8 bg-slate-900/90 border transition-all flex flex-col justify-between gap-6 ${
                  isChecked
                    ? 'border-[#F59E0B] shadow-lg shadow-[#F59E0B]/5'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-5">
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="p-3 rounded-2xl bg-slate-800/90 border border-slate-700/80 mt-0.5">
                        {getIconForDoc(item.id)}
                      </div>
                      <div>
                        <h3 className="font-serif-heading text-xl sm:text-2xl font-medium text-white leading-snug">
                          {item.displayTitle}
                        </h3>
                        <p className="text-xs font-medium text-[#F59E0B] mt-1">
                          Authority — {item.authority}
                        </p>
                      </div>
                    </div>

                    {/* Interactive Verification Toggle Button (rounded-2xl) */}
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={isChecked}
                      aria-label={`Mark ${item.title} as verified`}
                      onClick={() => toggleItem(item.id)}
                      className={`px-4 py-2 rounded-2xl text-xs font-bold inline-flex items-center gap-1.5 border transition-colors shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B] ${
                        isChecked
                          ? 'bg-[#F59E0B] text-[#0F172A] border-[#F59E0B]'
                          : 'bg-slate-800/80 text-white border-slate-700 hover:border-[#F59E0B]'
                      }`}
                    >
                      {isChecked ? (
                        <>
                          <CheckSquare className="w-4 h-4 text-[#0F172A]" />
                          <span>Verified</span>
                        </>
                      ) : (
                        <>
                          <Square className="w-4 h-4 text-slate-300" />
                          <span>Verify {item.title}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Specific Checkpoints */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800/90 space-y-2.5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">
                      Mandatory Inspection Points
                    </p>
                    <ul className="space-y-2">
                      {item.verificationChecklist.map((point, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed"
                        >
                          <span
                            aria-hidden="true"
                            className="font-bold text-[#F59E0B]"
                          >
                            —
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Status */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>{item.displayTitle}</span>
                  <span
                    className={
                      isChecked ? 'text-[#F59E0B]' : 'text-slate-500'
                    }
                  >
                    {isChecked ? 'Included in Audit ✓' : 'Click to Include'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Strip inside Paperwork Section — Rounded-3xl Floating Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 border border-[#F59E0B]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="font-serif-heading text-2xl font-medium text-white">
              Need a Free Kagaz Audit in {selectedArea}?
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Bring your seller&apos;s Khasra number or plot map to our New Jail
              Road office—we verify B-1, Registry chain, Diversion, and RERA
              status before token money is paid.
            </p>
          </div>
          <a
            href={auditWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              onQuickWhatsApp(
                'Residential Plots',
                selectedArea,
                `Namaste New Bhojpal Properties,\nMain aapki website se property inquiry kar raha/rahi hoon.\nMujhe ${selectedArea} mein kagaz verification (${checkedItems.join(', ') || 'Khasra, Registry, Diversion, RERA'}) ki details chahiye.`
              )
            }
            className="px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold text-sm inline-flex items-center justify-center gap-2.5 transition-colors whitespace-nowrap shrink-0 shadow-md"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0 text-white" />
            <span>Request Kagaz Verification on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
