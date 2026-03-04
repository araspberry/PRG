import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CreditCard, Wrench, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Tenants() {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand uppercase tracking-[0.3em] text-xs font-bold mb-4 inline-block">Resident Life</span>
          <h1 className="text-5xl md:text-7xl font-serif text-zinc-900 mb-6">Tenant Services</h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            We strive to provide a seamless and high-quality living experience 
            for all our residents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { title: 'Pay Rent Online', icon: CreditCard, desc: 'Secure and easy online payments.' },
            { title: 'Maintenance', icon: Wrench, desc: 'Submit and track repair requests.' },
            { title: 'Lease Documents', icon: FileText, desc: 'Access your digital lease anytime.' },
            { title: 'Support', icon: HelpCircle, desc: 'Dedicated resident support team.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 text-center"
            >
              <item.icon className="w-8 h-8 text-brand mx-auto mb-6" />
              <h3 className="text-xl font-serif text-zinc-900 mb-3">{item.title}</h3>
              <p className="text-zinc-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="editorial-grid items-center">
          <div className="md:col-span-6">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                alt="Modern Apartment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="md:col-span-6 space-y-8">
            <h2 className="text-4xl font-serif text-zinc-900">Ready to move in?</h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Explore our available rental properties and start your application today. 
              Our team is here to help you find the perfect home on the Emerald Coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/properties?tab=rent')}
                className="px-8 py-4 bg-brand text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-light transition-colors"
              >
                View Available Rentals
              </button>
              <a 
                href="https://pullum.twa.rentmanager.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-zinc-200 text-zinc-800 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-zinc-50 transition-colors text-center"
              >
                Resident Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
