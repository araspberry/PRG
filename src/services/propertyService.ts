import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface PropertyListing {
  id: string;
  address: string;
  city: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  imageUrl: string;
  tag?: string;
  sources?: { uri: string; title: string }[];
  mlsNumber?: string;
  status?: string;
  yearBuilt?: string;
  lotSize?: string;
  propertyType?: string;
}

const FEATURED_CACHE: PropertyListing[] = [
  {
    id: 'destin-1',
    address: '4672 Destiny Way',
    city: 'Destin',
    price: '$4,850,000',
    beds: 6,
    baths: 7,
    sqft: '5,400',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000&sig=luxury-1',
    tag: 'Beachfront',
    mlsNumber: '912345',
    status: 'Active',
    yearBuilt: '2021',
    propertyType: 'Single Family'
  },
  {
    id: 'destin-2',
    address: '114 Snapper Ct',
    city: 'Destin',
    price: '$3,200,000',
    beds: 5,
    baths: 5,
    sqft: '4,100',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000&sig=luxury-2',
    tag: 'Luxury Estate',
    mlsNumber: '912346',
    status: 'Active',
    yearBuilt: '2019',
    propertyType: 'Single Family'
  },
  {
    id: 'navarre-1',
    address: '8456 Gulf Blvd',
    city: 'Navarre',
    price: '$2,950,000',
    beds: 4,
    baths: 4,
    sqft: '3,800',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000&sig=luxury-3',
    tag: 'Gulf Front',
    mlsNumber: '812345',
    status: 'New Construction',
    yearBuilt: '2023',
    propertyType: 'Single Family'
  },
  {
    id: 'navarre-2',
    address: '7412 Gulf Blvd',
    city: 'Navarre',
    price: '$1,750,000',
    beds: 4,
    baths: 3,
    sqft: '3,100',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000&sig=luxury-4',
    tag: 'Beach Access',
    mlsNumber: '812346',
    status: 'Active',
    yearBuilt: '2015',
    propertyType: 'Single Family'
  },
  {
    id: 'gb-1',
    address: '77 Bluewater Ln',
    city: 'Gulf Breeze',
    price: '$1,850,000',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1000&sig=luxury-5',
    tag: 'Soundfront',
    mlsNumber: '712345',
    status: 'Active',
    yearBuilt: '2018',
    propertyType: 'Single Family'
  },
  {
    id: 'srb-1',
    address: '123 Blue Mountain Rd',
    city: 'Santa Rosa Beach',
    price: '$5,400,000',
    beds: 5,
    baths: 6,
    sqft: '4,800',
    imageUrl: 'https://images.unsplash.com/photo-1600607687940-47a0f9259d47?auto=format&fit=crop&q=80&w=1000&sig=luxury-6',
    tag: '30A Luxury',
    mlsNumber: '612345',
    status: 'Active',
    yearBuilt: '2022',
    propertyType: 'Single Family'
  }
];

const RENTAL_CACHE: PropertyListing[] = [
  {
    id: 'rent-1',
    address: '220 Soundfront Dr',
    city: 'Gulf Breeze',
    price: '$4,500/mo',
    beds: 3,
    baths: 2,
    sqft: '2,100',
    imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000&sig=luxury-7',
    tag: 'Long Term',
    mlsNumber: 'R712345',
    status: 'Active',
    yearBuilt: '2010',
    propertyType: 'Condo'
  },
  {
    id: 'rent-2',
    address: '55 Ocean Ave',
    city: 'Destin',
    price: '$6,200/mo',
    beds: 4,
    baths: 3,
    sqft: '2,800',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dcea464dd?auto=format&fit=crop&q=80&w=1000&sig=luxury-8',
    tag: 'Luxury Rental',
    mlsNumber: 'R912345',
    status: 'Active',
    yearBuilt: '2015',
    propertyType: 'Single Family'
  }
];

export async function fetchFeaturedListings(cities: string[], type: 'sale' | 'rent' = 'sale'): Promise<PropertyListing[]> {
  const cache = type === 'sale' ? FEATURED_CACHE : RENTAL_CACHE;
  
  // If we are looking for specific cities, filter the cache
  const filteredCache = cache.filter(p => cities.some(c => p.city.toLowerCase().includes(c.toLowerCase())));

  // If we have enough cached items for these cities (15+), return them immediately
  if (filteredCache.length >= 15) {
    return filteredCache;
  }

  try {
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Fetch timeout')), 15000) // Increased timeout for parallel 15-listing fetches
    );

    const fetchPromise = (async () => {
      const prompt = `Search official Florida MLS (Emerald Coast Association of Realtors) and IDX databases for the top 15 REAL active luxury real estate ${type === 'sale' ? 'listings for sale' : 'rentals'} for EACH of these cities: ${cities.join(', ')}, Florida. 
      
      CRITICAL: Only return properties that actually exist and are currently active on the market (IDX data). I need exactly 15 listings per city if available.
      
      For each listing, I need:
      - address: Full street address
      - city: The city name
      - price: Current price or monthly rent
      - beds: Number of bedrooms
      - baths: Number of bathrooms
      - sqft: Square footage
      - imageUrl: The ACTUAL direct image URL from the official MLS/IDX listing. This MUST be a direct link to the property's primary photo from a real estate source (e.g., realtor.com, homes.com, or brokerage sites). DO NOT use Zillow URLs as they are often blocked. DO NOT use Unsplash or stock photo placeholders.
      - mlsNumber: The actual MLS listing number.
      - status: Current market status (e.g., Active, New Construction).
      - yearBuilt: Year the property was built.
      - lotSize: Size of the lot.
      - propertyType: Type of property (e.g., Single Family, Condo).
      
      Return ONLY a JSON array of objects. Do NOT include any third-party marketplace links like Zillow or Redfin.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          tools: [{ googleSearch: {} }],
        },
      });

      let text = response.text || '[]';
      // Remove markdown code blocks if present
      if (text.includes('```json')) {
        text = text.split('```json')[1].split('```')[0];
      } else if (text.includes('```')) {
        text = text.split('```')[1].split('```')[0];
      }
      
      const listings = JSON.parse(text.trim());
      
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const sources = groundingChunks
        .filter((chunk: any) => chunk.web && !chunk.web.uri.toLowerCase().includes('zillow') && !chunk.web.uri.toLowerCase().includes('redfin'))
        .map((chunk: any) => ({
          uri: chunk.web.uri,
          title: chunk.web.title
        }));
      
      const freshListings = listings.map((l: any, i: number) => ({
        ...l,
        id: `prop-${i}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        // Use the provided image or a branded placeholder if missing
        imageUrl: (l.imageUrl && l.imageUrl.includes('http') && !l.imageUrl.includes('unsplash.com')) 
          ? l.imageUrl 
          : `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000&sig=pullum-${i}`, // Branded placeholder for demo if real fails
        sources: sources.length > 0 ? sources.slice(0, 3) : undefined // Limit to 3 sources
      }));

      // Combine with cache but prioritize fresh listings
      const combined = [...freshListings, ...filteredCache];
      // Deduplicate by address
      const unique = combined.filter((v, i, a) => a.findIndex(t => t.address === v.address) === i);
      
      return unique;
    })();

    return await Promise.race([fetchPromise, timeoutPromise]) as PropertyListing[];
  } catch (error) {
    console.error("Error fetching listings:", error);
    return filteredCache.length > 0 ? filteredCache : cache;
  }
}
