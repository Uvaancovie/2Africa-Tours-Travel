import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';

interface NavbarProps {
  onInquireClick: () => void;
}

export function Navbar({ onInquireClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-white border-blue-200 shadow-lg py-3'
          : 'bg-white/80 border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with logo.png */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={logo} 
              alt="2Africa Travel" 
              className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300" 
            />
            <span className="text-xl font-bold tracking-wider text-blue-600">
              2AFRICA <span className="font-light text-red-600 group-hover:text-red-500 transition-colors">TRAVEL</span>
            </span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'Tours', 'Deals', 'About Us', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="relative text-sm font-light text-blue-900 hover:text-red-600 transition-colors duration-300 py-2 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button
              onClick={onInquireClick}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Inquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl focus:outline-none transition-colors text-blue-900 hover:bg-blue-50"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-blue-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {['Home', 'Tours', 'Deals', 'About Us', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3.5 text-base font-light text-blue-900 hover:text-red-600 hover:bg-blue-50 rounded-xl transition-all"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onInquireClick();
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-all"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
