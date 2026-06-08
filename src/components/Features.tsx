import { SERVICES } from '../data';
import * as LucideIcons from 'lucide-react';
import React from 'react';

export function Features() {
  return (
    <section id="about-us" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1280px] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-[768px] mx-auto mb-20">
          <span className="px-4 py-1.5 bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-4 shadow-sm">
            Our Premium Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight mb-6 leading-tight">
            Your Adventure is Our Greatest Passion
          </h2>
          <p className="text-blue-800 text-lg leading-relaxed font-light">
            We cater to all types of travellers, ensuring our legendary service standards remain constant. Let us turn your dreams of a real African escape into reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = LucideIcons[service.iconName as keyof typeof LucideIcons] as React.ElementType;
            
            return (
              <div 
                key={service.id} 
                className="group flex flex-col items-center text-center p-8 md:p-10 bg-white border border-blue-100 rounded-[36px] shadow-lg shadow-blue-100/10 hover:shadow-xl hover:shadow-blue-200/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[36px]" />
                
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {IconComponent && <IconComponent className="h-7 w-7 transition-transform duration-300 group-hover:rotate-6" strokeWidth={2} />}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-blue-950 mb-4 tracking-tight relative z-10">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-blue-800/80 leading-relaxed text-sm font-light relative z-10">
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
