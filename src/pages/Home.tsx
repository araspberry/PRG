import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Award, Users, Home as HomeIcon } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "easeOut" }}
            className="w-full h-full"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover"
            >
              <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27dbed30f21175665133604f3319f07f43376e1&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            </video>
          </motion.div>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-white/80 uppercase tracking-[0.4em] text-xs font-bold mb-6">
              Florida's Emerald Coast Luxury
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white leading-tight mb-8">
              Elevated Living, <br />
              <span className="italic">Exclusively Yours.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
              Discover the pinnacle of coastal luxury with Pullum Real Estate Group. 
              Our concierge-level service redefines the real estate experience.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white/40 uppercase tracking-widest text-[10px] mb-2">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Properties Sold', value: '2,500+', icon: HomeIcon },
              { label: 'Years Experience', value: '25+', icon: Award },
              { label: 'Happy Clients', value: '1,800+', icon: Users },
              { label: 'Market Share', value: '#1', icon: MapPin },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-brand mx-auto mb-4" />
                <div className="text-4xl font-serif text-zinc-900 mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="cinematic-spacing bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="editorial-grid items-center">
            <div className="md:col-span-6 space-y-8">
              <span className="text-brand uppercase tracking-[0.3em] text-xs font-bold">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-serif text-zinc-900 leading-tight">
                More Than Real Estate. <br />
                <span className="italic">A Legacy of Trust.</span>
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                At Pullum Real Estate Group, we don't just sell houses; we curate lifestyles. 
                Serving the Emerald Coast for over two decades, our family-owned brokerage 
                combines deep local market authority with a premium concierge-level service 
                that treats every client like our only client.
              </p>
              <div className="pt-4">
                <button className="group flex items-center space-x-4 text-brand font-bold uppercase tracking-widest text-sm">
                  <span>Learn Our Story</span>
                  <div className="w-12 h-px bg-brand group-hover:w-20 transition-all duration-300" />
                </button>
              </div>
            </div>
            <div className="md:col-span-6 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                  alt="Luxury Home"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand rounded-3xl -z-10 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="cinematic-spacing bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-brand uppercase tracking-[0.3em] text-xs font-bold mb-6 inline-block">Destinations</span>
            <h2 className="text-4xl md:text-6xl font-serif text-zinc-900">Where We Serve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { area: 'Navarre & Gulf Breeze', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800&h=500' },
              { area: 'Destin', img: 'https://images.unsplash.com/photo-1581727299609-a74c5ab8352d?auto=format&fit=crop&q=80&w=800&h=500' },
              { area: 'Fort Walton Beach', img: 'https://picsum.photos/seed/Fort Walton Beach/800/500' },
              { area: 'Niceville', img: 'https://images.unsplash.com/photo-1638660173594-a4e095833d49?auto=format&fit=crop&q=80&w=800&h=500' },
              { area: 'N. Santa Rosa County', img: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=800&h=500' },
              { area: 'N. Santa Rosa Beach', img: 'https://picsum.photos/seed/N. Santa Rosa Beach/800/500' },
            ].map(({ area, img }, i) => (
              <motion.div
                key={area}
                whileHover={{ y: -10 }}
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => window.location.href = '/properties'}
              >
                <img
                  src={img}
                  alt={area}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-serif text-white mb-2">{area}</h3>
                  <div className="flex items-center space-x-2 text-white/70 text-xs uppercase tracking-widest font-bold">
                    <span>View Listings</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-brand overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
            Ready to find your <span className="italic">dream home</span>?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Our expert agents are ready to guide you through every step of your real estate journey 
            with the professionalism and care you deserve.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="w-full sm:w-auto px-10 py-5 bg-white text-brand rounded-full font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors"
            >
              Contact Us
            </button>
            <button 
              onClick={() => window.location.href = '/properties'}
              className="w-full sm:w-auto px-10 py-5 border border-white text-white rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-brand transition-all"
            >
              View Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
