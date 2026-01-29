import React from 'react';
import SectionHeading from './SectionHeading';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="facilities" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="World-Class Facilities"
          title="Designed for Productivity"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-accent group"
            >
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-dark transition-colors duration-300">
                <feature.icon className="text-slate-600 group-hover:text-brand-accent transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;