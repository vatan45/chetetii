
import React, { useEffect, useRef } from 'react';
import { Building2, Users, Truck, Settings, Send } from 'lucide-react';

const B2BSection = () => {
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
    <section id="b2b" className="section-padding bg-charcoal" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <span className="text-gold uppercase tracking-widest text-sm font-medium stagger-item">For Businesses</span>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-cream stagger-item">
              Elevate Your Hospitality Experience
            </h2>
            <p className="text-cream/80 stagger-item">
              Chetati offers specialized services for hotels, restaurants, and catering companies looking to enhance their dining presentation with our premium brass and bronze tableware.
            </p>
            
            <div className="space-y-5 pt-4">
              <div className="flex gap-4 items-start stagger-item">
                <div className="bg-gold/10 p-3 rounded-sm">
                  <Building2 className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl font-medium mb-1 text-cream">Hotels & Resorts</h3>
                  <p className="text-cream/70">Exclusive collections designed to complement your brand aesthetic and enhance the guest experience.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start stagger-item">
                <div className="bg-gold/10 p-3 rounded-sm">
                  <Users className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl font-medium mb-1 text-cream">Catering Companies</h3>
                  <p className="text-cream/70">Durable, elegant pieces that make every event memorable and elevate your presentation.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start stagger-item">
                <div className="bg-gold/10 p-3 rounded-sm">
                  <Truck className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl font-medium mb-1 text-cream">Bulk Orders</h3>
                  <p className="text-cream/70">Special pricing and dedicated support for large orders with consistent delivery schedules.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start stagger-item">
                <div className="bg-gold/10 p-3 rounded-sm">
                  <Settings className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl font-medium mb-1 text-cream">Customization</h3>
                  <p className="text-cream/70">Bespoke designs featuring your logo, specific finishes, or custom dimensions to match your exact requirements.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 md:p-10 rounded-sm shadow-lg">
            <h3 className="font-cormorant text-2xl font-medium mb-6 text-gold stagger-item">Request Business Information</h3>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="stagger-item">
                  <label htmlFor="name" className="block text-sm font-medium text-cream mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-black/30 border border-gold/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-cream"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="stagger-item">
                  <label htmlFor="company" className="block text-sm font-medium text-cream mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-black/30 border border-gold/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-cream"
                    placeholder="Company Name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="stagger-item">
                  <label htmlFor="email" className="block text-sm font-medium text-cream mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-black/30 border border-gold/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-cream"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="stagger-item">
                  <label htmlFor="phone" className="block text-sm font-medium text-cream mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-black/30 border border-gold/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-cream"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>
              
              <div className="stagger-item">
                <label htmlFor="interest" className="block text-sm font-medium text-cream mb-1">Primary Interest</label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 bg-black/30 border border-gold/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all appearance-none text-cream"
                >
                  <option value="">Select an option</option>
                  <option value="hotel">Hotel/Resort</option>
                  <option value="catering">Catering</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="custom">Customization</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="stagger-item">
                <label htmlFor="message" className="block text-sm font-medium text-cream mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-black/30 border border-gold/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-cream"
                  placeholder="Tell us about your specific needs or questions"
                ></textarea>
              </div>
              
              <div className="stagger-item">
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  Send Inquiry
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
