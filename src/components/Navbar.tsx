import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  onOpenBooking: (serviceName?: string, category?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Men', href: '#mens-grooming' },
    { name: 'Women', href: '#womens-hair' },
    { name: 'Bridal', href: '#bridal' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#5A1833]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#D4AF6A]/30 py-2.5'
          : 'bg-[#5A1833] shadow-md border-b border-[#D4AF6A]/20 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="focus:outline-none flex items-center gap-2"
        >
          <Logo variant="light" size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-[11px] font-semibold tracking-widest uppercase text-white/90">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#D4AF6A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF6A] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Group */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="nav-call-btn"
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#D4AF6A] hover:text-white transition-colors border border-[#D4AF6A]/40 rounded-full"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF6A]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          <button
            id="nav-book-appointment-btn"
            onClick={() => onOpenBooking()}
            className="bg-[#D4AF6A] text-[#242124] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shadow-sm"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-book-cta-header"
            onClick={() => onOpenBooking()}
            className="sm:hidden px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#242124] bg-[#D4AF6A] rounded-full"
          >
            Book
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-white hover:text-[#D4AF6A] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#421024] border-b border-[#D4AF6A]/40 shadow-xl px-5 pt-3 pb-6 space-y-3 transition-all animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[11px] font-bold uppercase tracking-wider text-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 px-3 text-white/90 hover:text-[#D4AF6A] hover:bg-white/5 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs uppercase tracking-wider font-bold text-[#242124] bg-[#D4AF6A] rounded-full shadow-md hover:bg-white transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#242124]" />
              <span>Book Appointment</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-[#D4AF6A] border border-[#D4AF6A]/50 rounded-full"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
