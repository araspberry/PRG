import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { cn } from '../utils/cn';

export function Sell() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="editorial-grid mb-20">
          <div className="md:col-span-5">
            <span className="text-brand uppercase tracking-[0.3em] text-xs font-bold mb-4 inline-block">List With Us</span>
            <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-8">Sell Your Property</h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-12">
              Experience a sophisticated approach to selling your home. 
              Our data-driven marketing and concierge service ensure your property 
              receives the attention it deserves.
            </p>
            
            <div className="space-y-8">
              {[
                { title: 'Global Exposure', desc: 'Your home featured on top-tier luxury networks.' },
                { title: 'Cinematic Media', desc: 'Professional videography and high-end photography.' },
                { title: 'Strategic Pricing', desc: 'Deep market analysis for maximum return.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand font-serif">0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-zinc-900 mb-1">{item.title}</h3>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-zinc-50 p-8 md:p-12 rounded-3xl border border-zinc-100"
            >
              <h2 className="text-3xl font-serif text-zinc-900 mb-8">Property Evaluation</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white border border-zinc-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white border border-zinc-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Property Address</label>
                  <input
                    type="text"
                    placeholder="123 Coastal Way, Navarre, FL"
                    className="w-full bg-white border border-zinc-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Property Type</label>
                    <select className="w-full bg-white border border-zinc-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all appearance-none">
                      <option>Single Family Home</option>
                      <option>Condo / Townhouse</option>
                      <option>Luxury Estate</option>
                      <option>Land / Lot</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Move Timeframe</label>
                    <select className="w-full bg-white border border-zinc-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all appearance-none">
                      <option>Immediately</option>
                      <option>1-3 Months</option>
                      <option>3-6 Months</option>
                      <option>6+ Months</option>
                      <option>Just curious</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Message / Additional Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your home's unique features..."
                    className="w-full bg-white border border-zinc-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all resize-none"
                  />
                </div>

                <button className="w-full bg-brand hover:bg-brand-light text-white py-5 rounded-xl font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-3">
                  <Send size={18} />
                  <span>Request Valuation</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
