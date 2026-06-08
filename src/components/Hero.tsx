import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, MapPin, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { TOURS, DEALS } from '../data';

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

        {/* Right Collage Panel */}
        <div className="w-full lg:w-1/2 h-[450px] lg:h-[550px] grid grid-cols-2 grid-rows-2 gap-4">
          <div className="bg-surface rounded-[40px] row-span-2 relative overflow-hidden group border border-border shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />
            <div className="absolute bottom-8 left-8 text-on-primary z-20">
              <span className="bg-primary text-on-primary text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider mb-2 inline-block">
                Sub-tropical Paradise
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">Durban Golden Mile</h3>
              <p className="text-sm text-surface-alt font-light">Warm water & surf</p>
            </div>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-110 ease-out"
              style={{ backgroundImage: 'url("https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/durban-city-tour/durban-city.jpg")' }}
            />
          </div>

          <div className="bg-surface rounded-[40px] relative overflow-hidden group border border-border shadow-lg">
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
             <div className="absolute bottom-6 left-6 text-on-primary z-20">
               <span className="bg-accent text-on-accent text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider mb-1 inline-block">
                 Big 5 Wildlife
               </span>
               <h3 className="text-xl font-bold">Hluhluwe Safari</h3>
               <p className="text-xs text-surface-alt font-light">Rhino conservation reserve</p>
             </div>
             <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] group-hover:scale-110 ease-out"
              style={{ backgroundImage: 'url("https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/st-lucia/st-lucia.jpg")' }}
            />
          </div>

          <div className="bg-surface border border-border rounded-[40px] p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-xl" />
            <div className="text-5xl font-extrabold text-primary tracking-tight italic">
              100%
            </div>
            <div>
              <p className="text-base font-bold text-on-surface">Authentic Escapes</p>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed font-light">
                Handcrafted itineraries custom tailored for individuals, groups, or corporate events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
