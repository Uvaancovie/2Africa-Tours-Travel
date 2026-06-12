import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Bell, Sparkles, ArrowRight, CheckCircle2, MapPin, Percent, ShieldCheck, Phone, AtSign, User } from 'lucide-react';

interface NewsletterProps {
  onBack: () => void;
}

export function Newsletter({ onBack }: NewsletterProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    preferences: [] as string[],
  });
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const preferenceOptions = [
    { value: 'deals', label: 'Exclusive Deals & Promotions' },
    { value: 'tours', label: 'New Tour Announcements' },
    { value: 'events', label: 'Local Events & Culture' },
    { value: 'tips', label: 'Travel Tips & Guides' },
  ];

  const togglePreference = (value: string) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.includes(value)
        ? prev.preferences.filter(p => p !== value)
        : [...prev.preferences, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-surface border border-border rounded-[48px] p-12 text-center shadow-2xl shadow-primary/10"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 text-on-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/20">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold text-on-surface mb-4">
            You're In!
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed mb-2 font-light">
            Welcome aboard, <span className="text-primary font-bold">{formData.name}</span>!
          </p>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-light">
            We've sent a confirmation to <span className="text-on-surface font-bold">{formData.email}</span>. Get ready for exclusive deals, travel inspiration, and African adventures delivered to your inbox.
          </p>
          <div className="bg-primary-container border border-border rounded-3xl p-5 mb-8 text-left">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">What's Next</span>
            </div>
            <ul className="space-y-2.5 text-sm text-on-surface-variant font-light">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Check your inbox for the welcome email</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Watch for our monthly newsletter with exclusive deals</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Unsubscribe anytime — no hard feelings!</span>
              </li>
            </ul>
          </div>
          <button
            onClick={onBack}
            className="px-8 py-3.5 bg-primary hover:bg-primary/90 text-on-primary text-xs uppercase tracking-widest font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Banner */}
      <div className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, #1d4ed8 1px, transparent 1px), radial-gradient(circle at 75% 75%, #dc2626 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-[800px] mx-auto"
          >
            <div className="flex items-center justify-center gap-2 bg-primary-container border border-border w-fit px-4 py-1.5 rounded-full shadow-sm mx-auto mb-6">
              <Bell className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">
                Stay Connected
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.05] mb-6">
              Never Miss a
              <br />
              <span className="text-accent">Great Deal</span>
            </h1>

            <p className="text-on-surface-variant text-lg sm:text-xl max-w-[600px] mx-auto leading-relaxed font-light mb-10">
              Join our community of savvy travelers and get exclusive access to limited-time offers, new tour announcements, and insider travel tips for Southern Africa.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form Section */}
      <div className="pb-28 -mt-16 relative z-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-3/5 bg-surface border border-border rounded-[40px] p-8 md:p-12 shadow-xl shadow-primary/10"
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-on-surface-variant text-sm mb-8 font-light">Fill in your details and select what interests you most.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-primary" /> Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => { setFormData(prev => ({ ...prev, name: e.target.value })); setError(''); }}
                      className="bg-surface border border-border focus:border-primary rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors text-on-surface font-bold placeholder-on-surface-variant"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-1.5">
                      <AtSign className="w-3.5 h-3.5 text-primary" /> Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => { setFormData(prev => ({ ...prev, email: e.target.value })); setError(''); }}
                      className="bg-surface border border-border focus:border-primary rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors text-on-surface font-bold placeholder-on-surface-variant"
                    />
                  </div>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent text-xs font-bold"
                  >
                    {error}
                  </motion.p>
                )}

                {/* Preferences */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-primary" /> I'm Interested In
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {preferenceOptions.map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => togglePreference(opt.value)}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border text-sm font-medium transition-all ${
                          formData.preferences.includes(opt.value)
                            ? 'bg-primary-container border-primary text-primary font-bold'
                            : 'bg-surface border-border text-on-surface-variant font-light hover:border-primary/30'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                          formData.preferences.includes(opt.value)
                            ? 'bg-primary border-primary'
                            : 'border-border'
                        }`}>
                          {formData.preferences.includes(opt.value) && (
                            <CheckCircle2 className="w-3 h-3 text-on-primary" />
                          )}
                        </div>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-4.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-primary/15 hover:shadow-primary/35 hover:scale-[1.02] active:scale-[0.98] mt-4 flex items-center justify-center gap-3"
                >
                  <Mail className="w-4 h-4" />
                  Subscribe Now
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-on-surface-variant font-light text-center mt-2">
                  No spam, ever. Unsubscribe anytime. Read our{' '}
                  <a href="#" className="text-primary font-bold hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </motion.div>

            {/* Right: Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-2/5 space-y-6"
            >
              <div className="bg-surface border border-border rounded-[32px] p-8 shadow-lg shadow-primary/10">
                <h3 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  Member Benefits
                </h3>
                <div className="space-y-5">
{[
                    { icon: Percent, title: 'Exclusive Discounts', desc: 'Subscriber-only deals with up to 30% off on selected packages.' },
                    { icon: Bell, title: 'Early Access', desc: 'Be the first to know about new tour launches and seasonal offers.' },
                    { icon: MapPin, title: 'Travel Inspiration', desc: 'Curated guides to hidden gems across KwaZulu-Natal and beyond.' },
                    { icon: ShieldCheck, title: 'Priority Support', desc: 'Dedicated travel advisor response within 1 hour for subscribers.' },
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-container text-primary flex items-center justify-center shrink-0 shadow-sm">
                        <benefit.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-on-surface block">{benefit.title}</span>
                        <span className="text-xs text-on-surface-variant font-light">{benefit.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex items-center gap-6 text-xs font-bold text-on-surface-variant">
                <button onClick={onBack} className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  Back to Home
                </button>
                <span className="text-border">|</span>
                <a href="#contact" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
