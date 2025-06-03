
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1618219944342-824e40a13285?q=80&w=2670&auto=format&fit=crop"
                alt="Luxury Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gold text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="font-playfair text-2xl font-medium">2+ Years</p>
              <p className="text-sm">of Excellence</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="section-title">About AYRAJ</h2>
            <p className="section-subtitle">Crafting Timeless Interiors Since 2023</p>
            
            <p className="text-muted-foreground">
             AYRAJ redefining luxury living with timeless craftsmanship and refined elegance. From handcrafted wooden flooring and bespoke wallpapers to premium carpets, carved furniture, and handwoven fabrics — we curate interiors that echo heritage and quality. Our turnkey construction services ensure beautifully designed, move-in-ready homes tailored to your vision.
            </p>
            
            <div className="space-y-4 my-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-lg text-black">2 Years of Excellence</h3>
                  <p className="text-muted-foreground">Building trust and delivering exceptional quality since 2023.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-black text-lg">Affordable Luxury</h3>
                  <p className="text-muted-foreground">Premium designs that don't break the bank, making luxury accessible.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-lg text-black">Custom Designs</h3>
                  <p className="text-muted-foreground">Personalized solutions tailored to your specific needs and preferences.</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="btn-primary">
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
