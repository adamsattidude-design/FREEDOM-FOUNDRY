import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, Menu, X, Building, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../data/content';

interface HeaderProps {
  onOpenBookingModal?: () => void;
  currentPage?: 'home' | 'properties';
  onNavigateHome?: () => void;
  onNavigateProperties?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage = 'home',
  onNavigateHome,
  onNavigateProperties
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#all-properties') {
      if (onNavigateProperties) onNavigateProperties();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentPage === 'properties' && onNavigateHome) {
        onNavigateHome();
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', isPageLink: false },
    { name: 'Fill Form', href: '#top-quick-form', isPageLink: false, badge: 'Express' },
    { name: 'About', href: '#about', isPageLink: false },
    { name: 'Featured', href: '#properties', isPageLink: false },
    { name: 'All Properties', href: '#all-properties', isPageLink: true, badge: '50+ Photos' },
    { name: 'Services', href: '#services', isPageLink: false },
    { name: 'Why Us', href: '#why-us', isPageLink: false },
    { name: 'Reviews', href: '#testimonials', isPageLink: false },
    { name: 'Location', href: '#location', isPageLink: false, badge: 'Map' },
    { name: 'FAQs', href: '#faq', isPageLink: false },
    { name: 'Contact', href: '#contact', isPageLink: false },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a1a2f] py-3 shadow-xl border-b-2 border-[#c5a021]'
          : 'bg-[#0a1a2f]/95 backdrop-blur-md py-4 border-b-2 border-[#c5a021]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name with Custom Logo */}
          <button
            type="button"
            onClick={() => {
              if (onNavigateHome) onNavigateHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="brand-logo-link"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none text-left cursor-pointer min-w-0"
          >
            <div className="h-9 w-9 sm:h-11 sm:w-11 flex items-center justify-center shrink-0">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Freedom Foundry Real Estate Logo"
                className="h-9 sm:h-11 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-white font-bold tracking-wider text-xs xs:text-sm sm:text-base leading-tight truncate">
                FREEDOM FOUNDRY <span className="text-[#c5a021] font-normal italic text-xs sm:text-sm">REAL ESTATE</span>
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-white/60 font-medium truncate">
                Accra, Ghana
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link.href)}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-sm font-medium transition-colors relative py-1 flex items-center gap-1.5 cursor-pointer ${
                  (link.isPageLink && currentPage === 'properties') || (!link.isPageLink && currentPage === 'home' && link.name === 'Home')
                    ? 'text-[#c5a021] font-bold'
                    : 'text-white/80 hover:text-[#c5a021]'
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[9px] uppercase tracking-wider bg-[#c5a021] text-[#0a1a2f] font-extrabold px-1.5 py-0.2 rounded">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Right CTA Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => handleNavClick('#top-quick-form')}
              id="header-fill-form-btn"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-[#c5a021] text-white hover:text-[#0a1a2f] border border-[#c5a021]/50 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <span>Fill Form</span>
            </button>

            {currentPage === 'home' ? (
              <button
                type="button"
                onClick={() => {
                  if (onNavigateProperties) onNavigateProperties();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                id="header-view-catalog-btn"
                className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-[#c5a021] border border-[#c5a021]/30 text-xs font-bold transition-colors cursor-pointer"
              >
                <span>Browse All Estates</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold transition-colors cursor-pointer"
              >
                <span>Back to Overview</span>
              </button>
            )}

            <a
              href={`tel:${COMPANY_INFO.phoneInternational}`}
              id="header-phone-link"
              className="hidden 2xl:flex items-center gap-2 text-xs font-medium text-white/80 hover:text-white px-3 py-1.5 rounded-full border border-white/20 hover:border-[#c5a021] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a021]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <a
              href={getWhatsAppLink('PROPERTY')}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-cta"
              className="bg-[#c5a021] text-[#0a1a2f] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#0a1a2f] transition-all shadow-md active:scale-95"
            >
              WhatsApp Now
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            <button
              type="button"
              onClick={() => {
                if (currentPage === 'home' && onNavigateProperties) {
                  onNavigateProperties();
                } else if (onNavigateHome) {
                  onNavigateHome();
                }
              }}
              className="px-2.5 sm:px-3 py-1.5 rounded-full bg-white/10 text-[#c5a021] text-xs font-bold border border-[#c5a021]/40 active:scale-95 transition-all"
            >
              {currentPage === 'home' ? 'Properties' : 'Overview'}
            </button>
            
            <button
              type="button"
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-xl text-white/90 hover:text-white hover:bg-white/10 active:bg-white/20 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#c5a021]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with smooth scroll and max height */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="xl:hidden bg-[#0a1a2f] border-b-2 border-[#c5a021] px-4 pt-3 pb-6 mt-3 shadow-2xl backdrop-blur-xl animate-fadeIn max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain"
        >
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm sm:text-base font-medium text-white/90 hover:text-[#c5a021] hover:bg-white/5 px-3.5 py-2.5 rounded-xl transition-colors flex items-center justify-between min-h-[44px]"
              >
                <span className="font-semibold">{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] uppercase tracking-wider bg-[#c5a021] text-[#0a1a2f] font-extrabold px-2 py-0.5 rounded">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
            
            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={`tel:${COMPANY_INFO.phoneInternational}`}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80 px-3.5 py-2.5 hover:text-[#c5a021] transition-colors rounded-lg bg-white/5"
              >
                <Phone className="w-4 h-4 text-[#c5a021] shrink-0" />
                <span className="truncate">Call: {COMPANY_INFO.phoneDisplay} (Accra)</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80 px-3.5 py-2.5 hover:text-[#c5a021] transition-colors rounded-lg bg-white/5"
              >
                <Mail className="w-4 h-4 text-[#c5a021] shrink-0" />
                <span className="truncate">Email: {COMPANY_INFO.email}</span>
              </a>

              <a
                href={getWhatsAppLink('PROPERTY')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all shadow-lg active:scale-98 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp ({COMPANY_INFO.phoneInternational})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

