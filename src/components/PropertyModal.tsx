import React, { useState } from 'react';
import { X, Bed, Bath, Maximize2, MapPin, CheckCircle2, MessageCircle, Phone, Mail, ArrowLeft, ArrowRight, ShieldCheck, Calendar, Send, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { Property } from '../types';
import { getPropertyEnquiryWhatsAppLink, COMPANY_INFO } from '../data/content';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [clientNote, setClientNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!property) return null;

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const payload = {
        name: clientName.trim(),
        fullName: clientName.trim(),
        phone: clientPhone.trim(),
        phoneNumber: clientPhone.trim(),
        email: clientEmail.trim() || 'Not specified',
        _replyto: clientEmail.trim() || undefined,
        propertyTitle: property.title,
        propertyLocation: property.location,
        propertyPrice: property.price,
        preferredDate: preferredDate || 'Flexible / As soon as possible',
        notes: clientNote.trim() || 'I would like to schedule a private tour for this property.',
        _subject: `Viewing Request: ${property.title} - ${clientName.trim()}`,
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
        setSubmitSuccess(true);
        setClientName('');
        setClientPhone('');
        setClientEmail('');
        setPreferredDate('');
        setClientNote('');
      } else {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || 'Failed to submit viewing request to our email inbox.');
      }
    } catch (err: any) {
      console.error('Modal Formspree error:', err);
      setSubmitError(err?.message || 'Could not submit viewing request. Please reach us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-y-auto border border-slate-200 flex flex-col">
        
        {/* Header Close Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#0a1a2f] text-white border-b-2 border-[#c5a021]">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xs uppercase tracking-widest text-[#c5a021] font-bold truncate">
              {property.categoryLabel}
            </span>
            <span className="text-xs text-white/50">•</span>
            <span className="text-xs text-slate-300 truncate">{property.neighborhood}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c5a021] hover:text-[#0a1a2f] text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-8 space-y-6 bg-white">
          
          {/* Main Gallery Carousel */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 shadow-md">
              <img
                src={images[activeImageIndex]}
                alt={`${property.title} view ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              
              {/* Prev / Next controls if multiple images */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0a1a2f] text-[#c5a021] border border-[#c5a021] backdrop-blur-md shadow-md">
                  {property.status}
                </span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-[#c5a021] scale-95 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title, Price & Location */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#c5a021] font-semibold mb-1">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{property.location}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0a1a2f] font-serif-luxury">
                {property.title}
              </h3>
              <p className="text-sm text-slate-500 mt-1">{property.tagline}</p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs uppercase tracking-widest text-[#c5a021] font-bold block">Guide Price</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0a1a2f] font-serif-luxury">
                {property.price}
              </span>
            </div>
          </div>

          {/* Property Key Specs */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#fcfaf2] border border-[#c5a021]/30 text-center">
            <div>
              <div className="flex items-center justify-center gap-1.5 text-[#0a1a2f] font-bold text-sm sm:text-base">
                <Bed className="w-4 h-4 text-[#c5a021]" />
                <span>{property.bedrooms} Bedrooms</span>
              </div>
              <span className="text-[11px] text-slate-500">All En-Suite</span>
            </div>

            <div className="border-x border-[#c5a021]/20">
              <div className="flex items-center justify-center gap-1.5 text-[#0a1a2f] font-bold text-sm sm:text-base">
                <Bath className="w-4 h-4 text-[#c5a021]" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <span className="text-[11px] text-slate-500">Luxury Sanitaryware</span>
            </div>

            <div>
              <div className="flex items-center justify-center gap-1.5 text-[#0a1a2f] font-bold text-sm sm:text-base">
                <Maximize2 className="w-4 h-4 text-[#c5a021]" />
                <span>{property.areaSqM} m²</span>
              </div>
              <span className="text-[11px] text-slate-500">Total Built Area</span>
            </div>
          </div>

          {/* Full Description & Highlights */}
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-[#0a1a2f] uppercase tracking-wider mb-2 font-serif-luxury">
                Property Overview
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#0a1a2f] uppercase tracking-wider mb-2.5 font-serif-luxury">
                Key Features & Architectural Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {property.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a021] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Instant Viewing Request Form (Formspree Integrated) */}
          <div className="p-6 rounded-2xl bg-[#0a1a2f] border-2 border-[#c5a021] text-white shadow-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#c5a021]/30">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c5a021] font-bold block mb-1">
                  Private VIP Viewing Request
                </span>
                <p className="text-sm font-medium text-slate-200">
                  Send your booking details directly to Freedom Foundry's email inbox.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={getPropertyEnquiryWhatsAppLink(property.title, property.location)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Tour</span>
                </a>
              </div>
            </div>

            {submitSuccess ? (
              <div className="p-6 rounded-xl bg-white/10 border-2 border-[#c5a021] text-white animate-fadeIn text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#c5a021] text-[#0a1a2f] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-lg font-serif-luxury text-white">
                    Thank You! Your Form Has Been Received.
                  </h4>
                  <p className="text-xs sm:text-sm text-[#c5a021] font-medium mt-1">
                    Viewing Request Confirmed for {property.title}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed max-w-md mx-auto">
                    We have received your details in our inbox. Our senior luxury property advisor <strong>will attend to you shortly</strong> with viewing arrangements and floor plans.
                  </p>
                </div>
                
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                  <a
                    href={getPropertyEnquiryWhatsAppLink(property.title, property.location)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-colors cursor-pointer"
                  >
                    <span>Submit another request</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                {submitError && (
                  <div className="p-3 rounded-lg bg-red-900/80 border border-red-400 text-white text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-300 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Ama Darko"
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 focus:border-[#c5a021] focus:ring-1 focus:ring-[#c5a021] text-white placeholder:text-slate-400 text-xs outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="e.g. +233 24 123 4567"
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 focus:border-[#c5a021] focus:ring-1 focus:ring-[#c5a021] text-white placeholder:text-slate-400 text-xs outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3 text-[#c5a021]" />
                        <span>Email Address</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-normal lowercase">(for viewing pass)</span>
                    </label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="e.g. ama@example.com"
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 focus:border-[#c5a021] focus:ring-1 focus:ring-[#c5a021] text-white placeholder:text-slate-400 text-xs outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Preferred Date / Time
                    </label>
                    <input
                      type="text"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      placeholder="e.g. This Saturday 2:00 PM"
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 focus:border-[#c5a021] focus:ring-1 focus:ring-[#c5a021] text-white placeholder:text-slate-400 text-xs outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0a1a2f]" />
                      <span>Sending Request to Formspree Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Viewing Request to Email ({property.title})</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

