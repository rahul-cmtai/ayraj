import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyChat from '@/components/StickyChat';

// Predefined image paths for each category
const categoryImages = {
  Flooring: [
    { id: 'flooring-1', title: 'Luxury Flooring Design 1', image: '/images/gallery/Flooring/IMG_7286.jpeg' },
    { id: 'flooring-2', title: 'Modern Flooring Pattern 2', image: '/images/gallery/Flooring/IMG_7288.jpeg' },
    { id: 'flooring-3', title: 'Premium Flooring Style 3', image: '/images/gallery/Flooring/41f4d41a-95ad-475b-8cde-4d957bd9c231.jpeg' },
    { id: 'flooring-4', title: 'Elegant Flooring Design 4', image: '/images/gallery/Flooring/IMG_6807.jpeg' },
    { id: 'flooring-5', title: 'Contemporary Flooring 5', image: '/images/gallery/Flooring/IMG_7287.jpeg' },
    { id: 'flooring-6', title: 'Royal Flooring Pattern 6', image: '/images/gallery/Flooring/IMG_8540.png' },
    { id: 'flooring-7', title: 'Luxury Flooring Style 7', image: '/images/gallery/Flooring/IMG_7084.jpeg' },
    { id: 'flooring-8', title: 'Modern Flooring Design 8', image: '/images/gallery/Flooring/IMG_7081.jpeg' },
    { id: 'flooring-9', title: 'Premium Flooring Pattern 9', image: '/images/gallery/Flooring/IMG_7083.jpeg' },
    { id: 'flooring-10', title: 'Elegant Flooring Style 10', image: '/images/gallery/Flooring/IMG_7082.jpeg' }
  ],
  Furniture: [
    { id: 'furniture-1', title: 'Luxury Furniture Collection 1', image: '/images/gallery/Furniture/IMG_8304.jpeg' },
    { id: 'furniture-2', title: 'Modern Furniture Design 2', image: '/images/gallery/Furniture/IMG_8305.jpeg' },
    { id: 'furniture-3', title: 'Royal Furniture Style 3', image: '/images/gallery/Furniture/IMG_8307.jpeg' },
    { id: 'furniture-4', title: 'Premium Furniture Collection 4', image: '/images/gallery/Furniture/IMG_8301.jpeg' },
    { id: 'furniture-5', title: 'Elegant Furniture Design 5', image: '/images/gallery/Furniture/IMG_8303.jpeg' },
    { id: 'furniture-6', title: 'Luxury Furniture Pattern 6', image: '/images/gallery/Furniture/IMG_8289.jpeg' },
    { id: 'furniture-7', title: 'Modern Furniture Style 7', image: '/images/gallery/Furniture/IMG_8290.jpeg' },
    { id: 'furniture-8', title: 'Royal Furniture Design 8', image: '/images/gallery/Furniture/IMG_8300.jpeg' },
    { id: 'furniture-9', title: 'Premium Furniture Collection 9', image: '/images/gallery/Furniture/IMG_8299.jpeg' },
    { id: 'furniture-10', title: 'Elegant Furniture Style 10', image: '/images/gallery/Furniture/IMG_8383.jpeg' },
    { id: 'furniture-11', title: 'Luxury Furniture Design 11', image: '/images/gallery/Furniture/IMG_8385.jpeg' },
    { id: 'furniture-12', title: 'Modern Furniture Pattern 12', image: '/images/gallery/Furniture/IMG_8382.jpeg' },
    { id: 'furniture-13', title: 'Royal Furniture Collection 13', image: '/images/gallery/Furniture/IMG_8381.jpeg' },
    { id: 'furniture-14', title: 'Premium Furniture Style 14', image: '/images/gallery/Furniture/IMG_8384.jpeg' },
    { id: 'furniture-15', title: 'Elegant Furniture Design 15', image: '/images/gallery/Furniture/IMG_8389.jpeg' },
    { id: 'furniture-16', title: 'Luxury Furniture Pattern 16', image: '/images/gallery/Furniture/IMG_8386.jpeg' },
    { id: 'furniture-17', title: 'Modern Furniture Collection 17', image: '/images/gallery/Furniture/IMG_8388.jpeg' },
    { id: 'furniture-18', title: 'Royal Furniture Style 18', image: '/images/gallery/Furniture/IMG_8387.jpeg' },
    { id: 'furniture-19', title: 'Premium Furniture Design 19', image: '/images/gallery/Furniture/IMG_8390.jpeg' },
    { id: 'furniture-20', title: 'Elegant Furniture Pattern 20', image: '/images/gallery/Furniture/IMG_8375.jpeg' },
    { id: 'furniture-21', title: 'Luxury Furniture Collection 21', image: '/images/gallery/Furniture/IMG_8376.jpeg' },
    { id: 'furniture-22', title: 'Modern Furniture Style 22', image: '/images/gallery/Furniture/IMG_8372.jpeg' },
    { id: 'furniture-23', title: 'Royal Furniture Design 23', image: '/images/gallery/Furniture/IMG_8374.jpeg' },
    { id: 'furniture-24', title: 'Premium Furniture Pattern 24', image: '/images/gallery/Furniture/IMG_8373.jpeg' },
    { id: 'furniture-25', title: 'Elegant Furniture Collection 25', image: '/images/gallery/Furniture/IMG_8288.jpeg' },
    { id: 'furniture-26', title: 'Luxury Furniture Style 26', image: '/images/gallery/Furniture/IMG_8286.jpeg' },
    { id: 'furniture-27', title: 'Modern Furniture Design 27', image: '/images/gallery/Furniture/IMG_8287.jpeg' },
    { id: 'furniture-28', title: 'Royal Furniture Pattern 28', image: '/images/gallery/Furniture/IMG_8317.jpeg' },
    { id: 'furniture-29', title: 'Premium Furniture Collection 29', image: '/images/gallery/Furniture/IMG_8285.jpeg' },
    { id: 'furniture-30', title: 'Elegant Furniture Style 30', image: '/images/gallery/Furniture/IMG_8314.jpeg' },
    { id: 'furniture-31', title: 'Luxury Furniture Design 31', image: '/images/gallery/Furniture/IMG_8318.jpeg' },
    { id: 'furniture-32', title: 'Modern Furniture Pattern 32', image: '/images/gallery/Furniture/IMG_8313.jpeg' },
    { id: 'furniture-33', title: 'Royal Furniture Collection 33', image: '/images/gallery/Furniture/IMG_8311.jpeg' },
    { id: 'furniture-34', title: 'Premium Furniture Style 34', image: '/images/gallery/Furniture/IMG_8312.jpeg' },
    { id: 'furniture-35', title: 'Elegant Furniture Design 35', image: '/images/gallery/Furniture/IMG_8283.jpeg' },
    { id: 'furniture-36', title: 'Luxury Furniture Pattern 36', image: '/images/gallery/Furniture/IMG_8282.jpeg' },
    { id: 'furniture-37', title: 'Modern Furniture Collection 37', image: '/images/gallery/Furniture/IMG_8284.jpeg' },
    { id: 'furniture-38', title: 'Royal Furniture Style 38', image: '/images/gallery/Furniture/IMG_8051.jpeg' },
    { id: 'furniture-39', title: 'Premium Furniture Design 39', image: '/images/gallery/Furniture/IMG_7404.jpeg' },
    { id: 'furniture-40', title: 'Elegant Furniture Pattern 40', image: '/images/gallery/Furniture/IMG_7611.jpeg' },
    { id: 'furniture-41', title: 'Luxury Furniture Collection 41', image: '/images/gallery/Furniture/IMG_7610.jpeg' },
    { id: 'furniture-42', title: 'Modern Furniture Style 42', image: '/images/gallery/Furniture/IMG_7612.jpeg' },
    { id: 'furniture-43', title: 'Royal Furniture Design 43', image: '/images/gallery/Furniture/IMG_7614.jpeg' },
    { id: 'furniture-44', title: 'Premium Furniture Pattern 44', image: '/images/gallery/Furniture/IMG_7613.jpeg' },
    { id: 'furniture-45', title: 'Elegant Furniture Collection 45', image: '/images/gallery/Furniture/IMG_7408.jpeg' },
    { id: 'furniture-46', title: 'Luxury Furniture Style 46', image: '/images/gallery/Furniture/IMG_7407.jpeg' },
    { id: 'furniture-47', title: 'Modern Furniture Design 47', image: '/images/gallery/Furniture/IMG_6804.jpeg' },
    { id: 'furniture-48', title: 'Royal Furniture Pattern 48', image: '/images/gallery/Furniture/65ce620d-6b23-4fc0-8a5f-6bf8f47761ce.jpeg' },
    { id: 'furniture-49', title: 'Premium Furniture Collection 49', image: '/images/gallery/Furniture/IMG_6803.jpeg' },
    { id: 'furniture-50', title: 'Elegant Furniture Style 50', image: '/images/gallery/Furniture/dbe027d4-7542-45d7-835a-ecccf09f60bc.jpeg' },
    { id: 'furniture-51', title: 'Luxury Furniture Design 51', image: '/images/gallery/Furniture/21401fd5-df8a-4819-93e9-e42bf884aadc.jpeg' },
    { id: 'furniture-52', title: 'Modern Furniture Pattern 52', image: '/images/gallery/Furniture/ee76889c-c5b7-48fd-aca0-02243882a67e.jpeg' },
    { id: 'furniture-53', title: 'Royal Furniture Collection 53', image: '/images/gallery/Furniture/45015f8f-fea4-43d4-9460-fd35fc98116b.jpeg' },
    { id: 'furniture-54', title: 'Premium Furniture Style 54', image: '/images/gallery/Furniture/c3f924e9-4563-41be-8db9-dce41c7df575.jpeg' },
    { id: 'furniture-55', title: 'Elegant Furniture Design 55', image: '/images/gallery/Furniture/d81b9164-66ac-4a18-ad7c-f0ebde3c308f.jpeg' },
    { id: 'furniture-56', title: 'Luxury Furniture Pattern 56', image: '/images/gallery/Furniture/a927499e-41a7-4979-bf3a-79217a6fbeb3.jpeg' },
    { id: 'furniture-57', title: 'Modern Furniture Collection 57', image: '/images/gallery/Furniture/cc8386f6-e8ee-4be8-9657-1dbd3f03e5ec.jpeg' },
    { id: 'furniture-58', title: 'Royal Furniture Style 58', image: '/images/gallery/Furniture/4433729d-0a81-4ac8-bd95-b8a24a8714d4.jpeg' },
    { id: 'furniture-59', title: 'Premium Furniture Design 59', image: '/images/gallery/Furniture/IMG_7775.jpeg' },
    { id: 'furniture-60', title: 'Elegant Furniture Pattern 60', image: '/images/gallery/Furniture/IMG_8394.jpeg' },
    { id: 'furniture-61', title: 'Luxury Furniture Collection 61', image: '/images/gallery/Furniture/IMG_8391.jpeg' },
    { id: 'furniture-62', title: 'Modern Furniture Style 62', image: '/images/gallery/Furniture/IMG_8393.jpeg' }
  ],
  Walls: [
    { id: 'walls-1', title: 'Wall Design Pattern 1', image: '/images/gallery/Walls/IMG_8016.jpeg' },
    { id: 'walls-2', title: 'Wall Decoration Style 2', image: '/images/gallery/Walls/IMG_8164.png' },
    { id: 'walls-3', title: 'Modern Wall Design 3', image: '/images/gallery/Walls/IMG_8595 (1).jpeg' },
    { id: 'walls-4', title: 'Luxury Wall Pattern 4', image: '/images/gallery/Walls/IMG_8592 (1).jpeg' },
    { id: 'walls-5', title: 'Premium Wall Style 5', image: '/images/gallery/Walls/IMG_8593 (1).jpeg' },
    { id: 'walls-6', title: 'Elegant Wall Design 6', image: '/images/gallery/Walls/IMG_8591 (1).jpeg' },
    { id: 'walls-7', title: 'Royal Wall Pattern 7', image: '/images/gallery/Walls/IMG_8590 (1).jpeg' }
  ],
  Decor: [
    { id: 'decor-1', title: 'Luxury Decor 1', image: '/images/gallery/Decor/IMG_8386.jpeg' },
    { id: 'decor-2', title: 'Royal Decor 2', image: '/images/gallery/Decor/IMG_8388.jpeg' },
    { id: 'decor-3', title: 'Premium Decor 3', image: '/images/gallery/Decor/IMG_6804.jpeg' },
    { id: 'decor-4', title: 'Elegant Decor 4', image: '/images/gallery/Decor/IMG_6803.jpeg' },
    { id: 'decor-5', title: 'Modern Decor 5', image: '/images/gallery/Decor/dbe027d4-7542-45d7-835a-ecccf09f60bc.jpeg' },
    { id: 'decor-6', title: 'Designer Decor 6', image: '/images/gallery/Decor/21401fd5-df8a-4819-93e9-e42bf884aadc.jpeg' },
    { id: 'decor-7', title: 'Luxury Decor 7', image: '/images/gallery/Decor/14f7d79a-4bd2-4b4c-b41f-aac7dde0ecea.jpeg' }
  ],
  Tiles: [
    { id: 'tiles-1', title: 'Designer Tiles Pattern 1', image: '/images/gallery/Tiles/IMG_7518 (1).jpeg' },
    { id: 'tiles-2', title: 'Modern Tiles Design 2', image: '/images/gallery/Tiles/IMG_7516 (1).jpeg' },
    { id: 'tiles-3', title: 'Luxury Tiles Style 3', image: '/images/gallery/Tiles/IMG_7517 (1).jpeg' },
    { id: 'tiles-4', title: 'Premium Tiles Pattern 4', image: '/images/gallery/Tiles/IMG_7519 (1).jpeg' },
    { id: 'tiles-5', title: 'Elegant Tiles Design 5', image: '/images/gallery/Tiles/IMG_7527 (1).jpeg' }
  ],
  Carpets: [
    { id: 'carpets-1', title: 'Luxury Carpet Design 1', image: '/images/gallery/Carpets/5eff7b7d-1ca0-474e-bd9c-7e9dd2788095.jpeg' },
    { id: 'carpets-2', title: 'Modern Carpet Pattern 2', image: '/images/gallery/Carpets/IMG_7288.jpeg' },
    { id: 'carpets-3', title: 'Premium Carpet Style 3', image: '/images/gallery/Carpets/IMG_7286.jpeg' },
    { id: 'carpets-4', title: 'Elegant Carpet Design 4', image: '/images/gallery/Carpets/IMG_7287.jpeg' },
    { id: 'carpets-5', title: 'Royal Carpet Pattern 5', image: '/images/gallery/Carpets/41f4d41a-95ad-475b-8cde-4d957bd9c231.jpeg' }
  ],
  Crockery: [
    { id: 'crockery-1', title: 'Handcrafted Crockery 1', image: '/images/Handcrafted-Items/IMG_8374.jpeg' },
    { id: 'crockery-2', title: 'Luxury Crockery 2', image: '/images/Handcrafted-Items/IMG_8390.jpeg' },
    { id: 'crockery-3', title: 'Royal Crockery 3', image: '/images/Handcrafted-Items/IMG_8387.jpeg' },
    { id: 'crockery-4', title: 'Premium Crockery 4', image: '/images/Handcrafted-Items/IMG_8389.jpeg' },
    { id: 'crockery-5', title: 'Elegant Crockery 5', image: '/images/Handcrafted-Items/IMG_8386.jpeg' }
  ]
};

const categories = ['All', 'Flooring', 'Furniture', 'Walls', 'Decor', 'Tiles', 'Carpets', 'Crockery'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const filteredGallery = activeCategory === 'All'
    ? Object.values(categoryImages).flat()
    : categoryImages[activeCategory as keyof typeof categoryImages] || [];
  
  const displayedGallery = showAll ? filteredGallery : filteredGallery.slice(0, 9);
  const hasMoreImages = filteredGallery.length > 9;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        {/* Intro Section */}
        <section className="relative h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2564&auto=format&fit=crop"
              alt="Luxury Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Explore Our Royal Creations
            </h1>
            <p className="text-xl text-cream/90 max-w-3xl mx-auto">
              Browse through our portfolio of exquisite interior projects that showcase our commitment 
              to luxury, quality, and exceptional design.
            </p>
          </div>
        </section>
        
        {/* Filterable Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setShowAll(false);
                  }}
                  className={`px-6 py-3 rounded-md transition-colors ${
                    activeCategory === category
                      ? 'bg-olive text-white'
                      : 'bg-cream text-olive hover:bg-olive/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedGallery.map(item => (
                <div key={item.id} className="gallery-item group relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-playfair text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="text-cream/80 text-sm">
                      {item.id.split('-')[0].charAt(0).toUpperCase() + item.id.split('-')[0].slice(1)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View All Button */}
            {hasMoreImages && !showAll && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(true)}
                  className="px-8 py-3 bg-olive text-white rounded-md hover:bg-olive-dark transition-colors"
                >
                  View All {activeCategory === 'All' ? 'Images' : `${activeCategory} Images`}
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Full-Width CTA */}
        <section className="bg-gradient-to-r from-olive to-olive-dark text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-6">
              Loved Our Work? Let Us Transform Your Space!
            </h2>
            <p className="text-lg text-cream/90 max-w-2xl mx-auto mb-8">
              Contact us today to discuss your project and get a personalized quote. 
              Our team is ready to bring your vision to life.
            </p>
            <Link to="/contact" className="btn-secondary bg-white hover:bg-cream text-olive inline-flex">
              Get Quote
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
      <StickyChat />
    </div>
  );
};

export default Gallery;
