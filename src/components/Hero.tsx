
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Apply animations immediately without relying on intersection observer
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-item');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in');
        }, 200 * index);
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden" ref={heroRef}>
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-charcoal-dark opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/90 via-background to-background" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <div className="w-full md:w-1/2 space-y-4">
            <div>
              <span className="text-gold uppercase tracking-widest text-sm font-medium px-3 py-1 border border-gold/30 rounded-sm animate-item">
                Keeping Healthy
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-medium tracking-tight text-white animate-item">
              Crafted for Excellence, <br className="hidden md:block" />
              <span className="gold-text">Designed for Luxury</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-lg animate-item">
              Elevate your dining experience with our exquisite brass and bronze tableware, handcrafted for those who appreciate the finer details in life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-3 animate-item">
              <Link to="/products" className="btn-primary flex items-center justify-center gap-2">
                Explore Collection
                <ArrowRight size={18} />
              </Link>
              <Link to="/business" className="btn-secondary flex items-center justify-center gap-2">
                Discover Luxury Line
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative h-[350px] md:h-[450px] lg:h-[500px] animate-item">
            <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-sm overflow-hidden shadow-2xl animate-float border border-gold/20">
              <img 
                src="images\image1 - Copy.jpg" 
                alt="Luxury brass tableware" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-sm overflow-hidden shadow-2xl border border-gold/20">
              <img 
                src="images\image2 - Copy.jpg" 
                alt="Elegant bronze cutlery" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-sm overflow-hidden shadow-2xl border border-gold/20">
              <img 
                src="images\image4 - Copy.jpg" 
                alt="Premium bronze bowl" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="h-12 w-px bg-gradient-to-b from-transparent to-gold/50" />
        <div className="text-xs text-gold font-medium mt-2">Scroll</div>
      </div>
    </div>
  );
};

export default Hero;
