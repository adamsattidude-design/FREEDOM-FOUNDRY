import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Phone, 
  MessageCircle, 
  Car, 
  Plane, 
  Building2, 
  Compass, 
  Clock, 
  ShieldCheck, 
  Copy, 
  Check,
  Sparkles,
  Share2
} from 'lucide-react';
import { COMPANY_INFO, getWhatsAppLink } from '../data/content';

export const LocationMapSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [activeTab, setActiveTab] = useState<'map' | 'landmarks' | 'directions'>('map');

  const officeAddress = COMPANY_INFO.address;
  const encodedAddress = encodeURIComponent(officeAddress);
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const googleMapsViewUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const mapEmbedSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const landmarks = [
    {
      name: 'Kotoka International Airport (ACC)',
      category: 'Aviation & VIP Ingress',
      distance: '2.4 km',
      driveTime: '5 mins',
      icon: Plane,
      description: 'Direct transit for international buyers, diaspora arrivals, and private jet terminal.'
    },
    {
      name: 'Marina Mall & Airport City Business District',
      category: 'Commercial Hub',
      distance: '1.8 km',
      driveTime: '4 mins',
      icon: Building2,
      description: 'Grade-A corporate towers, banks, executive dining, and retail luxury.'
    },
    {
      name: 'Stanbic Heights & Silver Star Tower',
      category: 'Banking & Financial',
      distance: '1.9 km',
      driveTime: '4 mins',
      icon: Compass,
      description: 'Premier multinational headquarters and private wealth management offices.'
    },
    {
      name: 'Cantonments Embassy Enclave & US Embassy',
      category: 'Diplomatic Zone',
      distance: '4.2 km',
      driveTime: '8 mins',
      icon: ShieldCheck,
      description: 'Accra’s most secure residential district with ambassadorial residences.'
    },
    {
      name: 'Accra Mall & Tetteh Quarshie Interchange',
      category: 'Transit Gateway',
      distance: '3.1 km',
      driveTime: '6 mins',
      icon: Car,
      description: 'Central expressway node connecting East Legon, Tema Motorway, and Central Accra.'
    }
  ];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(officeAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 3000);
  };

  const handleShareLocation = () => {
    const shareText = `Freedom Foundry Real Estate Office Location:\n📍 ${officeAddress}\n\nGoogle Maps: ${googleMapsViewUrl}\nWhatsApp: https://wa.me/${COMPANY_INFO.whatsappRaw}?text=PROPERTY`;
    if (navigator.share) {
      navigator.share({
        title: 'Freedom Foundry Real Estate Location',
        text: shareText,
        url: googleMapsViewUrl
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Location details copied to clipboard!');
    }
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#fcfaf2] relative overflow-hidden border-t-2 border-[#c5a021]">
      {/* Background Ambience Elements */}
      <div className="absolute inset-0 subtle-mesh-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c5a021]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0a1a2f]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Animation */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a1a2f] border border-[#c5a021] text-xs font-bold text-[#c5a021] uppercase tracking-widest mb-4 shadow-sm animate-float">
            <MapPin className="w-3.5 h-3.5" />
            <span>Prime Accra Office & Advisory Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a1a2f] font-serif-luxury tracking-tight mb-4">
            Visit Our Airport Residential Office
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Conveniently situated along Liberation Road in the Airport Residential Area — minutes from Kotoka International Airport and Accra’s primary luxury enclaves.
          </p>
          <div className="w-20 h-1 bg-[#c5a021] mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Control Bar: Address Bar, Actions & Tabs */}
        <div className="bg-[#0a1a2f] rounded-2xl p-6 sm:p-8 text-white border-2 border-[#c5a021] shadow-2xl mb-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#c5a021]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            
            {/* Address & Status */}
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs uppercase tracking-widest text-[#c5a021] font-bold">
                  Open for VIP Private Consultations & Site Tours
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#c5a021] shrink-0" />
                <span>{officeAddress}</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300">
                Airport Residential Area • Accra, Ghana • Private Chauffeur & Valet Parking Available
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-google-maps"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all shadow-lg active:scale-95 text-center cursor-pointer group"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                <span>Get Directions</span>
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="p-3.5 rounded-full bg-white/10 hover:bg-white hover:text-[#0a1a2f] text-white border border-white/20 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold"
                title="Copy Address"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-4 h-4 text-[#c5a021]" />
                    <span className="hidden sm:inline text-[#c5a021]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleShareLocation}
                className="p-3.5 rounded-full bg-white/10 hover:bg-white hover:text-[#0a1a2f] text-white border border-white/20 transition-all cursor-pointer"
                title="Share Location"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppLink('Hello Freedom Foundry, I would like to book an in-person meeting at your Airport Residential Office.\n\nCode: PROPERTY')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-white bg-white/10 hover:bg-[#c5a021] hover:text-[#0a1a2f] border border-white/20 transition-all text-center cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#c5a021]" />
                <span>WhatsApp Office</span>
              </a>
            </div>

          </div>

          {/* Quick View Mode Switcher */}
          <div className="flex items-center gap-2 pt-6 mt-6 border-t border-white/10 overflow-x-auto scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveTab('map')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                activeTab === 'map'
                  ? 'bg-[#c5a021] text-[#0a1a2f] shadow-md'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Interactive Google Map</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('landmarks')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                activeTab === 'landmarks'
                  ? 'bg-[#c5a021] text-[#0a1a2f] shadow-md'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Plane className="w-3.5 h-3.5" />
              <span>Nearby Enclaves & Distances</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('directions')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                activeTab === 'directions'
                  ? 'bg-[#c5a021] text-[#0a1a2f] shadow-md'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>VIP Chaperoned Tours</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Google Map + Side Panel */}
        {activeTab === 'map' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fadeIn">
            
            {/* Live Interactive Map Frame with Animated Radar Pin */}
            <div className="lg:col-span-8 rounded-2xl bg-[#0a1a2f] border-2 border-[#c5a021] shadow-2xl overflow-hidden relative min-h-[420px] sm:min-h-[500px] flex flex-col group">
              
              {/* Map Floating Top Badge */}
              <div className="absolute top-4 left-4 z-20 bg-[#0a1a2f]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#c5a021]/60 text-white shadow-xl flex items-center gap-3">
                <div className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a021] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#c5a021]"></span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#c5a021] leading-none">Freedom Foundry HQ</p>
                  <p className="text-[10px] text-slate-300 mt-0.5">Liberation Rd, Airport Residential</p>
                </div>
              </div>

              {/* Map Fullscreen Link */}
              <a
                href={googleMapsViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-[#0a1a2f] px-3 py-1.5 rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5 backdrop-blur-sm transition-all active:scale-95"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Google Map Embedded Iframe */}
              <iframe
                title="Freedom Foundry Real Estate Location Map - Airport Residential, Accra"
                src={mapEmbedSrc}
                width="100%"
                height="100%"
                className="flex-1 w-full min-h-[420px] sm:min-h-[500px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Bottom Quick Directions Bar */}
              <div className="bg-[#0a1a2f] p-4 border-t border-[#c5a021]/30 flex flex-wrap items-center justify-between gap-3 text-xs text-white">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#c5a021]" />
                  <span className="text-slate-300">GPS Navigation:</span>
                  <span className="font-semibold text-white">14 Liberation Road, Airport Residential Area</span>
                </div>

                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c5a021] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Launch Turn-by-Turn GPS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Side Panel: Fast Advisory Contact & Coordinates */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              
              {/* Office Hours & Visiting Protocol */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#c5a021]/40 shadow-lg space-y-4 card-hover-luxury">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#c5a021] uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Consultation Hours</span>
                </div>

                <h4 className="text-xl font-bold font-serif-luxury text-[#0a1a2f]">
                  Private Office & Site Tour Schedule
                </h4>

                <div className="space-y-2.5 text-xs text-slate-600 divide-y divide-slate-100">
                  <div className="flex justify-between items-center pt-1">
                    <span className="font-semibold text-[#0a1a2f]">Monday – Friday</span>
                    <span className="font-mono text-slate-700 font-bold bg-[#fcfaf2] px-2 py-0.5 rounded border border-slate-200">8:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-semibold text-[#0a1a2f]">Saturday</span>
                    <span className="font-mono text-slate-700 font-bold bg-[#fcfaf2] px-2 py-0.5 rounded border border-slate-200">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-semibold text-[#0a1a2f]">Sunday & Public Holidays</span>
                    <span className="font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">By VIP Appointment</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 pt-2 leading-relaxed">
                  Diaspora buyers visiting Ghana for limited durations receive priority weekend and evening inspection allocations.
                </p>
              </div>

              {/* Direct Concierge Call Box */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0a1a2f] border-2 border-[#c5a021] text-white shadow-xl space-y-4 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#c5a021]/15 rounded-full blur-xl pointer-events-none" />

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c5a021] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Immediate Concierge</span>
                </div>

                <h4 className="text-lg font-bold font-serif-luxury text-white">
                  Need On-the-Way Assistance?
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Call our front desk directly for gate security access, parking clearance, or exact turn instructions.
                </p>

                <div className="space-y-2 pt-2">
                  <a
                    href={`tel:${COMPANY_INFO.phoneInternational}`}
                    className="w-full py-3 rounded-full bg-[#c5a021] hover:bg-white text-[#0a1a2f] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {COMPANY_INFO.phoneDisplay}</span>
                  </a>

                  <a
                    href={getWhatsAppLink('Hello Freedom Foundry, I am arriving for a scheduled consultation at your Airport Residential office.\n\nCode: PROPERTY')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-white/10 hover:bg-white hover:text-[#0a1a2f] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all border border-white/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-[#c5a021]" />
                    <span>Notify Arrival via WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Nearby Landmarks & Distances */}
        {activeTab === 'landmarks' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {landmarks.map((l, idx) => {
                const IconComponent = l.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border-2 border-[#c5a021]/30 hover:border-[#c5a021] shadow-md hover:shadow-xl transition-all duration-300 space-y-3 card-hover-luxury"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#0a1a2f] text-[#c5a021] flex items-center justify-center border border-[#c5a021]/40">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <span className="text-base font-bold text-[#0a1a2f] font-serif-luxury block">{l.driveTime}</span>
                        <span className="text-[11px] text-[#c5a021] font-semibold">{l.distance}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#c5a021] tracking-wider block mb-0.5">{l.category}</span>
                      <h4 className="text-base font-bold text-[#0a1a2f] font-serif-luxury">{l.name}</h4>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {l.description}
                    </p>

                    <a
                      href={`https://www.google.com/maps/dir/${encodeURIComponent(l.name + ', Accra')}/${encodedAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c5a021] hover:text-[#0a1a2f] transition-colors pt-2"
                    >
                      <span>Route from {l.name.split(' ')[0]}</span>
                      <Navigation className="w-3.5 h-3.5" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: VIP Chaperoned Tours & Airport Pickup */}
        {activeTab === 'directions' && (
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0a1a2f] border-2 border-[#c5a021] text-white shadow-2xl relative overflow-hidden animate-fadeIn">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a021]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a021]/20 border border-[#c5a021] text-[#c5a021] text-xs font-bold uppercase tracking-widest">
                <Car className="w-3.5 h-3.5" />
                <span>Executive Concierge Service</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold font-serif-luxury text-white leading-tight">
                Complimentary Kotoka Airport (ACC) Pick-Up & Chaperoned Property Inspections
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                For our high-net-worth investors and Ghanaian diaspora clients flying into Accra, Freedom Foundry provides private executive chauffeur pick-up directly from Kotoka International Airport (Terminal 3) or your hotel (Kempinski, Movenpick, Marriott) directly to our office and selected estates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Plane className="w-5 h-5 text-[#c5a021] mb-2" />
                  <h5 className="text-sm font-bold text-white mb-1">Terminal 3 Meet & Greet</h5>
                  <p className="text-xs text-slate-400">Direct VIP pickup upon baggage clearance.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-[#c5a021] mb-2" />
                  <h5 className="text-sm font-bold text-white mb-1">Private Chaperone</h5>
                  <p className="text-xs text-slate-400">Air-conditioned executive SUV with licensed real estate advisor.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-[#c5a021] mb-2" />
                  <h5 className="text-sm font-bold text-white mb-1">Full-Day Enclave Tours</h5>
                  <p className="text-xs text-slate-400">Cantonments, East Legon, Airport Residential, & Ridge in 1 tour.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppLink('Hello Freedom Foundry, I would like to arrange VIP airport pickup and a chaperoned luxury property viewing tour in Accra.\n\nCode: PROPERTY')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all shadow-xl active:scale-95 text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Request VIP Chauffeur Tour</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneInternational}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-xs uppercase tracking-widest text-white bg-white/10 hover:bg-white hover:text-[#0a1a2f] border border-white/20 transition-all text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
