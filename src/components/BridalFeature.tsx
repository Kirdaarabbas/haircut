import React from 'react';
import { Crown, Sparkles, Check, ArrowRight } from 'lucide-react';

interface BridalFeatureProps {
  onOpenBooking: (serviceName?: string, category?: string) => void;
}

export const BridalFeature: React.FC<BridalFeatureProps> = ({ onOpenBooking }) => {
  const highlights = [
    "Bridal Makeup",
    "Hair Styling",
    "Draping",
    "Skin Preparation",
    "Pre-Bridal Grooming"
  ];

  return (
    <section className="py-12 sm:py-14 bg-[#F8F1E7] border-y border-[#D4AF6A]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        {/* Crown Badge */}
        <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF6A] font-bold">
          Bridal Feature
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#242124] tracking-tight">
          Your Dream Look. <span className="text-[#5A1833]">Perfected.</span>
        </h2>

        {/* Text */}
        <p className="text-[#242124]/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          From bridal elegance to engagement glamour, our makeover specialists create personalized looks for your most memorable moments.
        </p>

        {/* Highlight Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 max-w-3xl mx-auto">
          {highlights.map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#D4AF6A]/40 shadow-sm text-xs font-semibold text-[#242124]"
            >
              <Sparkles className="w-3 h-3 text-[#D4AF6A]" />
              <span className="whitespace-nowrap">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-2">
          <button
            id="bridal-feature-cta"
            onClick={() => onOpenBooking("Bridal Consultation & Package", "Bridal Makeover")}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded font-bold text-xs uppercase tracking-widest bg-[#5A1833] text-white hover:bg-[#732244] transition-colors shadow-sm"
          >
            <Crown className="w-4 h-4 text-[#D4AF6A]" />
            <span>Book Bridal Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D4AF6A]" />
          </button>
        </div>

      </div>
    </section>
  );
};
