import { Compass, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-600 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#1d4ed8] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#1d4ed8]">
                2AFRICA <span className="font-light text-gray-500">TRAVEL</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Bespoke Quality Services. We cater from individual traveler to groups and deliver set packages or bespoke tours based on your needs.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#1d4ed8] mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#dc2626]" />
                +27 71 34 33 124
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#dc2626]" />
                queries@2africa.co.za
              </li>
              <li className="flex flex-start gap-3">
                <MapPin className="h-4 w-4 text-[#dc2626] mt-1" />
                <span>
                  King Shaka International Airport <br />
                  Durban, South Africa
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#1d4ed8] mb-6">
              Tours
            </h4>
            <ul className="space-y-3 text-sm font-medium text-gray-500">
              <li><a href="#tours" className="hover:text-[#1d4ed8] transition-colors">Half Day Tours</a></li>
              <li><a href="#tours" className="hover:text-[#1d4ed8] transition-colors">Full Day Tours</a></li>
              <li><a href="#tours" className="hover:text-[#1d4ed8] transition-colors">Safaris</a></li>
              <li><a href="#tours" className="hover:text-[#1d4ed8] transition-colors">Wilderness</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#1d4ed8] mb-6">
              Newsletter
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              You will never miss a great deal if you join our mailing list!
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border border-gray-200 focus:border-[#dc2626] rounded-xl px-4 py-3 text-sm outline-none transition-colors text-black placeholder-gray-400 font-semibold"
              />
              <button 
                type="button"
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-gray-400">
          <p>&copy; {new Date().getFullYear()} 2Africa Travel. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1d4ed8] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1d4ed8] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
