import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, MessageCircle, ArrowDown, Clock, ShieldCheck, Loader2, AlertCircle, RefreshCw, Mail, User, Phone, Home, DollarSign } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../data/content';

interface TopQuickInquiryProps {
  onScrollToFullContact?: () => void;
}

export const TopQuickInquiry: React.FC<TopQuickInquiryProps> = ({ onScrollToFullContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('Modern Family Home');
  const [budget, setBudget] = useState('$250k - $500k');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const propertyOptions = [
    'Modern Family Home',
    'Luxury Penthouse',
    'Executive Villa',
    'Commercial Space',
    'Prime Land & Development',
  ];

  const budgetOptions = [
    'Under $250k',
    '$250k - $500k',
    '$500k - $1M',
    '$1M - $2.5M',
    '$2.5M+',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const payload = {
        name: name.trim(),
        fullName: name.trim(),
        phone: phone.trim(),
        phoneNumber: phone.trim(),
        email: email.trim() || 'No email specified',
        _replyto: email.trim() || undefined,
        propertyType,
        budgetRange: budget,
        message: notes.trim() || 'Quick Inquiry submitted from top page bar.',
        _subject: `[Top Fast Inquiry] ${name.trim()} - ${propertyType} (${budget})`,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch(COMPANY_INFO.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        setName('');
        setPhone('');
        setEmail('');
        setNotes('');
      } else {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || 'Failed to submit your inquiry. Please reach us on WhatsApp.');
      }
    } catch (err: any) {
      console.error('Quick Formspree error:', err);
      setErrorMessage(err?.message || 'Submission encountered an issue. Please reach us directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = `*Top Quick Inquiry — Freedom Foundry Real Estate*
----------------------------------------
*Name:* ${name || 'Prospective Buyer'}
*Phone:* ${phone || 'Not specified'}
*Email:* ${email || 'Not specified'}
*Looking for:* ${propertyType}
*Budget:* ${budget}
*Notes:* ${notes || 'I would like to receive available property options in Accra.'}

*Code:* PROPERTY`;

    const url = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleScrollToContact = () => {
    if (onScrollToFullContact) {
      onScrollToFullContact();
    } else {
      const target = document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="top-quick-form" 
      className="relative z-20 -mt-6 sm:-mt-12 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-10 sm:mb-12"
    >
      <div className="rounded-2xl sm:rounded-3xl bg-white border-2 border-[#c5a021] shadow-2xl overflow-hidden p-4 sm:p-8 lg:p-10 relative">
        
        {/* Decorative ambient gold glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#c5a021]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0a1a2f]/5 rounded-full blur-2xl pointer-events-none" />

        {/* Top Notification & Skip Scroll Tag */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0a1a2f] text-[#c5a021] text-xs font-bold uppercase tracking-wider mb-2 shadow-sm animate-float">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Skip The Scroll • Express Form</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1a2f] font-serif-luxury tracking-tight">
              Fast-Track Property Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              No need to scroll down. Fill out your details below to receive direct property options, pricing brochures, and private viewing slots.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#0a1a2f] bg-[#fcfaf2] hover:bg-[#c5a021] border border-[#c5a021]/40 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <span>Jump to Main Contact Section</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Form Submitted State: Thank You Banner */}
        {submitted ? (
          <div className="rounded-2xl bg-[#0a1a2f] border-2 border-[#c5a021] text-white p-6 sm:p-8 text-center shadow-xl animate-fadeIn">
            <div className="w-14 h-14 rounded-2xl bg-[#c5a021] text-[#0a1a2f] flex items-center justify-center mx-auto mb-3 shadow-lg animate-float">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <span className="inline-block px-3 py-1 rounded-full bg-[#c5a021]/20 text-[#c5a021] text-xs font-bold uppercase tracking-wider mb-2">
              Submission Confirmed
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white mb-2">
              Thank You!
            </h3>

            <p className="text-base sm:text-lg font-semibold text-[#c5a021] mb-2">
              Your form has been successfully received.
            </p>

            <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto leading-relaxed mb-6">
              Our executive property advisory team has received your inquiry directly in our inbox and <strong className="text-white">you will be attended to shortly</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppLink('PROPERTY')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Submit Another Inquiry</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span className="flex-1">{errorMessage}</span>
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="px-2.5 py-1 rounded bg-red-100 text-red-900 font-bold hover:bg-red-200 transition-colors"
                >
                  WhatsApp Instead
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* Full Name */}
              <div>
                <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0a1a2f] mb-1">
                  <User className="w-3.5 h-3.5 text-[#c5a021]" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Kwame Mensah"
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#c5a021] focus:ring-2 focus:ring-[#c5a021]/30 outline-none text-xs sm:text-sm text-[#0a1a2f] transition-all disabled:bg-slate-100 shadow-sm"
                />
              </div>

              {/* Phone Number / WhatsApp */}
              <div>
                <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0a1a2f] mb-1">
                  <Phone className="w-3.5 h-3.5 text-[#c5a021]" />
                  <span>Phone (WhatsApp) *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +233 24 123 4567"
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#c5a021] focus:ring-2 focus:ring-[#c5a021]/30 outline-none text-xs sm:text-sm text-[#0a1a2f] transition-all disabled:bg-slate-100 shadow-sm"
                />
              </div>

              {/* Email Address Section */}
              <div className="sm:col-span-2 lg:col-span-1">
                <label className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#0a1a2f] mb-1">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#c5a021]" />
                    <span>Email Address</span>
                  </span>
                  <span className="text-[10px] font-medium text-[#c5a021] lowercase">for brochure & viewing receipt</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. kwame@example.com"
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#c5a021] focus:ring-2 focus:ring-[#c5a021]/30 outline-none text-xs sm:text-sm text-[#0a1a2f] transition-all disabled:bg-slate-100 shadow-sm bg-white"
                />
              </div>

            </div>

            {/* Row 2: Property Type, Budget, & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
              
              {/* Property Type */}
              <div>
                <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0a1a2f] mb-1">
                  <Home className="w-3.5 h-3.5 text-[#c5a021]" />
                  <span>Property Type</span>
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#c5a021] focus:ring-2 focus:ring-[#c5a021]/30 outline-none text-xs sm:text-sm text-[#0a1a2f] bg-white transition-all disabled:bg-slate-100 cursor-pointer shadow-sm"
                >
                  {propertyOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0a1a2f] mb-1">
                  <DollarSign className="w-3.5 h-3.5 text-[#c5a021]" />
                  <span>Budget Range</span>
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#c5a021] focus:ring-2 focus:ring-[#c5a021]/30 outline-none text-xs sm:text-sm text-[#0a1a2f] bg-white transition-all disabled:bg-slate-100 cursor-pointer shadow-sm"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Optional Preferences & Message */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#0a1a2f] mb-1">
                  Location / Notes <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Cantonments, 4 bedrooms..."
                  disabled={isSubmitting}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#c5a021] focus:ring-2 focus:ring-[#c5a021]/30 outline-none text-xs sm:text-sm text-[#0a1a2f] transition-all disabled:bg-slate-100 shadow-sm"
                />
              </div>

            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                id="top-quick-form-submit-btn"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-[#0a1a2f] hover:text-white shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-60 animate-shimmer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#0a1a2f]" />
                    <span>Sending Form to Freedom Foundry Inbox...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry & Receive Property Brochure</span>
                  </>
                )}
              </button>
            </div>

            {/* Micro guarantees */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a021]" />
                  <span>Direct to Freedom Foundry Email</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#c5a021]" />
                  <span>Attended to in &lt; 15 mins</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span>Prefer WhatsApp?</span>
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="font-bold text-[#0a1a2f] hover:text-[#c5a021] underline cursor-pointer"
                >
                  DM “PROPERTY” to {COMPANY_INFO.phoneInternational}
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
