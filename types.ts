import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Landmark {
  name: string;
  distance: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  hours: string;
  email: string;
}