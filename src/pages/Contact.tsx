
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-charcoal-dark min-h-screen text-cream">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-widest text-sm font-medium">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-cormorant font-medium mt-2 mb-4 text-cream">Contact Us</h1>
            <p className="text-cream/70 max-w-2xl mx-auto">We'd love to hear from you. Reach out to our team for any inquiries about our products or services</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-sm">
                <h2 className="text-2xl font-cormorant font-medium mb-6 text-gold">Our Information</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="bg-gold/10 p-3 rounded-sm">
                      <MapPin className="text-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-xl font-medium mb-1 text-cream">Our Location</h3>
                      <p className="text-cream/70">
                      Chandigarh University NH-05 Chandigarh-Ludhiana Highway, Mohali, Punjab (INDIA)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-gold/10 p-3 rounded-sm">
                      <Phone className="text-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-xl font-medium mb-1 text-cream">Phone Number</h3>
                      <p className="text-cream/70">+91 96327-04477</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-gold/10 p-3 rounded-sm">
                      <Mail className="text-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-cormorant text-xl font-medium mb-1 text-cream">Email Address</h3>
                      <p className="text-cream/70">info@chetati.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-8 rounded-sm">
                <h2 className="text-2xl font-cormorant font-medium mb-6 text-gold">Store Hours</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-cream">Monday - Friday</span>
                    <span className="text-gold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cream">Saturday</span>
                    <span className="text-gold">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cream">Sunday</span>
                    <span className="text-gold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-sm">
              <h2 className="text-2xl font-cormorant font-medium mb-6 text-gold">Send Us a Message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cream mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-black/40 border border-gold/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-cream"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cream mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-black/40 border border-gold/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-cream"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-cream mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-black/40 border border-gold/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-cream"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cream mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-black/40 border border-gold/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all text-cream"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
