export interface ServiceItem {
  name: string;
  price: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  services: ServiceItem[];
  ctaText: string;
  image?: string;
  featured?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  comment: string;
  serviceUsed: string;
  date: string;
}

export interface WhyUsItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ProductItem {
  category: string;
  description: string;
  highlights: string[];
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  service: string;
  category: string;
  preferredDate: string;
  preferredTime: string;
  additionalRequirement: string;
}
