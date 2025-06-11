import React, { useEffect } from 'react';
import SEO from '@/components/SEO';
import HeroSection from '@/components/home/HeroSection';
import ServiceOverview from '@/components/home/ServiceOverview';
import AboutPreview from '@/components/home/AboutPreview';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import Testimonials from '@/components/home/Testimonials';
import CtaBanner from '@/components/home/CtaBanner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyChat from '@/components/StickyChat';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AYRAJ Interiors",
    "description": "Premium interior design and renovation services in New Delhi, specializing in luxury wooden flooring, designer wallpapers, and custom furniture.",
    "url": "https://ayrajinteriors.com",
    "logo": "https://ayrajinteriors.com/logo.png",
    "sameAs": [
      "https://facebook.com/ayrajinteriors",
      "https://instagram.com/ayrajinteriors",
      "https://linkedin.com/company/ayrajinteriors"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <SEO
        title="AYRAJ Interiors - Luxury Interior Design Solutions in New Delhi"
        description="Transform your space with AYRAJ Interiors. We offer premium interior solutions including luxury wooden flooring, designer wallpapers, and custom furniture in New Delhi."
        keywords="luxury interior design, wooden flooring, designer wallpapers, custom furniture, New Delhi, home renovation"
        schema={homeSchema}
      />

      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main id="main-content" className="flex-grow">
          <HeroSection />
          <section aria-label="Our Services" className="py-16">
            <ServiceOverview />
          </section>
          <section aria-label="About Us" className="py-16">
            <AboutPreview />
          </section>
          <section aria-label="Our Portfolio" className="py-16">
            <PortfolioPreview />
          </section>
          <section aria-label="Client Testimonials" className="py-16">
            <Testimonials />
          </section>
          <section aria-label="Contact Us" className="py-16">
            <CtaBanner />
          </section>
        </main>
        <Footer />
        <StickyChat />
      </div>
    </>
  );
};

export default Index;
