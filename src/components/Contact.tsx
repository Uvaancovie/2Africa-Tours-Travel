import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 flex flex-col">
            <span className="text-[#dc2626] text-xs font-bold uppercase tracking-widest mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-6">
              2Africa Travel
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10">
              Kindly contact us for any requirements you may have, corporate or leisure, large or small! We will be happy to assist you with any request.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f8fafc] flex items-center justify-center text-[#1d4ed8] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Address</span>
                  <span className="text-sm font-semibold text-[#111827] mt-1">King Shaka International Airport - Durban</span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f8fafc] flex items-center justify-center text-[#1d4ed8] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone</span>
                  <span className="text-sm font-semibold text-[#111827] mt-1">+27 71 34 33 124</span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f8fafc] flex items-center justify-center text-[#1d4ed8] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</span>
                  <span className="text-sm font-semibold text-[#111827] mt-1">queries@2africa.co.za</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-200/40">
             <h3 className="text-2xl font-bold text-[#111827] mb-8">Send Us A Note</h3>
             <form className="flex flex-col gap-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Name</label>
                   <input 
                     type="text" 
                     placeholder="Your name" 
                     className="bg-white border border-gray-200 focus:border-[#1d4ed8] rounded-xl px-4 py-3 text-sm outline-none transition-colors text-black font-semibold shadow-sm"
                   />
                 </div>
                 <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</label>
                   <input 
                     type="email" 
                     placeholder="Your email address" 
                     className="bg-white border border-gray-200 focus:border-[#1d4ed8] rounded-xl px-4 py-3 text-sm outline-none transition-colors text-black font-semibold shadow-sm"
                   />
                 </div>
               </div>
               
               <div className="flex flex-col gap-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Your Message</label>
                 <textarea 
                   rows={5}
                   placeholder="How can we help you?" 
                   className="bg-white border border-gray-200 focus:border-[#dc2626] rounded-xl px-4 py-3 text-sm outline-none transition-colors text-black font-semibold shadow-sm resize-none"
                 />
               </div>

               <button 
                 type="button"
                 className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white px-8 py-4 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-[#1d4ed8]/20 mt-2 flex items-center justify-center gap-2 w-full md:w-auto self-start"
               >
                 <Send className="w-4 h-4" />
                 Send Message
               </button>
             </form>
          </div>
        </div>

      </div>
    </section>
  );
}
