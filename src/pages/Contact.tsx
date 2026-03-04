import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="editorial-grid mb-20">
          <div className="md:col-span-5">
            <span className="text-brand uppercase tracking-[0.3em] text-xs font-bold mb-4 inline-block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-8">Let's Connect</h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-12">
              Whether you're looking to buy, sell, or simply have questions about the 
              Emerald Coast market, we're here to help.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center flex-shrink-0 text-brand">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">Call Us</h3>
                  <p className="text-xl font-serif text-zinc-900">(850) 939-2363</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center flex-shrink-0 text-brand">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">Email Us</h3>
                  <p className="text-xl font-serif text-zinc-900">info@pullumrealestate.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center flex-shrink-0 text-brand">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">Visit Us</h3>
                  <p className="text-xl font-serif text-zinc-900 leading-relaxed">
                    8052 Navarre Pkwy <br />
                    Navarre, FL 32566
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-zinc-50 p-8 md:p-12 rounded-3xl border border-zinc-100"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-zinc-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-zinc-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Subject</label>
                  <select className="w-full bg-white border border-zinc-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Buying a Home</option>
                    <option>Selling a Home</option>
                    <option>Property Management</option>
                    <option>Rental Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Message</label>
                  <textarea
                    rows={6}
                    className="w-full bg-white border border-zinc-200 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all resize-none"
                  />
                </div>

                <button className="w-full bg-brand hover:bg-brand-light text-white py-5 rounded-xl font-bold uppercase tracking-widest transition-all">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
