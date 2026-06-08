import { TOURS } from '../data';
import { Tour } from '../types';
import { Clock, MapPin, Calendar, ArrowRight } from 'lucide-react';

interface DestinationsProps {
  onSelectTour: (tour: Tour) => void;
}

export function Destinations({ onSelectTour }: DestinationsProps) {
  const halfDayTours = TOURS.filter(t => t.type === 'Half Day');
  const fullDayTours = TOURS.filter(t => t.type === 'Full Day');

  const renderTourCard = (tour: Tour) => (
    <div 
      key={tour.id} 
      className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-blue-100 shadow-lg shadow-blue-100/10 hover:shadow-xl hover:shadow-blue-200/20 hover:-translate-y-1 transition-all duration-300 relative cursor-pointer"
      onClick={() => onSelectTour(tour)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${tour.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
        
        {/* Tour Type Badge */}
        <div className={`absolute top-4 left-4 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md ${
          tour.type === 'Half Day' ? 'bg-blue-600' : 'bg-red-600'
        }`}>
          {tour.type}
        </div>

        {/* Price Badge overlay */}
        <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-1.5 rounded-2xl text-sm font-bold tracking-tight border border-blue-500">
          R {tour.price?.toLocaleString()} <span className="text-[10px] text-blue-100 font-light">/pp</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow relative">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-blue-800/60 uppercase tracking-widest mb-3">
          {tour.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-red-600 shrink-0" />
              <span>{tour.location}</span>
            </div>
          )}
          {tour.duration && (
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-blue-600 shrink-0" />
              <span>{tour.duration}</span>
            </div>
          )}
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-blue-950 mb-3 group-hover:text-blue-600 transition-colors leading-snug line-clamp-1">
          {tour.title}
        </h3>
        
        <p className="text-blue-800 text-sm leading-relaxed mb-6 flex-grow font-light line-clamp-3">
          {tour.description}
        </p>

        {/* Action Button Container */}
        <div className="border-t border-blue-50 pt-4 mt-auto flex items-center justify-between">
          <span className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-2">
            Book Inquiry <ArrowRight className="w-4 h-4" />
          </span>
          <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-colors">
            <Calendar className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="tours" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        {/* Half Day Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4 block">
              Flexible Adventures
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight leading-none">
              Half Day Excursions
            </h2>
          </div>
          <p className="text-blue-900/80 max-w-md text-sm md:text-base border-l-2 border-blue-600 pl-4 py-1.5 font-light leading-relaxed">
            Perfect short-duration tours to experience Durban's top landmarks, historical capture sites, and cultural heritage settlements.
          </p>
        </div>

        {/* Half Day Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {halfDayTours.map(renderTourCard)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full Day Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4 block">
              Deep Immersive Experiences
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight leading-none">
              Full Day Adventures
            </h2>
          </div>
          <p className="text-blue-900/80 max-w-md text-sm md:text-base border-l-2 border-red-600 pl-4 py-1.5 font-light leading-relaxed">
            All-inclusive day safaris, historical battlefield tours, and deep wilderness trips. Each tour includes a light lunch and refreshments.
          </p>
        </div>

        {/* Full Day Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullDayTours.map(renderTourCard)}
        </div>
      </div>
    </section>
  );
}
