import React from 'react';
import { Award, Users, ShieldCheck, SlidersHorizontal, Sparkles } from 'lucide-react';
import { WHY_US_CARDS } from '../data';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#D4AF6A]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#D4AF6A]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#D4AF6A]" />;
      case 'SlidersHorizontal':
        return <SlidersHorizontal className="w-6 h-6 text-[#D4AF6A]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF6A]" />;
    }
  };

  return (
    <section id="why-us" className="py-14 sm:py-16 bg-[#F8F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF6A] font-bold">
            The Salon Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242124] tracking-tight">
            Why HairCut?
          </h2>
          <p className="text-[#242124]/75 text-xs sm:text-sm">
            Setting the benchmark for salon craftsmanship, hygiene, and personalized aesthetic transformations.
          </p>
        </div>

        {/* Four Compact Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY_US_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl p-5 border border-[#D4AF6A]/30 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-lg bg-[#5A1833] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
                {getIcon(card.iconName)}
              </div>
              <h3 className="text-base font-bold text-[#242124] mb-1.5 group-hover:text-[#5A1833] transition-colors">
                {card.title}
              </h3>
              <p className="text-xs text-[#242124]/70 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
