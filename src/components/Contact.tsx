import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Users, Calendar, Sparkles, CheckCircle2, Ticket, Calculator } from 'lucide-react';
import { TOURS, DEALS } from '../data';
import { SelectedInquiry } from '../App';

interface ContactProps {
  selectedInquiry: SelectedInquiry;
  onInquiryChange: (inquiry: SelectedInquiry) => void;
}

export function Contact({ selectedInquiry, onInquiryChange }: ContactProps) {
  // Local form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 2,
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  // Handle selectedInquiry changes from parent
  useEffect(() => {
    if (selectedInquiry.id) {
      setFormErrors((prev) => ({ ...prev, package: '' }));
    }
  }, [selectedInquiry]);

  // Combined options for dropdown selection
  const options = [
    { value: 'general', label: 'General Travel Inquiry', price: 0, type: 'general' },
    ...TOURS.map(t => ({ value: t.id, label: `Tour: ${t.title}`, price: t.price || 0, type: 'tour' })),
    ...DEALS.map(d => ({ value: d.id, label: `Deal: ${d.title}`, price: d.discountedPrice, type: 'deal', originalPrice: d.originalPrice }))
  ];

  const currentOption = options.find(opt => opt.value === (selectedInquiry.id || 'general')) || options[0];

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVal = e.target.value;
    const selectedOpt = options.find(opt => opt.value === selectedVal);
    if (selectedOpt) {
      onInquiryChange({
        type: selectedOpt.type as 'tour' | 'deal' | 'general',
        id: selectedOpt.value === 'general' ? '' : selectedOpt.value,
        title: selectedOpt.label,
        price: selectedOpt.price
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const adjustGuests = (amount: number) => {
    setFormData(prev => ({ ...prev, guests: Math.max(1, Math.min(20, prev.guests + amount)) }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (currentOption.value !== 'general' && !formData.date) {
      errors.date = 'Please select a travel date';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Generate unique confirmation code
      const code = '2A-' + Math.floor(100000 + Math.random() * 900000);
      setInquiryCode(code);
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guests: 2,
      message: '',
    });
    onInquiryChange({ type: 'general', id: '', title: '', price: 0 });
    setIsSubmitted(false);
  };

  // Pricing calculations
  const basePrice = currentOption.price;
  const totalPrice = basePrice * formData.guests;
  
  // Deals original price calculation for savings
  const originalPrice = 'originalPrice' in currentOption ? (currentOption.originalPrice as number) : basePrice;
  const totalOriginalPrice = originalPrice * formData.guests;
  const totalSavings = totalOriginalPrice - totalPrice;

  return (
    <section id="contact" className="py-24 bg-white border-t border-blue-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <div>
              <span className="px-4 py-1.5 bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-4 shadow-sm">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 tracking-tight mb-6">
                2Africa Travel
              </h2>
              <p className="text-blue-900/80 text-sm md:text-base leading-relaxed mb-10 font-light">
                Kindly contact us for any requirements you may have, corporate or leisure, large or small! We will be happy to assist you with custom tailored arrangements.
              </p>

              {/* Information Cards */}
              <div className="space-y-6">
                
                <div className="flex gap-4 p-5 bg-white border border-blue-100 rounded-3xl shadow-md shadow-blue-100/10 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Address</span>
                    <span className="text-sm font-bold text-blue-950 mt-0.5">King Shaka International Airport - Durban</span>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white border border-blue-100 rounded-3xl shadow-md shadow-blue-100/10 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Phone</span>
                    <span className="text-sm font-bold text-blue-950 mt-0.5">+27 71 34 33 124</span>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white border border-blue-100 rounded-3xl shadow-md shadow-blue-100/10 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Email</span>
                    <span className="text-sm font-bold text-blue-950 mt-0.5">queries@2africa.co.za</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-12 hidden lg:flex items-center gap-3 bg-blue-50 border border-blue-200 p-4 rounded-2xl">
              <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
              <p className="text-[11px] font-bold text-blue-900 leading-snug uppercase tracking-wider">
                Booking inquiries are processed within 2 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Dashboard */}
          <div className="lg:w-2/3">
            {isSubmitted ? (
              /* Success Panel */
              <div className="bg-white p-8 md:p-12 rounded-[40px] border border-blue-100 shadow-xl shadow-blue-100/10 text-center flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-600/15 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <h3 className="text-3xl font-bold text-blue-950 mb-2">Inquiry Successfully Sent!</h3>
                <p className="text-blue-900/80 max-w-md text-sm md:text-base mb-8 font-light">
                  Thank you, <span className="text-blue-600 font-bold">{formData.name}</span>! We have received your booking inquiry. A travel advisor will contact you at <span className="text-blue-950 font-bold">{formData.email}</span> shortly.
                </p>

                {/* Receipt Summary on Success */}
                <div className="w-full max-w-md bg-blue-50/30 border border-blue-100 rounded-3xl p-6 mb-8 text-left">
                  <div className="flex justify-between items-center pb-4 border-b border-blue-200 mb-4">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Reference Code</span>
                    <span className="bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-lg tracking-widest shadow-sm">
                      {inquiryCode}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-500 font-bold">Package:</span>
                      <span className="text-blue-950 font-bold text-right max-w-[250px] truncate">{currentOption.label}</span>
                    </div>
                    {formData.date && (
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-500 font-bold">Travel Date:</span>
                        <span className="text-blue-950 font-bold">{formData.date}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-500 font-bold">Guests:</span>
                      <span className="text-blue-950 font-bold">{formData.guests} Travellers</span>
                    </div>
                    {totalPrice > 0 && (
                      <div className="flex justify-between text-sm pt-3 border-t border-blue-200 font-bold">
                        <span className="text-blue-900">Estimated Total:</span>
                        <span className="text-blue-600 text-base">R {totalPrice.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                </div>

                <button 
                  onClick={resetForm}
                  className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs uppercase tracking-widest font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Make Another Inquiry
                </button>
              </div>
            ) : (
              /* The Form + Receipt Summary Split */
              <div className="flex flex-col xl:flex-row gap-8">
                
                {/* Form Inputs Panel */}
                <form onSubmit={handleSubmit} className="flex-1 bg-white p-8 md:p-10 rounded-[40px] border border-blue-100 shadow-xl shadow-blue-100/10 flex flex-col gap-6">
                  <h3 className="text-2xl font-bold text-blue-950 tracking-tight">Interactive Inquiry Builder</h3>

                  {/* Trip Selector */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-blue-800/80 uppercase tracking-widest flex items-center gap-1.5">
                      <Ticket className="w-3.5 h-3.5 text-blue-600" /> Choose Deals / Packages
                    </label>
                    <select 
                      value={selectedInquiry.id || 'general'}
                      onChange={handlePackageChange}
                      className="bg-white border border-blue-200 focus:border-blue-600 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors text-blue-950 font-bold cursor-pointer [color-scheme:light]"
                    >
                      {options.map(opt => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Guests config (shown only if not a general inquiry) */}
                  {currentOption.value !== 'general' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-blue-50/20 border border-blue-100 rounded-2xl">
                      {/* Guest Counter */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold text-blue-800/80 uppercase tracking-widest flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-blue-600" /> Travellers
                        </label>
                        <div className="flex items-center justify-between border border-blue-200 rounded-xl bg-white p-1">
                          <button 
                            type="button"
                            onClick={() => adjustGuests(-1)}
                            className="w-10 h-10 font-bold text-lg text-blue-600 hover:bg-blue-50 rounded-lg active:scale-95 transition-all flex items-center justify-center select-none"
                          >
                            -
                          </button>
                          <span className="font-bold text-blue-950 text-sm">{formData.guests}</span>
                          <button 
                            type="button"
                            onClick={() => adjustGuests(1)}
                            className="w-10 h-10 font-bold text-lg text-blue-600 hover:bg-blue-50 rounded-lg active:scale-95 transition-all flex items-center justify-center select-none"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Travel Date */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold text-blue-800/80 uppercase tracking-widest flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" /> Travel Date
                        </label>
                        <input 
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className={`bg-white border focus:border-blue-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors text-blue-950 font-bold h-[48px] ${
                            formErrors.date ? 'border-red-600' : 'border-blue-200'
                          }`}
                        />
                        {formErrors.date && <span className="text-[10px] text-red-600 font-bold">{formErrors.date}</span>}
                      </div>
                    </div>
                  )}

                  {/* Personal details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-blue-800/80 uppercase tracking-widest">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`bg-white border focus:border-blue-600 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors text-blue-950 font-bold placeholder-blue-300 ${
                          formErrors.name ? 'border-red-600' : 'border-blue-200'
                        }`}
                      />
                      {formErrors.name && <span className="text-[10px] text-red-600 font-bold">{formErrors.name}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-blue-800/80 uppercase tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`bg-white border focus:border-blue-600 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors text-blue-950 font-bold placeholder-blue-300 ${
                          formErrors.email ? 'border-red-600' : 'border-blue-200'
                        }`}
                      />
                      {formErrors.email && <span className="text-[10px] text-red-600 font-bold">{formErrors.email}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-blue-800/80 uppercase tracking-widest">Contact Phone (Optional)</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="e.g. +27 71..." 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white border border-blue-200 focus:border-blue-600 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors text-blue-950 font-bold placeholder-blue-300"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-blue-800/80 uppercase tracking-widest">Special Requirements / Notes</label>
                    <textarea 
                      rows={4}
                      name="message"
                      placeholder="Specify flight transfer requests, custom itineraries, dietary choices..." 
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white border border-blue-200 focus:border-blue-600 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors text-blue-950 font-bold placeholder-blue-300 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-blue-600/15 hover:shadow-blue-600/35 hover:scale-[1.02] active:scale-[0.98] mt-2 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </button>
                </form>

                {/* Pricing / Receipt Panel (Sidebar) */}
                {currentOption.value !== 'general' && (
                  <div className="xl:w-[280px] bg-blue-50/40 text-slate-800 rounded-[32px] p-6 border border-blue-100 shadow-xl flex flex-col justify-between shrink-0 h-fit self-start">
                    <div>
                      <div className="flex items-center gap-2 pb-4 border-b border-blue-150 mb-5">
                        <Calculator className="w-5 h-5 text-blue-600" />
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Live Estimate</span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <span className="block text-[8px] font-bold text-blue-400 uppercase tracking-widest">Selected package</span>
                          <span className="text-sm font-bold text-blue-950 block mt-1 leading-snug line-clamp-2">
                            {currentOption.label.split(': ')[1] || currentOption.label}
                          </span>
                        </div>

                        <div>
                          <span className="block text-[8px] font-bold text-blue-400 uppercase tracking-widest">Base Rate</span>
                          <span className="text-sm font-bold text-blue-900 block mt-0.5">
                            R {basePrice.toLocaleString()} /pp
                          </span>
                        </div>

                        <div className="flex justify-between text-blue-700 border-t border-blue-100 pt-3 text-xs font-semibold">
                          <span>Rate per person</span>
                          <span>R {basePrice.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between text-blue-700 text-xs font-semibold">
                          <span>Total Travellers</span>
                          <span>x {formData.guests}</span>
                        </div>

                        {totalSavings > 0 && (
                          <div className="flex justify-between text-red-600 text-xs font-bold bg-red-50 p-2.5 rounded-xl border border-red-200">
                            <span>Exclusive Savings</span>
                            <span>- R {totalSavings.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-blue-150 pt-4 mt-6">
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Total cost</span>
                        <span className="text-2xl font-bold text-blue-600 tracking-tight">
                          R {totalPrice.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-[9px] text-blue-800/80 font-light leading-normal">
                        *Estimates exclude optional transfers and specific peak flight premiums. Final quote sent on confirmation.
                      </p>
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
