import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, MapPin, Sparkles, Building2, UserCheck } from 'lucide-react';
import { TESTIMONIALS, getWhatsAppLink, COMPANY_INFO } from '../data/content';

export const Testimonials: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'diaspora' | 'family-home' | 'investment'>('all');

  const categories = [
    { id: 'all', label: 'All Reviews' },
    { id: 'diaspora', label: 'Diaspora Clients' },
    { id: 'family-home', label: 'Luxury Homeowners' },
    { id: 'investment', label: 'Investors & Yields' },
  ] as const;

  const filteredTestimonials = selectedCategory === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.category === selectedCategory);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#fcfaf2] relative overflow-hidden border-t-2 border-[#c5a021]">
      {/* Background Ambience */}
      <div className="absolute inset-0 subtle-mesh-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#c5a021]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0a1a2f] border border-[#c5a021] text-xs font-bold text-[#c5a021] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Experiences & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-luxury tracking-tight text-[#0a1a2f] mb-4">
            Trusted by Homeowners, Executives & the Diaspora
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Real stories from clients who secured luxury homes, verified property acquisitions, and lucrative real estate investments across Accra with Freedom Foundry.
          </p>
          <div className="w-16 h-1 bg-[#c5a021] mx-auto mt-4 rounded-full" />
        </div>

        {/* High-Level Trust Scorecard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-14">
          <div className="p-5 rounded-xl bg-white border-2 border-[#c5a021]/30 shadow-md text-center">
            <div className="flex items-center justify-center gap-1 text-[#c5a021] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0a1a2f] font-serif-luxury">4.9 / 5.0</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">Average Client Rating</p>
          </div>

          <div className="p-5 rounded-xl bg-white border-2 border-[#c5a021]/30 shadow-md text-center">
            <div className="w-8 h-8 rounded-full bg-[#0a1a2f] text-[#c5a021] mx-auto flex items-center justify-center mb-1">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0a1a2f] font-serif-luxury">100%</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">Title Verified Record</p>
          </div>

          <div className="p-5 rounded-xl bg-white border-2 border-[#c5a021]/30 shadow-md text-center">
            <div className="w-8 h-8 rounded-full bg-[#0a1a2f] text-[#c5a021] mx-auto flex items-center justify-center mb-1">
              <Building2 className="w-4 h-4" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0a1a2f] font-serif-luxury">85+</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">Prime Accra Deals</p>
          </div>

          <div className="p-5 rounded-xl bg-white border-2 border-[#c5a021]/30 shadow-md text-center">
            <div className="w-8 h-8 rounded-full bg-[#0a1a2f] text-[#c5a021] mx-auto flex items-center justify-center mb-1">
              <UserCheck className="w-4 h-4" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0a1a2f] font-serif-luxury">65%</p>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">Diaspora Investors</p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-[#0a1a2f] text-[#c5a021] border-2 border-[#c5a021] shadow-md'
                  : 'bg-white text-slate-600 border border-slate-300 hover:border-[#c5a021] hover:text-[#0a1a2f]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl bg-white border-2 border-[#c5a021]/30 hover:border-[#c5a021] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl relative group"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 text-[#c5a021]/15 group-hover:text-[#c5a021]/30 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#c5a021]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021]/15 px-2.5 py-0.5 rounded-full border border-[#c5a021]/30">
                    <CheckCircle2 className="w-3 h-3 text-[#c5a021]" />
                    Verified Deal
                  </span>
                </div>

                {/* Highlight Tagline */}
                <h3 className="text-base font-bold text-[#0a1a2f] font-serif-luxury mb-3 leading-snug group-hover:text-[#c5a021] transition-colors">
                  "{testimonial.highlight}"
                </h3>

                {/* Quote Paragraph */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author & Property Footnote */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0a1a2f] border border-[#c5a021] text-[#c5a021] font-bold text-sm flex items-center justify-center shrink-0">
                    {testimonial.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0a1a2f]">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-[#c5a021] font-medium">
                      {testimonial.role} • <span className="text-slate-500">{testimonial.location}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500 bg-[#fcfaf2] px-3 py-1.5 rounded-md border border-[#c5a021]/20">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a021] shrink-0" />
                  <span className="truncate">{testimonial.propertyType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct WhatsApp Callout Banner */}
        <div className="p-8 sm:p-10 rounded-xl bg-[#0a1a2f] border-2 border-[#c5a021] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#c5a021] font-bold block">
              Begin Your Property Search Today
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
              Ready to Join Our Community of Satisfied Buyers?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Experience the Freedom Foundry standard: 100% verified legal paperwork, bespoke private viewing tours, and genuine transparent advisory in Accra.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={getWhatsAppLink('Hello Freedom Foundry, I would like to schedule a private property viewing tour in Accra.\n\nCode: PROPERTY')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all shadow-lg active:scale-95 text-center"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>DM “PROPERTY” to Book</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneInternational}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-white bg-white/10 hover:bg-white hover:text-[#0a1a2f] transition-all border border-white/20 text-center"
            >
              <span>Call Direct</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
