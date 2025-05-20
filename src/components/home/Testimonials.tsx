
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Homeowner',
    quote: 'AYRAJ transformed my living room into a royal space! Their attention to detail and commitment to quality is unmatched.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 2,
    name: 'Vikram Malhotra',
    role: 'Property Developer',
    quote: 'Working with AYRAJ for our residential project was a fantastic experience. Their team delivered exceptional quality within budget and timeline.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 3,
    name: 'Anjali Patel',
    role: 'Restaurant Owner',
    quote: 'The wallpaper and flooring solutions provided by AYRAJ completely transformed our restaurant. Our customers love the new ambience!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop',
    rating: 4
  },
  {
    id: 4,
    name: 'Rajiv Kapoor',
    role: 'Hotel Manager',
    quote: "AYRAJ's team understood our vision perfectly and executed it flawlessly. The custom furniture pieces are both beautiful and functional.",
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop',
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-medium text-gray-900 pb-2 relative inline-block">
            Client Testimonials
          </h2>
          <div className="h-[3px] w-2/3 bg-gold mx-auto mt-2"></div>
          <p className="text-xl md:text-2xl font-playfair italic text-gray-600 mt-4 mb-8">
            What Our Clients Say About Us
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 shadow-md rounded-lg p-8 text-center">
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gold">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill={i < testimonial.rating ? "#D4AF37" : "#cccccc"} 
                          className="w-5 h-5"
                        >
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-lg italic mb-4 text-gray-700">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="font-playfair font-medium text-olive">
                      {testimonial.name}
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-gold' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
