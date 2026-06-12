import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import logo from '../assets/logo.png';

interface FooterProps {
  onViewChange?: (view: 'home' | 'newsletter' | 'deals') => void;
}

export function Footer({ onViewChange }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="bg-white border-t border-blue-100 text-blue-900 pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="2Africa Travel" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold tracking-tight text-blue-600">
                2AFRICA <span className="font-light text-red-600">TRAVEL</span>
              </span>
            </div>
            <p className="text-blue-800/80 text-sm leading-relaxed mb-6 font-light">
              Bespoke Quality Services. We cater from individual traveler to groups and deliver set packages or bespoke tours based on your needs.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-blue-600 mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm font-light text-blue-800">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-red-600 shrink-0" />
                +27 71 34 33 124
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-red-600 shrink-0" />
                queries@2africa.co.za
              </li>
              <li className="flex flex-start gap-3">
                <MapPin className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                <span>
                  King Shaka International Airport <br />
                  Durban, South Africa
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="text-[10px] uppercase font-bold tracking-widest text-blue-600 mb-6">
              Tours
            </h4>
            <ul className="space-y-3 text-sm font-light text-blue-800">
              <li><a href="#tours" onClick={(e) => { e.preventDefault(); onViewChange?.('home'); setTimeout(() => document.querySelector('#tours')?.scrollIntoView({ behavior: 'smooth' }), 50); }} className="hover:text-red-600 transition-colors">Half Day Tours</a></li>
              <li><a href="#tours" onClick={(e) => { e.preventDefault(); onViewChange?.('home'); setTimeout(() => document.querySelector('#tours')?.scrollIntoView({ behavior: 'smooth' }), 50); }} className="hover:text-red-600 transition-colors">Full Day Tours</a></li>
              <li><button onClick={() => onViewChange?.('deals')} className="hover:text-red-600 transition-colors">Exclusive Deals</button></li>
              <li><button onClick={() => onViewChange?.('newsletter')} className="hover:text-red-600 transition-colors">Newsletter</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-blue-600 mb-6">
              Newsletter
            </h4>
            <p className="text-blue-800/80 text-sm leading-relaxed mb-4 font-light">
              You will never miss a great deal if you join our mailing list!
            </p>
            {subscribed ? (
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-sm font-bold text-green-700">Subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form className="flex flex-col gap-3" onSubmit={(e) => {
                e.preventDefault();
                if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
                  setSubscribed(true);
                  setEmail('');
                  setTimeout(() => setSubscribed(false), 5000);
                }
              }}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border border-blue-200 focus:border-red-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors text-blue-950 placeholder-blue-300 font-light"
                />
                <button 
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-xl text-sm font-bold transition-colors shadow-md shadow-red-600/10"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        <div className="pt-8 border-t border-blue-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-blue-400">
          <p>&copy; {new Date().getFullYear()} 2Africa Travel. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
