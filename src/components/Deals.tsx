import React from 'react';
import { DEALS } from '../data';
import { Deal } from '../types';
import { Tag, Clock, MapPin, ArrowRight } from 'lucide-react';

interface DealsProps {
  onSelectDeal: (deal: Deal) => void;
  onViewAllDeals?: (dealId?: string) => void;
}

export function Deals({ onSelectDeal, onViewAllDeals }: DealsProps) {
  return (
    <section id="deals" className="py-28 bg-surface text-on-surface relative overflow-hidden">
      {/* Background radial elements strictly Red, Blue, and White theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-[672px]">
            <div className="flex items-center gap-2 mb-4 bg-surface-alt border border-border px-3 py-1 rounded-full w-fit">
               <Tag className="h-4.5 w-4.5 text-accent" />
               <span className="text-accent text-xs font-bold uppercase tracking-widest">
                  Limited Time Exclusive Offers
               </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">
              Exclusive Packages & Deals
            </h2>
          </div>
          <div className="flex flex-col items-end gap-3">
            <p className="text-on-surface-variant max-w-[448px] text-sm md:text-base border-l-2 border-accent pl-4 py-1.5 font-light leading-relaxed">
              Discover outstanding value on premium African safaris and tours. These curated deals won't last long, so secure your adventure today.
            </p>
            {onViewAllDeals && (
              <button
                onClick={() => onViewAllDeals()}
                className="flex items-center gap-2 text-xs font-bold text-accent hover:text-accent/80 transition-colors uppercase tracking-widest"
              >
                View All Deals
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DEALS.map((deal) => {
            const savings = deal.originalPrice - deal.discountedPrice;
            const savingsPercentage = Math.round((savings / deal.originalPrice) * 100);

            return (
              <div 
                key={deal.id} 
                className="flex flex-col bg-surface border border-border rounded-[36px] overflow-hidden shadow-lg shadow-primary/10 relative group hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => onSelectDeal(deal)}
              >
                {/* Deal Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${deal.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    {deal.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className={`text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-md ${
                          index === 0 
                            ? 'bg-primary text-on-primary' 
                            : 'bg-accent text-on-accent animate-pulse'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Savings Percentage tag overlay */}
                  <div className="absolute top-4 right-4 bg-surface/95 backdrop-blur-sm border border-border text-accent p-2.5 rounded-2xl flex items-center justify-center shadow-md">
                    <div className="text-center">
                      <span className="block text-xs font-bold leading-none">{savingsPercentage}%</span>
                      <span className="block text-[7px] font-bold uppercase tracking-widest text-on-surface-variant mt-0.5">OFF</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-3">
                    <MapPin className="h-4 w-4 text-accent shrink-0" />
                    {deal.destination}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors leading-tight">
                    {deal.title}
                  </h3>
                  
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow font-light">
                    {deal.description}
                  </p>

                  {/* Pricing and Booking Block */}
                  <div className="bg-primary-container border border-border p-5 rounded-[24px] flex flex-col gap-4 mt-auto">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-on-surface-variant line-through tracking-wider">
                          R {deal.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-2xl font-bold text-on-surface tracking-tight">
                          R {deal.discountedPrice.toLocaleString()} <span className="text-xs text-on-surface-variant font-light">/pp</span>
                        </span>
                      </div>
                      
                      <button 
                        onClick={() => onSelectDeal(deal)}
                        className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-on-primary font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.03] transition-all"
                      >
                        Book Deal
                      </button>
                    </div>

                    <div className="border-t border-border pt-3 flex items-center gap-2 text-[10px] font-bold text-primary tracking-widest uppercase">
                      <Clock className="h-4 w-4 text-accent shrink-0" />
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
