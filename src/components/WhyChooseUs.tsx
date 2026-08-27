import React from 'react';
import { FileCheck, Compass, MessageSquareText, UserCheck, Crown, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US, getWhatsAppLink } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck':
        return <FileCheck className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-6 h-6" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6" />;
      case 'Crown':
        return <Crown className="w-6 h-6" />;
      default:
        return <Shield className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#0a1a2f] text-white relative overflow-hidden border-t-2 border-[#c5a021]">
      {/* Background Ambience */}
      <div className="absolute inset-0 subtle-mesh-pattern opacity-25 pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#c5a021]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a1a2f] border border-[#c5a021] text-xs font-bold text-[#c5a021] uppercase tracking-widest mb-4 shadow-md animate-float">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Freedom Foundry Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-luxury tracking-tight text-white mb-4">
            Why Discerning Buyers Choose Us
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A standard of excellence built on rigorous due diligence, transparency, and tailored client advisory.
          </p>
          <div className="w-20 h-1 bg-[#c5a021] mx-auto mt-4 rounded-full" />
        </div>

        {/* 5 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {WHY_CHOOSE_US.map((benefit, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-[#0a1a2f]/90 border-2 border-[#c5a021]/40 hover:border-[#c5a021] p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[0_20px_40px_rgba(197,160,33,0.2)] group relative overflow-hidden ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#c5a021] text-[#0a1a2f] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-md">
                {getIcon(benefit.icon)}
              </div>

              <h3 className="text-xl font-bold text-white mb-2.5 font-serif-luxury group-hover:text-[#c5a021] transition-colors">
                {benefit.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}

          {/* Quick Contact / Viewing Card in the 6th slot */}
          <div className="rounded-2xl bg-[#0a1a2f] border-2 border-[#c5a021] p-6 sm:p-8 flex flex-col justify-between shadow-2xl animate-pulse-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a021]/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#c5a021] block mb-1">
                Fast-Track Booking
              </span>
              <h3 className="text-xl font-bold text-white font-serif-luxury mb-2">
                Experience Accra Properties in Person
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Schedule a discreet, chauffeured property tour across East Legon, Cantonments, or Airport Residential.
              </p>
            </div>

            <a
              href={getWhatsAppLink('Hello Freedom Foundry, I would like to schedule a private property viewing tour.\n\nCode: PROPERTY')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all shadow-md active:scale-95 cursor-pointer animate-shimmer"
            >
              <span>Book Private Tour</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

