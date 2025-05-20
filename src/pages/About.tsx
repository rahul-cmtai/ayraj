
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyChat from '@/components/StickyChat';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1974&auto=format&fit=crop"
              alt="Luxury Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">
              Crafting Timeless Interiors Since 2023
            </h1>
            <div className="h-[3px] w-32 bg-gold mx-auto"></div>
          </div>
        </section>
        
        {/* Company Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2574&auto=format&fit=crop"
                  alt="AYRAJ Team"
                  className="rounded-lg shadow-xl"
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-playfair text-olive mb-4">Our Roots</h2>
                  <p className="text-muted-foreground">
                    Founded in 2023, AYRAJ Royal Interiors began with a simple vision: to create luxurious 
                    interiors that are accessible to all. What started as a small venture has grown into a 
                    trusted name in interior design and execution, known for quality craftsmanship and 
                    attention to detail.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-playfair text-olive mb-4">Our Vision</h2>
                  <p className="text-muted-foreground">
                    We envision a world where luxury interiors are not just for the elite but accessible 
                    to everyone who appreciates beauty and craftsmanship. We aim to be the leading provider 
                    of premium interior solutions that transform ordinary spaces into extraordinary experiences.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-playfair text-olive mb-4">Our Mission</h2>
                  <p className="text-muted-foreground">
                    At AYRAJ, our mission is to deliver exceptional interior solutions that blend 
                    luxury, functionality, and affordability. We are committed to understanding our 
                    clients' needs and exceeding their expectations with creative designs and flawless execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section className="py-20 bg-cream-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Philosophy</h2>
              <p className="section-subtitle">The Principles That Guide Us</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#708238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20h20"></path>
                    <path d="M5 4h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"></path>
                    <path d="M6 10h12v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4z"></path>
                    <path d="M6 15h12"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-medium text-olive mb-3">Luxury Materials</h3>
                <p className="text-muted-foreground">
                  We source only the finest materials from trusted suppliers to ensure quality, durability, and authentic luxury in every detail.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#708238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m14 9-5 5"></path>
                    <path d="m9 9 5 5"></path>
                    <path d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3h2a2 2 0 0 1 2 2v3h2a2 2 0 0 1 2 2v2a4 4 0 0 1-4 4h-8Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-medium text-olive mb-3">Customized Designs</h3>
                <p className="text-muted-foreground">
                  We believe that every space is unique. Our designs are tailored to reflect your personality, lifestyle, and specific requirements.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#708238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m13 2-2 2.5h3L12 7"></path>
                    <path d="M12 22v-3"></path>
                    <path d="M12 17v-2"></path>
                    <path d="M12 11v-2"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-medium text-olive mb-3">Fast Execution</h3>
                <p className="text-muted-foreground">
                  We understand the value of time. Our efficient processes and dedicated team ensure timely completion without compromising on quality.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Why Choose AYRAJ</h2>
              <p className="section-subtitle">What Makes Us Different</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-cream to-cream-light p-6 rounded-lg shadow-md">
                <div className="text-olive mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                    <line x1="2" y1="20" x2="2" y2="20"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Unbeatable Pricing</h3>
                <p className="text-muted-foreground">
                  We offer premium quality at competitive prices, making luxury accessible to more people.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-cream to-cream-light p-6 rounded-lg shadow-md">
                <div className="text-olive mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Vastu-compliant Designs</h3>
                <p className="text-muted-foreground">
                  Our designs respect traditional Vastu principles while meeting modern aesthetic standards.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-cream to-cream-light p-6 rounded-lg shadow-md">
                <div className="text-olive mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-lg font-medium mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  We stand behind our work with guarantees that ensure your satisfaction and peace of mind.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-cream to-cream-light p-6 rounded-lg shadow-md">
                <div className="text-olive mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Personalized Consultations</h3>
                <p className="text-muted-foreground">
                  Our experts work closely with you to understand your vision and translate it into reality.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Link to="/contact" className="btn-primary inline-flex">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <StickyChat />
    </div>
  );
};

export default AboutUs;
