import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2, Sparkles, Clock, Copy, Check, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../data/content';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    propertyType: 'Modern Family Home',
    budgetRange: '$250k - $500k',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedNumber, setCopiedNumber] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<ContactFormData | null>(null);

  const propertyTypes = [
    'Modern Family Home',
    'Luxury Sky Residence / Apartment',
    'High-Yield Investment Property',
    'Prime Residential Land / Plot',
    'Commercial / Multi-Unit Project',
    'Other / Custom Mandate',
  ];

  const budgetRanges = [
    'Under $150,000',
    '$150,000 - $300,000',
    '$300,000 - $600,000',
    '$600,000 - $1,000,000',
    '$1,000,000+ (Ultra Luxury)',
    'Flexible / Investment Driven',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Prepare payload for Formspree endpoint (https://formspree.io/f/meaqjkkn)
      const payload = {
        name: formData.fullName.trim(),
        fullName: formData.fullName.trim(),
        phone: formData.phoneNumber.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        email: formData.email.trim() || 'No email provided',
        _replyto: formData.email.trim() || undefined,
        propertyType: formData.propertyType,
        budgetRange: formData.budgetRange,
        message: formData.message.trim() || 'No additional message provided.',
        _subject: `New Property Inquiry: ${formData.fullName.trim()} - ${formData.propertyType} (${formData.budgetRange})`,
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
        setSubmitStatus('success');
        setLastSubmittedData({ ...formData });
        // Reset form fields
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          propertyType: 'Modern Family Home',
          budgetRange: '$250k - $500k',
          message: '',
        });
      } else {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.error || errorData?.errors?.[0]?.message || 'Failed to deliver message to our inbox. Please try again or reach us on WhatsApp.'
        );
      }
    } catch (err: any) {
      console.error('Formspree submission error:', err);
      setSubmitStatus('error');
      setErrorMessage(err?.message || 'An unexpected error occurred. Please try again or reach us directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(COMPANY_INFO.phoneInternational);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSendWhatsAppFallback = () => {
    const dataToUse = lastSubmittedData || formData;
    const formattedMessage = `*New Property Inquiry — Freedom Foundry Real Estate*
----------------------------------------
*Full Name:* ${dataToUse.fullName.trim() || 'Inquirer'}
*Phone:* ${dataToUse.phoneNumber.trim() || 'Not specified'}
*Email:* ${dataToUse.email.trim() || 'Not specified'}
*Preferred Property:* ${dataToUse.propertyType}
*Budget Range:* ${dataToUse.budgetRange}
*Message / Requirements:* ${dataToUse.message.trim() || 'I am interested in scheduling a property viewing in Accra.'}

*Code:* PROPERTY`;

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#fcfaf2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a1a2f] border border-[#c5a021] text-xs font-bold text-[#c5a021] uppercase tracking-widest mb-3 shadow-md animate-float">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a1a2f] font-serif-luxury tracking-tight mb-4">
            Connect With Our Advisory Team
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Submit your property requirements directly to our inbox or contact our executive team via WhatsApp.
          </p>
          <div className="w-20 h-1 bg-[#c5a021] mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Grid: Info Cards (Left) & Luxury Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contacts & WhatsApp Priority */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="rounded-2xl bg-[#0a1a2f] border-2 border-[#c5a021] p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden animate-pulse-glow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a021]/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a021]/15 border border-[#c5a021]/40 text-[#c5a021] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Response Line</span>
              </div>

              <h3 className="text-2xl font-bold font-serif-luxury mb-3 text-white">
                Chat Directly on WhatsApp
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Skip the wait. Reach Freedom Foundry Real Estate directly on WhatsApp for real-time video tours, pricing brochures, and immediate viewing arrangements in Accra.
              </p>

              <div className="p-4 rounded-xl bg-[#0a1a2f] border border-[#c5a021]/40 mb-6 flex items-center justify-between shadow-inner">
                <div>
                  <span className="text-[10px] text-white/60 uppercase tracking-widest block font-medium">Official WhatsApp Number</span>
                  <span className="text-base sm:text-lg font-bold text-[#c5a021]">{COMPANY_INFO.phoneInternational}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyNumber}
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-[#c5a021] hover:text-[#0a1a2f] text-white transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedNumber ? <Check className="w-4 h-4 text-[#c5a021]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={getWhatsAppLink('PROPERTY')}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-section-whatsapp-cta"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all active:scale-98 shadow-lg cursor-pointer animate-shimmer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>DM “PROPERTY” to {COMPANY_INFO.phoneInternational}</span>
              </a>
            </div>

            {/* Quick Details Cards */}
            <div className="space-y-3.5">
              {/* Direct Email Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#c5a021]/30 shadow-sm flex items-center justify-between gap-4 card-hover-luxury">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#fcfaf2] border border-[#c5a021]/40 flex items-center justify-center text-[#c5a021] shrink-0 font-bold shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-[#c5a021] font-bold block">Estate Owner Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-bold text-[#0a1a2f] hover:text-[#c5a021] transition-colors truncate block"
                      title="Send email to estate owner"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <p className="text-xs text-slate-500">Connected to Formspree for instant notifications</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-[#fcfaf2] hover:bg-[#c5a021] hover:text-[#0a1a2f] text-slate-600 border border-[#c5a021]/30 transition-colors shrink-0 cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#c5a021]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#c5a021]/30 shadow-sm flex items-center gap-4 card-hover-luxury">
                <div className="w-10 h-10 rounded-xl bg-[#fcfaf2] border border-[#c5a021]/40 flex items-center justify-center text-[#c5a021] shrink-0 font-bold shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#c5a021] font-bold">Business Location</span>
                  <p className="text-sm font-bold text-[#0a1a2f]">{COMPANY_INFO.address}</p>
                  <p className="text-xs text-slate-500">Airport Residential, Cantonments, East Legon & Ridge</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#c5a021]/30 shadow-sm flex items-center gap-4 card-hover-luxury">
                <div className="w-10 h-10 rounded-xl bg-[#fcfaf2] border border-[#c5a021]/40 flex items-center justify-center text-[#c5a021] shrink-0 font-bold shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#c5a021] font-bold">Direct Phone</span>
                  <a href={`tel:${COMPANY_INFO.phoneInternational}`} className="text-sm font-bold text-[#0a1a2f] hover:text-[#c5a021] block">
                    {COMPANY_INFO.phoneDisplay} / {COMPANY_INFO.phoneInternational}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#c5a021]/30 shadow-sm flex items-center gap-4 card-hover-luxury">
                <div className="w-10 h-10 rounded-xl bg-[#fcfaf2] border border-[#c5a021]/40 flex items-center justify-center text-[#c5a021] shrink-0 font-bold shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#c5a021] font-bold">Private Viewings</span>
                  <p className="text-sm font-bold text-[#0a1a2f]">Monday – Sunday (By Appointment)</p>
                  <p className="text-xs text-slate-500">VIP chauffeur available for international visitors</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Viewing Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border-2 border-[#c5a021]/40 shadow-2xl p-6 sm:p-10 relative">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0a1a2f] font-serif-luxury mb-1">
                  Send a Direct Message / Book Viewing
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Fill in your requirements below. Your inquiry is delivered directly to our Formspree email inbox for swift review.
                </p>
              </div>

              {/* Thank You & Receipt Confirmation State */}
              {submitStatus === 'success' ? (
                <div className="rounded-2xl bg-[#0a1a2f] border-2 border-[#c5a021] text-white p-6 sm:p-8 shadow-2xl animate-fadeIn relative overflow-hidden">
                  {/* Glowing background decor */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#c5a021]/15 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="text-center max-w-lg mx-auto">
                    {/* Golden Checkmark Badge */}
                    <div className="w-16 h-16 rounded-2xl bg-[#c5a021] text-[#0a1a2f] flex items-center justify-center mx-auto mb-4 shadow-xl animate-float">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a021]/20 border border-[#c5a021]/40 text-[#c5a021] text-xs font-bold uppercase tracking-wider mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Inquiry Received</span>
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white mb-2">
                      Thank You!
                    </h4>
                    
                    <p className="text-base sm:text-lg font-semibold text-[#c5a021] mb-3">
                      Your form has been successfully received.
                    </p>

                    <p className="text-sm text-slate-200 leading-relaxed mb-6">
                      We appreciate your interest in Freedom Foundry Real Estate. Our executive property advisory team has received your details and <strong className="text-white">you will be attended to shortly</strong>.
                    </p>

                    {/* Summary of Received Details */}
                    {lastSubmittedData && (
                      <div className="p-4 rounded-xl bg-white/5 border border-[#c5a021]/30 text-left text-xs sm:text-sm text-slate-200 mb-6 space-y-1.5">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#c5a021] pb-1 border-b border-white/10 mb-2">
                          Received Submission Summary:
                        </p>
                        {lastSubmittedData.fullName && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">Full Name:</span>
                            <span className="font-semibold text-white">{lastSubmittedData.fullName}</span>
                          </div>
                        )}
                        {lastSubmittedData.phoneNumber && (
                          <div className="flex justify-between">
                            <span className="text-slate-400">Phone / WhatsApp:</span>
                            <span className="font-semibold text-white">{lastSubmittedData.phoneNumber}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-slate-400">Property Type:</span>
                          <span className="font-semibold text-[#c5a021]">{lastSubmittedData.propertyType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Budget Range:</span>
                          <span className="font-semibold text-[#c5a021]">{lastSubmittedData.budgetRange}</span>
                        </div>
                      </div>
                    )}

                    {/* Action Triggers */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleSendWhatsAppFallback}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all shadow-lg active:scale-95 cursor-pointer animate-shimmer"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Chat Instantly on WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setSubmitStatus('idle');
                          setLastSubmittedData(null);
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:text-[#c5a021] bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Send Another Inquiry</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 mt-4">
                      Our typical response time during business hours is under 15 minutes.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Error Notification Alert */}
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 border-2 border-red-300 text-red-900 flex items-start gap-3 animate-fadeIn">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm flex-1">
                        <p className="font-bold text-red-900">Submission Encountered an Issue</p>
                        <p className="text-red-700 mt-0.5">{errorMessage}</p>
                        <div className="mt-3 flex items-center gap-3">
                          <button
                            type="button"
                            onClick={handleSendWhatsAppFallback}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-[#0a1a2f] hover:bg-[#c5a021] hover:text-[#0a1a2f] transition-all cursor-pointer"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Send via WhatsApp Instead</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-[#0a1a2f] uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-[#c5a021]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Kwame Mensah"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#c5a021] focus:ring-2 focus:ring-[#c5a021]/30 outline-none text-sm text-[#0a1a2f] transition-all disabled:bg-slate-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-xs font-bold text-[#0a1a2f] uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp) <span className="text-[#c5a021]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. +233 24 123 4567"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#c5a021] focus:ring-2 focus:ring-[#c5a021]/30 outline-none text-sm text-[#0a1a2f] transition-all disabled:bg-slate-100"
                    />
                  </div>
                </div>

                {/* Email Address Section */}
                <div>
                  <label htmlFor="email" className="flex items-center justify-between text-xs font-bold text-[#0a1a2f] uppercase tracking-wider mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#c5a021]" />
                      <span>Email Address</span>
                    </span>
                    <span className="text-[11px] font-normal text-slate-500 lowercase">
                      (for digital brochures & viewing itinerary)
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. kwame@example.com"
                      disabled={isSubmitting}
                      className="w-full pl-4 pr-10 py-3 rounded-xl border border-slate-300 focus:border-[#c5a021] focus:ring-2 focus:ring-[#c5a021]/30 outline-none text-sm text-[#0a1a2f] transition-all disabled:bg-slate-100 shadow-sm"
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Preferred Property Type & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="propertyType" className="block text-xs font-bold text-[#0a1a2f] uppercase tracking-wider mb-1.5">
                      Preferred Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#c5a021] focus:ring-2 focus:ring-[#c5a021]/30 outline-none text-sm text-[#0a1a2f] bg-white transition-all disabled:bg-slate-100 cursor-pointer"
                    >
                      {propertyTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budgetRange" className="block text-xs font-bold text-[#0a1a2f] uppercase tracking-wider mb-1.5">
                      Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#c5a021] focus:ring-2 focus:ring-[#c5a021]/30 outline-none text-sm text-[#0a1a2f] bg-white transition-all disabled:bg-slate-100 cursor-pointer"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#0a1a2f] uppercase tracking-wider mb-1.5">
                    Message / Specific Preferences
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder="Tell us what you are looking for (e.g. number of bedrooms, preferred Accra area, move-in timeline, investment goals)..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#c5a021] focus:ring-2 focus:ring-[#c5a021]/30 outline-none text-sm text-[#0a1a2f] transition-all disabled:bg-slate-100 resize-none"
                  />
                </div>

                {/* Primary Action Button: Submit to Formspree */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-form-submit-button"
                    className="w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-[#0a1a2f] hover:text-white shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed animate-shimmer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#0a1a2f]" />
                        <span>Sending to Freedom Foundry Email...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry to Freedom Foundry</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsAppFallback}
                    id="contact-form-whatsapp-button"
                    className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#fcfaf2] hover:bg-[#c5a021] border-2 border-[#c5a021] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Or Send Instantly via WhatsApp ({COMPANY_INFO.phoneInternational})</span>
                  </button>
                </div>

                <p className="text-[11px] text-center text-slate-500">
                  Your submission is securely delivered to our official email inbox via Formspree. All inquiries receive priority response.
                </p>
              </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

