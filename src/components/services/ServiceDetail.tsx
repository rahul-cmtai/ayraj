
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyChat from '@/components/StickyChat';

interface ServiceDetailProps {
  service: {
    id: number;
    title: string;
    description: string;
    image: string;
    benefits: string[];
    materials: string[];
    process: string[];
    galleryImages?: string[];
  };
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to truncate description to 10 words
  const truncateDescription = (description: string) => {
    const words = description.split(' ');
    if (words.length <= 10) return description;
    return words.slice(0, 10).join(' ') + '...';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 z-10">
            <Link to="/services" className="inline-flex items-center text-white mb-6 hover:text-gold transition-colors">
              <ArrowLeft className="mr-2" size={18} />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-cream/90 max-w-2xl">
              {truncateDescription(service.description)}
            </p>
          </div>
        </section>
        
        {/* Service Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-playfair text-olive mb-6">{service.title}</h2>
                <p className="text-muted-foreground mb-8 text-justify">{service.description}</p>
                
                {/* <div className="mb-8">
                  <h3 className="text-xl font-medium text-olive mb-4 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-gold" /> Benefits
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gold mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}
                
                <div className="mb-8">
                  <h3 className="text-xl font-medium text-olive mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gold">
                      <path d="M2 20h20"></path>
                      <path d="M5 4h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"></path>
                      <path d="M6 10h12v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4z"></path>
                      <path d="M6 15h12"></path>
                    </svg>
                    Materials Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.materials.map((material, index) => (
                      <span key={index} className="px-3 py-1 bg-white text-olive rounded-full text-sm border border-olive/20">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-olive mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gold">
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
                      <path d="M12 11h4"></path>
                      <path d="M12 16h4"></path>
                      <path d="M8 11h.01"></path>
                      <path d="M8 16h.01"></path>
                    </svg>
                    Our Process
                  </h3>
                  <ol className="space-y-2">
                    {service.process.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-olive text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {service.galleryImages ? (
                  service.galleryImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${service.title} ${index + 1}`}
                      className={`rounded-lg shadow-md ${index === 0 ? 'col-span-2' : ''}`}
                    />
                  ))
                ) : (
                  <>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-md col-span-2"
                    />
                    <img
                      src={`https://source.unsplash.com/random/600x400/?${service.title.toLowerCase().replace(/\s+/g, '-')}-detail-1`}
                      alt={`${service.title} Detail 1`}
                      className="rounded-lg shadow-md"
                    />
                    <img
                      src={`https://source.unsplash.com/random/600x400/?${service.title.toLowerCase().replace(/\s+/g, '-')}-detail-2`}
                      alt={`${service.title} Detail 2`}
                      className="rounded-lg shadow-md"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-cream-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white border border-olive/10 rounded-lg p-8 text-center shadow-md">
              <h2 className="text-2xl font-playfair font-medium text-olive mb-4">
                Ready to transform your space?
              </h2>
              
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Our experts are ready to help you create the perfect design for your home or office.
                Contact us for a free consultation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Get a Free Quote
                </Link>
                
                <a
                  href="https://wa.me/919999979079"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat with Our Expert
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <StickyChat />
    </div>
  );
};

export default ServiceDetail;
