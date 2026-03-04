import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Bed, Bath, ArrowUpRight, Calendar, MapPin, Hash, Tag, Loader2 } from 'lucide-react';
import { PropertyListing } from '../services/propertyService';
import { cn } from '../utils/cn';

interface PropertyCardProps {
  property: PropertyListing;
  index: number;
  onInquiry: (property: PropertyListing) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, index, onInquiry }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="group relative bg-white rounded-[2rem] overflow-hidden border border-zinc-100 hover:border-brand/20 transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]"
      onClick={() => onInquiry(property)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-zinc-300 animate-spin" />
          </div>
        )}
        <img
          src={property.imageUrl}
          alt={property.address}
          onLoad={() => setImageLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-1000 group-hover:scale-110",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          referrerPolicy="no-referrer"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          {property.status && (
            <span className="px-4 py-2 bg-brand text-white rounded-full text-[10px] uppercase tracking-widest font-bold shadow-xl">
              {property.status}
            </span>
          )}
          {property.tag && (
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] uppercase tracking-widest font-bold text-white">
              {property.tag}
            </span>
          )}
        </div>

        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand shadow-2xl">
            <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Bottom Info Overlay */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex items-center space-x-2 text-white/70 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
            <MapPin size={10} className="text-brand" />
            <span>{property.city}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 leading-tight group-hover:text-brand-light transition-colors">
            {property.address}
          </h3>
          <div className="text-3xl font-serif text-white flex items-baseline gap-2">
            {property.price}
            {property.price.toLowerCase().includes('mo') && <span className="text-sm font-sans opacity-60 font-normal">/ month</span>}
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-8">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-zinc-50 border border-zinc-100 group-hover:bg-brand/5 group-hover:border-brand/10 transition-colors">
            <Bed size={16} className="text-brand mb-2" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Beds</span>
            <span className="text-sm font-serif text-zinc-900">{property.beds}</span>
          </div>
          <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-zinc-50 border border-zinc-100 group-hover:bg-brand/5 group-hover:border-brand/10 transition-colors">
            <Bath size={16} className="text-brand mb-2" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Baths</span>
            <span className="text-sm font-serif text-zinc-900">{property.baths}</span>
          </div>
          <div className="flex flex-col items-center text-center p-3 rounded-2xl bg-zinc-50 border border-zinc-100 group-hover:bg-brand/5 group-hover:border-brand/10 transition-colors">
            <Maximize2 size={16} className="text-brand mb-2" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">SqFt</span>
            <span className="text-sm font-serif text-zinc-900">{property.sqft}</span>
          </div>
        </div>

        {/* IDX Metadata */}
        <div className="space-y-3 border-t border-zinc-100 pt-6">
          <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
            <div className="flex items-center gap-2 text-zinc-400 font-bold">
              <Hash size={12} className="text-brand/40" />
              <span>MLS Number</span>
            </div>
            <span className="text-zinc-900 font-bold">{property.mlsNumber || 'N/A'}</span>
          </div>
          
          <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
            <div className="flex items-center gap-2 text-zinc-400 font-bold">
              <Calendar size={12} className="text-brand/40" />
              <span>Year Built</span>
            </div>
            <span className="text-zinc-900 font-bold">{property.yearBuilt || 'N/A'}</span>
          </div>

          <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
            <div className="flex items-center gap-2 text-zinc-400 font-bold">
              <Tag size={12} className="text-brand/40" />
              <span>Type</span>
            </div>
            <span className="text-zinc-900 font-bold">{property.propertyType || 'Residential'}</span>
          </div>
        </div>

        {/* Data Sources */}
        {property.sources && property.sources.length > 0 && (
          <div className="mt-8 pt-6 border-t border-zinc-100">
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-300 block mb-3">Verified IDX Sources</span>
            <div className="flex flex-wrap gap-3">
              {property.sources.map((source, i) => (
                <a
                  key={i}
                  href={source.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-zinc-400 hover:text-brand transition-colors flex items-center gap-1 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="w-1 h-1 rounded-full bg-zinc-200 group-hover/link:bg-brand transition-colors" />
                  {source.title || 'Source'}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
