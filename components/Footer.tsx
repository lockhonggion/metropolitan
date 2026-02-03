import React from 'react';
import { COMPANY_NAME } from '../constants';
import { Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-serif text-white font-bold mb-2 tracking-tight">{COMPANY_NAME}</h3>
            <p className="text-sm tracking-wide">The Premier Business Address in Saigon</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-6 text-sm font-medium">
              <a href="#hero" className="hover:text-brand-accent transition-colors">Home</a>
              <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
              <a href="#facilities" className="hover:text-brand-accent transition-colors">Facilities</a>
              <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
            </div>

            {/* Social Icons */}
            <a
              href="https://web.facebook.com/loc.duongne?mibextid=wwXIfr&rdid=CBaOMHXTKTPyZkpL&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1AWHcR6j85%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#1877F2] transition-colors"
              aria-label="Visit us on Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Metropolitan Business Centre. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;