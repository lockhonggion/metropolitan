import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Ho Chi Minh City Skyline with Bitexco Financial Tower" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center space-x-2 mb-6 border-l-4 border-brand-accent pl-4">
            <span className="text-sm md:text-base tracking-[0.2em] uppercase font-light">
              Premium Office Space
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
            Iconic Business Address in <span className="text-brand-accent">District 1</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-light">
            Elevate your corporate presence at Metropolitan Business Centre. 
            Located directly opposite Notre Dame Cathedral, offering 
            unparalleled prestige and connectivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Schedule a Visit
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-dark" onClick={() => document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Facilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;