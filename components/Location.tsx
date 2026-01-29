import React from 'react';
import SectionHeading from './SectionHeading';
import { LANDMARKS } from '../constants';
import { MapPin } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Details */}
          <div className="order-2 lg:order-1">
            <SectionHeading 
              subtitle="Location & Connectivity"
              title="The Heart of Saigon"
              alignment="left"
              light
            />
            <p className="text-gray-300 leading-relaxed mb-8">
              District 1 is the financial, commercial, and administrative hub of Ho Chi Minh City. Being at Metropolitan means you are steps away from the city's most important institutions and lifestyle destinations.
            </p>

            <div className="space-y-6">
              {LANDMARKS.map((landmark, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-colors">
                  <MapPin className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 flex justify-between w-full">
                      {landmark.name}
                      <span className="text-xs font-normal text-brand-accent border border-brand-accent px-2 py-0.5 rounded-full ml-4 whitespace-nowrap">
                        {landmark.distance}
                      </span>
                    </h4>
                    <p className="text-sm text-gray-400">
                      {landmark.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Embed */}
          <div className="order-1 lg:order-2 h-[400px] lg:h-auto min-h-[400px] bg-gray-800 rounded-sm overflow-hidden shadow-2xl border-4 border-white/10">
            <iframe 
              width="100%" 
              height="100%" 
              title="Metropolitan Business Centre Location"
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?q=Metropolitan+Building+235+Dong+Khoi+District+1+Ho+Chi+Minh&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="filter grayscale contrast-125"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;