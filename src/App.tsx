import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { BridalFeature } from './components/BridalFeature';
import { ProductsSection } from './components/ProductsSection';
import { WhyUs } from './components/WhyUs';
import { Reviews } from './components/Reviews';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { AppointmentModal } from './components/AppointmentModal';
import { ProductModal } from './components/ProductModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>("Women's Hair");
  const [productModalOpen, setProductModalOpen] = useState(false);

  const handleOpenBooking = (serviceName?: string, category?: string) => {
    setSelectedService(serviceName);
    if (category) setSelectedCategory(category);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#F8F1E7] text-[#242124] flex flex-col selection:bg-[#D4AF6A]/30 selection:text-[#5A1833]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Dedicated Structured Services Section */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Compact Bridal Feature */}
        <BridalFeature onOpenBooking={handleOpenBooking} />

        {/* Beauty Products Section */}
        <ProductsSection onOpenProductModal={() => setProductModalOpen(true)} />

        {/* Why HairCut? Section */}
        <WhyUs />

        {/* Client Reviews Section */}
        <Reviews />

        {/* Google Maps & Direction Details */}
        <LocationSection />

        {/* Compact Contact Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Action Buttons (Only Call + WhatsApp) */}
      <FloatingButtons />

      {/* Appointment Booking Modal Form */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
        initialCategory={selectedCategory}
      />

      {/* Product Inquiry & Showcase Modal */}
      <ProductModal
        isOpen={productModalOpen}
        onClose={() => setProductModalOpen(false)}
      />
    </div>
  );
}
