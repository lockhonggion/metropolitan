import { Building2, ShieldCheck, MapPin, Zap, Users, MonitorCheck } from 'lucide-react';
import { NavLink, Feature, Landmark, ContactInfo } from './types';

export const COMPANY_NAME = "Metropolitan Business Centre";

export const CONTACT_INFO: ContactInfo = {
  address: "235 Đồng Khởi Street, Bến Nghé Ward, District 1, Ho Chi Minh City",
  phone: "+84 28 3823 6880",
  hours: "8:00 AM – 5:00 PM",
  email: "leasing@metropolitan-hcm.com"
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export const FEATURES: Feature[] = [
  {
    title: "Premium Architecture",
    description: "Iconic facade with high ceilings and spacious layouts designed for multinational prestige.",
    icon: Building2
  },
  {
    title: "Prime Location",
    description: "Directly opposite Notre Dame Cathedral, the most coveted business address in Saigon.",
    icon: MapPin
  },
  {
    title: "Professional Security",
    description: "24/7 security systems and professional, friendly staff ensuring a safe environment.",
    icon: ShieldCheck
  },
  {
    title: "Modern Facilities",
    description: "Fast elevators, central air conditioning, and impeccably maintained common areas.",
    icon: Zap
  },
  {
    title: "Corporate Ecosystem",
    description: "Home to leading banks, embassies, and multinational corporations.",
    icon: Users
  },
  {
    title: "Reliable Management",
    description: "Operated with international standards for a seamless tenant experience.",
    icon: MonitorCheck
  }
];

export const LANDMARKS: Landmark[] = [
  {
    name: "Notre Dame Cathedral",
    distance: "Directly Opposite",
    description: "A historic symbol of the city, offering stunning views from office windows."
  },
  {
    name: "Central Post Office",
    distance: "2 min walk",
    description: "Iconic colonial architecture and a convenient hub for mailing services."
  },
  {
    name: "Diamond Plaza",
    distance: "3 min walk",
    description: "Luxury shopping, dining, and entertainment options nearby."
  },
  {
    name: "Independence Palace",
    distance: "5 min walk",
    description: "A major historic landmark surrounded by lush parklands."
  }
];