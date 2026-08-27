export interface Property {
  id: string;
  title: string;
  tagline: string;
  category: 'family-home' | 'apartment' | 'investment' | 'villa';
  categoryLabel: string;
  price: string;
  priceUSD: number;
  location: string;
  neighborhood: string;
  bedrooms: number;
  bathrooms: number;
  areaSqM: number;
  featured: boolean;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  status: 'Available' | 'Exclusive' | 'Under Offer';
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  icon: string;
  badge: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  propertyType: string;
  category: 'all' | 'diaspora' | 'family-home' | 'investment';
  rating: number;
  date: string;
  avatarText: string;
  quote: string;
  verified: boolean;
  highlight: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'all' | 'buying' | 'diaspora' | 'legal' | 'investment' | 'viewings';
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  propertyType: string;
  budgetRange: string;
  message: string;
}
