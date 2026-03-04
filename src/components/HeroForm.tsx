import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown, Search, MapPin, Building2 } from 'lucide-react';
import { cn } from '../utils/cn';
import { SERVICE_AREAS } from '../constants';

type Intent = 'Buy' | 'Sell' | 'Rent';

export function HeroForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [intent, setIntent] = useState<Intent>('Buy');
  const [city, setCity] = useState(SERVICE_AREAS[0]);
  const [email, setEmail] = useState('');
  const [showEmailStep, setShowEmailStep] = useState(false);
  
  const [activeDropdown, setActiveDropdown] = useState<'intent' | 'city' | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!showEmailStep) {
      setShowEmailStep(true);
    } else {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full border border-white/20 text-white flex items-center gap-4 shadow-2xl"
      >
        <CheckCircle2 className="w-5 h-5 text-brand" />
        <span className="text-sm font-medium tracking-wide">Concierge notified. Expect excellence.</span>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl" ref={formRef}>
      <form onSubmit={handleSubmit} className="relative">
        <AnimatePresence mode="wait">
          {!showEmailStep ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col md:flex-row items-stretch md:items-center bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-full border border-white/20 p-1.5 shadow-2xl overflow-visible"
            >
              {/* Intent Selector */}
              <div className="relative flex-1">
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'intent' ? null : 'intent')}
                  className="w-full flex items-center justify-between px-6 py-3 text-white hover:bg-white/5 rounded-full transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Building2 size={16} className="text-brand" />
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">I want to</p>
                      <p className="text-sm font-bold tracking-wide">{intent}</p>
                    </div>
                  </div>
                  <ChevronDown size={14} className={cn("text-white/40 transition-transform", activeDropdown === 'intent' && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'intent' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                      {['Buy', 'Sell', 'Rent'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => { setIntent(opt as Intent); setActiveDropdown(null); }}
                          className={cn(
                            "w-full text-left px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors",
                            intent === opt ? "bg-brand text-white" : "text-white/60 hover:bg-white/10 hover:text-white"
                          )}
                        >
                          {opt}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="hidden md:block w-px h-8 bg-white/10" />

              {/* City Selector */}
              <div className="relative flex-[1.5]">
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'city' ? null : 'city')}
                  className="w-full flex items-center justify-between px-6 py-3 text-white hover:bg-white/5 rounded-full transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-brand" />
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">In</p>
                      <p className="text-sm font-bold tracking-wide truncate max-w-[120px]">{city}</p>
                    </div>
                  </div>
                  <ChevronDown size={14} className={cn("text-white/40 transition-transform", activeDropdown === 'city' && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'city' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                      <div className="max-h-60 overflow-y-auto custom-scrollbar">
                        {SERVICE_AREAS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => { setCity(opt); setActiveDropdown(null); }}
                            className={cn(
                              "w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors",
                              city === opt ? "bg-brand text-white" : "text-white/60 hover:bg-white/10 hover:text-white"
                            )}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-brand hover:bg-brand-light text-white p-4 md:p-3 rounded-xl md:rounded-full transition-all flex items-center justify-center gap-2 group"
              >
                <Search size={18} className="md:hidden" />
                <span className="md:hidden font-bold uppercase tracking-widest text-xs">Start Search</span>
                <div className="hidden md:flex w-10 h-10 rounded-full bg-white/20 items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} />
                </div>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex items-center bg-white/10 backdrop-blur-xl rounded-full border border-white/20 p-1.5 shadow-2xl"
            >
              <input
                autoFocus
                required
                type="email"
                placeholder="Enter your email to start..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-none text-white text-sm px-6 py-3 focus:outline-none placeholder:text-white/30"
              />
              <button
                type="submit"
                className="bg-brand hover:bg-brand-light text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all"
              >
                Connect
              </button>
              <button
                type="button"
                onClick={() => setShowEmailStep(false)}
                className="px-4 text-white/40 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
              >
                Back
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
