import React from 'react';
import { ShieldCheck, Award, TrendingUp, CheckCircle2, ArrowRight, Sparkles, Building, MapPin } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink, ACCRA_LOCATIONS } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fcfaf2] relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a021]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0a1a2f]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Floating Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a1a2f] border border-[#c5a021] text-xs font-bold text-[#c5a021] uppercase tracking-widest mb-3 shadow-md animate-float">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Freedom Foundry Real Estate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a1a2f] font-serif-luxury tracking-tight leading-tight">
            Elevating Luxury Living & <br className="hidden sm:block" />
            <span className="text-[#c5a021]">Trusted Real Estate in Ghana</span>
          </h2>
          <div className="w-20 h-1 bg-[#c5a021] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Story / Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Visual Composition with Trust Badge */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#c5a021]/40 bg-[#0a1a2f] transform transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(197,160,33,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Estate in Accra"
                className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-108 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f]/95 via-[#0a1a2f]/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#0a1a2f]/95 backdrop-blur-md border border-[#c5a021]/60 text-white shadow-lg animate-fade-in">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#c5a021]" />
                  <p className="text-xs uppercase tracking-widest text-[#c5a021] font-bold">Airport Residential HQ • Accra</p>
                </div>
                <p className="text-sm font-medium text-slate-200 mt-1">
                  Connecting local homebuyers & global diaspora investors with fully vetted luxury assets.
                </p>
              </div>
            </div>

            {/* Overlapping Floating Badge with Float Effect */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border-2 border-[#c5a021] items-center gap-3 max-w-xs animate-float">
              <div className="w-12 h-12 rounded-xl bg-[#0a1a2f] flex items-center justify-center text-[#c5a021] shrink-0 font-bold shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0a1a2f] font-serif-luxury">Trusted Deals</p>
                <p className="text-xs text-slate-500">Rigorous legal & land title verification</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative and Value Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#c5a021] uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>Unmatched Ghanaian Market Expertise</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#0a1a2f] font-serif-luxury">
              Your Reliable Real Estate Partner in Accra
            </h3>
            
            <p className="text-base text-slate-700 leading-relaxed">
              <strong className="text-[#0a1a2f] font-semibold">Freedom Foundry Real Estate</strong> is a premier real estate advisory firm dedicated to helping clients discover extraordinary luxury homes, premium residences, and high-yield property investment opportunities across Ghana.
            </p>

            <p className="text-base text-slate-700 leading-relaxed">
              Whether you are an executive looking for a modern family sanctuary in East Legon, a global investor securing a high-yield penthouse in Airport Residential, or a diaspora buyer wanting trusted on-the-ground representation, we eliminate uncertainty through unyielding transparency and verified title deeds.
            </p>

            {/* Feature Checklist with Card Design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#c5a021]/30 shadow-sm card-hover-luxury">
                <div className="w-7 h-7 rounded-lg bg-[#0a1a2f] text-[#c5a021] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#0a1a2f]">100% Verified Title Deeds</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#c5a021]/30 shadow-sm card-hover-luxury">
                <div className="w-7 h-7 rounded-lg bg-[#0a1a2f] text-[#c5a021] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#0a1a2f]">Chaperoned VIP Viewings</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#c5a021]/30 shadow-sm card-hover-luxury">
                <div className="w-7 h-7 rounded-lg bg-[#0a1a2f] text-[#c5a021] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#0a1a2f]">High-Yield ROI Advisory</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#c5a021]/30 shadow-sm card-hover-luxury">
                <div className="w-7 h-7 rounded-lg bg-[#0a1a2f] text-[#c5a021] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#0a1a2f]">Direct WhatsApp Line</span>
              </div>
            </div>

            {/* Quick Action CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppLink('PROPERTY')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-[#0a1a2f] hover:text-white transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#properties"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0a1a2f] bg-white border-2 border-[#c5a021]/40 hover:border-[#c5a021] transition-all shadow-sm cursor-pointer"
              >
                <span>Explore Accra Portfolio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Accra Prime Locations Showcase */}
        <div className="rounded-2xl bg-white p-6 sm:p-8 border-2 border-[#c5a021]/30 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c5a021] font-bold">Key Focus Areas</span>
              <h4 className="text-xl sm:text-2xl font-bold text-[#0a1a2f] font-serif-luxury">
                Prime Neighborhoods We Specialize In
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              Targeting Accra’s safest, most prestigious, and highest capital appreciating districts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACCRA_LOCATIONS.map((loc) => (
              <div
                key={loc.name}
                className="p-5 rounded-xl bg-[#fcfaf2] border border-[#c5a021]/30 hover:border-[#c5a021] shadow-sm hover:shadow-lg transition-all duration-300 group card-hover-luxury"
              >
                <div className="w-3 h-3 rounded-full bg-[#c5a021] mb-3 group-hover:scale-150 transition-transform" />
                <h5 className="font-bold text-[#0a1a2f] text-base mb-1 font-serif-luxury">{loc.name}</h5>
                <p className="text-xs font-semibold text-[#c5a021] mb-2">{loc.tag}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

