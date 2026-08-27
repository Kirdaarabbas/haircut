import React from 'react';
import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';
import { REVIEWS_LIST } from '../data';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-14 sm:py-16 bg-[#FCF8F3] border-t border-[#D4AF6A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF6A] font-bold">
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242124] tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-[#242124]/75 text-xs sm:text-sm">
            Genuine stories from clients who trust HairCut for their everyday styling and grand celebrations.
          </p>
        </div>

        {/* 4 Polished Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {REVIEWS_LIST.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl p-5 border border-[#D4AF6A]/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-2.5 text-[#D4AF6A]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF6A] text-[#D4AF6A]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs text-[#242124]/85 leading-relaxed italic mb-4">
                  “{rev.comment}”
                </p>
              </div>

              <div className="pt-3 border-t border-[#F8F1E7] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#5A1833]">
                    {rev.name}
                  </h3>
                  <p className="text-[10px] text-[#242124]/60">
                    {rev.serviceUsed}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle className="w-2.5 h-2.5" />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
