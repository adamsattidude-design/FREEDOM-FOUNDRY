import { ServiceItem, WhyChooseUsItem, TestimonialItem, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'Freedom Foundry Real Estate',
  shortName: 'Freedom Foundry',
  location: 'Accra, Ghana',
  logoUrl: 'https://imgur.com/A3nvG7a.png',
  phoneDisplay: '0257037118',
  phoneInternational: '+233257037118',
  whatsappRaw: '233257037118',
  email: 'freedomfoundry01.@gmail.com',
  formspreeEndpoint: 'https://formspree.io/f/meaqjkkn',
  address: '14 Liberation Road, Airport Residential Area, Accra, Ghana',
  mainHeadline: 'Your Dream Home Starts Here',
  tagline: 'Luxury Homes. Trusted Deals. Freedom Foundry.',
  mainCTA: 'DM “PROPERTY” to book a viewing',
  ctas: {
    primary: 'Book a Viewing',
    secondary: 'View Properties',
    enquire: 'Enquire Now',
    whatsapp: 'Chat on WhatsApp',
    call: 'Call Us Today'
  }
};

/**
 * Generate a direct WhatsApp link with pre-filled message text
 */
export function getWhatsAppLink(customText?: string): string {
  const text = customText || 'PROPERTY';
  return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

export function getPropertyEnquiryWhatsAppLink(propertyTitle: string, location: string): string {
  const message = `Hello Freedom Foundry Real Estate, I am interested in viewing: "${propertyTitle}" (${location}). Please provide more details and arrange a private viewing.\n\nCode: PROPERTY`;
  return getWhatsAppLink(message);
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'service-premium-properties',
    title: 'Premium Properties',
    tagline: 'Exquisite Luxury Residences in Coveted Enclaves',
    description: 'We curate an exclusive portfolio of prime residential homes, penthouses, and executive estates across Accra’s most prestigious neighborhoods.',
    points: [
      'Handpicked luxury family homes and modern villas',
      'High-spec apartments with skyline and ocean views',
      'Exclusive off-market and pre-launch developments',
      'Bespoke architectural designs with premium finishes'
    ],
    icon: 'Building2',
    badge: 'Curated Portfolio'
  },
  {
    id: 'service-trusted-service',
    title: 'Trusted Service',
    tagline: 'End-to-End Transparency & Due Diligence',
    description: 'Real estate transactions built on uncompromising integrity, comprehensive legal verification, and personalized advisory every step of the journey.',
    points: [
      'Comprehensive Lands Commission title verification',
      'Transparent documentation with zero surprise fees',
      'Chaperoned private property inspections',
      'Dedicated concierge support from inquiry to key handover'
    ],
    icon: 'ShieldCheck',
    badge: '100% Verified'
  },
  {
    id: 'service-smart-investments',
    title: 'Smart Investments',
    tagline: 'High-Yield Assets & Capital Growth Advisory',
    description: 'Strategic property acquisition opportunities designed for local investors and the global Ghanaian diaspora seeking superior rental yields and capital growth.',
    points: [
      'High-yield short-let and serviced apartment projects',
      'Off-plan investment opportunities with flexible payment plans',
      'In-depth Accra market analysis and rental yield forecasting',
      'Full turnkey property management and tenant placement'
    ],
    icon: 'TrendingUp',
    badge: 'High ROI'
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: 'Verified Property Options',
    description: 'Every single property in our portfolio undergoes rigorous legal due diligence and Lands Commission title validation to guarantee unencumbered ownership.',
    icon: 'FileCheck'
  },
  {
    title: 'Professional Guidance',
    description: 'Our experienced local market specialists offer deep insights into Accra’s evolving property landscape, zoning laws, and valuation trends.',
    icon: 'Compass'
  },
  {
    title: 'Transparent Communication',
    description: 'We believe trust is forged through openness. You will experience absolute clarity on pricing, payment milestones, and transactional processes.',
    icon: 'MessageSquareText'
  },
  {
    title: 'Support From Enquiry to Viewing',
    description: 'From your first WhatsApp message to private VIP on-site inspections and final key handover, our dedicated advisors are by your side.',
    icon: 'UserCheck'
  },
  {
    title: 'Focus on Premium Homes and Trusted Deals',
    description: 'We don’t settle for the ordinary. We specialize in exceptional architectural quality, prime locations, and genuinely advantageous property transactions.',
    icon: 'Crown'
  }
];

export const ACCRA_LOCATIONS = [
  { name: 'East Legon', tag: 'Luxury Family Homes & Villas', desc: 'Accra’s vibrant luxury hub with top international schools, fine dining, and elite residences.' },
  { name: 'Airport Residential', tag: 'Executive Living & High Yields', desc: 'Minutes from Kotoka Airport; the prime choice for diplomats, executives, and sky-rise apartments.' },
  { name: 'Cantonments', tag: 'Ambassadorial Enclave & Penthouses', desc: 'Serene, secure, tree-lined streets surrounded by foreign embassies and premier gated communities.' },
  { name: 'Roman Ridge & Ridge', tag: 'Architectural Masterpieces', desc: 'Central accessibility, expansive land plots, and prestige heritage addresses.' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Dr. Michael & Nana Efua Mensah',
    role: 'Diaspora Homeowners',
    location: 'London, UK & Accra',
    propertyType: '5-Bedroom Luxury Villa in Cantonments',
    category: 'diaspora',
    rating: 5,
    date: 'February 2026',
    avatarText: 'MM',
    verified: true,
    highlight: 'Flawless Title Verification & Transparent Remote Acquisition',
    quote: 'Buying property in Accra while living in London was daunting until we met Freedom Foundry. Their team conducted thorough Lands Commission checks, coordinated HD video walkthroughs, and made the legal process completely transparent. We received our keys without a single hitch!'
  },
  {
    id: 'test-2',
    name: 'Samuel K. Boateng',
    role: 'Real Estate Investor & Tech Executive',
    location: 'Accra, Ghana',
    propertyType: '2-Bedroom Luxury Serviced Apartment in Airport Residential',
    category: 'investment',
    rating: 5,
    date: 'January 2026',
    avatarText: 'SB',
    verified: true,
    highlight: 'Achieved 14.8% Net Annual Rental Yield within 60 Days',
    quote: 'Freedom Foundry’s investment advisory is second to none. They pinpointed a high-demand development in Airport Residential Area and facilitated tenant placement immediately after handover. Highly analytical, honest, and reliable.'
  },
  {
    id: 'test-3',
    name: 'Claire & Julien Beaumont',
    role: 'Diplomatic Mission Staff',
    location: 'Cantonments, Accra',
    propertyType: 'Modern 4-Bedroom Detached Home in East Legon',
    category: 'family-home',
    rating: 5,
    date: 'November 2025',
    avatarText: 'CB',
    verified: true,
    highlight: 'Smooth Relocation & Private Chaperoned Viewings',
    quote: 'When our family was relocated to Ghana, we needed a home with high-level security, private pool, and proximity to international schools. The Freedom Foundry team curated 3 perfect options and negotiated terms expertly. The best real estate experience in West Africa.'
  },
  {
    id: 'test-4',
    name: 'Kojo Asante-Antwi',
    role: 'Diaspora Entrepreneur',
    location: 'Atlanta, USA & Accra',
    propertyType: 'Duplex Penthouse & Land Asset in Ridge',
    category: 'diaspora',
    rating: 5,
    date: 'October 2025',
    avatarText: 'KA',
    verified: true,
    highlight: 'Responsive WhatsApp Concierge from Day One',
    quote: 'I literally sent a DM with “PROPERTY” on WhatsApp and had a comprehensive investment dossier within 15 minutes. Their responsiveness, detailed video updates, and zero-bullshit approach make Freedom Foundry the only agency I trust with my capital in Ghana.'
  },
  {
    id: 'test-5',
    name: 'Evelyn & David Osei-Tutu',
    role: 'Private Family Homeowners',
    location: 'East Legon, Accra',
    propertyType: 'Executive 4-Bedroom Villa with Smart Home Tech',
    category: 'family-home',
    rating: 5,
    date: 'September 2025',
    avatarText: 'EO',
    verified: true,
    highlight: 'Exceptional Craftsmanship & Seamless Paperwork',
    quote: 'The craftsmanship of the property recommended by Freedom Foundry exceeded our expectations. All building permits and cadastral plans were verified upfront. Moving our family into our dream home in East Legon was a joy.'
  },
  {
    id: 'test-6',
    name: 'Marcus Vanderpuye',
    role: 'Commercial Portfolio Manager',
    location: 'Accra & Lagos',
    propertyType: 'Multi-Unit Residential Complex in Labone',
    category: 'investment',
    rating: 5,
    date: 'August 2025',
    avatarText: 'MV',
    verified: true,
    highlight: 'Off-Market Access & Unmatched Market Intelligence',
    quote: 'Freedom Foundry provided access to an off-market deal before it went public. Their depth of market intelligence, yield calculations, and post-sale support have added tremendous value to our portfolio.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-title-verification',
    category: 'legal',
    question: 'How does Freedom Foundry verify property land titles in Ghana?',
    answer: 'Every property represented by Freedom Foundry undergoes stringent legal due diligence with the Lands Commission of Ghana, Survey and Mapping Division, and local municipal assemblies. We conduct formal search reports to verify legitimate ownership, confirm the land is free of litigation, verify cadastral boundaries, and validate valid building permits before presenting any asset to clients.'
  },
  {
    id: 'faq-diaspora-remote',
    category: 'diaspora',
    question: 'Can Ghanaians or foreign investors living abroad buy property remotely?',
    answer: 'Yes, over 65% of our clientele resides in the UK, USA, Canada, and Europe. We provide high-definition 4K video walkthroughs, live WhatsApp video inspections, detailed legal review dossiers, and coordinate secure remote contract execution. Payment milestones are held with transparent escrow protocols to ensure complete peace of mind.'
  },
  {
    id: 'faq-schedule-viewing',
    category: 'viewings',
    question: 'How do I schedule a private property viewing in Accra?',
    answer: 'Scheduling is instant and effortless. Simply click the "DM PROPERTY to Book" button on WhatsApp (+233257037118) or call us directly at 0257037118. Our concierge team coordinates private, chaperoned viewings on dates and times that match your schedule, including weekends and public holidays.'
  },
  {
    id: 'faq-payment-plans',
    category: 'buying',
    question: 'What are the available payment plans and financing structures?',
    answer: 'For off-plan and newly completed luxury properties, developers offer structured milestone payment plans typically starting with an initial reservation deposit (10% to 20%), followed by phased installments linked to construction milestones, with final balance paid upon key handover. We also facilitate connections with accredited Ghanaian mortgage financing institutions.'
  },
  {
    id: 'faq-rental-yields',
    category: 'investment',
    question: 'What rental yields can investors anticipate in Airport Residential and Cantonments?',
    answer: 'Prime residential enclaves like Airport Residential, Cantonments, and East Legon generate attractive USD-denominated rental yields ranging from 10% to 15% net per annum for luxury serviced apartments and short-let executive suites, bolstered by constant demand from multinationals, diplomatic missions, and international tourists.'
  },
  {
    id: 'faq-documentation',
    category: 'legal',
    question: 'What legal documents do I receive upon purchasing a property?',
    answer: 'Upon closing, buyers receive a legally drafted Deed of Assignment / Indenture stamped and registered with the Lands Commission, Cadastral Site Plans certified by licensed surveyors, building permit certifications, developer warranties, and a full handover dossier with property utility clearances.'
  },
  {
    id: 'faq-hidden-fees',
    category: 'buying',
    question: 'Are there any hidden agency or transactional fees?',
    answer: 'Freedom Foundry maintains a strict zero-hidden-fee policy. All statutory registration costs, legal review charges, and developer fees are clearly itemized in writing in your formal acquisition breakdown before you commit a single cedi or dollar.'
  },
  {
    id: 'faq-property-management',
    category: 'investment',
    question: 'Do you assist with post-purchase property management and tenant placement?',
    answer: 'Yes. For our investor clients and diaspora owners, we provide end-to-end turnkey property management services, including vetted corporate tenant placement, routine maintenance, utility management, and transparent monthly yield disbursements.'
  }
];

