import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-14 sm:py-16 bg-[#F8F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D4AF6A]/40 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Location & Details */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF6A] font-bold">
                  Salon Location
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242124] tracking-tight mt-1">
                  Visit HairCut Ghaziabad
                </h2>
                <p className="text-xs sm:text-sm text-[#242124]/75 mt-1">
                  Conveniently situated right behind ABESIT in Om Vihar Colony with ample parking.
                </p>
              </div>

              {/* Exact Location Box */}
              <div className="p-4 rounded-xl bg-[#FCF8F3] border border-[#D4AF6A]/30 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#5A1833] text-[#D4AF6A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#5A1833]">
                      Exact Address
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#242124] mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#D4AF6A]/20 text-xs">
                  <div className="flex items-center gap-2 text-[#242124]/80">
                    <Clock className="w-4 h-4 text-[#5A1833]" />
                    <span><strong>Timings:</strong> 7:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#242124]/80">
                    <Phone className="w-4 h-4 text-[#5A1833]" />
                    <span><strong>Phone:</strong> {BUSINESS_INFO.phone}</span>
                  </div>
                </div>
              </div>

              {/* Find Us on Google Maps CTA Button */}
              <div>
                <a
                  id="find-us-google-maps-btn"
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded font-bold text-xs uppercase tracking-widest bg-[#5A1833] text-white hover:bg-[#732244] transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-[#D4AF6A]" />
                  <span>Find Us on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D4AF6A]" />
                </a>
              </div>
            </div>

            {/* Right: Realistic Stylized Map Showcase */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-[#D4AF6A]/40 shadow-sm bg-[#242124] h-64 sm:h-72 flex flex-col items-center justify-center p-6 text-center group">
                {/* Visual Map Grid Pattern Background */}
                <div 
                  className="absolute inset-0 opacity-20 bg-[radial-gradient(#D4AF6A_1px,transparent_1px)] [background-size:16px_16px]"
                />
                
                {/* Interactive Map Pin Icon */}
                <div className="relative z-10 space-y-2.5">
                  <div className="w-14 h-14 rounded-full bg-[#5A1833] border-2 border-[#D4AF6A] flex items-center justify-center mx-auto shadow-xl">
                    <MapPin className="w-7 h-7 text-[#D4AF6A]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      HairCut Salon
                    </h3>
                    <p className="text-xs text-[#D4AF6A] font-semibold mt-0.5">
                      Plot No. 8, Om Vihar Colony, Behind ABESIT
                    </p>
                    <p className="text-[11px] text-[#F8F1E7]/70">
                      Ghaziabad, Uttar Pradesh 201001
                    </p>
                  </div>

                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#D4AF6A] text-xs font-semibold backdrop-blur-sm border border-[#D4AF6A]/40 transition-colors"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Open Live Navigation</span>
                  </a>
                </div>

                <div className="absolute bottom-2 right-3 text-[10px] text-white/50">
                  Google Maps Directions Ready
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
