import React, { useState } from 'react';
import { Bed, Bath, Maximize2, MapPin, ArrowRight, MessageCircle, Eye, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Property } from '../types';
import { PROPERTIES } from '../data/properties';
import { getPropertyEnquiryWhatsAppLink, getWhatsAppLink } from '../data/content';

interface FeaturedPropertiesProps {
  onSelectProperty: (property: Property) => void;
  onNavigateProperties?: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({ 
  onSelectProperty,
  onNavigateProperties 
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'family-home' | 'apartment' | 'investment'>('all');

  const filteredProperties = selectedFilter === 'all'
    ? PROPERTIES
    : PROPERTIES.filter((p) => p.category === selectedFilter);

  const filters = [
    { label: 'All Showcase', value: 'all' },
    { label: 'Family Homes', value: 'family-home' },
    { label: 'Luxury Apartments', value: 'apartment' },
    { label: 'Investment Units', value: 'investment' },
  ];

  return (
    <section id="properties" className="py-20 lg:py-28 bg-[#fcfaf2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a1a2f] border border-[#c5a021] text-xs font-bold text-[#c5a021] uppercase tracking-widest mb-3 shadow-md animate-float">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a1a2f] font-serif-luxury tracking-tight">
              Featured Luxury Properties
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Handpicked luxury residences, sky-rise penthouses, and prime income-generating assets in Accra.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                key={f.value}
                id={`filter-btn-${f.value}`}
                onClick={() => setSelectedFilter(f.value as any)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedFilter === f.value
                    ? 'bg-[#0a1a2f] text-[#c5a021] border-2 border-[#c5a021] shadow-lg'
                    : 'bg-white text-slate-700 hover:text-[#0a1a2f] border border-slate-300 hover:border-[#c5a021]'
                }`}
              >
                {f.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Property Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProperties.map((property, index) => (
              <motion.div
                layout
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                id={`property-card-${property.id}`}
                className="rounded-2xl bg-white border-2 border-[#c5a021]/30 hover:border-[#c5a021] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a1a2f]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f]/90 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 flex items-center gap-1.5 sm:gap-2">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#0a1a2f] text-[#c5a021] border border-[#c5a021]/50 shadow-md">
                      {property.categoryLabel}
                    </span>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#c5a021] text-[#0a1a2f] shadow-md">
                      {property.status}
                    </span>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5">
                    <span className="text-lg sm:text-2xl font-extrabold text-white font-serif-luxury tracking-tight drop-shadow-md">
                      {property.price}
                    </span>
                  </div>

                  {/* Quick View Button */}
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => onSelectProperty(property)}
                    aria-label={`Quick view ${property.title}`}
                    className="absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 p-2 sm:p-2.5 rounded-xl bg-white/95 hover:bg-white text-[#0a1a2f] shadow-lg transition-transform min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-[#c5a021] font-bold uppercase tracking-wider mb-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{property.location}</span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onSelectProperty(property)}
                      className="text-xl font-bold text-[#0a1a2f] font-serif-luxury group-hover:text-[#c5a021] transition-colors mb-2 cursor-pointer"
                    >
                      {property.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {property.description}
                    </p>

                    {/* Property Specs (Beds, Baths, Area) */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 mb-5 bg-[#fcfaf2] rounded-xl px-3 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center gap-1 text-[#0a1a2f] font-bold text-xs">
                          <Bed className="w-3.5 h-3.5 text-[#c5a021]" />
                          <span>{property.bedrooms} Beds</span>
                        </div>
                        <span className="text-[10px] text-slate-400">En-Suite</span>
                      </div>

                      <div className="flex flex-col items-center justify-center border-x border-slate-200">
                        <div className="flex items-center gap-1 text-[#0a1a2f] font-bold text-xs">
                          <Bath className="w-3.5 h-3.5 text-[#c5a021]" />
                          <span>{property.bathrooms} Baths</span>
                        </div>
                        <span className="text-[10px] text-slate-400">Modern</span>
                      </div>

                      <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center gap-1 text-[#0a1a2f] font-bold text-xs">
                          <Maximize2 className="w-3.5 h-3.5 text-[#c5a021]" />
                          <span>{property.areaSqM} m²</span>
                        </div>
                        <span className="text-[10px] text-slate-400">Living Area</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons: Enquire Now & Quick View */}
                  <div className="flex items-center gap-2.5 pt-2">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={getPropertyEnquiryWhatsAppLink(property.title, property.location)}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`enquire-now-btn-${property.id}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-[#0a1a2f] hover:text-white transition-all shadow-md cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Enquire Now</span>
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="button"
                      onClick={() => onSelectProperty(property)}
                      className="p-3 rounded-full border border-slate-300 hover:border-[#c5a021] text-[#0a1a2f] hover:text-[#c5a021] hover:bg-[#fcfaf2] transition-colors cursor-pointer"
                      title="View Property Specs & Gallery"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Properties Button */}
        {onNavigateProperties && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={onNavigateProperties}
              id="view-all-properties-btn"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0a1a2f] hover:bg-[#c5a021] text-[#c5a021] hover:text-[#0a1a2f] border-2 border-[#c5a021] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-2xl group cursor-pointer animate-pulse-glow"
            >
              <span>Explore Full Portfolio & High-Res Galleries ({PROPERTIES.length} Estates • 50+ Photos)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </motion.button>
          </motion.div>
        )}

        {/* Custom Request Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center bg-[#0a1a2f] p-8 sm:p-10 rounded-2xl border-2 border-[#c5a021] shadow-2xl max-w-3xl mx-auto animate-pulse-glow relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c5a021]/15 rounded-full blur-2xl pointer-events-none" />

          <h4 className="text-xl sm:text-2xl font-bold text-white font-serif-luxury mb-2">
            Looking for Off-Market or Custom Accra Real Estate?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-lg mx-auto leading-relaxed">
            Not all luxury properties in Cantonments and Airport Residential are publicly listed. Contact our private acquisitions team directly.
          </p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={getWhatsAppLink('Hello Freedom Foundry, I am looking for off-market luxury property options in Accra.\n\nCode: PROPERTY')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all shadow-xl cursor-pointer animate-shimmer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Request Off-Market Catalog</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};


