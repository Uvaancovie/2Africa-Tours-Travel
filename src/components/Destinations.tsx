import { TOURS } from '../data';
import { Clock, MapPin, Tag } from 'lucide-react';

export function Destinations() {
  const halfDayTours = TOURS.filter(t => t.type === 'Half Day');
  const fullDayTours = TOURS.filter(t => t.type === 'Full Day');

  return (
    <section id="tours" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#dc2626] text-xs font-bold uppercase tracking-widest mb-4 block">
              Bespoke Quality Services
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
              Half Day Tours
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base border-l-2 border-[#1d4ed8] pl-4 py-1">
            We cater from individual traveler to groups and deliver set packages or bespoke tours based on your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {halfDayTours.map((tour) => (
            <div 
              key={tour.id} 
              className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${tour.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-[#1d4ed8] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  Half Day Tour
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#111827] mb-3 group-hover:text-[#1d4ed8] transition-colors line-clamp-1">
                  {tour.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  {tour.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
              Full Day Tours
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base border-l-2 border-[#1d4ed8] pl-4 py-1">
            We cater from individual traveler to groups and deliver set packages or bespoke tours based on your needs. All tours included a light lunch and refreshments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullDayTours.map((tour) => (
            <div 
              key={tour.id} 
              className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${tour.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-[#dc2626] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  Full Day Tour
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#111827] mb-3 group-hover:text-[#1d4ed8] transition-colors line-clamp-1">
                  {tour.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  {tour.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
