
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import servicesData from '@/data/servicesData';

const ServiceOverview = () => {
  // Function to truncate description to 10 words
  const truncateDescription = (description: string) => {
    const words = description.split(' ');
    if (words.length <= 10) return description;
    return words.slice(0, 10).join(' ') + '...';
  };

  return (
    <section className="py-20 bg-cream-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Explore Our Premium Offerings</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card group h-80">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="service-card-overlay">
                <h3 className="text-xl font-playfair font-medium text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-cream/90 mb-4">{truncateDescription(service.description)}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center text-gold hover:text-gold-light transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
