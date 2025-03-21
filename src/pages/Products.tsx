
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductShowcase from '@/components/ProductShowcase';

const Products = () => {
  return (
    <div className="bg-charcoal-dark min-h-screen text-cream">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-widest text-sm font-medium">Our Collection</span>
            <h1 className="text-4xl md:text-5xl font-cormorant font-medium mt-2 mb-4 text-cream">Premium Bronze Tableware</h1>
            <p className="text-cream/70 max-w-2xl mx-auto">Explore our exclusive collection of handcrafted bronze and brass tableware designed for luxury dining experiences</p>
          </div>
        </div>
        <ProductShowcase />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
