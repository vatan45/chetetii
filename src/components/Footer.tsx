
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-gold/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/">
              <h2 className="text-2xl font-cormorant font-medium mb-4 text-gold">CHETATI</h2>
            </Link>
            <p className="text-cream/70 mb-4">
              Elevating dining experiences through exquisite brass and bronze tableware, handcrafted with passion and precision.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/CHETATI.official" className="text-cream/70 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/chetati.official?igsh=MTgzanc2Nmo4aTR5MQ==" className="text-cream/70 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
            
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-cream">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream/70 hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-cream/70 hover:text-gold transition-colors">Our Collection</Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/70 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/business" className="text-cream/70 hover:text-gold transition-colors">Business Inquiries</Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/70 hover:text-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-cream">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <MapPin size={20} className="text-gold flex-shrink-0" />
                <span className="text-cream/70">
                Chandigarh University
NH-05 Chandigarh-Ludhiana Highway,
Mohali, Punjab (INDIA)
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <span className="text-cream/70">+91 96327-04477</span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <span className="text-cream/70">info@chetati.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-cream">Newsletter</h3>
            <p className="text-cream/70 mb-3">
              Subscribe to receive updates on new collections, exclusive offers, and dining inspiration.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-charcoal border border-gold/20 rounded-l-sm focus:outline-none focus:ring-1 focus:ring-gold w-full text-cream"
              />
              <button
                type="submit"
                className="bg-gold text-charcoal-dark px-3 py-2 rounded-r-sm hover:bg-gold-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gold/10 mt-8 pt-6 text-center text-cream/50 text-sm">
          <p>© {new Date().getFullYear()} Chetati. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-3">
            <Link to="/about" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link to="/about" className="hover:text-gold transition-colors">Shipping Information</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
