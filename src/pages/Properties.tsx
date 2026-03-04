import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Loader2, MapPin, ChevronRight, Building2, Home as HomeIcon } from 'lucide-react';
import { cn } from '../utils/cn';
import { SERVICE_AREAS, IDX_LINKS, RENTALS_LINK } from '../constants';

type Tab = 'sale' | 'rent';

export function Properties() {
  const [activeTab, setActiveTab] = useState<Tab>('sale');
  const [selectedCity, setSelectedCity] = useState('Navarre & Gulf Breeze');
  const [isLoading, setIsLoading] = useState(false);
  const iframeRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tab: Tab) => {
    setIsLoading(true);
    setActiveTab(tab);
    setTimeout(() => setIsLoading(false), 1200);
    scrollToIframe();
  };

  const handleCityChange = (city: string) => {
    setIsLoading(true);
    setSelectedCity(city);
    setTimeout(() => setIsLoading(false), 1200);
    scrollToIframe();
  };

  const scrollToIframe = () => {
    if (iframeRef.current) {
      const yOffset = -120; 
      const y = iframeRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const currentIframeSrc = activeTab === 'rent' 
    ? RENTALS_LINK 
    : IDX_LINKS[selectedCity] || IDX_LINKS['Navarre & Gulf Breeze'];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand uppercase tracking-[0.4em] text-[10px] font-bold mb-4 inline-block"
            >
              The Emerald Coast Collection
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif text-zinc-900 leading-none"
            >
              Curated <br />
              <span className="italic">Properties</span>
            </motion.h1>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:pb-4"
          >
            <p className="text-zinc-500 text-lg max-w-md leading-relaxed">
              Access the most comprehensive and up-to-date real estate database on the Emerald Coast. 
              Directly connected to the official MLS for 100% accuracy.
            </p>
          </motion.div>
        </div>

        {/* Navigation & Filters */}
        <div className="mt-16 flex flex-col space-y-8">
          <div className="flex flex-wrap items-center gap-4">
            {/* Main Tabs */}
            <div className="flex p-1.5 bg-zinc-100 rounded-2xl w-fit">
              <button
                onClick={() => handleTabChange('sale')}
                className={cn(
                  "px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2",
                  activeTab === 'sale' ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-400 hover:text-zinc-600"
                )}
              >
                <Building2 size={14} />
                For Sale
              </button>
              <button
                onClick={() => handleTabChange('rent')}
                className={cn(
                  "px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center gap-2",
                  activeTab === 'rent' ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-400 hover:text-zinc-600"
                )}
              >
                <HomeIcon size={14} />
                Rentals
              </button>
            </div>

            <div className="h-8 w-px bg-zinc-200 mx-2 hidden md:block" />

            {/* City Filter - Only show for Sale tab */}
            {activeTab === 'sale' && (
              <div className="relative group/select">
                <select
                  value={selectedCity}
                  onChange={(e) => handleCityChange(e.target.value)}
                  className="pl-6 pr-12 py-4 bg-white border border-zinc-100 rounded-2xl text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-brand/10 appearance-none cursor-pointer min-w-[280px] shadow-sm hover:border-zinc-200 transition-all"
                >
                  {SERVICE_AREAS.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 group-hover/select:text-brand transition-colors">
                  <Filter size={14} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* IDX Container */}
      <div ref={iframeRef} className="max-w-[1440px] mx-auto px-6">
        <div className="relative group">
          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand/5 via-transparent to-brand/5 rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative bg-white rounded-[2.5rem] overflow-hidden border border-zinc-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">
            {/* Iframe Header/Status Bar */}
            <div className="h-14 bg-zinc-50 border-b border-zinc-100 px-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                </div>
                <div className="h-4 w-px bg-zinc-200 mx-2" />
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  <MapPin size={12} className="text-brand" />
                  <span>{activeTab === 'rent' ? 'Emerald Coast Rentals' : selectedCity}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand animate-pulse">
                <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                Live MLS Data
              </div>
            </div>

            {/* Loading Overlay */}
            <AnimatePresence mode="wait">
              {isLoading && (
                <motion.div
                  key="loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md"
                >
                  <div className="relative">
                    <Loader2 className="w-20 h-20 text-brand animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-brand rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <h3 className="text-2xl font-serif text-zinc-900 mb-2">Synchronizing Database</h3>
                    <p className="text-zinc-400 text-xs uppercase tracking-[0.2em] font-bold">Accessing Secure IDX Gateway</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* The Iframe */}
            <div className="relative w-full h-[800px] bg-white">
              <iframe 
                src={currentIframeSrc} 
                frameBorder="0" 
                width="100%" 
                height="800"
                className="w-full h-full"
                title="IDX Property Search"
              />
            </div>
          </div>
        </div>

        {/* Bottom Concierge CTA */}
        <div className="mt-32 relative overflow-hidden rounded-[3rem] bg-zinc-900 p-12 md:p-20 text-center">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
              alt="Luxury Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/80 to-zinc-900" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand uppercase tracking-[0.4em] text-[10px] font-bold mb-6 inline-block"
            >
              Private Network
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
              Looking for something <br />
              <span className="italic text-brand-light">truly exclusive?</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              Our private network includes off-market luxury estates and upcoming developments 
              not yet listed on public platforms. Let our concierge team find your perfect match.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="group px-12 py-5 bg-brand text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-light transition-all shadow-2xl shadow-brand/20 flex items-center gap-4 mx-auto"
            >
              <span>Inquire Privately</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
