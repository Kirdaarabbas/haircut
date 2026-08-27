import React, { useState } from 'react';
import { X, ShoppingBag, Sparkles, Check, Phone, MessageSquare } from 'lucide-react';
import { BEAUTY_PRODUCTS_LIST, BUSINESS_INFO } from '../data';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Hair Care');

  if (!isOpen) return null;

  const currentProduct = BEAUTY_PRODUCTS_LIST.find((p) => p.category === selectedCategory) || BEAUTY_PRODUCTS_LIST[0];

  const handleInquire = () => {
    const message = `Hello HairCut! I am interested in inquiring about your professional salon products in the *${selectedCategory}* category. Please share available brands and pricing.`;
    window.open(`https://wa.me/918130937598?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-xl bg-[#FCF8F3] rounded-3xl shadow-2xl border-2 border-[#D4AF6A]/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#5A1833] text-white p-5 sm:p-6 relative border-b border-[#D4AF6A]/30">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-[#D4AF6A] text-xs font-bold uppercase tracking-wider mb-1">
            <ShoppingBag className="w-4 h-4" />
            <span>HairCut Retail Range</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold">
            Explore Professional Products
          </h2>
          <p className="text-xs text-[#F8F1E7]/80 mt-1">
            Certified salon-grade formulations for your daily home care routine.
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {BEAUTY_PRODUCTS_LIST.map((prod) => (
              <button
                key={prod.category}
                onClick={() => setSelectedCategory(prod.category)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
                  selectedCategory === prod.category
                    ? 'bg-[#5A1833] text-white shadow-sm border border-[#D4AF6A]'
                    : 'bg-white text-[#242124] hover:bg-[#D4AF6A]/20 border border-[#D4AF6A]/30'
                }`}
              >
                {prod.category}
              </button>
            ))}
          </div>

          {/* Active Product Details */}
          <div className="bg-white p-5 rounded-2xl border border-[#D4AF6A]/30 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-luxury text-xl font-bold text-[#5A1833]">
                {currentProduct.category} Range
              </h3>
              <Sparkles className="w-4 h-4 text-[#D4AF6A]" />
            </div>

            <p className="text-xs sm:text-sm text-[#242124]/80 leading-relaxed">
              {currentProduct.description}
            </p>

            <div className="pt-2 border-t border-[#F8F1E7]">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#5A1833] mb-2">
                Formulation Highlights
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {currentProduct.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-1.5 text-xs text-[#242124] bg-[#FCF8F3] p-2 rounded-lg border border-[#D4AF6A]/30"
                  >
                    <Check className="w-3.5 h-3.5 text-[#D4AF6A] flex-shrink-0" />
                    <span className="font-medium text-[11px]">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleInquire}
              className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="py-3 px-5 rounded-xl bg-[#5A1833] hover:bg-[#732244] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#D4AF6A]/40 transition-all text-center"
            >
              <Phone className="w-4 h-4 text-[#D4AF6A]" />
              <span>Call Salon</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
