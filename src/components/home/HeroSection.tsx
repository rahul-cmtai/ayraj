import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const unsplashImages = [
  // Modern luxury living room with gold accents
  'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
  // Minimalist luxury bedroom
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
  // High-end kitchen interior
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
  // Elegant designer workspace
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=1200&q=80',
];

const HeroSection = () => {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % unsplashImages.length), 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slider Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={unsplashImages[current]}
          alt="Hero Slide"
          className="object-cover w-full h-full transition-all duration-700"
          draggable="false"
          style={{ filter: 'brightness(0.7)' }} // subtle dark shadow effect
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div> {/* slightly lighter overlay */}
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {unsplashImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${current === idx ? 'bg-gold' : 'bg-white/50'} border border-white transition-all duration-300`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 animate-fade-in">
          Luxury Begins with <span className="text-gold">AYRAJ</span>
        </h1>
        <p className="text-xl md:text-2xl font-playfair italic text-cream/90 mb-10 animate-fade-in" style={{ animationDelay: '300ms' }}>
          Reimagine Your Space with Royal Designs
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Link to="/services" className="btn-primary">
            Explore Collection <ArrowRight size={isMobile ? 16 : 18} />
          </Link>
          {/* <a 
            href="https://wa.me/919999979079" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`btn-outline ${isMobile ? 'text-sm px-4 py-2' : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "16" : "18"} height={isMobile ? "16" : "18"} viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298.347.446.52.149.174.198.298.298.497.099.198.05.371-.025.52-.075.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Chat
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
