import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  {
    url: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/durban-city-tour/durban-city.jpg',
    title: 'Sub-tropical Paradise',
    subtitle: 'Durban Golden Mile',
    description: 'Warm water & surf',
    badge: 'Sub-tropical Paradise',
    badgeColor: 'bg-primary',
  },
  {
    url: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/st-lucia/st-lucia.jpg',
    title: 'Big 5 Wildlife',
    subtitle: 'Hluhluwe Safari',
    description: 'Rhino conservation reserve',
    badge: 'Big 5 Wildlife',
    badgeColor: 'bg-accent',
  },
  {
    url: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/anglo-zulu/anglo-zulu.jpg',
    title: 'Battlefield Tours',
    subtitle: 'Anglo-Zulu History',
    description: 'Historic battlefields & culture',
    badge: 'Cultural Heritage',
    badgeColor: 'bg-primary',
  },
  {
    url: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/giants-castle/giants-castle.jpg',
    title: 'Mountain Adventures',
    subtitle: 'Drakensberg Peaks',
    description: 'Hiking & rock art',
    badge: 'Adventure Trek',
    badgeColor: 'bg-accent',
  },
  {
    url: 'https://whaffqypaptwczpjxjlw.supabase.co/storage/v1/object/public/mandela-capture/sani-pass/sani-pass.jpg',
    title: 'Mountain Kingdom',
    subtitle: 'Sani Pass 4x4',
    description: 'Highest pub in Africa',
    badge: 'Mountain Safari',
    badgeColor: 'bg-primary',
  },
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${carouselImages[currentIndex].url}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-8 left-8 text-white z-10">
            <span className={`${carouselImages[currentIndex].badgeColor} text-on-primary text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider mb-2 inline-block`}>
              {carouselImages[currentIndex].badge}
            </span>
            <p className="text-sm text-white/80 font-light">{carouselImages[currentIndex].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors z-20"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}