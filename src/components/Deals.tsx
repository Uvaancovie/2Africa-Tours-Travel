import React from 'react';
import { DEALS } from '../data';
import { Deal } from '../types';
import { Tag, Clock, MapPin } from 'lucide-react';

interface DealsProps {
  onSelectDeal: (deal: Deal) => void;
}

export function Deals({ onSelectDeal }: DealsProps) {
  return (
    <section id="deals" className="py-28 bg-white text-blue-950 relative overflow-hidden">
      {/* Background radial elements strictly Red, Blue, and White theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 bg-red-50 border border-red-200 px-3 py-1 rounded-full w-fit">
               <Tag className="h-4.5 w-4.5 text-red-600" />
               <span className="text-red-600 text-xs font-bold uppercase tracking-widest">
                  Limited Time Exclusive Offers
               </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight">
              Exclusive Packages & Deals
            </h2>
          </div>
          <p className="text-blue-900/80 max-w-md text-sm md:text-base border-l-2 border-red-600 pl-4 py-1.5 font-light leading-relaxed">
            Discover outstanding value on premium African safaris and tours. These curated deals won't last long, so secure your adventure today.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DEALS.map((deal) => {
            const savings = deal.originalPrice - deal.discountedPrice;
            const savingsPercentage = Math.round((savings / deal.originalPrice) * 100);

            return (
              <div 
                key={deal.id} 
                className="flex flex-col bg-white border border-blue-100 rounded-[36px] overflow-hidden shadow-lg shadow-blue-100/10 relative group hover:border-red-600/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => onSelectDeal(deal)}
              >
                {/* Deal Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${deal.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    {deal.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className={`text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-md ${
                          index === 0 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-red-600 text-white animate-pulse'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Savings Percentage tag overlay */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-blue-200 text-red-600 p-2.5 rounded-2xl flex items-center justify-center shadow-md">
                    <div className="text-center">
                      <span className="block text-xs font-bold leading-none">{savingsPercentage}%</span>
                      <span className="block text-[7px] font-bold uppercase tracking-widest text-blue-400 mt-0.5">OFF</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                    <MapPin className="h-4 w-4 text-red-600 shrink-0" />
                    {deal.destination}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-blue-950 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {deal.title}
                  </h3>
                  
                  <p className="text-blue-800 text-sm leading-relaxed mb-6 flex-grow font-light">
                    {deal.description}
                  </p>

                  {/* Pricing and Booking Block */}
                  <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-[24px] flex flex-col gap-4 mt-auto">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-blue-400 line-through tracking-wider">
                          R {deal.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-2xl font-bold text-blue-950 tracking-tight">
                          R {deal.discountedPrice.toLocaleString()} <span className="text-xs text-blue-800 font-light">/pp</span>
                        </span>
                      </div>
                      
                      <button 
                        onClick={() => onSelectDeal(deal)}
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-blue-600/10 hover:shadow-blue-600/20 hover:scale-[1.03] transition-all"
                      >
                        Book Deal
                      </button>
                    </div>

                    <div className="border-t border-blue-100 pt-3 flex items-center gap-2 text-[10px] font-bold text-blue-700 tracking-widest uppercase">
                      <Clock className="h-4 w-4 text-red-600 shrink-0" />
                      <span>{deal.deadline}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
