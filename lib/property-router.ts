export type AreaName = 'Karond' | 'Ayodhya Bypass' | 'Bhanpur';

export type ServiceType = 'Agricultural Land' | 'Residential Plots' | 'Commercial';

export interface ServiceOffering {
  id: string;
  service: ServiceType;
  area: AreaName;
  headline: string;
  priceRange: string;
  plotSizeRange: string;
  landmark: string;
  legalStatus: string;
  highlights: string[];
  imageUrl: string;
  imageLabel: string;
}

export interface PaperworkItem {
  id: 'khasra' | 'registry' | 'diversion' | 'rera';
  title: 'Khasra' | 'Registry' | 'Diversion' | 'RERA';
  displayTitle: string;
  hindiTerm: string;
  authority: string;
  summary: string;
  verificationChecklist: string[];
  bentoSpan: 'large' | 'standard';
}

export const WHATSAPP_NUMBER = '917247244535';
export const DISPLAY_PHONE = '+91 72472 44535';
export const TEL_LINK = 'tel:+917247244535';

export const HERO_IMAGE_BY_AREA: Record<AreaName, string> = {
  Karond:
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
  'Ayodhya Bypass':
    'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=1600&q=80',
  Bhanpur:
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80',
};

export const AREAS: {
  name: AreaName;
  corridorTag: string;
  avgAppreciation: string;
  officeDistance: string;
  description: string;
}[] = [
  {
    name: 'Karond',
    corridorTag: 'New Jail Road & Mandi Corridor',
    avgAppreciation: '12–15% p.a. historical',
    officeDistance: '0.5 km from Office',
    description:
      'High-demand residential colonies, farmhouses, and mandi-linked commercial frontage along New Jail Road and Karond Square.',
  },
  {
    name: 'Ayodhya Bypass',
    corridorTag: '6-Lane Ring Connectivity Belt',
    avgAppreciation: '14–18% p.a. historical',
    officeDistance: '4.2 km from Office',
    description:
      'Rapidly expanding RERA-approved residential townships and showroom plots connecting North Bhopal to BHEL and Hoshangabad Road.',
  },
  {
    name: 'Bhanpur',
    corridorTag: 'Vidisha Highway Growth Zone',
    avgAppreciation: '11–14% p.a. historical',
    officeDistance: '2.8 km from Office',
    description:
      'Affordable residential plots, warehousing pockets, and clear-title agricultural holdings near Bhanpur Bridge and People’s Campus.',
  },
];

export const SERVICE_CATALOG: Record<AreaName, ServiceOffering[]> = {
  Karond: [
    {
      id: 'karond-agri',
      service: 'Agricultural Land',
      area: 'Karond',
      headline: 'Black-Soil & Farmhouse Holdings — New Jail Road Belt',
      priceRange: '₹42 Lakh – ₹1.15 Cr / Acre',
      plotSizeRange: '0.5 Acre to 5 Acres',
      landmark: 'Near Karond Krishi Upaj Mandi & Lambakheda Link',
      legalStatus: 'Clear B-1 / P-II Khasra · Immediate Mutation',
      highlights: [
        'Direct tarred road approach with 24x7 borewell water table',
        'Single-family chain of title verified at Tehsil Nazul',
        'Ideal for organic farming, godown conversion, or weekend estate',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      imageLabel: 'Sample Property',
    },
    {
      id: 'karond-res',
      service: 'Residential Plots',
      area: 'Karond',
      headline: 'Diverted Ready-to-Build Plots — New Jail Road',
      priceRange: '₹1,650 – ₹2,400 / sq.ft',
      plotSizeRange: '800 sq.ft to 2,400 sq.ft',
      landmark: 'Walking distance from New Jail Road & Karond Chauraha',
      legalStatus: 'Section 172 Diverted · Nagar Nigam Ward Limits',
      highlights: [
        '30 ft & 40 ft wide RCC internal roads with underground drainage',
        'Bank loan eligibility from SBI, PNB Housing & LIC HFL',
        'Surrounded by occupied families, schools, and hospital access',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=800&q=80',
      imageLabel: 'Sample Property',
    },
    {
      id: 'karond-comm',
      service: 'Commercial',
      area: 'Karond',
      headline: 'Main Road Showroom & Mandi Frontage Spaces',
      priceRange: '₹3,800 – ₹6,200 / sq.ft',
      plotSizeRange: '400 sq.ft to 5,000 sq.ft',
      landmark: 'New Jail Road Main Commercial Strip, Karond',
      legalStatus: 'Commercial Diversion · High FSI Frontage',
      highlights: [
        'High daily footfall near Krishi Mandi & residential entry gates',
        'Dedicated parking apron for retail, clinic, bank, or hardware store',
        'Clear demarcation (Seemankan) with immediate registry possession',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      imageLabel: 'Sample Property',
    },
  ],
  'Ayodhya Bypass': [
    {
      id: 'ayodhya-agri',
      service: 'Agricultural Land',
      area: 'Ayodhya Bypass',
      headline: 'Highway-Touch Land Parcels — Ayodhya Extension',
      priceRange: '₹65 Lakh – ₹1.60 Cr / Acre',
      plotSizeRange: '0.5 Acre to 3 Acres',
      landmark: 'Off Ayodhya Bypass towards Kokta & Raisen Link',
      legalStatus: 'Verified Rin Pustika · Master Plan Growth Zone',
      highlights: [
        'High capital appreciation zone within Bhopal Master Plan belt',
        'Zero encumbrance certificate (12-year Search Report ready)',
        'Suited for institutional campus, marriage garden, or township',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
      imageLabel: 'Sample Property',
    },
    {
      id: 'ayodhya-res',
      service: 'Residential Plots',
      area: 'Ayodhya Bypass',
      headline: 'RERA-Registered Gated Township Plots',
      priceRange: '₹2,400 – ₹3,600 / sq.ft',
      plotSizeRange: '1,000 sq.ft to 3,000 sq.ft',
      landmark: 'Near Minal Residency & People’s Mall Corridor',
      legalStatus: 'MP RERA Approved · T&CP Sanctioned Layout',
      highlights: [
        'Gated boundary wall, landscaped parks, and MPSEB transformer',
        'East and North facing corner plots available with clear registry',
        '10-minute drive to BHEL, MP Nagar, and Habibganj connectivity',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=800&q=80',
      imageLabel: 'Sample Property',
    },
    {
      id: 'ayodhya-comm',
      service: 'Commercial',
      area: 'Ayodhya Bypass',
      headline: '6-Lane Service Road Commercial & SCO Plots',
      priceRange: '₹5,200 – ₹8,500 / sq.ft',
      plotSizeRange: '600 sq.ft to 6,000 sq.ft',
      landmark: 'Ayodhya Bypass 6-Lane Service Road Frontage',
      legalStatus: 'Commercial T&CP Layout · Clear Freehold Registry',
      highlights: [
        'Direct visibility from 6-lane highway traffic',
        'Ideal for automobile showroom, diagnostic center, or retail hub',
        'Complete chain of registry & Nagar Nigam NOC verified',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      imageLabel: 'Sample Property',
    },
  ],
  Bhanpur: [
    {
      id: 'bhanpur-agri',
      service: 'Agricultural Land',
      area: 'Bhanpur',
      headline: 'Fertile Irrigated Land — Bhanpur–Vidisha Road',
      priceRange: '₹35 Lakh – ₹85 Lakh / Acre',
      plotSizeRange: '1 Acre to 8 Acres',
      landmark: 'Beyond Bhanpur Overbridge & Raslakhedi Belt',
      legalStatus: 'Verified Khasra B-1 · On-Site Seemankan Done',
      highlights: [
        'Budget-friendly entry price with strong highway expansion upside',
        'Physical boundary pillars installed after revenue demarcation',
        'Direct farmer-to-buyer transparent table meeting',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
      imageLabel: 'Sample Property',
    },
    {
      id: 'bhanpur-res',
      service: 'Residential Plots',
      area: 'Bhanpur',
      headline: 'Affordable Family Plots — Bhanpur Main Road',
      priceRange: '₹1,350 – ₹1,950 / sq.ft',
      plotSizeRange: '600 sq.ft to 1,800 sq.ft',
      landmark: 'Near People’s University & Bhanpur Multi-Specialty Hospital',
      legalStatus: 'Diverted Residential · Immediate नामांतरण (Mutation)',
      highlights: [
        'Best balance of affordability and quality for first-time home buyers',
        '25 ft & 30 ft wide murrum/concrete roads with electricity poles',
        'Clear registry with zero hidden brokerage surprises',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=800&q=80',
      imageLabel: 'Sample Property',
    },
    {
      id: 'bhanpur-comm',
      service: 'Commercial',
      area: 'Bhanpur',
      headline: 'Godown, Logistics & Highway Shop Plots',
      priceRange: '₹2,900 – ₹4,800 / sq.ft',
      plotSizeRange: '500 sq.ft to 10,000 sq.ft',
      landmark: 'Bhanpur Square & Vidisha Road Industrial Link',
      legalStatus: 'Commercial / Logistics Diversion Verified',
      highlights: [
        'Easy heavy-vehicle turn radius near outer bypass junction',
        'Suited for wholesale depot, cold storage, or highway retail shops',
        'All revenue taxes and diversion challans paid up to 2026',
      ],
      imageUrl:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      imageLabel: 'Sample Property',
    },
  ],
};

export const PAPERWORK_CHECKLIST: PaperworkItem[] = [
  {
    id: 'khasra',
    title: 'Khasra',
    displayTitle: 'Khasra (खसरा B-1 / P-II)',
    hindiTerm: 'खसरा B-1 / P-II',
    authority: 'MP Bhulekh Revenue Portal',
    summary:
      'Confirms exact survey number, total land area, seller ownership name in revenue records, and zero government acquisition or stay order.',
    verificationChecklist: [
      'Cross-check seller name in current year Form B-1 & P-II on MP Bhulekh',
      'Verify Naksha (cadastral map) matches physical road & plot orientation',
      'Confirm zero mortgage (bandhak) entry in Column 12 remarks',
    ],
    bentoSpan: 'large',
  },
  {
    id: 'registry',
    title: 'Registry',
    displayTitle: 'Registry (पंजीकृत विक्रय पत्र)',
    hindiTerm: 'पंजीकृत विक्रय पत्र',
    authority: 'IGRS MP (Sampada 2.0)',
    summary:
      'Establishes unbroken 12-to-30 year chain of title deeds and confirms the previous buyer completed official revenue mutation (Namantaran).',
    verificationChecklist: [
      'Inspect original registered sale deed with Sub-Registrar seal & QR code',
      'Match boundary neighbours (Chauhaddee: North, South, East, West)',
      'Verify Rin Pustika / Bhu-Adhikar book updated after last registry',
    ],
    bentoSpan: 'standard',
  },
  {
    id: 'diversion',
    title: 'Diversion',
    displayTitle: 'Diversion (धारा 172 डायवर्सन)',
    hindiTerm: 'धारा 172 डायवर्सन',
    authority: 'SDM / Nazul Revenue Court',
    summary:
      'Mandatory legal conversion of agricultural land to residential or commercial use under MP Land Revenue Code Section 172 before building.',
    verificationChecklist: [
      'Verify official SDM Diversion Order case number and diversion map',
      'Check paid receipts of annual Bhu-Bhatak (diverted land tax)',
      'Confirm land use matches Residential or Commercial master plan zone',
    ],
    bentoSpan: 'standard',
  },
  {
    id: 'rera',
    title: 'RERA',
    displayTitle: 'RERA (रेरा पंजीकरण)',
    hindiTerm: 'रेरा पंजीकरण',
    authority: 'MP RERA & Town and Country Planning',
    summary:
      'Protects plot buyers in developed colonies by guaranteeing approved road widths, open park allocation, drainage, and electrification.',
    verificationChecklist: [
      'Validate active MP RERA registration number on rera.mp.gov.in',
      'Check T&CP sanctioned layout plot number before token payment',
      'Ensure colony completion or mortgaged plot release certificate',
    ],
    bentoSpan: 'large',
  },
];

/**
 * Generates the exact 3-line Hinglish WhatsApp inquiry text for a selected service and area.
 */
export function buildServiceInquiryText(
  service: ServiceType,
  area: AreaName
): string {
  return `Namaste New Bhojpal Properties,\nMain aapki website se property inquiry kar raha/rahi hoon.\nMujhe ${area} mein ${service} ki details chahiye.`;
}

/**
 * Generates the full WhatsApp URL (wa.me/917247244535) with URL-encoded 3-line message.
 */
export function buildWhatsAppUrl(message: string): string {
  const trimmed = message.trim();
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(trimmed)}`;
}

/**
 * Shortcut to build a service card WhatsApp inquiry link.
 */
export function buildServiceWhatsAppUrl(
  service: ServiceType,
  area: AreaName
): string {
  return buildWhatsAppUrl(buildServiceInquiryText(service, area));
}

/**
 * Builds a WhatsApp message for the Paperwork Audit checklist in 3-line Hinglish format.
 */
export function buildPaperworkAuditWhatsAppUrl(
  checkedIds: string[],
  area: AreaName
): string {
  const titles = PAPERWORK_CHECKLIST.filter((item) =>
    checkedIds.includes(item.id)
  ).map((item) => item.displayTitle);

  const docsList =
    titles.length > 0
      ? titles.join(', ')
      : 'Khasra, Registry, Diversion, RERA';

  const message = `Namaste New Bhojpal Properties,\nMain aapki website se property inquiry kar raha/rahi hoon.\nMujhe ${area} mein kagaz verification (${docsList}) ki details chahiye.`;

  return buildWhatsAppUrl(message);
}

/**
 * Validates site visit / callback request form fields.
 */
export interface SiteVisitFormInput {
  fullName: string;
  phone: string;
  area: AreaName;
  service: ServiceType;
  budgetNote?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: {
    fullName?: string;
    phone?: string;
  };
  cleanedPhone: string;
}

export function validateSiteVisitForm(
  input: SiteVisitFormInput
): ValidationResult {
  const errors: { fullName?: string; phone?: string } = {};
  const trimmedName = input.fullName.trim();
  const digitsOnly = input.phone.replace(/\D/g, '');
  const normalizedPhone =
    digitsOnly.length === 12 && digitsOnly.startsWith('91')
      ? digitsOnly.slice(2)
      : digitsOnly.length === 11 && digitsOnly.startsWith('0')
        ? digitsOnly.slice(1)
        : digitsOnly;

  if (trimmedName.length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
    errors.phone =
      'Please enter a valid 10-digit Indian mobile number (starting with 6–9).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    cleanedPhone: normalizedPhone,
  };
}
