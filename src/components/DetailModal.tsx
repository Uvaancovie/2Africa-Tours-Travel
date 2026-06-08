import React from 'react';
import { motion } from 'motion/react';
import { X, Clock, MapPin, Check, Calendar, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { Tour, Deal } from '../types';

interface DetailModalProps {
  item: Tour | Deal | null;
  onClose: () => void;
  onBook: (item: Tour | Deal) => void;
}

export function DetailModal({ item, onClose, onBook }: DetailModalProps) {
  if (!item) return null;

  // Helper check to distinguish Tour vs Deal
  const isDeal = 'discountedPrice' in item;
  
  // Custom mock inclusions based on type/title for high-fidelity content
  const inclusions = isDeal 
    ? [
        'Luxury 4-star lodging accommodations',
        'Daily gourmet breakfast & selected meals',
        'Airport pick-up & drop-off transfers',
        'Guided landmark excursion tours',
        'Dedicated 24/7 travel advisor assistance'
      ]
    : [
        'Certified local professional guide',
        'Entrance fees & conservation levies',
        'Gourmet light lunch & local refreshments',
        'Air-conditioned private vehicle transport',
        'Interactive historical or wildlife safety briefing'
      ];

  const price = isDeal ? (item as Deal).discountedPrice : (item as Tour).price;
  const originalPrice = isDeal ? (item as Deal).originalPrice : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-blue-950/60 backdrop-blur-sm"
      />

      {/* Modal Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        className="bg-white w-full max-w-4xl rounded-[40px] overflow-hidden border border-blue-100 shadow-2xl relative z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-blue-100 hover:border-red-200 text-blue-900 hover:text-red-600 p-2 rounded-full z-20 hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Large Image */}
        <div className="w-full md:w-1/2 relative min-h-[200px] md:min-h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/10 to-transparent" />
          
          {/* Badge overlays */}
          <div className="absolute bottom-6 left-6 text-white z-10">
            {isDeal ? (
              <div className="flex flex-col gap-2">
                <span className="bg-red-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit shadow-md">
                  Exclusive Offer
                </span>
                <span className="text-sm font-light text-blue-100 uppercase tracking-widest block">
                  {(item as Deal).destination}
                </span>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <span className="bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit shadow-md">
                  {(item as Tour).type}
                </span>
                {item.location && (
                  <span className="text-sm font-light text-blue-100 uppercase tracking-widest block">
                    {(item as Tour).location}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Details & Action */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-955 mb-4 leading-tight">
              {item.title}
            </h3>

            {/* Meta tags */}
            <div className="flex flex-wrap gap-4 text-xs font-bold text-blue-800/60 uppercase tracking-widest mb-6">
              {!isDeal && (item as Tour).duration && (
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>{(item as Tour).duration}</span>
                </div>
              )}
              {isDeal && (item as Deal).deadline && (
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span>{(item as Deal).deadline}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Quality Assured</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-blue-900/80 text-sm leading-relaxed mb-6 font-light">
              {item.description}
            </p>

            {/* What's Included */}
            <div className="mb-8">
              <h4 className="text-[11px] font-bold text-blue-800 uppercase tracking-widest mb-4">
                What's Included
              </h4>
              <ul className="space-y-2.5">
                {inclusions.map((inclusion, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-blue-900 font-light items-start">
                    <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{inclusion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing & Call to Action */}
          <div className="border-t border-blue-100 pt-6 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex flex-col">
              {originalPrice && (
                <span className="text-xs text-blue-400 line-through font-bold">
                  R {originalPrice.toLocaleString()}
                </span>
              )}
              <span className="text-3xl font-extrabold text-blue-950 tracking-tight">
                R {price?.toLocaleString()} <span className="text-xs text-blue-500 font-light">/pp</span>
              </span>
            </div>

            <button 
              onClick={() => onBook(item)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-600/15"
            >
              Inquire & Book Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
