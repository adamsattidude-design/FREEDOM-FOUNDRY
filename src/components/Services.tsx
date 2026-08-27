import React from 'react';
import { Building2, ShieldCheck, TrendingUp, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES, getWhatsAppLink } from '../data/content';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-7 h-7" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7" />;
      case 'TrendingUp':
        return <TrendingUp className="w-7 h-7" />;
      default:
        return <Building2 className="w-7 h-7" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0a1a2f] relative text-white overflow-hidden border-t-2 border-[#c5a021]">
      {/* Background patterns and glowing ambient lights */}
      <div className="absolute inset-0 subtle-mesh-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#c5a021]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a1a2f] border border-[#c5a021] text-xs font-bold text-[#c5a021] uppercase tracking-widest mb-4 shadow-md animate-float">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Core Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-luxury tracking-tight text-white mb-4">
            Specialized Real Estate Services
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Tailored property solutions designed for discerning homeowners, investors, and the diaspora.
          </p>
          <div className="w-20 h-1 bg-[#c5a021] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="rounded-2xl bg-[#0a1a2f]/90 border-2 border-[#c5a021]/40 hover:border-[#c5a021] p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-[0_20px_40px_rgba(197,160,33,0.2)] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a021]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#c5a021]/20 transition-all" />

              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#c5a021] text-[#0a1a2f] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#c5a021]/20 text-[#c5a021] border border-[#c5a021]/50 shadow-sm">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-white mb-2 font-serif-luxury group-hover:text-[#c5a021] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs uppercase tracking-wider text-[#c5a021] font-semibold mb-4">
                  {service.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Points */}
                <div className="space-y-2.5 mb-8">
                  {service.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a021] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppLink(`Hello Freedom Foundry, I want to inquire about your "${service.title}" service.\n\nCode: PROPERTY`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white hover:text-[#0a1a2f] shadow-md transition-all group-hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Enquire on {service.title}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Supporting Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0a1a2f] border-2 border-[#c5a021] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl animate-pulse-glow">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white mb-1">
              Have a Specific Requirement or Custom Mandate?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We provide tailored property search, discrete off-market acquisitions, and verified land transactions.
            </p>
          </div>
          <a
            href={getWhatsAppLink('PROPERTY')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all shadow-lg active:scale-95 cursor-pointer animate-shimmer"
          >
            Direct WhatsApp Enquiry
          </a>
        </div>

      </div>
    </section>
  );
};

