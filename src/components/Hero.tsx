import { motion } from 'motion/react';
import { ArrowRight, Search } from 'lucide-react';

export function Hero() {
  return (
    <div id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 w-full flex items-center justify-center bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="px-3 py-1 bg-[#f8fafc] text-[#1d4ed8] text-xs font-bold uppercase tracking-widest rounded-md">
              Welcome to 2Africa Travel
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#111827] tracking-tight leading-[1.1]"
          >
            Experience the <br className="hidden md:block"/> <span className="text-[#dc2626]">Wild</span> Side of Life.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-500 text-lg max-w-md leading-relaxed"
          >
            Drenched by the Indian Ocean and 320 days of sunshine a year, Durban has a unique blend of culture, fauna and flora that makes it a sub-tropical paradise.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4 p-2 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col sm:flex-row items-center gap-2 max-w-lg"
          >
            <div className="flex-1 px-4 py-2 w-full sm:border-r border-gray-100">
              <label className="block text-[10px] font-bold text-gray-400 uppercase">Destination</label>
              <input type="text" placeholder="Where to?" className="w-full text-sm font-semibold focus:outline-none bg-transparent placeholder-gray-300 text-black" />
            </div>
            <div className="flex-1 px-4 py-2 w-full sm:border-r border-gray-100">
              <label className="block text-[10px] font-bold text-gray-400 uppercase">Safari Type</label>
              <select className="w-full text-sm font-semibold focus:outline-none bg-transparent text-black outline-none border-none">
                <option>Wildlife & Nature</option>
                <option>Coastal Escape</option>
                <option>Adventure Trek</option>
              </select>
            </div>
            <a href="#tours" className="bg-[#dc2626] p-4 rounded-xl text-white hover:bg-[#b91c1c] transition-colors w-full sm:w-auto flex justify-center mt-2 sm:mt-0">
               <Search className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Buttons matching existing Hero component structure but restyled */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a
              href="#tours"
              className="group flex items-center justify-center gap-2 bg-[#1d4ed8] text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg shadow-[#1d4ed8]/20 hover:bg-[#1e40af] transition-all"
            >
              Explore Tours
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about-us"
              className="flex items-center justify-center hover:bg-gray-100 text-gray-600 px-8 py-3 rounded-full text-sm font-semibold transition-all border border-gray-200"
            >
              About Us
            </a>
          </motion.div>
        </div>

        {/* Feature Grid corresponding to design's right panel */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] grid grid-cols-2 grid-rows-2 gap-4">
          <div className="bg-[#1d4ed8] rounded-[32px] row-span-2 relative overflow-hidden group shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <div className="absolute bottom-8 left-8 text-white z-20">
              <h3 className="text-2xl font-bold">Durban</h3>
              <p className="text-sm text-white/80">South Africa</p>
            </div>
            <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576487248805-fcb11aae7030?ixlib=rb-4.0.3&auto=format&fit=crop&q=80")' }}
            />
          </div>
          <div className="bg-[#dc2626] rounded-[32px] relative overflow-hidden shadow-xl group">
             <div className="absolute inset-0 bg-black/20 z-10" />
             <div className="absolute bottom-6 left-6 text-white z-20">
               <h3 className="text-xl font-bold">Kruger Park</h3>
               <p className="text-xs text-white/80">South Africa</p>
             </div>
             <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80")' }}
            />
          </div>
          <div className="bg-white border border-gray-200 rounded-[32px] p-8 flex flex-col justify-between shadow-xl shadow-gray-200/50">
            <div className="text-4xl text-[#dc2626] font-bold italic">100+</div>
            <div>
              <p className="text-sm font-bold text-[#111827]">Expert Guides</p>
              <p className="text-xs text-gray-500 mt-1">Certified safari specialists at your service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
