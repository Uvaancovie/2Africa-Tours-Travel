import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, MapPin, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { TOURS, DEALS } from '../data';
import { Carousel } from './Carousel';

interface HeroProps {
  onSearch?: (destination: string, type: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  // Extract dynamic destinations from data
  const locationsList = Array.from(
    new Set([
      ...TOURS.map(t => t.location?.split('/')[0].split(',')[0].trim() || ''),
      ...DEALS.map(d => d.destination.split(',')[0].trim() || '')
    ].filter(Boolean))
  ).sort();

  const [dest, setDest] = useState(locationsList[0] || '');
  const [type, setType] = useState('Wildlife & Nature');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(dest, type);
    }
  };

  return (
    <div id="home" className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 w-full flex items-center justify-center bg-surface overflow-hidden min-h-screen">
      {/* Decorative background radial elements strictly Red, Blue, and White theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 bg-primary-container border border-border w-fit px-4 py-1.5 rounded-full shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              Bespoke Safaris & Tours
            </span>
          </motion.div>
          
          <div className="flex flex-col gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.05]"
            >
              Explore the <br />
              <span className="text-accent">
                Wild Majesty
              </span> <br />
              of Africa.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-on-surface-variant text-lg sm:text-xl max-w-[600px] leading-relaxed font-light"
            >
              Drenched by the warm Indian Ocean and blessed with 320 days of sunshine a year, Durban is your gateway to spectacular safaris, culture, and paradise.
            </motion.p>
          </div>
          
          {/* Interactive Search Bar with Dynamic Dropdown */}
          <motion.form
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSearchSubmit}
            className="p-3 bg-surface border border-border rounded-3xl shadow-xl flex flex-col sm:flex-row items-center gap-3 max-w-[576px] w-full"
          >
            <div className="flex-grow flex items-center gap-3 px-4 py-2 w-full sm:border-r border-border">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div className="w-full">
                <label className="block text-[10px] font-bold text-primary/60 uppercase tracking-widest">Destination</label>
                <select
                  value={dest}
                  onChange={(e) => setDest(e.target.value)}
                  className="w-full text-sm font-light focus:outline-none bg-transparent text-on-surface border-none p-0 mt-0.5 outline-none cursor-pointer [color-scheme:light]"
                >
                  {locationsList.map((locationName) => (
                    <option key={locationName} value={locationName}>
                      {locationName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex-grow px-4 py-2 w-full sm:border-r border-border">
              <label className="block text-[10px] font-bold text-primary/60 uppercase tracking-widest">Safari Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full text-sm font-light focus:outline-none bg-transparent text-on-surface border-none p-0 mt-0.5 outline-none cursor-pointer [color-scheme:light]"
              >
                <option value="Wildlife & Nature">Wildlife & Safaris</option>
                <option value="Coastal Escape">Coastal Escapes</option>
                <option value="Adventure Trek">Adventure Treks</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="bg-primary p-4 rounded-2xl text-on-primary hover:bg-primary/90 hover:scale-[1.05] active:scale-[0.95] transition-all w-full sm:w-auto flex justify-center items-center shrink-0 shadow-lg shadow-primary/20"
            >
              <Search className="h-5 w-5" />
            </button>
          </motion.form>

          {/* Quick Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-6 text-sm text-on-surface-variant font-light"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Certified Local Guides</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span>100% Custom Tailored Packages</span>
            </div>
          </motion.div>
        </div>

        {/* Right Carousel Panel */}
        <div className="w-full lg:w-1/2 h-[450px] lg:h-[550px] rounded-[40px] overflow-hidden relative border border-border shadow-lg">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
