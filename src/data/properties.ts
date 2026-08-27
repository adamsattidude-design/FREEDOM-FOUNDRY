import { Property } from '../types';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-modern-family-home',
    title: 'Modern Family Home in Accra',
    tagline: '5-Bedroom Contemporary Haven with Private Pool & Smart Automation',
    category: 'family-home',
    categoryLabel: 'Family Home',
    price: '$650,000',
    priceUSD: 650000,
    location: 'East Legon, Accra, Ghana',
    neighborhood: 'East Legon / Ambassadorial Enclave',
    bedrooms: 5,
    bathrooms: 6,
    areaSqM: 520,
    featured: true,
    status: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An architectural masterwork situated in prime East Legon. Built for luxury family living with high ceilings, imported Italian porcelain flooring, an infinity edge plunge pool, en-suite staff quarters, backup solar power, and 24/7 smart security integration.',
    highlights: [
      'Gated private compound with manicured gardens',
      'Fully fitted German chef kitchen with marble island',
      'Dedicated cinema room & executive home study',
      'Solar energy backup + 5,000L borehole water treatment'
    ]
  },
  {
    id: 'prop-luxury-apartment',
    title: 'Luxury Sky Residence Penthouse',
    tagline: '3-Bedroom Executive Penthouse with Panoramic City Skyline Views',
    category: 'apartment',
    categoryLabel: 'Luxury Apartment',
    price: '$380,000',
    priceUSD: 380000,
    location: 'Airport Residential Area, Accra, Ghana',
    neighborhood: 'Airport Residential / Near Kotoka Int. Airport',
    bedrooms: 3,
    bathrooms: 3.5,
    areaSqM: 260,
    featured: true,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Experience refined cosmopolitan living in the heart of Airport Residential. Featuring wraparound floor-to-ceiling double-glazed windows, private rooftop lounge access, infinity pool, fitness center, and concierge management with impressive rental appeal.',
    highlights: [
      '5 minutes from Kotoka International Airport',
      'Private rooftop infinity pool & state-of-the-art gym',
      'Underground secure parking with dual elevator access',
      'Projected 12.5% USD annual net rental yield'
    ]
  },
  {
    id: 'prop-investment-property',
    title: 'High-Yield Boutique Serviced Complex',
    tagline: 'Multi-Unit Serviced Boutique Residence in Prime Cantonments',
    category: 'investment',
    categoryLabel: 'Investment Property',
    price: '$890,000',
    priceUSD: 890000,
    location: 'Cantonments, Accra, Ghana',
    neighborhood: 'Cantonments Embassy Corridor',
    bedrooms: 6,
    bathrooms: 7,
    areaSqM: 680,
    featured: true,
    status: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A turnkey, high-demand investment asset within the premier diplomat and expatriate district of Cantonments. Designed for short-let Airbnb luxury stays or long-term multinational corporate leases with fully managed facilities.',
    highlights: [
      'Comprises 4 distinct luxury serviced studio & 2-bed units',
      'Verified titled land with unencumbered documentation',
      'Consistently high 85%+ occupancy rates year-round',
      'Professional on-site property management team in place'
    ]
  },
  {
    id: 'prop-luxury-villa-ridge',
    title: 'The Foundry Grand Estate',
    tagline: 'Ultra-Modern 6-Bedroom Villa with Cascading Pool & Terrace',
    category: 'villa',
    categoryLabel: 'Luxury Villa',
    price: '$1,200,000',
    priceUSD: 1200000,
    location: 'Roman Ridge / Airport West, Accra',
    neighborhood: 'Roman Ridge Luxury Belt',
    bedrooms: 6,
    bathrooms: 7,
    areaSqM: 850,
    featured: true,
    status: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An ultra-exclusive architectural marvel featuring custom bronze accents, expansive entertaining terraces, smart climate control, imported Italian fixtures, private elevator, and a climate-controlled wine gallery.',
    highlights: [
      'Expansive 0.45 acre titled parcel in prime Roman Ridge',
      'Dual master suites with custom walk-in closets',
      'State-of-the-art security perimeter & biometric gates',
      'Custom outdoor kitchen & heated cascading pool'
    ]
  },
  {
    id: 'prop-ambassadorial-villa-cantonments',
    title: 'The Ambassadorial Villa',
    tagline: '5-Bedroom Diplomatic Residence with Lush Courtyard & Guest Pavilion',
    category: 'villa',
    categoryLabel: 'Luxury Villa',
    price: '$950,000',
    priceUSD: 950000,
    location: 'Cantonments, Accra, Ghana',
    neighborhood: 'Cantonments Embassy Enclave',
    bedrooms: 5,
    bathrooms: 5.5,
    areaSqM: 610,
    featured: false,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Set within Accra’s most secure diplomatic enclave, this residence boasts grand double-height foyer entries, custom hardwood carpentry, an independent 2-bedroom guest pavilion, private pool, and expansive lush lawns.',
    highlights: [
      'Located within tree-lined Cantonments diplomatic zone',
      'Detached 2-bedroom self-contained guest chalets',
      'High-capacity solar system with 24-hour backup generator',
      'Full perimeter electric fence & CCTV command station'
    ]
  },
  {
    id: 'prop-contemporary-east-legon-hills',
    title: 'The Haven Smart Residence',
    tagline: '4-Bedroom Contemporary Townhouse with Private Garden & Terrace',
    category: 'family-home',
    categoryLabel: 'Family Home',
    price: '$420,000',
    priceUSD: 420000,
    location: 'East Legon Hills, Accra, Ghana',
    neighborhood: 'East Legon Hills Prime Corridor',
    bedrooms: 4,
    bathrooms: 4.5,
    areaSqM: 380,
    featured: false,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A smartly designed family sanctuary combining minimalist European finishes with tropical architecture. Features seamless indoor-outdoor living, rooftop barbecue terrace, en-suite staff room, and high-efficiency solar inverters.',
    highlights: [
      'Quiet gated community with clubhouse & swimming pool',
      'Full smart home voice & app automation throughout',
      'Expansive rooftop terrace with sunset views',
      'Covered car port for 3 vehicles + landscaped garden'
    ]
  },
  {
    id: 'prop-diplomatic-duplex-ridge',
    title: 'The Ridge Executive Duplex',
    tagline: '4-Bedroom Luxury Duplex with Private Plunge Pool & Skyline Terrace',
    category: 'apartment',
    categoryLabel: 'Luxury Apartment',
    price: '$520,000',
    priceUSD: 520000,
    location: 'Ridge / North Ridge, Accra, Ghana',
    neighborhood: 'Ridge Financial & Embassy District',
    bedrooms: 4,
    bathrooms: 4,
    areaSqM: 340,
    featured: false,
    status: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Situated within central Accra’s prime Ridge enclave. Designed across two expansive levels with private internal elevator, double-height floor-to-ceiling glass walls, wrap-around entertainment balcony, and private plunge pool.',
    highlights: [
      'Immediate access to Ridge business hub & ministries',
      'Private internal elevator connecting both duplex levels',
      'Exclusive residents health club, gym & concierge',
      'Turnkey investment with immediate corporate tenant demand'
    ]
  },
  {
    id: 'prop-labone-investment-suites',
    title: 'The Labone Courtyard Suites',
    tagline: 'Modern Serviced 3-Bedroom Residence in Trendy Labone',
    category: 'investment',
    categoryLabel: 'Investment Property',
    price: '$460,000',
    priceUSD: 460000,
    location: 'Labone, Accra, Ghana',
    neighborhood: 'Labone Lifestyle Hub',
    bedrooms: 3,
    bathrooms: 3.5,
    areaSqM: 290,
    featured: false,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Nestled in the upscale cafe and cultural neighborhood of Labone. High aesthetic value with exposed architectural concrete, floor-to-ceiling glass, rooftop tapas lounge, and proven Airbnb performance.',
    highlights: [
      'Walkable to top coffee shops, bistros, and art galleries in Labone',
      'Turnkey furnished with custom bespoke mid-century furniture',
      'On-demand concierge and short-let management system',
      'Estimated 13.2% annual net short-stay returns'
    ]
  }
];
