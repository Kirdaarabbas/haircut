import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Clock, ExternalLink, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Men', href: '#mens-grooming' },
    { name: 'Women', href: '#womens-hair' },
    { name: 'Bridal', href: '#bridal' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#242124] text-white border-t border-[#D4AF6A]/40 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek 3-Column Interface Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10 items-center">
          
          {/* Column 1: Trusted Reviews Highlight & Brand */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[#D4AF6A] text-[10px] font-bold uppercase tracking-widest">
              Trusted Reviews
            </div>
            <p className="italic text-xs text-white/80 leading-relaxed">
              “Excellent service and professional staff. Hair styling was exactly what I wanted.”
            </p>
            <div className="flex items-center gap-2 text-[#D4AF6A] text-xs font-semibold">
              <span>Rahul S.</span>
              <span>★★★★★</span>
            </div>
          </div>

          {/* Column 2: Location & Directions */}
          <div className="md:col-span-4 flex flex-col items-center md:border-l md:border-r border-white/10 px-4 text-center space-y-1.5">
            <div className="text-[10px] font-bold text-[#D4AF6A] uppercase tracking-widest">
              Visit Us
            </div>
            <p className="text-xs text-white/75 max-w-xs">
              {BUSINESS_INFO.address}
            </p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] text-[#D4AF6A] hover:text-white underline mt-1 transition-colors"
            >
              <span>Find Us on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Column 3: Contact & Direct Actions */}
          <div className="md:col-span-4 flex flex-col sm:flex-row items-center justify-end gap-4">
            <div className="text-center sm:text-right">
              <div className="text-[10px] font-bold text-white/70 uppercase tracking-wider">
                Available Daily (7 AM – 11 PM)
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-[#D4AF6A] text-xl font-extrabold hover:text-white transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-10 h-10 bg-[#5A1833] rounded-full border border-[#D4AF6A] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                title="Call HairCut"
                aria-label="Call HairCut"
              >
                <Phone className="w-4 h-4 text-white" />
              </a>

              <a
                href={`https://wa.me/918130937598`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform"
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zm0 1.8c2.17 0 4.21.84 5.75 2.39 1.53 1.53 2.39 3.58 2.39 5.75 0 2.17-.84 4.21-2.39 5.75-1.53 1.53-3.58 2.39-5.75 2.39-1.48 0-2.92-.37-4.19-1.07l-.3-.17-3.11.82.83-3.03-.19-.31c-.77-1.24-1.18-2.67-1.18-4.14 0-4.47 3.64-8.11 8.11-8.11z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Quick Links Navigation */}
        <div className="py-4 flex flex-wrap items-center justify-center gap-6 text-[11px] font-semibold tracking-widest uppercase text-white/70">
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#D4AF6A] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom Legal */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-white/50">
          <p>© {new Date().getFullYear()} HairCut Unisex Salon. Since 2008.</p>
          <p>Plot No. 8, Om Vihar Colony, Behind ABESIT, Ghaziabad</p>
        </div>

      </div>
    </footer>
  );
};
