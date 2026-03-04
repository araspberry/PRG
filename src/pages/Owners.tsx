import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Users, Key } from 'lucide-react';

export function Owners() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand uppercase tracking-[0.3em] text-xs font-bold mb-4 inline-block">Management</span>
          <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-6">Owner Services</h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Professional property management designed to protect your investment 
            and maximize your returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {[
            {
              title: 'Comprehensive Marketing',
              icon: BarChart3,
              desc: 'We use advanced marketing strategies to ensure your property is seen by high-quality tenants quickly.'
            },
            {
              title: 'Rigorous Screening',
              icon: Shield,
              desc: 'Our multi-point screening process ensures we find reliable tenants who will care for your property.'
            },
            {
              title: 'Maintenance & Repairs',
              icon: Key,
              desc: '24/7 maintenance support with a network of trusted local contractors to keep your property in top shape.'
            },
            {
              title: 'Financial Reporting',
              icon: Users,
              desc: 'Detailed monthly statements and year-end reporting accessible anytime through our owner portal.'
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-zinc-50 rounded-3xl border border-zinc-100 hover:bg-zinc-100 transition-colors"
            >
              <service.icon className="w-10 h-10 text-brand mb-6" />
              <h3 className="text-2xl font-serif text-zinc-900 mb-4">{service.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand rounded-[3rem] p-12 md:p-20 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Access Your Portal</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Log in to view your property performance, financial statements, and management documents.
          </p>
          <a 
            href="https://pullum.owa.rentmanager.com/#/login?returnUrl=%2Fdashboard" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-white text-brand rounded-full font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors"
          >
            Owner Login
          </a>
        </div>
      </div>
    </div>
  );
}
