
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled 
          ? "py-2 bg-charcoal-dark/80 backdrop-blur-md border-b border-gold/10" 
          : "py-3 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-cormorant font-semibold tracking-wide text-gold">
                CHETATI
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`nav-link ${isActiveLink('/') ? 'text-gold after:w-full' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`nav-link ${isActiveLink('/products') ? 'text-gold after:w-full' : ''}`}
            >
              Collection
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActiveLink('/about') ? 'text-gold after:w-full' : ''}`}
            >
              About
            </Link>

            <Link 
              to="/contact" 
              className={`nav-link ${isActiveLink('/contact') ? 'text-gold after:w-full' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Icons */}


          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button className="relative text-cream">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-2 bg-gold text-charcoal text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-cream p-1"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-charcoal-dark/95 backdrop-blur-md z-40 transition-transform duration-300 transform pt-20",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col items-center space-y-6 p-6">
          <Link 
            to="/" 
            className={`text-xl font-medium ${isActiveLink('/') ? 'text-gold' : 'text-cream hover:text-gold'} transition-colors`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`text-xl font-medium ${isActiveLink('/products') ? 'text-gold' : 'text-cream hover:text-gold'} transition-colors`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Collection
          </Link>
          <Link 
            to="/about" 
            className={`text-xl font-medium ${isActiveLink('/about') ? 'text-gold' : 'text-cream hover:text-gold'} transition-colors`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/business" 
            className={`text-xl font-medium ${isActiveLink('/business') ? 'text-gold' : 'text-cream hover:text-gold'} transition-colors`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Business
          </Link>
          <Link 
            to="/contact" 
            className={`text-xl font-medium ${isActiveLink('/contact') ? 'text-gold' : 'text-cream hover:text-gold'} transition-colors`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex items-center space-x-8 mt-6">
            <button className="text-cream hover:text-gold transition-colors">
              <Search size={22} />
            </button>
            <button className="text-cream hover:text-gold transition-colors">
              <User size={22} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
