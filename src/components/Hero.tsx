import React from 'react';
import { Calendar, Phone, Sparkles, Clock, Users, Award, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SALON_IMAGES } from '../data';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 bg-[#F8F1E7] overflow-hidden"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF6A]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#5A1833]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-left bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#D4AF6A]/30 shadow-sm relative">
            {/* Salon Badge */}
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF6A] font-bold">
              Since 2008 • Premier Unisex Salon
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#242124] leading-[1.15] tracking-tight">
              Where Every Look <br className="hidden sm:block" />
              <span className="text-[#5A1833] italic">Becomes Your</span> <br />
              <span className="text-[#D4AF6A]">Signature.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-[#242124]/75 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              15+ years of professional expertise in hair, beauty, grooming and makeovers — designed around you.
            </p>

            {/* Metric Blocks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-1">
              <div className="p-3 bg-[#F8F1E7] border-l-4 border-[#5A1833] rounded-r-md">
                <div className="text-[#5A1833] font-bold text-xl">15+</div>
                <div className="text-[9px] uppercase tracking-wider text-[#242124] font-semibold">Years Exp.</div>
              </div>
              <div className="p-3 bg-[#F8F1E7] border-l-4 border-[#D4AF6A] rounded-r-md">
                <div className="text-[#D4AF6A] font-bold text-xl">7-11</div>
                <div className="text-[9px] uppercase tracking-wider text-[#242124] font-semibold">Open Daily</div>
              </div>
              <div className="p-3 bg-[#F8F1E7] border-l-4 border-[#5A1833] rounded-r-md col-span-2 sm:col-span-1">
                <div className="text-[#5A1833] font-bold text-xl">Unisex</div>
                <div className="text-[9px] uppercase tracking-wider text-[#242124] font-semibold">Men & Women</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-book-btn"
                onClick={onOpenBooking}
                className="bg-[#5A1833] hover:bg-[#732244] text-white px-6 py-3 rounded-md text-sm font-bold shadow-md uppercase tracking-wider transition-all transform hover:-translate-y-0.5"
              >
                Book Now
              </button>

              <a
                id="hero-call-btn"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="border-2 border-[#5A1833] text-[#5A1833] hover:bg-[#5A1833] hover:text-white px-6 py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5"
              >
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Premium Realistic Salon Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#5A1833]/15 border-2 border-[#D4AF6A]/40 group">
              <img
                src={SALON_IMAGES.hero}
                alt="HairCut Luxury Unisex Salon Interior"
                className="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Gradient for readability of floating pill */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#242124]/80 via-transparent to-black/10" />

              {/* Floating Quality Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-[#D4AF6A]/50 flex items-center justify-between text-xs shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#5A1833] flex items-center justify-center text-[#D4AF6A]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#242124]">Hygienic & Certified</p>
                    <p className="text-[11px] text-[#242124]/70">Premium International Products</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#D4AF6A]/20 text-[#5A1833] font-bold text-[11px]">
                  Ghaziabad
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
