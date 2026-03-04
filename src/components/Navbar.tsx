import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

const NAV_LINKS = [
  { name: 'Properties', path: '/properties' },
  { name: 'Sell', path: '/sell' },
  { name: 'Agents', path: '/agents' },
  { name: 'Owners', path: '/owners' },
  { name: 'Tenants', path: '/tenants' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        (scrolled || !isHome) ? 'glass-nav py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className={cn(
            "text-2xl font-serif tracking-tighter transition-colors duration-500",
            (scrolled || !isHome) ? "text-brand" : "text-white"
          )}>
            PULLUM
          </span>
          <span className={cn(
            "text-[10px] uppercase tracking-[0.3em] font-sans -mt-1 transition-colors duration-500",
            (scrolled || !isHome) ? "text-zinc-500" : "text-white/80"
          )}>
            Real Estate Group
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium uppercase tracking-widest hover:text-brand transition-colors",
                (scrolled || !isHome) ? "text-zinc-600" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:8509392363"
            className={cn(
              "flex items-center space-x-2 px-5 py-2 rounded-full border transition-all duration-300",
              (scrolled || !isHome)
                ? "border-brand text-brand hover:bg-brand hover:text-white" 
                : "border-white text-white hover:bg-white hover:text-brand"
            )}
          >
            <Phone size={14} />
            <span className="text-xs font-bold tracking-widest uppercase">(850) 939-2363</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "lg:hidden p-2 rounded-full transition-colors",
            (scrolled || !isHome) ? "text-zinc-900" : "text-white"
          )}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 shadow-xl p-8 lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-serif text-zinc-800 hover:text-brand transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-zinc-100" />
              <a
                href="tel:8509392363"
                className="flex items-center justify-center space-x-2 bg-brand text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm"
              >
                <Phone size={18} />
                <span>(850) 939-2363</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
