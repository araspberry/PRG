import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Linkedin } from 'lucide-react';
import { AGENTS } from '../constants';

export function Agents() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand uppercase tracking-[0.3em] text-xs font-bold mb-4 inline-block">The Team</span>
          <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-6">Meet Our Specialists</h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            A collective of elite real estate professionals dedicated to delivering 
            unparalleled service across the Emerald Coast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {AGENTS.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-xl">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${agent.name === 'Ashley Brown' ? 'object-[center_20%]' : ''}`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Social Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-center space-x-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-brand transition-all flex items-center justify-center">
                    <Instagram size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-brand transition-all flex items-center justify-center">
                    <Linkedin size={18} />
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-serif text-zinc-900 mb-1">{agent.name}</h3>
                <p className="text-xs uppercase tracking-widest text-brand font-bold mb-4">{agent.title}</p>
                <div className="flex items-center justify-center space-x-6">
                  <a href={`tel:${agent.phone || '8509392363'}`} className="text-zinc-400 hover:text-brand transition-colors">
                    <Phone size={18} />
                  </a>
                  <a href={`mailto:${agent.email || 'info@pullum.com'}`} className="text-zinc-400 hover:text-brand transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
