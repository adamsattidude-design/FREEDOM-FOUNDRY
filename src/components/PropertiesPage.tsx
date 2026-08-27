import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Bed, 
  Bath, 
  Maximize2, 
  MapPin, 
  MessageCircle, 
  Mail, 
  Phone, 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  SlidersHorizontal,
  Grid,
  List,
  Images,
  X,
  ExternalLink,
  Award,
  Layers
} from 'lucide-react';
import { Property } from '../types';
import { PROPERTIES } from '../data/properties';
import { COMPANY_INFO, getPropertyEnquiryWhatsAppLink, getWhatsAppLink } from '../data/content';

interface PropertiesPageProps {
  onBackToHome: () => void;
  onSelectProperty: (property: Property) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({ onBackToHome, onSelectProperty }) => {
  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');
  const [selectedBedrooms, setSelectedBedrooms] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'beds-desc' | 'area-desc'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'expanded'>('grid');

  // Interactive Active Image Indices for each property card
  const [activeImageIndexes, setActiveImageIndexes] = useState<{ [propId: string]: number }>({});

  // Fullscreen Photo Lightbox State
  const [lightboxProperty, setLightboxProperty] = useState<Property | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number>(0);

  const categories = [
    { id: 'all', label: 'All Types' },
    { id: 'family-home', label: 'Family Homes' },
    { id: 'apartment', label: 'Luxury Apartments' },
    { id: 'investment', label: 'Investment Complexes' },
    { id: 'villa', label: 'Luxury Villas' },
  ];

  const neighborhoods = [
    { id: 'all', label: 'All Neighborhoods' },
    { id: 'East Legon', label: 'East Legon' },
    { id: 'Airport Residential', label: 'Airport Residential' },
    { id: 'Cantonments', label: 'Cantonments' },
    { id: 'Roman Ridge', label: 'Roman Ridge' },
    { id: 'Ridge', label: 'Ridge' },
    { id: 'Labone', label: 'Labone' },
  ];

  // Filtering and Sorting
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      // Search
      const matchesSearch = 
        prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.neighborhood.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prop.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Category
      const matchesCategory = selectedCategory === 'all' || prop.category === selectedCategory;

      // Neighborhood
      const matchesNeighborhood = 
        selectedNeighborhood === 'all' || 
        prop.location.toLowerCase().includes(selectedNeighborhood.toLowerCase()) ||
        prop.neighborhood.toLowerCase().includes(selectedNeighborhood.toLowerCase());

      // Bedrooms
      const matchesBedrooms = selectedBedrooms === 'all' || prop.bedrooms >= selectedBedrooms;

      return matchesSearch && matchesCategory && matchesNeighborhood && matchesBedrooms;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
      if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
      if (sortBy === 'beds-desc') return b.bedrooms - a.bedrooms;
      if (sortBy === 'area-desc') return b.areaSqM - a.areaSqM;
      // Default: featured first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedNeighborhood, selectedBedrooms, sortBy]);

  const handleCardImageNav = (propId: string, totalImages: number, direction: 'prev' | 'next', e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => {
      const currentIndex = prev[propId] || 0;
      let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
      if (newIndex < 0) newIndex = totalImages - 1;
      if (newIndex >= totalImages) newIndex = 0;
      return { ...prev, [propId]: newIndex };
    });
  };

  const openLightbox = (property: Property, index: number = 0, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxProperty(property);
    setLightboxImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxProperty(null);
  };

  const nextLightboxImage = () => {
    if (!lightboxProperty) return;
    const gallery = lightboxProperty.gallery && lightboxProperty.gallery.length > 0 
      ? lightboxProperty.gallery 
      : [lightboxProperty.image];
    setLightboxImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevLightboxImage = () => {
    if (!lightboxProperty) return;
    const gallery = lightboxProperty.gallery && lightboxProperty.gallery.length > 0 
      ? lightboxProperty.gallery 
      : [lightboxProperty.image];
    setLightboxImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="min-h-screen bg-[#fcfaf2] pt-24 pb-20">
      
      {/* Top Breadcrumb Bar */}
      <div className="bg-[#0a1a2f] border-b border-[#c5a021]/30 py-4 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            id="back-to-home-button"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#c5a021] hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Site</span>
          </button>

          <div className="flex items-center gap-3 text-xs text-slate-300">
            <span className="hidden sm:inline">Freedom Foundry Real Estate</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#c5a021] font-semibold">Accra Property Portfolio</span>
          </div>
        </div>
      </div>

      {/* Catalog Hero Banner */}
      <div className="bg-[#0a1a2f] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-2 border-[#c5a021]">
        <div className="absolute inset-0 subtle-mesh-pattern opacity-20 pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#c5a021]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#c5a021]/60 text-[11px] font-bold text-[#c5a021] uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Luxury Catalog & Photo Gallery</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif-luxury tracking-tight text-white leading-tight">
              Curated Luxury Properties in Accra
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore high-resolution multi-angle photography, comprehensive floor specifications, and verified Lands Commission registered estates across Cantonments, Airport Residential, East Legon, and Roman Ridge.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xl sm:text-2xl font-bold text-[#c5a021] font-serif-luxury">{PROPERTIES.length} Estates</p>
              <p className="text-[11px] uppercase tracking-wider text-slate-400">Available Listings</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xl sm:text-2xl font-bold text-[#c5a021] font-serif-luxury">100%</p>
              <p className="text-[11px] uppercase tracking-wider text-slate-400">Title Verified</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xl sm:text-2xl font-bold text-[#c5a021] font-serif-luxury">$380K – $1.2M</p>
              <p className="text-[11px] uppercase tracking-wider text-slate-400">Price Spectrum</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xl sm:text-2xl font-bold text-[#c5a021] font-serif-luxury">50+ Photos</p>
              <p className="text-[11px] uppercase tracking-wider text-slate-400">HD Galleries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area: Search, Filters & Grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        
        {/* Search & Filter Controls Toolbar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border-2 border-[#c5a021]/30 shadow-lg mb-8 sm:mb-10 space-y-4 sm:space-y-5">
          
          {/* Top Row: Search Input + View Mode Toggle */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="properties-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search neighborhood, title, penthouse, pool..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-[#fcfaf2] border border-slate-200 focus:border-[#c5a021] focus:ring-2 focus:ring-[#c5a021]/20 outline-none text-xs sm:text-sm text-[#0a1a2f]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-200 px-2 py-0.5 rounded-full"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode & Sorting */}
            <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 shrink-0">
              <div className="flex items-center gap-1 bg-[#fcfaf2] p-1 rounded-full border border-slate-200">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-[#0a1a2f] text-[#c5a021] shadow-sm' 
                      : 'text-slate-600 hover:text-[#0a1a2f]'
                  }`}
                  title="Grid View"
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Grid</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('expanded')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors ${
                    viewMode === 'expanded' 
                      ? 'bg-[#0a1a2f] text-[#c5a021] shadow-sm' 
                      : 'text-slate-600 hover:text-[#0a1a2f]'
                  }`}
                  title="Expanded Gallery View"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Gallery</span>
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                id="properties-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-full bg-[#fcfaf2] border border-slate-200 text-xs font-bold text-[#0a1a2f] outline-none focus:border-[#c5a021] cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="beds-desc">Beds: Most</option>
                <option value="area-desc">Size: Largest</option>
              </select>
            </div>
          </div>

          {/* Filter Chips: Category, Neighborhood, Bedrooms */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#c5a021]" /> Type:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#0a1a2f] text-[#c5a021] border border-[#c5a021] shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-[#c5a021]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Neighborhood Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#c5a021]" /> Enclave:
              </span>
              {neighborhoods.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setSelectedNeighborhood(n.id)}
                  className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedNeighborhood === n.id
                      ? 'bg-[#c5a021] text-[#0a1a2f] font-bold shadow-sm'
                      : 'bg-[#fcfaf2] text-slate-600 border border-slate-200 hover:border-[#c5a021]'
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </div>

            {/* Bedroom Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 flex items-center gap-1">
                <Bed className="w-3 h-3 text-[#c5a021]" /> Bedrooms:
              </span>
              {[
                { id: 'all', label: 'Any Beds' },
                { id: 3, label: '3+ Beds' },
                { id: 4, label: '4+ Beds' },
                { id: 5, label: '5+ Beds' },
                { id: 6, label: '6+ Beds' },
              ].map((b) => (
                <button
                  key={b.id.toString()}
                  onClick={() => setSelectedBedrooms(b.id as any)}
                  className={`px-3 py-1 rounded-full text-xs transition-all ${
                    selectedBedrooms === b.id
                      ? 'bg-[#0a1a2f] text-[#c5a021] font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {b.label}
                </button>
              ))}

              {(selectedCategory !== 'all' || selectedNeighborhood !== 'all' || selectedBedrooms !== 'all' || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedNeighborhood('all');
                    setSelectedBedrooms('all');
                    setSearchQuery('');
                  }}
                  className="ml-auto text-xs font-bold text-red-600 hover:underline"
                >
                  Reset All Filters
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-sm font-bold text-[#0a1a2f]">
            Showing <span className="text-[#c5a021]">{filteredProperties.length}</span> luxury properties
          </p>
          <span className="text-xs text-slate-500">
            Click any image thumbnail to inspect photos in high definition
          </span>
        </div>

        {/* Property Cards - Grid View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => {
              const gallery = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];
              const activeIndex = activeImageIndexes[property.id] || 0;
              const currentImage = gallery[activeIndex] || property.image;

              return (
                <div
                  key={property.id}
                  id={`prop-page-card-${property.id}`}
                  className="rounded-2xl bg-white border-2 border-[#c5a021]/30 hover:border-[#c5a021] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Interactive Image Box with Next/Prev and Thumbnail Slider */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0a1a2f]">
                    <img
                      src={currentImage}
                      alt={`${property.title} - View ${activeIndex + 1}`}
                      className="w-full h-full object-cover transition-all duration-500 cursor-pointer group-hover:scale-103"
                      onClick={() => openLightbox(property, activeIndex)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f]/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#0a1a2f] text-[#c5a021] border border-[#c5a021]/50">
                        {property.categoryLabel}
                      </span>
                      <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#c5a021] text-[#0a1a2f]">
                        {property.status}
                      </span>
                    </div>

                    {/* Gallery Count & Fullscreen Trigger */}
                    <button
                      type="button"
                      onClick={(e) => openLightbox(property, activeIndex, e)}
                      className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 hover:bg-black text-white text-[11px] font-bold flex items-center gap-1.5 backdrop-blur-sm transition-colors cursor-pointer"
                    >
                      <Images className="w-3.5 h-3.5 text-[#c5a021]" />
                      <span>{activeIndex + 1} / {gallery.length}</span>
                    </button>

                    {/* Image Nav Arrows */}
                    {gallery.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => handleCardImageNav(property.id, gallery.length, 'prev', e)}
                          aria-label="Previous photo"
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-[#0a1a2f] text-white flex items-center justify-center backdrop-blur-sm opacity-80 hover:opacity-100 transition-opacity"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => handleCardImageNav(property.id, gallery.length, 'next', e)}
                          aria-label="Next photo"
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-[#0a1a2f] text-white flex items-center justify-center backdrop-blur-sm opacity-80 hover:opacity-100 transition-opacity"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}

                    {/* Price Overlay */}
                    <div className="absolute bottom-3 left-3 pointer-events-none">
                      <span className="text-2xl font-extrabold text-white font-serif-luxury drop-shadow-md">
                        {property.price}
                      </span>
                    </div>

                    {/* Quick Lightbox View Trigger */}
                    <button
                      type="button"
                      onClick={(e) => openLightbox(property, activeIndex, e)}
                      className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 hover:bg-white text-[#0a1a2f] shadow-md transition-transform active:scale-95"
                      title="Enlarge Fullscreen Photo Gallery"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Thumbnail Row Bar */}
                  {gallery.length > 1 && (
                    <div className="bg-[#0a1a2f] p-2 flex items-center gap-1.5 overflow-x-auto border-t border-[#c5a021]/30 scrollbar-none">
                      {gallery.map((imgUrl, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImageIndexes((prev) => ({ ...prev, [property.id]: idx }))}
                          className={`w-12 h-8 rounded overflow-hidden shrink-0 border-2 transition-all ${
                            activeIndex === idx ? 'border-[#c5a021] scale-105 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
                          }`}
                        >
                          <img src={imgUrl} alt="thumb" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Card Details Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-xs text-[#c5a021] font-bold uppercase tracking-wider mb-1.5">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{property.location}</span>
                      </div>

                      <h3
                        onClick={() => onSelectProperty(property)}
                        className="text-lg font-bold text-[#0a1a2f] font-serif-luxury group-hover:text-[#c5a021] transition-colors mb-2 cursor-pointer leading-snug"
                      >
                        {property.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                        {property.description}
                      </p>

                      {/* Specs Badge Bar */}
                      <div className="grid grid-cols-3 gap-2 py-2.5 border-y border-slate-100 mb-4 bg-[#fcfaf2] rounded-lg px-2 text-center text-xs">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-[#0a1a2f] flex items-center gap-1">
                            <Bed className="w-3.5 h-3.5 text-[#c5a021]" /> {property.bedrooms}
                          </span>
                          <span className="text-[10px] text-slate-400">Beds</span>
                        </div>
                        <div className="flex flex-col items-center border-x border-slate-200">
                          <span className="font-bold text-[#0a1a2f] flex items-center gap-1">
                            <Bath className="w-3.5 h-3.5 text-[#c5a021]" /> {property.bathrooms}
                          </span>
                          <span className="text-[10px] text-slate-400">Baths</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-[#0a1a2f] flex items-center gap-1">
                            <Maximize2 className="w-3.5 h-3.5 text-[#c5a021]" /> {property.areaSqM}m²
                          </span>
                          <span className="text-[10px] text-slate-400">Area</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center gap-2">
                        <a
                          href={getPropertyEnquiryWhatsAppLink(property.title, property.location)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#0a1a2f] bg-[#c5a021] hover:bg-[#0a1a2f] hover:text-white transition-all shadow-sm text-center"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>WhatsApp Viewing</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => onSelectProperty(property)}
                          className="p-2.5 rounded-full border border-slate-300 hover:border-[#c5a021] text-[#0a1a2f] hover:text-[#c5a021] transition-colors"
                          title="Full Specifications & Dossier"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => openLightbox(property, 0)}
                        className="w-full py-1.5 text-center text-xs font-bold text-slate-600 hover:text-[#c5a021] flex items-center justify-center gap-1 transition-colors"
                      >
                        <Images className="w-3.5 h-3.5" />
                        <span>Browse All {gallery.length} High-Res Photos</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Expanded Gallery Mode View */
          <div className="space-y-12">
            {filteredProperties.map((property) => {
              const gallery = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];

              return (
                <div
                  key={property.id}
                  className="rounded-3xl bg-white border-2 border-[#c5a021]/30 hover:border-[#c5a021] shadow-xl overflow-hidden p-6 sm:p-8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Multi-Photo Grid (Hero + 4 Thumbnails) */}
                    <div className="lg:col-span-7 space-y-3">
                      {/* Main Featured Photo */}
                      <div 
                        onClick={() => openLightbox(property, 0)}
                        className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#0a1a2f] cursor-pointer group shadow-md"
                      >
                        <img 
                          src={gallery[0]} 
                          alt={property.title} 
                          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <span className="text-2xl font-bold font-serif-luxury">{property.price}</span>
                          <p className="text-xs text-slate-200">{property.neighborhood}</p>
                        </div>
                        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#0a1a2f]/80 text-[#c5a021] text-xs font-bold border border-[#c5a021]/40 flex items-center gap-1.5 backdrop-blur-sm">
                          <Images className="w-3.5 h-3.5" />
                          <span>{gallery.length} Photos</span>
                        </div>
                      </div>

                      {/* 4 Image Thumbnail Mosaic */}
                      <div className="grid grid-cols-4 gap-2.5">
                        {gallery.slice(1, 5).map((img, idx) => (
                          <div
                            key={idx}
                            onClick={() => openLightbox(property, idx + 1)}
                            className="aspect-[4/3] rounded-lg overflow-hidden bg-[#0a1a2f] cursor-pointer hover:opacity-90 transition-opacity relative group border border-slate-200"
                          >
                            <img src={img} alt="detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                            {idx === 3 && gallery.length > 5 && (
                              <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white text-xs font-bold">
                                +{gallery.length - 5} More
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Property Details & Actions */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0a1a2f] text-[#c5a021] border border-[#c5a021]/40">
                            {property.categoryLabel}
                          </span>
                          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Lands Commission Titled
                          </span>
                        </div>

                        <h2 
                          onClick={() => onSelectProperty(property)}
                          className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#0a1a2f] cursor-pointer hover:text-[#c5a021] transition-colors leading-snug"
                        >
                          {property.title}
                        </h2>

                        <div className="flex items-center gap-1.5 text-xs text-[#c5a021] font-bold uppercase tracking-wider">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span>{property.location}</span>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed">
                          {property.description}
                        </p>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-3 gap-3 p-3.5 bg-[#fcfaf2] rounded-xl border border-[#c5a021]/20 text-center">
                          <div>
                            <p className="text-xs text-slate-400 uppercase">Bedrooms</p>
                            <p className="text-base font-bold text-[#0a1a2f] flex items-center justify-center gap-1 mt-0.5">
                              <Bed className="w-4 h-4 text-[#c5a021]" /> {property.bedrooms}
                            </p>
                          </div>
                          <div className="border-x border-slate-200">
                            <p className="text-xs text-slate-400 uppercase">Bathrooms</p>
                            <p className="text-base font-bold text-[#0a1a2f] flex items-center justify-center gap-1 mt-0.5">
                              <Bath className="w-4 h-4 text-[#c5a021]" /> {property.bathrooms}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 uppercase">Living Space</p>
                            <p className="text-base font-bold text-[#0a1a2f] flex items-center justify-center gap-1 mt-0.5">
                              <Maximize2 className="w-4 h-4 text-[#c5a021]" /> {property.areaSqM} m²
                            </p>
                          </div>
                        </div>

                        {/* Highlights List */}
                        <div className="space-y-1.5 pt-2">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Highlights:</p>
                          <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-700">
                            {property.highlights.map((h, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a021] shrink-0" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                        <a
                          href={getPropertyEnquiryWhatsAppLink(property.title, property.location)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-[#0a1a2f] hover:text-white transition-all shadow-md text-center"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>DM "PROPERTY" to Book</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => onSelectProperty(property)}
                          className="px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#fcfaf2] hover:bg-[#0a1a2f] hover:text-white border-2 border-[#c5a021] transition-all text-center"
                        >
                          Full Dossier
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl border-2 border-slate-200 max-w-xl mx-auto my-12">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0a1a2f] mb-1">No Matching Properties Found</h3>
            <p className="text-xs text-slate-500 mb-6">
              We couldn't find listings matching your current filter criteria. We often have unlisted off-market options in Accra.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedNeighborhood('all');
                  setSelectedBedrooms('all');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 rounded-full bg-[#0a1a2f] text-[#c5a021] font-bold text-xs uppercase tracking-wider"
              >
                Reset Filters
              </button>
              <a
                href={getWhatsAppLink('Hello Freedom Foundry, I am looking for custom off-market property requirements.\n\nCode: PROPERTY')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#c5a021] text-[#0a1a2f] font-bold text-xs uppercase tracking-wider"
              >
                Request Custom Search
              </a>
            </div>
          </div>
        )}

        {/* Off-Market & Custom Request Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#0a1a2f] border-2 border-[#c5a021] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#c5a021]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#c5a021] font-bold">
                Private Advisory & Off-Market Portfolio
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold font-serif-luxury text-white">
                Seeking a Specific Architectural Estate in Accra?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Many exclusive ambassadorial mansions and prime development parcels in Cantonments, Ridge, and Airport West are managed off-market. Contact the estate owner directly with your confidential brief.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
              <a
                href={getWhatsAppLink('Hello Freedom Foundry, I am seeking a confidential off-market luxury property search in Accra.\n\nCode: PROPERTY')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-all shadow-lg active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>DM WhatsApp Concierge</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent('Confidential Property Acquisition Brief — Accra')}&body=${encodeURIComponent('Hello Freedom Foundry Estate Owner,\n\nI am looking for an executive property in Accra with the following parameters:\n\n• Target Neighborhood:\n• Budget:\n• Property Type / Bedrooms:\n\nPlease contact me.\n\nThank you.')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-xs uppercase tracking-widest text-white bg-white/10 hover:bg-white hover:text-[#0a1a2f] transition-all border border-white/20 text-center"
              >
                <Mail className="w-4 h-4 text-[#c5a021]" />
                <span>Email Owner</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {lightboxProperty && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-3 sm:p-6 backdrop-blur-md animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white z-10 gap-2" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="text-xs sm:text-base font-bold font-serif-luxury text-white truncate">
                {lightboxProperty.title}
              </span>
              <span className="text-[10px] sm:text-xs text-[#c5a021] bg-[#0a1a2f] px-2 py-0.5 rounded-full border border-[#c5a021]/40 shrink-0">
                {lightboxProperty.price}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <span className="text-[11px] sm:text-xs text-slate-400">
                {lightboxImageIndex + 1}/{(lightboxProperty.gallery || [lightboxProperty.image]).length}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-black text-white transition-colors cursor-pointer"
                title="Close Photo Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Main High-Res Image View with Arrow Controls */}
          <div className="relative flex-1 flex items-center justify-center my-2 sm:my-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Prev Button */}
            <button
              type="button"
              onClick={prevLightboxImage}
              className="absolute left-1 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-[#c5a021] hover:text-[#0a1a2f] text-white flex items-center justify-center transition-all z-20 backdrop-blur-sm active:scale-90"
              title="Previous Photo"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Photo */}
            <img
              src={(lightboxProperty.gallery && lightboxProperty.gallery[lightboxImageIndex]) || lightboxProperty.image}
              alt={`${lightboxProperty.title} view ${lightboxImageIndex + 1}`}
              className="max-h-[60vh] sm:max-h-[75vh] max-w-[95vw] sm:max-w-[90vw] object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {/* Next Button */}
            <button
              type="button"
              onClick={nextLightboxImage}
              className="absolute right-1 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-[#c5a021] hover:text-[#0a1a2f] text-white flex items-center justify-center transition-all z-20 backdrop-blur-sm active:scale-90"
              title="Next Photo"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Bottom Thumbnail Strip & Fast Inquire Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 z-10" onClick={(e) => e.stopPropagation()}>
            {/* Thumbnails */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full sm:max-w-2xl py-1 scrollbar-none">
              {(lightboxProperty.gallery || [lightboxProperty.image]).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxImageIndex(idx)}
                  className={`w-12 h-9 sm:w-16 sm:h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    lightboxImageIndex === idx ? 'border-[#c5a021] scale-105' : 'border-transparent opacity-50 hover:opacity-90'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Direct Inquire Button */}
            <div className="w-full sm:w-auto flex items-center justify-center">
              <a
                href={getPropertyEnquiryWhatsAppLink(lightboxProperty.title, lightboxProperty.location)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#0a1a2f] bg-[#c5a021] hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Inquire About This Property</span>
              </a>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
