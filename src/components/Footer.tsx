import React from 'react';
import { Building, Phone, MessageCircle, MapPin, Mail, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../data/content';

interface FooterProps {
  onNavigateHome?: () => void;
  onNavigateProperties?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateHome, onNavigateProperties }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string) => {
    if (href === '#all-properties') {
      if (onNavigateProperties) onNavigateProperties();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (onNavigateHome) onNavigateHome();
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Freedom Foundry', href: '#about' },
    { name: 'Featured Properties', href: '#properties' },
    { name: 'Full Portfolio (50+ Photos)', href: '#all-properties' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Client Reviews', href: '#testimonials' },
    { name: 'Location & Google Map', href: '#location' },
    { name: 'Frequently Asked Questions (FAQ)', href: '#faq' },
    { name: 'Contact & Viewings', href: '#contact' },
  ];

  const propertyTypes = [
    'Modern Family Homes',
    'Executive Penthouses',
    'High-Yield Serviced Units',
    'Cantonments Residences',
    'Airport Residential Properties',
    'East Legon Villas',
  ];

  return (
    <footer className="bg-[#0a1a2f] text-slate-300 pt-16 pb-12 border-t-2 border-[#c5a021] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 subtle-mesh-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-auto flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="Freedom Foundry Real Estate Logo"
                  className="h-11 w-auto object-contain drop-shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-serif-luxury leading-tight">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a021] font-medium">
                  Accra, Ghana
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Your trusted partner for luxury homes, verified property transactions, and high-yield real estate investments across Accra, Ghana.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#c5a021] font-bold block mb-1">
                Main Tagline
              </span>
              <p className="text-sm font-serif-luxury text-white italic">
                “{COMPANY_INFO.tagline}”
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-luxury">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.href)}
                    className="text-xs sm:text-sm text-white/80 hover:text-[#c5a021] transition-colors flex items-center gap-2 group text-left cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a021] transition-colors" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-luxury">
              Contact & Location
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c5a021] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Office Location:</strong>
                  <span className="text-slate-300">{COMPANY_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#c5a021] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">WhatsApp:</strong>
                  <a
                    href={getWhatsAppLink('PROPERTY')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c5a021] font-semibold hover:underline"
                  >
                    {COMPANY_INFO.phoneDisplay} ({COMPANY_INFO.phoneInternational})
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#c5a021] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Email Owner:</strong>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-[#c5a021] transition-colors break-all">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c5a021] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Direct Line:</strong>
                  <a href={`tel:${COMPANY_INFO.phoneInternational}`} className="text-slate-300 hover:text-white">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={getWhatsAppLink('PROPERTY')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>DM “PROPERTY” to Book</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Accra, Ghana.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-[#c5a021]">Luxury Real Estate • Trusted Deals</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 px-3 rounded-full bg-white/10 hover:bg-[#c5a021] hover:text-[#0a1a2f] text-white transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
