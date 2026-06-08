import { SERVICES } from '../data';
import * as LucideIcons from 'lucide-react';
import React from 'react';

export function Features() {
  return (
    <section id="about-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="px-3 py-1 bg-[#f8fafc] text-[#1d4ed8] text-xs font-bold uppercase tracking-widest rounded-md inline-block mb-4">
              Bespoke Quality Services
            </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-6 mt-4">
            Your adventure is the most important to us
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We cater for all types of Travelers but our service levels will always remain the same. Let your dreams of Real Adventure become reality here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = LucideIcons[service.iconName as keyof typeof LucideIcons] as React.ElementType;
            
            return (
              <div key={service.id} className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-[32px] shadow-lg shadow-gray-200/40">
                <div className="w-16 h-16 rounded-[20px] bg-[#f8fafc] flex items-center justify-center mb-6 text-[#1d4ed8] shadow-sm">
                  {IconComponent && <IconComponent className="h-7 w-7" strokeWidth={2} />}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
