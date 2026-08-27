import React from 'react';
import { Sparkles, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { BEAUTY_PRODUCTS_LIST, SALON_IMAGES } from '../data';

interface ProductsSectionProps {
  onOpenProductModal: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenProductModal }) => {
  return (
    <section id="products" className="py-14 sm:py-16 bg-[#FCF8F3] border-b border-[#D4AF6A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Product Grid in 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Description & Image */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF6A] font-bold">
              Category 6 • Salon Retail
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242124] tracking-tight">
              Beauty Products
            </h2>

            <p className="text-[#242124]/80 text-xs sm:text-sm leading-relaxed">
              Maintain your salon-perfect look every single day. HairCut offers professional, certified hair-care and skincare essentials for customers to use at home.
            </p>

            {/* Compact Professional Products Image */}
            <div className="relative rounded-xl overflow-hidden border border-[#D4AF6A]/30 shadow-sm">
              <img
                src={SALON_IMAGES.products}
                alt="HairCut Professional Salon Hair Care & Beauty Products"
                className="w-full h-44 sm:h-52 object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                <p className="text-white text-xs font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF6A]" />
                  <span>100% Authentic Professional Formulations</span>
                </p>
              </div>
            </div>

            <div>
              <button
                id="explore-products-btn"
                onClick={onOpenProductModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded font-bold text-xs uppercase tracking-widest bg-[#5A1833] text-white hover:bg-[#732244] transition-colors shadow-sm"
              >
                <ShoppingBag className="w-4 h-4 text-[#D4AF6A]" />
                <span>Explore Products</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF6A]" />
              </button>
            </div>
          </div>

          {/* Right Column: 5 Structured Product Categories */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {BEAUTY_PRODUCTS_LIST.map((prod, index) => (
              <div
                key={prod.category}
                onClick={onOpenProductModal}
                className={`bg-white rounded-xl p-4 border border-[#D4AF6A]/30 shadow-sm hover:shadow-md transition-all cursor-pointer group ${
                  index === 4 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-sm font-bold text-[#242124] group-hover:text-[#5A1833] transition-colors">
                    {prod.category}
                  </h3>
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF6A] group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-xs text-[#242124]/75 mb-2.5 leading-relaxed">
                  {prod.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {prod.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-semibold px-2 py-0.5 rounded bg-[#F8F1E7] text-[#5A1833] border border-[#D4AF6A]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
