import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ChatBot } from './components/ChatBot';
import { Home } from './pages/Home';
import { Properties } from './pages/Properties';
import { Sell } from './pages/Sell';
import { Agents } from './pages/Agents';
import { Contact } from './pages/Contact';
import { Owners } from './pages/Owners';
import { Tenants } from './pages/Tenants';
import { AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif tracking-tighter">PULLUM</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans -mt-1 text-white/60">
                Real Estate Group
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Serving Florida's Emerald Coast with a legacy of trust and a commitment to luxury excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-white/40">Quick Links</h3>
            <ul className="space-y-4">
              {['Properties', 'Sell', 'Agents', 'Owners', 'Tenants', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`} className="text-zinc-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-white/40">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-zinc-400 text-sm">
                <Phone size={16} className="text-brand" />
                <span>(850) 939-2363</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-400 text-sm">
                <Mail size={16} className="text-brand" />
                <span>info@pullum.com</span>
              </li>
              <li className="flex items-start space-x-3 text-zinc-400 text-sm">
                <MapPin size={16} className="text-brand mt-1" />
                <span>8052 Navarre Pkwy<br />Navarre, FL 32566</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-8 text-white/40">Newsletter</h3>
            <p className="text-zinc-400 text-sm mb-6">Subscribe to receive exclusive off-market listings.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-brand transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-brand hover:text-brand-light transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Pullum Real Estate Group. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-zinc-500 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/owners" element={<Owners />} />
              <Route path="/tenants" element={<Tenants />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}
