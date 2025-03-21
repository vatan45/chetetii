
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import B2BSection from '@/components/B2BSection';

const Business = () => {
  return (
    <div className="bg-charcoal-dark min-h-screen text-cream">
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-4 pb-12">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-widest text-sm font-medium">Business Solutions</span>
            <h1 className="text-4xl md:text-5xl font-cormorant font-medium mt-2 mb-4 text-cream">Partner With Chetati</h1>
            <p className="text-cream/70 max-w-2xl mx-auto">Elevate your hospitality experience with our premium bronze tableware solutions for businesses</p>
          </div>
        </div>
        <B2BSection />
      </div>
      <Footer />
    </div>
  );
};

export default Business;
