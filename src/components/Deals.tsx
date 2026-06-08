import { DEALS } from '../data';
import { Tag, Clock, MapPin, ArrowRight } from 'lucide-react';

export function Deals() {
  return (
    <section id="deals" className="py-24 bg-[#f8fafc]/30 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
               <Tag className="h-4 w-4 text-[#dc2626]" />
               <span className="text-[#dc2626] text-xs font-bold uppercase tracking-widest">
                  Limited Time Offers
               </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
              Exclusive Travel Deals
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm md:text-base border-l-2 border-[#1d4ed8] pl-4 py-1">
            Discover outstanding value on premium African safaris and tours. These curated deals won't last long, so secure your adventure today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DEALS.map((deal) => (
            <div 
              key={deal.id} 
              className="flex flex-col bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/40 relative group"
            >
               {/* Deal Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${deal.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                   {deal.tags.map((tag, index) => (
                      <span key={index} className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full w-max shadow-sm ${index === 0 ? 'bg-[#1d4ed8] text-white' : 'bg-[#dc2626] text-white'}`}>
                        {tag}
                      </span>
                   ))}
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  <MapPin className="h-3.5 w-3.5 text-[#dc2626]" />
                  {deal.destination}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-3 leading-tight group-hover:text-[#1d4ed8] transition-colors">
                  {deal.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {deal.description}
                </p>

                <div className="bg-white p-4 rounded-2xl flex flex-col gap-3 mt-auto border border-gray-100">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold text-gray-400 line-through">
                                R {deal.originalPrice.toLocaleString()} origin
                            </span>
                            <span className="text-2xl font-extrabold text-[#dc2626]">
                                R {deal.discountedPrice.toLocaleString()} <span className="text-xs text-gray-500 font-medium normal-case">/pp</span>
                            </span>
                        </div>
                        <button className="h-10 w-10 bg-[#1d4ed8] hover:bg-[#1e40af] rounded-full flex items-center justify-center text-white transition-colors shadow-lg shadow-[#1d4ed8]/20">
                           <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="border-t border-gray-200/60 pt-3 flex items-center gap-2 text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                        <Clock className="h-3.5 w-3.5 text-[#dc2626]" />
                        {deal.deadline}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
