import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DEALS } from '../data';
import { Deal } from '../types';
import { ArrowLeft, ArrowRight, MapPin, Clock, Tag, CheckCircle2, Percent, Star, Users, Calendar, Gift, Ticket, ShieldCheck, Phone } from 'lucide-react';

interface DealDetailPageProps {
  initialDealId?: string;
  onBack: () => void;
  onBook: (deal: Deal) => void;
}

export function DealDetailPage({ initialDealId, onBack, onBook }: DealDetailPageProps) {
  const [activeDealIndex, setActiveDealIndex] = useState(
    initialDealId ? Math.max(0, DEALS.findIndex(d => d.id === initialDealId)) : 0
  );
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({ name: '', email: '', guests: 2, date: '' });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const deal = DEALS[activeDealIndex];
  if (!deal) return null;

  const savings = deal.originalPrice - deal.discountedPrice;
  const savingsPercentage = Math.round((savings / deal.originalPrice) * 100);
  const prevDeal = DEALS[activeDealIndex - 1];
  const nextDeal = DEALS[activeDealIndex + 1];

  const inclusions = [
    'Luxury 4-star accommodation',
    'Daily gourmet breakfast',
    'Airport transfers (King Shaka)',
    'Guided excursion with certified guide',
    'All conservation & entrance fees',
    '24/7 travel advisor support',
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  const handleBookNow = () => {
    setShowBookingForm(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-border">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              Deal {activeDealIndex + 1} of {DEALS.length}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => setActiveDealIndex(prev => prev - 1)}
                disabled={!prevDeal}
                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-surface-alt disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-on-surface" />
              </button>
              <button
                onClick={() => setActiveDealIndex(prev => prev + 1)}
                disabled={!nextDeal}
                className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-surface-alt disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-on-surface" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <motion.div
          key={deal.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${deal.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 lg:p-16">
          <motion.div
            key={deal.id + '-content'}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-[1280px] mx-auto"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {deal.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-md ${
                    idx === 0 ? 'bg-primary text-on-primary' : 'bg-accent text-on-accent'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold !text-white tracking-tight leading-tight mb-3">
              {deal.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-white/70" />
                {deal.destination}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-white/70" />
                {deal.deadline}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: Main Content */}
            <div className="w-full lg:w-3/5">
              <motion.div
                key={deal.id + '-desc'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl lg:text-3xl font-extrabold text-on-surface mb-6">About This Deal</h2>
                <p className="text-on-surface-variant text-base leading-relaxed mb-10 font-light">
                  {deal.description}
                </p>

                {/* What's Included */}
                <h3 className="text-xl font-bold text-on-surface mb-5 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  What's Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                  {inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3.5 bg-primary-container border border-border rounded-2xl">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-on-surface font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <h3 className="text-xl font-bold text-on-surface mb-5 flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  Why You'll Love It
                </h3>
                <div className="space-y-4 mb-12">
                  {[
                    `Save ${savingsPercentage}% compared to standard pricing`,
                    'Certified local guides with years of expertise',
                    'Hassle-free booking with instant confirmation',
                    'Flexible cancellation policy',
                  ].map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-on-surface-variant font-light">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Booking Form */}
              <AnimatePresence mode="wait">
                {showBookingForm && !bookingConfirmed && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-surface border border-border rounded-[32px] p-8 shadow-xl shadow-primary/10"
                  >
                    <h3 className="text-xl font-bold text-on-surface mb-2">Book This Deal</h3>
                    <p className="text-on-surface-variant text-sm mb-6 font-light">Fill in your details to secure this exclusive offer.</p>
                    <form onSubmit={handleBookingSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Full Name</label>
                          <input type="text" required placeholder="Your name" value={bookingData.name} onChange={(e) => setBookingData(prev => ({ ...prev, name: e.target.value }))} className="bg-surface border border-border focus:border-primary rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors text-on-surface font-bold placeholder-on-surface-variant" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Email</label>
                          <input type="email" required placeholder="your@email.com" value={bookingData.email} onChange={(e) => setBookingData(prev => ({ ...prev, email: e.target.value }))} className="bg-surface border border-border focus:border-primary rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors text-on-surface font-bold placeholder-on-surface-variant" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-primary" /> Guests
                          </label>
                          <div className="flex items-center justify-between border border-border rounded-xl bg-surface p-1">
                            <button type="button" onClick={() => setBookingData(prev => ({ ...prev, guests: Math.max(1, prev.guests - 1) }))} className="w-10 h-10 font-bold text-lg text-primary hover:bg-surface-alt rounded-lg transition-all">-</button>
                            <span className="font-bold text-on-surface text-sm">{bookingData.guests}</span>
                            <button type="button" onClick={() => setBookingData(prev => ({ ...prev, guests: Math.min(20, prev.guests + 1) }))} className="w-10 h-10 font-bold text-lg text-primary hover:bg-surface-alt rounded-lg transition-all">+</button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-primary" /> Travel Date
                          </label>
                          <input type="date" required value={bookingData.date} onChange={(e) => setBookingData(prev => ({ ...prev, date: e.target.value }))} className="bg-surface border border-border focus:border-primary rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors text-on-surface font-bold" />
                        </div>
                      </div>
                      <button type="submit" className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-primary/15 hover:shadow-primary/35 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                        <Ticket className="w-4 h-4" />
                        Confirm Booking
                      </button>
                    </form>
                  </motion.div>
                )}

                {bookingConfirmed && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-surface border border-border rounded-[32px] p-8 md:p-12 text-center shadow-xl shadow-primary/10"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 text-on-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-on-surface mb-3">Booking Request Sent!</h3>
                    <p className="text-on-surface-variant text-sm mb-6 font-light max-w-md mx-auto">
                      Thank you, <span className="text-primary font-bold">{bookingData.name}</span>! A travel advisor will contact you at <span className="text-on-surface font-bold">{bookingData.email}</span> within 2 hours to confirm your {deal.title} booking.
                    </p>
                    <div className="bg-primary-container border border-border rounded-3xl p-5 mb-6 text-left max-w-sm mx-auto">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-on-surface-variant">Deal</span>
                        <span className="text-on-surface font-bold">{deal.title}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-on-surface-variant">Guests</span>
                        <span className="text-on-surface font-bold">{bookingData.guests}</span>
                      </div>
                      <div className="flex justify-between text-sm pt-2 border-t border-border">
                        <span className="text-on-surface-variant">Total</span>
                        <span className="text-primary font-bold text-lg">R {(deal.discountedPrice * bookingData.guests).toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-center">
                      <button onClick={onBack} className="px-6 py-3 bg-primary hover:bg-primary/90 text-on-primary text-xs uppercase tracking-widest font-bold rounded-2xl transition-all">
                        Back to Home
                      </button>
                      <button onClick={() => { setShowBookingForm(false); setBookingConfirmed(false); setBookingData({ name: '', email: '', guests: 2, date: '' }); }} className="px-6 py-3 border border-border text-on-surface-variant hover:text-on-surface text-xs uppercase tracking-widest font-bold rounded-2xl transition-all">
                        Book Another
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Pricing Sidebar */}
            <div className="w-full lg:w-2/5 space-y-6 lg:sticky lg:top-24">
              <motion.div
                key={deal.id + '-price'}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-surface border border-border rounded-[32px] p-8 shadow-xl shadow-primary/10"
              >
                {/* Price Block */}
                <div className="text-center pb-6 border-b border-border mb-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Percent className="w-4 h-4 text-accent" />
                    <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Save {savingsPercentage}%</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-3">
                    <span className="text-2xl text-on-surface-variant line-through font-bold">
                      R{deal.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-5xl font-extrabold text-primary tracking-tight">
                      R{deal.discountedPrice.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-xs text-on-surface-variant font-light block mt-1">per person</span>
                </div>

                {/* Savings */}
                <div className="bg-accent/5 border border-accent/20 rounded-2xl p-4 mb-6 flex items-center gap-3">
                  <Gift className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <span className="block text-sm font-bold text-accent">Exclusive Savings</span>
                    <span className="block text-xs text-on-surface-variant font-light">You save R{savings.toLocaleString()} per person</span>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-on-surface-variant font-light">{deal.destination}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-on-surface-variant font-light">{deal.deadline}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-on-surface-variant font-light">Quality Assured</span>
                  </div>
                </div>

                {!showBookingForm && !bookingConfirmed && (
                  <button
                    onClick={handleBookNow}
                    className="w-full bg-primary hover:bg-primary/90 text-on-primary py-4 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <Ticket className="w-4 h-4" />
                    Book This Deal Now
                  </button>
                )}
              </motion.div>

              {/* Quick Contact */}
              <div className="bg-primary-container border border-border rounded-[32px] p-6 shadow-lg">
                <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" /> Need Help?
                </h4>
                <p className="text-sm text-on-surface-variant font-light mb-4">
                  Speak directly with a travel advisor for personalized assistance.
                </p>
                <a
                  href="tel:+27713433124"
                  className="flex items-center gap-3 bg-surface border border-border p-3.5 rounded-2xl hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[9px] text-on-surface-variant font-bold uppercase tracking-widest">Call Us</span>
                    <span className="block text-sm font-bold text-on-surface">+27 71 34 33 124</span>
                  </div>
                </a>
              </div>

              {/* Other Deals Navigation */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-1">Other Deals</h4>
                {[prevDeal, nextDeal].filter(Boolean).map((otherDeal, idx) => otherDeal && (
                  <button
                    key={otherDeal.id}
                    onClick={() => { setActiveDealIndex(DEALS.indexOf(otherDeal)); setShowBookingForm(false); setBookingConfirmed(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="w-full flex items-center gap-3 p-3 bg-surface border border-border rounded-2xl hover:border-primary/30 transition-all text-left"
                  >
                    <div className="w-14 h-14 rounded-xl bg-cover bg-center shrink-0" style={{ backgroundImage: `url(${otherDeal.imageUrl})` }} />
                    <div className="flex-1 min-w-0">
                      <span className="block text-sm font-bold text-on-surface truncate">{otherDeal.title}</span>
                      <span className="block text-[10px] text-on-surface-variant font-bold">
                        From R{otherDeal.discountedPrice.toLocaleString()}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
