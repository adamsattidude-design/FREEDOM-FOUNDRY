/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TopQuickInquiry } from './components/TopQuickInquiry';
import { About } from './components/About';
import { Services } from './components/Services';
import { FeaturedProperties } from './components/FeaturedProperties';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { LocationMapSection } from './components/LocationMapSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { PropertiesPage } from './components/PropertiesPage';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Property } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'properties'>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleOpenBooking = () => {
    if (currentPage === 'properties') {
      setCurrentPage('home');
      setTimeout(() => {
        const contactElem = document.getElementById('contact');
        if (contactElem) {
          contactElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-hidden bg-[#fcfaf2] text-[#0a1a2f] flex flex-col selection:bg-[#c5a021]/30 selection:text-[#0a1a2f]">
      
      {/* 1. Header with navigation, page switcher, and WhatsApp button */}
      <Header 
        onOpenBookingModal={handleOpenBooking}
        currentPage={currentPage}
        onNavigateHome={() => setCurrentPage('home')}
        onNavigateProperties={() => setCurrentPage('properties')}
      />

      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            {/* 2. Hero Section */}
            <Hero 
              onOpenBookingModal={handleOpenBooking} 
              onNavigateProperties={() => setCurrentPage('properties')}
            />

            {/* 2.5 Top Fast-Track Quick Inquiry Form (Skip Scrolling) */}
            <TopQuickInquiry onScrollToFullContact={handleOpenBooking} />

            {/* 3. About Freedom Foundry Real Estate Section */}
            <About />

            {/* 4. Services Section (Premium Properties, Trusted Service, Smart Investments) */}
            <Services />

            {/* 5. Featured Properties Section */}
            <FeaturedProperties 
              onSelectProperty={setSelectedProperty} 
              onNavigateProperties={() => setCurrentPage('properties')}
            />

            {/* 6. Why Choose Us Section */}
            <WhyChooseUs />

            {/* 7. Client Testimonials & Reviews Section */}
            <Testimonials />

            {/* 8. Frequently Asked Questions (FAQ) Section */}
            <FAQSection />

            {/* 9. Interactive Google Map & Office Location Section */}
            <LocationMapSection />

            {/* 10. Contact / Message Section with Direct WhatsApp Lead Generator & Estate Owner Email */}
            <ContactSection />
          </>
        ) : (
          <>
            {/* Dedicated All Properties Page with HD Image Galleries, Filters & Lightbox */}
            <PropertiesPage
              onBackToHome={() => setCurrentPage('home')}
              onSelectProperty={setSelectedProperty}
            />

            {/* Google Map & Office Location */}
            <LocationMapSection />

            {/* FAQ Section also visible/accessible below the catalog */}
            <FAQSection />

            {/* Direct Contact & Booking Section */}
            <ContactSection />
          </>
        )}
      </main>

      {/* 10. Footer */}
      <Footer 
        onNavigateHome={() => setCurrentPage('home')}
        onNavigateProperties={() => setCurrentPage('properties')}
      />

      {/* Interactive Property Detail Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      {/* Always-Accessible Floating WhatsApp CTA */}
      <FloatingWhatsApp />

    </div>
  );
}
