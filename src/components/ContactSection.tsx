import React from 'react';
import { MapPin, Phone, Clock, Calendar, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-14 sm:py-16 bg-[#FCF8F3] border-t border-[#D4AF6A]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Badge */}
        <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF6A] font-bold">
          Get in Touch
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242124] tracking-tight">
          Contact HairCut
        </h2>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
          {/* Address */}
          <div className="bg-white p-4 rounded-xl border border-[#D4AF6A]/30 shadow-sm flex flex-col items-center text-center">
            <div className="w-9 h-9 rounded-lg bg-[#5A1833]/10 flex items-center justify-center text-[#5A1833] mb-2.5">
              <MapPin className="w-4 h-4 text-[#5A1833]" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#5A1833] mb-1">
              Address
            </h3>
            <p className="text-xs text-[#242124]/80 leading-relaxed">
              {BUSINESS_INFO.shortAddress}
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white p-4 rounded-xl border border-[#D4AF6A]/30 shadow-sm flex flex-col items-center text-center">
            <div className="w-9 h-9 rounded-lg bg-[#5A1833]/10 flex items-center justify-center text-[#5A1833] mb-2.5">
              <Phone className="w-4 h-4 text-[#5A1833]" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#5A1833] mb-1">
              Direct Phone
            </h3>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-xs sm:text-sm font-bold text-[#242124] hover:text-[#5A1833] transition-colors"
            >
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>

          {/* Timings */}
          <div className="bg-white p-4 rounded-xl border border-[#D4AF6A]/30 shadow-sm flex flex-col items-center text-center">
            <div className="w-9 h-9 rounded-lg bg-[#5A1833]/10 flex items-center justify-center text-[#5A1833] mb-2.5">
              <Clock className="w-4 h-4 text-[#5A1833]" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#5A1833] mb-1">
              Opening Hours
            </h3>
            <p className="text-xs font-semibold text-[#242124]/80">
              {BUSINESS_INFO.timings}
            </p>
          </div>
        </div>

        {/* Two Main Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            id="contact-book-appointment-btn"
            onClick={onOpenBooking}
            className="flex items-center justify-center gap-2 px-6 py-2.5 text-xs uppercase tracking-widest font-bold text-white bg-[#5A1833] hover:bg-[#732244] rounded shadow-sm transition-colors"
          >
            <Calendar className="w-4 h-4 text-[#D4AF6A]" />
            <span>Book Appointment</span>
          </button>

          <a
            id="contact-call-now-btn"
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center justify-center gap-2 px-6 py-2.5 text-xs uppercase tracking-widest font-bold text-[#242124] hover:text-[#5A1833] bg-white hover:bg-[#F8F1E7] rounded border border-[#D4AF6A] shadow-sm transition-colors"
          >
            <Phone className="w-4 h-4 text-[#5A1833]" />
            <span>Call Now</span>
          </a>
        </div>

      </div>
    </section>
  );
};
