import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME, CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.png" alt="Metropolitan Logo" className="h-12 w-auto object-contain bg-white rounded-full p-0.5" />
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-serif font-bold tracking-tight uppercase ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
              Metropolitan
            </span>
            <span className={`text-[10px] tracking-[0.2em] uppercase ${isScrolled ? 'text-brand-accent' : 'text-gray-200'}`}>
              Business Centre
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${isScrolled ? 'text-slate-600 hover:text-brand-accent' : 'text-gray-200 hover:text-white'
                }`}
            >
              {link.label}
            </a>
          ))}
          <div className={`flex items-center gap-2 px-4 py-2 border rounded-sm ${isScrolled ? 'border-brand-dark text-brand-dark' : 'border-white text-white'
            }`}>
            <Phone size={16} />
            <span className="text-sm font-semibold">{CONTACT_INFO.phone}</span>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-brand-dark' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-brand-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 md:hidden flex flex-col items-center space-y-6 animate-in fade-in slide-in-from-top-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-slate-800 hover:text-brand-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href={`tel:${CONTACT_INFO.phone}`} className="px-6 py-2 bg-brand-dark text-white rounded-sm">
            Call Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;