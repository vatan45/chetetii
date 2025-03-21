import React, { useEffect, useRef } from 'react';
import { ShoppingBag, Heart, ArrowRight } from 'lucide-react'; // Ensure ShoppingBag is imported

// Product data with your uploaded images
const designedProducts = [
  {
    id: 1,
    name: 'Bronze Bowl Collection',
    image: '/lovable-uploads/4dd8c101-116e-4b08-824b-98c9919d8855.png',
    description: 'Bronze nurtures cardiovascular health with our premium serving bowl.',
    category: 'Designed',
  },
  {
    id: 2,
    name: 'Fruit Serving Plate',
    image: 'images/image5 - Copy.jpg',
    description: 'Eat on bronze and purify your inner self with our elegant serving plates.',
    category: 'Designed',
  },
  {
    id: 3,
    name: 'Polished Brass',
    image: 'images/Screenshot 2025-03-20 194816.png',
    description: 'Our signature polished bronze bowl for elegant dining experiences.',
    category: 'Designed',
  },
];

const luxuryProducts = [
  {
    id: 4,
    name: 'Premium Bronze Bowl Set',
    image: '/lovable-uploads/c696bc44-21e4-4e49-9ad8-f9d0beeee5bc.png',
    description: 'Helps in reducing fat and functions as an anticoagulant with our distinctive bowl design.',
    category: 'Luxury'
  },
  {
    id: 5,
    name: 'Hammered Bronze Serveware',
    image: 'images/Screenshot 2025-03-20 192713.png',
    description: 'Hand-hammered bronze serving dish with a unique, antique finish.',
    category: 'Luxury'
  },
  {
    id: 6,
    name: 'Artisan Bronze Bowl',
    image: '/lovable-uploads/4dd8c101-116e-4b08-824b-98c9919d8855.png',
    description: 'Artisan crafted bronze bowl with health benefits and timeless design.',
    category: 'Luxury'
  },

];

// Product Card Component
const ProductCard = ({ product }: { product: typeof designedProducts[0] }) => {
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        <div className="h-80 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-cormorant text-xl font-medium mb-2 text-cream">{product.name}</h3>
        <p className="text-cream/60 text-sm mb-3 h-12 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">

        </div>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const staggerItems = entry.target.querySelectorAll('.stagger-item');
            staggerItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-charcoal to-charcoal-dark" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Designed Collection */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <div className="max-w-lg">
              <span className="text-gold uppercase tracking-widest text-sm font-medium stagger-item">Our Collection</span>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium mt-2 mb-4 text-cream stagger-item">Designed Line</h2>
              <p className="text-cream/70 stagger-item">Modern, stylish, and accessible luxury for everyday elegance. Crafted with the same attention to detail but designed for more frequent use.</p>
            </div>

          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designedProducts.map((product, index) => (
              <div key={product.id} className="stagger-item">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Luxury Collection */}
        <div id="luxury">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <div className="max-w-lg">
              <span className="text-gold uppercase tracking-widest text-sm font-medium stagger-item">Exquisite Selection</span>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium mt-2 mb-4 text-cream stagger-item">Luxury Line</h2>
              <p className="text-cream/70 stagger-item">Exclusive, bespoke pieces for those special moments. Each item is meticulously handcrafted by our master artisans for unparalleled beauty and distinction.</p>
            </div>

          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryProducts.map((product, index) => (
              <div key={product.id} className="stagger-item">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
