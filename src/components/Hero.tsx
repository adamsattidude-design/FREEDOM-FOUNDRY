import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, MapPin, Sparkles, KeyRound, Building, Compass, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO, getWhatsAppLink } from '../data/content';

interface HeroProps {
  onOpenBookingModal?: () => void;
  onNavigateProperties?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onNavigateProperties }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#0a1a2f]"
    >
      {/* Background Luxury Architectural Image with Ambient Dark Navy Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.28 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Architecture in Accra"
          className="w-full h-full object-cover object-center transform animate-float-slow"
        />
        {/* Navy Gradient Gradients for deep luxury tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f] via-[#0a1a2f]/85 to-[#0a1a2f]/70" />
        <div className="absolute inset-0 subtle-mesh-pattern opacity-40 pointer-events-none" />

        {/* Ambient Glowing Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a021]/20 rounded-full blur-[140px] pointer-events-none"
        />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#c5a021]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Brand Tagline Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#c5a021] bg-[#0a1a2f]/90 backdrop-blur-md mb-6 shadow-xl animate-float"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#c5a021] animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#c5a021] uppercase">
            {COMPANY_INFO.tagline}
          </span>
        </motion.div>

        {/* Main Headline with High Visual Contrast & Staggered Reveal */}
        <motion.h1
          id="hero-main-headline"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight font-serif-luxury max-w-4xl mx-auto leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 drop-shadow-lg break-words"
        >
          Your Dream Home <br />
          <span className="text-[#c5a021] inline-block hover:scale-102 transition-transform duration-300">
            Starts Here
          </span>
        </motion.h1>

        {/* Short Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed mb-7 sm:mb-10 text-balance px-2"
        >
          Helping discerning clients find premium homes, modern architectural residences, and high-yield property investments in prime <span className="text-[#c5a021] font-semibold underline underline-offset-4 decoration-[#c5a021]/50">Accra, Ghana</span>.
        </motion.p>

        {/* Prominent CTA Box: DM "PROPERTY" to book a viewing with Pulse Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto mb-8 sm:mb-10 p-4 sm:p-6 rounded-2xl bg-[#0a1a2f] border-2 border-[#c5a021] shadow-2xl backdrop-blur-lg relative group hover:border-white transition-all duration-300 animate-pulse-glow"
        >
          <div className="absolute -top-3 left-4 sm:left-6 bg-[#c5a021] text-[#0a1a2f] text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2.5 sm:px-3 py-0.5 rounded-full shadow-md">
            Direct VIP Inquiry
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <div className="w-full sm:w-auto">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#c5a021] font-bold block mb-0.5">
                Instant WhatsApp Booking
              </span>
              <p className="text-xs sm:text-base font-semibold text-white">
                DM <span className="text-[#c5a021] font-bold underline underline-offset-4">“PROPERTY”</span> to book a viewing
              </p>
              <span className="text-[11px] sm:text-xs text-white/70">
                Direct Line: +233 25 703 7118
              </span>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={getWhatsAppLink('PROPERTY')}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-dm-property-button"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white hover:text-[#0a1a2f] shadow-lg transition-all cursor-pointer animate-shimmer min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>DM “PROPERTY”</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Main Action Buttons: "View Properties", "Fill Fast Inquiry Form", and "Book a Viewing" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 max-w-xl mx-auto mb-10 sm:mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#top-quick-form"
            id="hero-fill-form-btn"
            onClick={(e) => {
              const target = document.getElementById('top-quick-form');
              if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white hover:text-[#0a1a2f] shadow-2xl transition-all duration-300 cursor-pointer animate-shimmer min-h-[44px]"
          >
            <Sparkles className="w-4 h-4 text-[#0a1a2f]" />
            <span>Fill Inquiry Form (Top)</span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={() => {
              if (onNavigateProperties) {
                onNavigateProperties();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                const target = document.querySelector('#properties');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            id="hero-view-properties-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-white/10 hover:bg-white/20 border-2 border-white/40 hover:border-[#c5a021] hover:text-[#c5a021] transition-all duration-300 shadow-md cursor-pointer group min-h-[44px]"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            id="hero-book-viewing-btn"
            onClick={(e) => {
              if (onOpenBookingModal) {
                e.preventDefault();
                onOpenBookingModal();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-white/90 hover:text-white bg-transparent hover:bg-white/10 border border-white/30 transition-all duration-300 cursor-pointer min-h-[44px]"
          >
            <KeyRound className="w-4 h-4 text-[#c5a021]" />
            <span>Full Contact Details</span>
          </motion.a>
        </motion.div>

        {/* Trust Badges Bar with Staggered InView Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="pt-6 sm:pt-8 border-t border-[#c5a021]/30 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-left max-w-5xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0a1a2f]/90 border border-[#c5a021]/40 shadow-sm cursor-default"
          >
            <div className="p-2.5 rounded-lg bg-[#c5a021] text-[#0a1a2f] font-bold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">100% Verified</p>
              <p className="text-[11px] text-white/70">Lands Commission Titled</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0a1a2f]/90 border border-[#c5a021]/40 shadow-sm cursor-default"
          >
            <div className="p-2.5 rounded-lg bg-[#c5a021] text-[#0a1a2f] font-bold shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Accra Prime</p>
              <p className="text-[11px] text-white/70">Airport, Cantonments, Ridge</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0a1a2f]/90 border border-[#c5a021]/40 shadow-sm cursor-default"
          >
            <div className="p-2.5 rounded-lg bg-[#c5a021] text-[#0a1a2f] font-bold shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Luxury Quality</p>
              <p className="text-[11px] text-white/70">Curated HD Portfolios</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0a1a2f]/90 border border-[#c5a021]/40 shadow-sm cursor-default"
          >
            <div className="p-2.5 rounded-lg bg-[#c5a021] text-[#0a1a2f] font-bold shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Instant Chat</p>
              <p className="text-[11px] text-white/70">{COMPANY_INFO.phoneDisplay} WhatsApp</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};


