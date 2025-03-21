
import React, { useEffect, useRef } from 'react';
import { Award, Heart, Leaf } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Apply animations immediately rather than using intersection observer
    const staggerItems = sectionRef.current?.querySelectorAll('.stagger-item');
    staggerItems?.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate');
      }, 150 * index);
    });
  }, []);

  return (
    <section id="about" className="section-padding bg-charcoal" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <span className="text-gold uppercase tracking-widest text-sm font-medium stagger-item">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-cream stagger-item">
            Breaking the monotonicity for a better tomorrow.

            </h2>
            <p className="text-cream/80 stagger-item">
            Made by Indians , for Indians.
We are a group of creative technologists , designers and engineers from IISc - Bangalore . We aim to bring about noticeable changes in the current technologies and processes involved in hand made metal works industries in India. 

In Chetati we study and  research about the handmade metal works on the verge of extension .

We induce utility through ergonomics ,material science and engineering to the products by improvising the current manufacturing processes which have been existing since decades , untapped and unaltered . We train the artisans to move out of their comfort zone to create something new for the new Indians crowd with a unique taste for quality and style.
            </p>
            <p className="text-cream/80 stagger-item">
              We believe that tableware is more than just functional—it's an expression of style, culture, and appreciation for the finer things in life. Every Chetati piece tells a story of tradition, innovation, and the pursuit of perfection.
            </p>
            
            <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-5 transition-all duration-300 hover:border-gold/40 stagger-item">
                <Award className="text-gold mb-3" size={28} />
                <h3 className="font-cormorant text-xl font-medium mb-2 text-cream">Premium Quality</h3>
                <p className="text-sm text-cream/70">Only the finest materials and craftsmanship go into our products.</p>
              </div>
              
              <div className="glass-card p-5 transition-all duration-300 hover:border-gold/40 stagger-item">
                <Heart className="text-gold mb-3" size={28} />
                <h3 className="font-cormorant text-xl font-medium mb-2 text-cream">Handcrafted</h3>
                <p className="text-sm text-cream/70">Each piece is lovingly made by our skilled artisans.</p>
              </div>
              
              <div className="glass-card p-5 transition-all duration-300 hover:border-gold/40 stagger-item">
                <Leaf className="text-gold mb-3" size={28} />
                <h3 className="font-cormorant text-xl font-medium mb-2 text-cream">Sustainable</h3>
                <p className="text-sm text-cream/70">Committed to ethical practices and environmental responsibility.</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[600px] order-1 lg:order-2">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-sm overflow-hidden shadow-xl border border-gold/20 stagger-item">
              <img 
                src="images/Screenshot 2025-03-20 193002.png" 
                alt="Craftsman working on brass" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-sm overflow-hidden border border-gold/20 shadow-xl stagger-item">
              <img 
                src="images/IMG20201212123110.jpg" 
                alt="Fine craftsmanship detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Why Brass & Bronze Section */}
        <div className="mt-24 py-16 border-t border-b border-gold/20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold uppercase tracking-widest text-sm font-medium stagger-item">Materials</span>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mt-2 mb-6 text-cream stagger-item">
            Brass products, How are they made ?

            </h2>
            <p className="text-cream/80 stagger-item">
            Brass is heated to liquid state and poured into required molds made of fine sand . The products are then left to rest before analyzing for airholes and imperfections .They are then trimmed to suitable shape & size and machine polished to required finish .
            </p>
            <p className="text-cream/80 mt-4 stagger-item">
              Antimicrobial by nature, they're an excellent choice for tableware. Their significant weight provides a satisfying feel in the hand, elevating every dining experience with a sense of luxury and permanence.
            </p>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mt-2 mb-6 text-cream stagger-item2">


            </h2>
            <p className="text-cream/80 stagger-item2\n\n">
            Bronze is melted and casted into small semi spherical blobs and cooled to room temperature . As bronze is malleable, this small blob of bronze is now heated and hammered by hand. The heating and hammering is repeated till a desirable shape and size is achieved. Bigger the blob , bigger and heavier is the utensil.The formed product is then analyzed for cuts and fractures, quenched in water and left to rest. It's hammered again without heating to gain surface finish. It's this cold hammering that leaves the iconic hammer marks on the utensils. The products are then polished by hand to reveal the shine.

            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default About;
