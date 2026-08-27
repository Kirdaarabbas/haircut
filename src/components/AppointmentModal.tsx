import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Phone, User, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, WOMENS_HAIR_SERVICES, MENS_GROOMING_SERVICES, BEAUTY_SKIN_SERVICES, BRIDAL_MAKEOVER_SERVICES, MENS_HAIR_BEARD_QUICK } from '../data';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialCategory?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialCategory = "Women's Hair",
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [selectedService, setSelectedService] = useState(initialService);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [additionalRequirement, setAdditionalRequirement] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (initialCategory) setCategory(initialCategory);
      if (initialService) setSelectedService(initialService);
      
      // Default date to tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const formattedDate = tomorrow.toISOString().split('T')[0];
      setPreferredDate(formattedDate);
      setIsSubmitted(false);
    }
  }, [isOpen, initialService, initialCategory]);

  if (!isOpen) return null;

  // Available services mapping
  const categoryServicesMap: Record<string, string[]> = {
    "Women's Hair": WOMENS_HAIR_SERVICES.services.map((s) => `${s.name} (${s.price})`),
    "Men's Grooming": MENS_GROOMING_SERVICES.services.map((s) => `${s.name} (${s.price})`),
    "Beauty & Skin": BEAUTY_SKIN_SERVICES.services.map((s) => `${s.name} (${s.price})`),
    "Bridal Makeover": BRIDAL_MAKEOVER_SERVICES.services.map((s) => `${s.name} (${s.price})`),
    "Men's Hair & Beard": MENS_HAIR_BEARD_QUICK.services.map((s) => `${s.name} (${s.price})`),
  };

  const currentServiceOptions = categoryServicesMap[category] || categoryServicesMap["Women's Hair"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setIsSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const message = `Hello HairCut! I would like to confirm my appointment request:\n\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Category:* ${category}\n*Service:* ${selectedService || 'General Consultation'}\n*Date:* ${preferredDate}\n*Time:* ${preferredTime}\n*Notes:* ${additionalRequirement || 'None'}\n\nPlease confirm my slot. Thank you!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918130937598?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-lg bg-[#FCF8F3] rounded-3xl shadow-2xl border-2 border-[#D4AF6A]/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#5A1833] text-white p-5 sm:p-6 relative border-b border-[#D4AF6A]/30">
          <button
            id="close-booking-modal"
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-[#D4AF6A] text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>HairCut • Premium Unisex Salon</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold">
            Book Your Appointment
          </h2>
          <p className="text-xs text-[#F8F1E7]/80 mt-1">
            Open daily 7:00 AM – 11:00 PM • Fast confirmation
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7">
          {isSubmitted ? (
            /* Confirmation State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#242124]">
                Appointment Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-[#242124]/75 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{fullName}</strong>. Our salon coordinator is preparing your slot for <strong>{preferredDate}</strong> around <strong>{preferredTime}</strong>.
              </p>

              <div className="bg-white p-4 rounded-xl border border-[#D4AF6A]/30 text-left text-xs space-y-1.5 max-w-xs mx-auto">
                <p><strong>Service:</strong> {selectedService || category}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Location:</strong> Behind ABESIT, Ghaziabad</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={handleSendWhatsApp}
                  className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl bg-[#5A1833] hover:bg-[#732244] text-white font-bold text-xs uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* Appointment Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5A1833] mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5A1833]/60">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border border-[#D4AF6A]/40 text-sm text-[#242124] focus:outline-none focus:ring-2 focus:ring-[#5A1833]/30"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5A1833] mb-1">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5A1833]/60">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border border-[#D4AF6A]/40 text-sm text-[#242124] focus:outline-none focus:ring-2 focus:ring-[#5A1833]/30"
                  />
                </div>
              </div>

              {/* Category & Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5A1833] mb-1">
                    Service Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      setSelectedService('');
                    }}
                    className="w-full px-3 py-2.5 bg-white rounded-xl border border-[#D4AF6A]/40 text-xs sm:text-sm text-[#242124] focus:outline-none focus:ring-2 focus:ring-[#5A1833]/30"
                  >
                    <option value="Women's Hair">Women's Hair</option>
                    <option value="Men's Grooming">Men's Grooming</option>
                    <option value="Beauty & Skin">Beauty & Skin</option>
                    <option value="Bridal Makeover">Bridal Makeover</option>
                    <option value="Men's Hair & Beard">Men's Hair & Beard</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5A1833] mb-1">
                    Select Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white rounded-xl border border-[#D4AF6A]/40 text-xs sm:text-sm text-[#242124] focus:outline-none focus:ring-2 focus:ring-[#5A1833]/30"
                  >
                    <option value="">Choose Specific Service</option>
                    {currentServiceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5A1833] mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5A1833]/60">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border border-[#D4AF6A]/40 text-xs sm:text-sm text-[#242124] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5A1833] mb-1">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#5A1833]/60">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-white rounded-xl border border-[#D4AF6A]/40 text-xs sm:text-sm text-[#242124] focus:outline-none"
                    >
                      <option value="08:00 AM">08:00 AM (Early)</option>
                      <option value="10:00 AM">10:00 AM (Morning)</option>
                      <option value="11:30 AM">11:30 AM (Noon)</option>
                      <option value="02:00 PM">02:00 PM (Afternoon)</option>
                      <option value="04:30 PM">04:30 PM (Evening)</option>
                      <option value="06:30 PM">06:30 PM (Prime)</option>
                      <option value="08:30 PM">08:30 PM (Night)</option>
                      <option value="10:00 PM">10:00 PM (Late Night)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Requirement */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5A1833] mb-1">
                  Additional Requirement (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., specific stylist preference, hair texture details, skin sensitivity..."
                  value={additionalRequirement}
                  onChange={(e) => setAdditionalRequirement(e.target.value)}
                  className="w-full px-3 py-2 bg-white rounded-xl border border-[#D4AF6A]/40 text-xs sm:text-sm text-[#242124] focus:outline-none focus:ring-2 focus:ring-[#5A1833]/30 resize-none"
                />
              </div>

              {/* Confirm CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="confirm-appointment-request-btn"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#5A1833] hover:bg-[#732244] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#5A1833]/30 transition-all border border-[#D4AF6A]/40 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF6A]" />
                  <span>Confirm Appointment Request</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
