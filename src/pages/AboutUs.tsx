
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';

const AboutUs = () => {
  return (
    <div className="bg-charcoal-dark min-h-screen text-cream">
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-4 pb-12">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-widest text-sm font-medium">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-cormorant font-medium mt-2 mb-4 text-cream">About Chetati</h1>
            <p className="text-cream/70 max-w-2xl mx-auto">Discover the passion, craftsmanship and dedication behind our luxury bronze tableware</p>
          </div>
        </div>
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
