import { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b border-gray-200 ${
        isScrolled ? 'shadow-md shadow-gray-200/50' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-[#1d4ed8] rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rotate-45"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#1d4ed8]">
              2AFRICA <span className="font-light text-gray-500">TRAVEL</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'Tours', 'Deals', 'About Us', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-600 hover:text-[#1d4ed8] transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-2.5 bg-[#1d4ed8] text-white text-sm font-semibold rounded-full shadow-lg shadow-[#1d4ed8]/20 hover:bg-[#1e40af] transition-all">
              Inquire Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#1d4ed8] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {['Home', 'Tours', 'Deals', 'About Us', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-[#1d4ed8] border-b border-gray-100"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 px-3">
                <button className="w-full bg-[#1d4ed8] text-white py-3 rounded-full text-sm font-semibold shadow-lg shadow-[#1d4ed8]/20 hover:bg-[#1e40af] transition-all">
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
