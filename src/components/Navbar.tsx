import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';

interface NavbarProps {
  onInquireClick: () => void;
  onViewChange?: (view: 'home' | 'newsletter' | 'deals') => void;
  currentView?: 'home' | 'newsletter' | 'deals';
}

export function Navbar({ onInquireClick, onViewChange, currentView }: NavbarProps) {
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
          ? 'bg-surface border-border shadow-lg py-3'
          : 'bg-surface/80 border-transparent py-5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with logo.png */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={logo} 
              alt="2Africa Travel" 
              className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300" 
            />
            <span className="text-xl font-bold tracking-wider text-primary">
              2AFRICA <span className="font-light text-accent group-hover:text-accent/80 transition-colors">TRAVEL</span>
            </span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {[
              { label: 'Home', href: '#home', view: 'home' as const },
              { label: 'Tours', href: '#tours', view: 'home' as const },
              { label: 'Deals', href: undefined, view: 'deals' as const },
              { label: 'Newsletter', href: undefined, view: 'newsletter' as const },
              { label: 'About Us', href: '#about-us', view: 'home' as const },
              { label: 'Contact', href: '#contact', view: 'home' as const },
            ].map((item) => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onViewChange) onViewChange('home');
                    setTimeout(() => {
                      const el = document.querySelector(item.href!);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="relative text-sm font-light text-on-surface hover:text-accent transition-colors duration-300 py-2 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={() => { if (onViewChange) onViewChange(item.view); }}
                  className={`relative text-sm font-light py-2 group transition-colors duration-300 ${
                    currentView === item.view ? 'text-accent' : 'text-on-surface hover:text-accent'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    currentView === item.view ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              )
            ))}
            <button
              onClick={onInquireClick}
              className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-on-primary text-sm font-semibold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Inquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl focus:outline-none transition-colors text-on-surface hover:bg-surface-alt"
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
            className="md:hidden bg-surface border-t border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {[
                { label: 'Home', href: '#home', view: 'home' as const },
                { label: 'Tours', href: '#tours', view: 'home' as const },
                { label: 'Deals', href: undefined, view: 'deals' as const },
                { label: 'Newsletter', href: undefined, view: 'newsletter' as const },
                { label: 'About Us', href: '#about-us', view: 'home' as const },
                { label: 'Contact', href: '#contact', view: 'home' as const },
              ].map((item) => (
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onViewChange && item.view !== 'home') onViewChange(item.view);
                      setTimeout(() => {
                        const el = document.querySelector(item.href!);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 50);
                    }}
                    className={`block px-4 py-3.5 text-base font-light rounded-xl transition-all ${
                      currentView === item.view ? 'text-accent bg-surface-alt' : 'text-on-surface hover:text-accent hover:bg-surface-alt'
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => { setMobileMenuOpen(false); if (onViewChange) onViewChange(item.view); }}
                    className={`block w-full text-left px-4 py-3.5 text-base font-light rounded-xl transition-all ${
                      currentView === item.view ? 'text-accent bg-surface-alt' : 'text-on-surface hover:text-accent hover:bg-surface-alt'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onInquireClick();
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-on-primary py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all"
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
