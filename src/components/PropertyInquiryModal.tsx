import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, User, Hash, CheckCircle2 } from 'lucide-react';
import { PropertyListing } from '../services/propertyService';

interface PropertyInquiryModalProps {
  property: PropertyListing | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PropertyInquiryModal({ property, isOpen, onClose }: PropertyInquiryModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mlsNumber: property?.mlsNumber || '',
  });

  // Update MLS number when property changes
  React.useEffect(() => {
    if (property) {
      setFormData(prev => ({ ...prev, mlsNumber: property.mlsNumber || '' }));
    }
  }, [property]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', mlsNumber: '' });
      }, 3000);
    }, 1000);
  };

  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-zinc-900 transition-all"
            >
              <X size={20} />
            </button>

            {/* Left Side: Property Image */}
            <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto">
              <img
                src={property.imageUrl}
                alt={property.address}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-brand uppercase tracking-[0.3em] text-[10px] font-bold mb-2 block">Inquiry For</span>
                <h3 className="text-3xl font-serif text-white mb-2">{property.address}</h3>
                <div className="flex items-center gap-4 text-white/70 text-xs uppercase tracking-widest font-bold">
                  <span>{property.city}</span>
                  <span className="w-1 h-1 rounded-full bg-brand" />
                  <span>MLS: {property.mlsNumber}</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[80vh] md:max-h-none">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                      <CheckCircle2 size={40} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-zinc-900 mb-2">Request Received</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        One of our luxury specialists will contact you shortly regarding MLS #{property.mlsNumber}.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-3xl font-serif text-zinc-900 mb-2">Private Inquiry</h2>
                      <p className="text-zinc-500 text-sm">Please provide your details to receive full property information.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-2">
                          <User size={12} className="text-brand" />
                          Full Name
                        </label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-2">
                            <Mail size={12} className="text-brand" />
                            Email Address
                          </label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-2">
                            <Phone size={12} className="text-brand" />
                            Phone Number
                          </label>
                          <input
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(850) 000-0000"
                            className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 flex items-center gap-2">
                          <Hash size={12} className="text-brand" />
                          MLS Number
                        </label>
                        <input
                          readOnly
                          type="text"
                          value={formData.mlsNumber}
                          className="w-full bg-zinc-100 border border-zinc-200 rounded-2xl py-4 px-6 text-zinc-500 cursor-not-allowed text-sm font-bold"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-brand hover:bg-brand-light text-white py-5 rounded-2xl font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-3 shadow-xl shadow-brand/20"
                      >
                        <Send size={18} />
                        <span>Send Inquiry</span>
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
