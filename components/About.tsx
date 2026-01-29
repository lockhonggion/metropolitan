import React from 'react';
import SectionHeading from './SectionHeading';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Block */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-200 overflow-hidden rounded-sm shadow-xl">
               {/* 
                  NOTE: In a production environment, replace the src below with your local image file.
                  Example: src="/images/metropolitan-facade.jpg" 
               */}
               <img 
                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Metropolitan Building Facade - Low Angle View" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-brand-dark p-8 shadow-2xl max-w-[240px]">
              <div className="flex items-center space-x-2 text-brand-accent mb-2">
                <Star className="fill-brand-accent" size={20} />
                <Star className="fill-brand-accent" size={20} />
                <Star className="fill-brand-accent" size={20} />
                <Star className="fill-brand-accent" size={20} />
                <Star className="fill-brand-accent opacity-50" size={20} />
              </div>
              <p className="text-4xl font-serif text-white font-bold mb-1">4.5/5</p>
              <p className="text-gray-400 text-sm">Google Rating based on 100+ reviews</p>
            </div>
          </div>

          {/* Text Block */}
          <div>
            <SectionHeading 
              subtitle="About The Building"
              title="A Symbol of Corporate Excellence"
              alignment="left"
            />
            
            <p className="text-slate-600 leading-loose mb-6 text-lg">
              Metropolitan Business Centre stands as a testament to timeless architectural elegance in the heart of Ho Chi Minh City. Situated at the prestigious intersection of Đồng Khởi and Nguyễn Du, our building offers more than just office space—it offers a statement of success.
            </p>
            
            <p className="text-slate-600 leading-loose mb-8">
              Designed for discerning multinational corporations, banks, and diplomatic missions, the Metropolitan provides a quiet, professional environment distinct from the bustle of the city, while remaining at its very center.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Prestigious Đồng Khởi address",
                "High-ceiling lobby with marble finishes",
                "Home to Fortune 500 companies",
                "Managed by international property experts"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;