import React from 'react';
import { 
  Sparkles, 
  Scissors, 
  Feather, 
  Crown, 
  CheckCircle2, 
  ArrowRight, 
  Calendar,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { 
  WOMENS_HAIR_SERVICES, 
  MENS_GROOMING_SERVICES, 
  BEAUTY_SKIN_SERVICES, 
  BRIDAL_MAKEOVER_SERVICES,
  MENS_HAIR_BEARD_QUICK,
  SALON_IMAGES
} from '../data';

interface ServicesProps {
  onOpenBooking: (serviceName?: string, category?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-14 sm:py-20 bg-[#F8F1E7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF6A]/20 text-[#5A1833] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#5A1833]" />
            <span>Complete Menu & Transparent Pricing</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#242124]">
            Our Services
          </h2>
          <p className="text-[#242124]/75 text-sm sm:text-base">
            Expertly curated hair, grooming, skin and beauty rituals. Every category is delivered by dedicated certified stylists with no hidden charges.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. WOMEN'S HAIR & 2. MEN'S GROOMING (DISTINCT SIDE-BY-SIDE ON DESKTOP) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          
          {/* CATEGORY 1: WOMEN'S HAIR */}
          <div
            id="womens-hair"
            className="bg-white rounded-xl p-6 border border-[#D4AF6A]/30 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Category Header with Vertical Accent Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D4AF6A]/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-6 bg-[#5A1833] rounded-sm flex-shrink-0" />
                  <div>
                    <h3 className="font-bold uppercase text-[#5A1833] tracking-tighter text-lg">
                      Women's Hair
                    </h3>
                    <p className="text-[11px] text-[#242124]/60">
                      {WOMENS_HAIR_SERVICES.tagline}
                    </p>
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-[#D4AF6A]" />
              </div>

              {/* Service List with Clear Prices */}
              <ul className="space-y-2 text-xs text-[#242124] mb-5">
                {WOMENS_HAIR_SERVICES.services.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => onOpenBooking(item.name, "Women's Hair")}
                    className="flex justify-between items-center py-1.5 px-2 rounded hover:bg-[#F8F1E7]/70 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.name}</span>
                      {item.popular && (
                        <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#D4AF6A]/20 text-[#5A1833]">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="font-bold text-[#5A1833] text-sm">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button
              id="book-womens-hair-btn"
              onClick={() => onOpenBooking(undefined, "Women's Hair")}
              className="w-full mt-2 text-[10px] font-bold uppercase tracking-widest text-[#5A1833] border border-[#5A1833] py-2 rounded hover:bg-[#5A1833] hover:text-white transition-colors"
            >
              Book Service
            </button>
          </div>

          {/* CATEGORY 2: MEN'S GROOMING (DARK CHARCOAL SLEEK CARD) */}
          <div
            id="mens-grooming"
            className="bg-[#242124] text-white rounded-xl p-6 border border-white/10 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Category Header with Vertical Gold Accent Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-6 bg-[#D4AF6A] rounded-sm flex-shrink-0" />
                  <div>
                    <h3 className="font-bold uppercase text-[#D4AF6A] tracking-tighter text-lg">
                      Men's Grooming
                    </h3>
                    <p className="text-[11px] text-white/60">
                      {MENS_GROOMING_SERVICES.tagline}
                    </p>
                  </div>
                </div>
                <Scissors className="w-5 h-5 text-[#D4AF6A]" />
              </div>

              {/* Service List with Clear Gold Prices */}
              <ul className="space-y-2 text-xs text-white/90 mb-5">
                {MENS_GROOMING_SERVICES.services.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => onOpenBooking(item.name, "Men's Grooming")}
                    className="flex justify-between items-center py-1.5 px-2 rounded hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.name}</span>
                      {item.popular && (
                        <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#D4AF6A] text-[#242124]">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="font-bold text-[#D4AF6A] text-sm">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button
              id="book-mens-grooming-btn"
              onClick={() => onOpenBooking(undefined, "Men's Grooming")}
              className="w-full mt-2 text-[10px] font-bold uppercase tracking-widest text-[#D4AF6A] border border-[#D4AF6A] py-2 rounded hover:bg-[#D4AF6A] hover:text-[#242124] transition-colors"
            >
              Book Service
            </button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. BEAUTY & SKIN & 5. MEN'S HAIR & BEARD (CLEAN DEDICATED CARDS) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          
          {/* CATEGORY 3: BEAUTY & SKIN (7 COLS ON DESKTOP) */}
          <div
            id="beauty-skin"
            className="lg:col-span-7 bg-white rounded-xl p-6 border border-[#D4AF6A]/30 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D4AF6A]/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-6 bg-[#5A1833] rounded-sm flex-shrink-0" />
                  <div>
                    <h3 className="font-bold uppercase text-[#5A1833] tracking-tighter text-lg">
                      Beauty & Skin
                    </h3>
                    <p className="text-[11px] text-[#242124]/60">
                      {BEAUTY_SKIN_SERVICES.tagline}
                    </p>
                  </div>
                </div>
                <Feather className="w-5 h-5 text-[#D4AF6A]" />
              </div>

              {/* Service List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 space-y-1 sm:space-y-0 sm:gap-y-2 text-xs text-[#242124] mb-5">
                {BEAUTY_SKIN_SERVICES.services.map((item) => (
                  <div
                    key={item.name}
                    onClick={() => onOpenBooking(item.name, "Beauty & Skin")}
                    className="flex justify-between items-center py-1.5 px-2 rounded hover:bg-[#F8F1E7]/70 cursor-pointer transition-colors border-b border-[#F8F1E7]"
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="font-bold text-[#5A1833] text-sm pl-2">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              id="book-beauty-skin-btn"
              onClick={() => onOpenBooking(undefined, "Beauty & Skin")}
              className="w-full mt-2 text-[10px] font-bold uppercase tracking-widest text-[#5A1833] border border-[#5A1833] py-2 rounded hover:bg-[#5A1833] hover:text-white transition-colors"
            >
              Book Service
            </button>
          </div>

          {/* CATEGORY 5: MEN'S HAIR & BEARD (5 COLS ON DESKTOP) */}
          <div
            id="mens-hair-beard"
            className="lg:col-span-5 bg-white rounded-xl p-6 border border-[#D4AF6A]/30 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D4AF6A]/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-6 bg-[#5A1833] rounded-sm flex-shrink-0" />
                  <div>
                    <h3 className="font-bold uppercase text-[#5A1833] tracking-tighter text-lg">
                      Men's Hair & Beard
                    </h3>
                    <p className="text-[11px] text-[#242124]/60">
                      Essential haircut & beard sculpting combos.
                    </p>
                  </div>
                </div>
                <Scissors className="w-5 h-5 text-[#D4AF6A]" />
              </div>

              <ul className="space-y-2 text-xs text-[#242124] mb-5">
                {MENS_HAIR_BEARD_QUICK.services.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => onOpenBooking(item.name, "Men's Hair & Beard")}
                    className="flex justify-between items-center py-1.5 px-2 rounded hover:bg-[#F8F1E7]/70 cursor-pointer transition-colors"
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="font-bold text-[#5A1833] text-sm">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onOpenBooking(undefined, "Men's Hair & Beard")}
              className="w-full mt-2 text-[10px] font-bold uppercase tracking-widest text-[#5A1833] border border-[#5A1833] py-2 rounded hover:bg-[#5A1833] hover:text-white transition-colors"
            >
              Book Hair & Beard
            </button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. CATEGORY 4 — BRIDAL MAKEOVER (LUXURIOUS DEDICATED PALETTE & PHOTO) */}
        {/* ========================================================================= */}
        <div
          id="bridal"
          className="rounded-2xl bg-gradient-to-br from-[#5A1833] to-[#242124] text-white p-6 sm:p-8 shadow-xl border border-[#D4AF6A] relative overflow-hidden"
        >
          {/* Most Popular Corner Badge */}
          <div className="absolute top-4 right-4 bg-[#D4AF6A] text-[#242124] text-[9px] font-black px-2.5 py-1 uppercase tracking-wider rounded">
            Most Popular
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Services & Prices */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2.5 pb-2 border-b border-white/20">
                <div className="w-2 h-6 bg-[#D4AF6A] rounded-sm flex-shrink-0" />
                <h3 className="font-bold uppercase text-[#D4AF6A] tracking-tighter text-xl sm:text-2xl">
                  Bridal Makeover Studio
                </h3>
              </div>
              <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
                {BRIDAL_MAKEOVER_SERVICES.tagline}
              </p>

              {/* Service Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {BRIDAL_MAKEOVER_SERVICES.services.map((item) => (
                  <div
                    key={item.name}
                    onClick={() => onOpenBooking(item.name, "Bridal Makeover")}
                    className="p-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 cursor-pointer transition-all duration-200 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        {item.name}
                      </span>
                      {item.popular && (
                        <span className="text-[9px] text-[#D4AF6A] font-semibold uppercase tracking-wider">
                          Signature Ritual
                        </span>
                      )}
                    </div>
                    <span className="font-bold text-[#D4AF6A] text-sm pl-2 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Notice line */}
              <div className="flex items-center gap-2 text-xs text-white/80 italic bg-black/20 p-2.5 rounded-lg border border-white/10">
                <HeartHandshake className="w-4 h-4 text-[#D4AF6A] flex-shrink-0" />
                <span>Customized packages are available according to your requirements.</span>
              </div>

              {/* Prominent CTA */}
              <div className="pt-1">
                <button
                  id="book-bridal-consultation-btn"
                  onClick={() => onOpenBooking("Bridal Makeover Consultation", "Bridal Makeover")}
                  className="w-full sm:w-auto px-6 py-2.5 rounded font-bold text-xs uppercase tracking-widest bg-[#D4AF6A] text-[#242124] hover:bg-white transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Crown className="w-4 h-4 text-[#242124]" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>

            {/* Right: Bridal Photograph */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#D4AF6A]/60 group">
                <img
                  src={SALON_IMAGES.bridalMakeover}
                  alt="HairCut Bridal Makeover Artistry"
                  className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <p className="text-sm font-bold text-[#D4AF6A]">
                    Bridal Elegance • Engagement Glamour
                  </p>
                  <p className="text-[11px] text-white/80">
                    Pre-bridal skincare, HD makeup & couture draping
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
