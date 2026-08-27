import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { FAQ_ITEMS, COMPANY_INFO, getWhatsAppLink } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-title-verification');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'legal', label: 'Title & Legal Search' },
    { id: 'diaspora', label: 'Diaspora Buying' },
    { id: 'buying', label: 'Payment & Pricing' },
    { id: 'investment', label: 'Yields & Management' },
    { id: 'viewings', label: 'Site Viewings' },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#fcfaf2] relative overflow-hidden border-t-2 border-[#c5a021]">
      {/* Background Ambience */}
      <div className="absolute inset-0 subtle-mesh-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#c5a021]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0a1a2f] border border-[#c5a021] text-xs font-bold text-[#c5a021] uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-luxury tracking-tight text-[#0a1a2f] mb-4">
            Everything You Need to Know About Buying in Accra
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clear, transparent answers regarding title searches, remote purchases from the diaspora, payment plans, and legal processes.
          </p>
          <div className="w-16 h-1 bg-[#c5a021] mx-auto mt-4 rounded-full" />
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-4 mb-10 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="faq-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions by topic (e.g. title, diaspora, payments, viewings)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border-2 border-slate-200 focus:border-[#c5a021] focus:ring-2 focus:ring-[#c5a021]/20 outline-none text-sm text-[#0a1a2f] shadow-sm placeholder:text-slate-400 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold bg-slate-100 px-2 py-1 rounded-full"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`faq-cat-btn-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0a1a2f] text-[#c5a021] border-2 border-[#c5a021] shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#c5a021] hover:text-[#0a1a2f]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className={`rounded-xl transition-all duration-300 overflow-hidden border-2 ${
                    isOpen 
                      ? 'bg-white border-[#c5a021] shadow-lg' 
                      : 'bg-white/80 hover:bg-white border-slate-200 hover:border-[#c5a021]/60 shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-start gap-3">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 ${
                        isOpen 
                          ? 'bg-[#0a1a2f] text-[#c5a021]' 
                          : 'bg-[#fcfaf2] text-[#0a1a2f] border border-[#c5a021]/30'
                      }`}>
                        Q
                      </span>
                      <h3 className={`text-base sm:text-lg font-bold font-serif-luxury ${
                        isOpen ? 'text-[#0a1a2f]' : 'text-slate-800'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#c5a021] text-[#0a1a2f]' : 'bg-[#fcfaf2] text-slate-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100">
                      <div className="pl-10 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-10 text-center bg-white rounded-xl border border-slate-200 text-slate-500">
              <HelpCircle className="w-10 h-10 mx-auto text-slate-300 mb-3" />
              <p className="font-semibold text-slate-700">No questions found matching "{searchQuery}"</p>
              <p className="text-xs mt-1">Try searching for keywords like "title", "deposit", "mortgage", or "viewings".</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-4 px-4 py-2 rounded-full bg-[#0a1a2f] text-[#c5a021] text-xs font-bold"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* Direct Inquiry Help Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0a1a2f] border-2 border-[#c5a021] text-white max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#c5a021]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#c5a021] font-bold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>Personalized Real Estate Advisory</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
                Have a Specific Question About a Property?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                Speak directly with the Freedom Foundry team or email the estate owner. We are happy to clarify land titles, schedule private site tours, or furnish investment breakdowns.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href={getWhatsAppLink('Hello Freedom Foundry, I have a question regarding property acquisitions in Accra.\n\nCode: PROPERTY')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all shadow-lg active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp ({COMPANY_INFO.phoneDisplay})</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent('Inquiry Regarding Property Acquisition in Accra')}&body=${encodeURIComponent('Hello Freedom Foundry Estate Owner,\n\nI have a question regarding purchasing property in Accra.\n\nPlease reach back to me at your earliest convenience.\n\nThank you.')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-white bg-white/10 hover:bg-white hover:text-[#0a1a2f] transition-all border border-white/20 text-center"
              >
                <Mail className="w-4 h-4 text-[#c5a021]" />
                <span>Email Owner</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
