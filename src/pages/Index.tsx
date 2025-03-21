
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import B2BSection from '@/components/B2BSection';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const HealthBenefitsCarousel = () => {
  const benefits = [
    {
      title: "Cardiovascular Health",
      description: "Bronze nurtures the cardiovascular health with natural properties that support your heart.",
      image: "/lovable-uploads/4dd8c101-116e-4b08-824b-98c9919d8855.png"
    },
    {
      title: "Natural Purification",
      description: "Eat on bronze and purify your inner self literally! Our tableware helps detoxify naturally.",
      image: "/lovable-uploads/8bcd866e-9db3-4312-b27b-e892820d69f4.png"
    },
    {
      title: "Anticoagulant Properties",
      description: "Helps in reducing fat and functions as an anticoagulant. Eat on Bronze for better health.",
      image: "/lovable-uploads/c696bc44-21e4-4e49-9ad8-f9d0beeee5bc.png"
    }
  ];

  return (
    <section className="py-16 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-gold uppercase tracking-widest text-sm font-medium">Health & Wellness</span>
          <h2 className="text-3xl md:text-4xl font-cormorant font-medium mt-2 mb-4 text-cream">Benefits of Bronze Tableware</h2>
          <p className="text-cream/70 max-w-2xl mx-auto">Discover the ancient wisdom of using bronze tableware for health benefits along with timeless elegance</p>
        </div>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {benefits.map((benefit, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-gold/20 bg-black/40 backdrop-blur-md">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border border-gold/30">
                      <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-cormorant text-gold mb-2">{benefit.title}</h3>
                    <p className="text-cream/80 text-center text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="bg-charcoal-dark min-h-screen text-cream">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <HealthBenefitsCarousel />
      <About />
      <Testimonials />
      <B2BSection />
      <Footer />
    </div>
  );
};

export default Index;
