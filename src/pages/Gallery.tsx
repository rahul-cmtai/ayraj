import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyChat from '@/components/StickyChat';

// Predefined image paths for each category (updated to match folder names from screenshot)
const categoryImages = {
  'F-doors': [
    // Furniture-doors
    { id: 'F-doors-1', image: '/images/Furniture-doors/IMG_8289 (2).JPG', title: 'Designer Door' },
    { id: 'F-doors-2', image: '/images/Furniture-doors/IMG_8290.JPG', title: 'Designer Door' },
    { id: 'F-doors-3', image: '/images/Furniture-doors/IMG_8291.JPG', title: 'Designer Door' },
    { id: 'F-doors-4', image: '/images/Furniture-doors/IMG_8292.JPG', title: 'Designer Door' },
    { id: 'F-doors-5', image: '/images/Furniture-doors/IMG_8293.JPG', title: 'Designer Door' },
    { id: 'F-doors-6', image: '/images/Furniture-doors/IMG_8294.JPG', title: 'Designer Door' },
    { id: 'F-doors-7', image: '/images/Furniture-doors/IMG_8295.JPG', title: 'Designer Door' },
    { id: 'F-doors-8', image: '/images/Furniture-doors/IMG_8296.JPG', title: 'Designer Door' },
    { id: 'F-doors-9', image: '/images/Furniture-doors/IMG_8297.JPG', title: 'Designer Door' },
    { id: 'F-doors-10', image: '/images/Furniture-doors/IMG_8298.JPG', title: 'Designer Door' },
    { id: 'F-doors-11', image: '/images/Furniture-doors/IMG_8299.JPG', title: 'Designer Door' },
    { id: 'F-doors-12', image: '/images/Furniture-doors/IMG_8300.JPG', title: 'Designer Door' },
    { id: 'F-doors-13', image: '/images/Furniture-doors/IMG_8301.JPG', title: 'Designer Door' },
    { id: 'F-doors-14', image: '/images/Furniture-doors/IMG_8302.JPG', title: 'Designer Door' },
    { id: 'F-doors-15', image: '/images/Furniture-doors/IMG_8303.JPG', title: 'Designer Door' },
    { id: 'F-doors-16', image: '/images/Furniture-doors/IMG_8305.JPG', title: 'Designer Door' },
    { id: 'F-doors-17', image: '/images/Furniture-doors/IMG_8306.JPG', title: 'Designer Door' },
    { id: 'F-doors-18', image: '/images/Furniture-doors/IMG_8307.JPG', title: 'Designer Door' },
    { id: 'F-doors-19', image: '/images/Furniture-doors/IMG_8391.JPG', title: 'Designer Door' },
    { id: 'F-doors-20', image: '/images/Furniture-doors/IMG_8392.JPG', title: 'Designer Door' },
    { id: 'F-doors-21', image: '/images/Furniture-doors/IMG_8393.JPG', title: 'Designer Door' },
    { id: 'F-doors-22', image: '/images/Furniture-doors/IMG_8394.JPG', title: 'Designer Door' },
    { id: 'F-doors-23', image: '/images/Furniture-doors/IMG_8395.JPG', title: 'Designer Door' }
  ],
  'F-consoles': [
    // Furniture-consoles
    { id: 'F-consoles-1', image: '/images/Furniture-consoles/IMG_8386.JPG', title: 'Console' },
    { id: 'F-consoles-2', image: '/images/Furniture-consoles/IMG_8387.JPG', title: 'Console' },
    { id: 'F-consoles-3', image: '/images/Furniture-consoles/IMG_8388.JPG', title: 'Console' },
    { id: 'F-consoles-4', image: '/images/Furniture-consoles/IMG_8389.JPG', title: 'Console' },
    { id: 'F-consoles-5', image: '/images/Furniture-consoles/IMG_8390.JPG', title: 'Console' },
    { id: 'F-consoles-6', image: '/images/Furniture-consoles/IMG_8396.JPG', title: 'Console' }
  ],
  'F-sofas': [
    // Furniture-sofas
    { id: 'F-sofas-1', image: '/images/Furniture-sofas/PHOTO-2025-04-17-15-38-42.JPG', title: 'Sofa' },
    { id: 'F-sofas-2', image: '/images/Furniture-sofas/PHOTO-2025-04-17-15-38-42 4.JPG', title: 'Sofa' },
    { id: 'F-sofas-3', image: '/images/Furniture-sofas/IMG_8385.JPG', title: 'Sofa' },
    { id: 'F-sofas-4', image: '/images/Furniture-sofas/IMG_8383.JPG', title: 'Sofa' },
    { id: 'F-sofas-5', image: '/images/Furniture-sofas/IMG_8382.JPG', title: 'Sofa' },
    { id: 'F-sofas-6', image: '/images/Furniture-sofas/IMG_8377.JPG', title: 'Sofa' },
    { id: 'F-sofas-7', image: '/images/Furniture-sofas/IMG_8318.JPG', title: 'Sofa' },
    { id: 'F-sofas-8', image: '/images/Furniture-sofas/IMG_8314.JPG', title: 'Sofa' },
    { id: 'F-sofas-9', image: '/images/Furniture-sofas/IMG_8313.JPG', title: 'Sofa' },
    { id: 'F-sofas-10', image: '/images/Furniture-sofas/IMG_8311.JPG', title: 'Sofa' },
    { id: 'F-sofas-11', image: '/images/Furniture-sofas/IMG_8310.JPG', title: 'Sofa' },
    { id: 'F-sofas-12', image: '/images/Furniture-sofas/IMG_8309.JPG', title: 'Sofa' },
    { id: 'F-sofas-13', image: '/images/Furniture-sofas/IMG_8308.JPG', title: 'Sofa' },
    { id: 'F-sofas-14', image: '/images/Furniture-sofas/IMG_7353.JPG', title: 'Sofa' },
    { id: 'F-sofas-15', image: '/images/Furniture-sofas/IMG_7351.JPG', title: 'Sofa' },
    { id: 'F-sofas-16', image: '/images/Furniture-sofas/IMG_7350.JPG', title: 'Sofa' },
    { id: 'F-sofas-17', image: '/images/Furniture-sofas/IMG_7349.JPG', title: 'Sofa' },
    { id: 'F-sofas-18', image: '/images/Furniture-sofas/FC26C4EC-463B-4658-AEE4-37B67BFA964C.JPG', title: 'Sofa' },
    { id: 'F-sofas-19', image: '/images/Furniture-sofas/4B24DC39-DACC-4EC9-B24C-4FBE9108D5B3.JPG', title: 'Sofa' }
  ],
  'F-kitchen': [
    // Furniture-kitchen
    { id: 'F-kitchen-1', image: '/images/Furniture-kitchen/PHOTO-2025-04-17-15-38-42 3.JPG', title: 'Kitchen' },
    { id: 'F-kitchen-2', image: '/images/Furniture-kitchen/PHOTO-2025-04-17-15-38-41.JPG', title: 'Kitchen' },
    { id: 'F-kitchen-3', image: '/images/Furniture-kitchen/IMG_8376.JPG', title: 'Kitchen' },
    { id: 'F-kitchen-4', image: '/images/Furniture-kitchen/IMG_8375.JPG', title: 'Kitchen' },
    { id: 'F-kitchen-5', image: '/images/Furniture-kitchen/IMG_8374.JPG', title: 'Kitchen' },
    { id: 'F-kitchen-6', image: '/images/Furniture-kitchen/IMG_8373.JPG', title: 'Kitchen' },
    { id: 'F-kitchen-7', image: '/images/Furniture-kitchen/IMG_8372.JPG', title: 'Kitchen' },
    { id: 'F-kitchen-8', image: '/images/Furniture-kitchen/IMG_7408.JPG', title: 'Kitchen' },
    { id: 'F-kitchen-9', image: '/images/Furniture-kitchen/IMG_7407.JPG', title: 'Kitchen' }
  ],
  'Carpets': [
    // Carpets
    { id: 'Carpets-1', image: '/images/Carpets/IMG_6807.JPG', title: 'Carpet' },
    { id: 'Carpets-2', image: '/images/Carpets/IMG_5125.JPG', title: 'Carpet' },
    { id: 'Carpets-3', image: '/images/Carpets/5eff7b7d-1ca0-474e-bd9c-7e9dd2788095.JPG', title: 'Carpet' },
    { id: 'Carpets-4', image: '/images/Carpets/41f4d41a-95ad-475b-8cde-4d957bd9c231.JPG', title: 'Carpet' },
    { id: 'Carpets-5', image: '/images/Carpets/2e79f3a6-e595-4f38-a17e-3f130e6b3b3b.JPG', title: 'Carpet' },
    { id: 'Carpets-6', image: '/images/Carpets/271c8130-8046-4c68-b79f-37edf746b3b1.JPG', title: 'Carpet' }
  ],
  'Dinnerware': [
    // Dinnerware & Tableware
    { id: 'Dinnerware-1', image: '/images/Dinnerware & Tableware/IMG_5978.jpg', title: 'Dinnerware' },
    { id: 'Dinnerware-2', image: '/images/Dinnerware & Tableware/IMG_5977.jpg', title: 'Dinnerware' },
    { id: 'Dinnerware-3', image: '/images/Dinnerware & Tableware/IMG_5975.jpg', title: 'Dinnerware' },
    { id: 'Dinnerware-4', image: '/images/Dinnerware & Tableware/IMG_5973.jpg', title: 'Dinnerware' },
    { id: 'Dinnerware-5', image: '/images/Dinnerware & Tableware/IMG_5972.jpg', title: 'Dinnerware' },
    { id: 'Dinnerware-6', image: '/images/Dinnerware & Tableware/IMG_5970.jpg', title: 'Dinnerware' }
  ],
  'Wooden': [
    // Wooden flooring
    { id: 'Wooden-1', image: '/images/Wooden flooring/IMG_6397.JPG', title: 'Wooden Flooring' },
    { id: 'Wooden-2', image: '/images/Wooden flooring/IMG_6396.JPG', title: 'Wooden Flooring' },
    { id: 'Wooden-3', image: '/images/Wooden flooring/IMG_5818.JPG', title: 'Wooden Flooring' },
    { id: 'Wooden-4', image: '/images/Wooden flooring/IMG_5815.JPG', title: 'Wooden Flooring' },
    { id: 'Wooden-5', image: '/images/Wooden flooring/IMG_5071.JPG', title: 'Wooden Flooring' },
    { id: 'Wooden-6', image: '/images/Wooden flooring/IMG_2169.JPG', title: 'Wooden Flooring' },
    { id: 'Wooden-7', image: '/images/Wooden flooring/cae93d7e-251d-4f79-a544-2dbdb6e09d90.JPG', title: 'Wooden Flooring' },
    { id: 'Wooden-8', image: '/images/Wooden flooring/cadf71eb-ff67-4105-a8d3-242b155563ea.JPG', title: 'Wooden Flooring' },
    { id: 'Wooden-9', image: '/images/Wooden flooring/938cc853-ba4c-4825-b2df-4f8fabc961aa.JPG', title: 'Wooden Flooring' },
    { id: 'Wooden-10', image: '/images/Wooden flooring/85abc5d6-bcee-4609-9326-eed93055eab7.JPG', title: 'Wooden Flooring' },
    { id: 'Wooden-11', image: '/images/Wooden flooring/73c876ac-799b-4863-a32c-f278928daf3c.JPG', title: 'Wooden Flooring' },
    { id: 'Wooden-12', image: '/images/Wooden flooring/66e0373b-0051-4823-9b1a-0ca93037407f.JPG', title: 'Wooden Flooring' },
    { id: 'Wooden-13', image: '/images/Wooden flooring/52a13ad4-3c1d-4d40-b650-8b7fd4585756.JPG', title: 'Wooden Flooring' },
    { id: 'Wooden-14', image: '/images/Wooden flooring/27c4eba8-c6ef-4f71-bb62-9c337d1c12f2.JPG', title: 'Wooden Flooring' }
  ],
  'Tiles': [
    // Tiles
    { id: 'Tiles-1', image: '/images/Tiles/PHOTO-2025-04-19-15-22-18.jpg', title: 'Tile' },
    { id: 'Tiles-2', image: '/images/Tiles/PHOTO-2025-04-19-15-22-18 8.JPG', title: 'Tile' },
    { id: 'Tiles-3', image: '/images/Tiles/PHOTO-2025-04-19-15-22-18 7.JPG', title: 'Tile' },
    { id: 'Tiles-4', image: '/images/Tiles/PHOTO-2025-04-19-15-22-18 6.JPG', title: 'Tile' },
    { id: 'Tiles-5', image: '/images/Tiles/PHOTO-2025-04-19-15-22-18 5.JPG', title: 'Tile' },
    { id: 'Tiles-6', image: '/images/Tiles/PHOTO-2025-04-19-15-22-18 4.jpg', title: 'Tile' },
    { id: 'Tiles-7', image: '/images/Tiles/PHOTO-2025-04-19-15-22-18 3.jpg', title: 'Tile' },
    { id: 'Tiles-8', image: '/images/Tiles/PHOTO-2025-04-19-15-22-18 2.JPG', title: 'Tile' },
    { id: 'Tiles-9', image: '/images/Tiles/PHOTO-2025-04-19-15-20-56.JPG', title: 'Tile' },
    { id: 'Tiles-10', image: '/images/Tiles/PHOTO-2025-04-19-15-20-56 9.jpg', title: 'Tile' },
    { id: 'Tiles-11', image: '/images/Tiles/PHOTO-2025-04-19-15-20-56 8.JPG', title: 'Tile' },
    { id: 'Tiles-12', image: '/images/Tiles/PHOTO-2025-04-19-15-20-56 7.jpg', title: 'Tile' },
    { id: 'Tiles-13', image: '/images/Tiles/PHOTO-2025-04-19-15-20-56 6.jpg', title: 'Tile' },
    { id: 'Tiles-14', image: '/images/Tiles/PHOTO-2025-04-19-15-20-56 5.JPG', title: 'Tile' },
    { id: 'Tiles-15', image: '/images/Tiles/PHOTO-2025-04-19-15-20-56 4.JPG', title: 'Tile' },
    { id: 'Tiles-16', image: '/images/Tiles/PHOTO-2025-04-19-15-20-56 3.jpg', title: 'Tile' },
    { id: 'Tiles-17', image: '/images/Tiles/PHOTO-2025-04-19-15-20-56 2.jpg', title: 'Tile' },
    { id: 'Tiles-18', image: '/images/Tiles/PHOTO-2025-04-19-15-20-56 13.JPG', title: 'Tile' },
    { id: 'Tiles-19', image: '/images/Tiles/PHOTO-2025-04-19-15-20-56 12.JPG', title: 'Tile' },
    { id: 'Tiles-20', image: '/images/Tiles/PHOTO-2025-04-19-15-20-56 11.jpg', title: 'Tile' },
    { id: 'Tiles-21', image: '/images/Tiles/PHOTO-2025-04-19-15-20-56 10.jpg', title: 'Tile' },
    { id: 'Tiles-22', image: '/images/Tiles/PHOTO-2025-04-19-15-20-55.jpg', title: 'Tile' },
    { id: 'Tiles-23', image: '/images/Tiles/PHOTO-2025-04-19-15-20-54.jpg', title: 'Tile' },
    { id: 'Tiles-24', image: '/images/Tiles/PHOTO-2025-04-19-15-20-54 2.JPG', title: 'Tile' },
    { id: 'Tiles-25', image: '/images/Tiles/PHOTO-2025-04-17-15-37-45.JPG', title: 'Tile' },
    { id: 'Tiles-26', image: '/images/Tiles/PHOTO-2025-04-17-15-37-45 5.JPG', title: 'Tile' },
    { id: 'Tiles-27', image: '/images/Tiles/PHOTO-2025-04-17-15-37-45 4.JPG', title: 'Tile' },
    { id: 'Tiles-28', image: '/images/Tiles/PHOTO-2025-04-17-15-37-45 3.JPG', title: 'Tile' },
    { id: 'Tiles-29', image: '/images/Tiles/PHOTO-2025-04-17-15-37-45 2.JPG', title: 'Tile' },
    { id: 'Tiles-30', image: '/images/Tiles/PHOTO-2025-04-17-15-37-44.JPG', title: 'Tile' },
    { id: 'Tiles-31', image: '/images/Tiles/PHOTO-2025-04-17-15-37-43.JPG', title: 'Tile' },
    { id: 'Tiles-32', image: '/images/Tiles/PHOTO-2025-04-17-15-37-43 6.JPG', title: 'Tile' },
    { id: 'Tiles-33', image: '/images/Tiles/PHOTO-2025-04-17-15-37-43 5.JPG', title: 'Tile' },
    { id: 'Tiles-34', image: '/images/Tiles/PHOTO-2025-04-17-15-37-43 4.JPG', title: 'Tile' },
    { id: 'Tiles-35', image: '/images/Tiles/PHOTO-2025-04-17-15-37-43 3.JPG', title: 'Tile' },
    { id: 'Tiles-36', image: '/images/Tiles/PHOTO-2025-04-17-15-37-43 2.JPG', title: 'Tile' }
  ],
  'Wallpapers': [
    // Wallpapers
    { id: 'Wallpapers-1', image: '/images/Wallpapers/IMG_7907.JPG', title: 'Wallpaper' },
    { id: 'Wallpapers-2', image: '/images/Wallpapers/IMG_5733.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-3', image: '/images/Wallpapers/IMG_5732.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-4', image: '/images/Wallpapers/IMG_5731.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-5', image: '/images/Wallpapers/IMG_5730.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-6', image: '/images/Wallpapers/IMG_5729.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-7', image: '/images/Wallpapers/IMG_5728.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-8', image: '/images/Wallpapers/IMG_5727.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-9', image: '/images/Wallpapers/IMG_5726.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-10', image: '/images/Wallpapers/IMG_5725.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-11', image: '/images/Wallpapers/IMG_5724.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-12', image: '/images/Wallpapers/IMG_5723.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-13', image: '/images/Wallpapers/IMG_5722.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-14', image: '/images/Wallpapers/IMG_5721.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-15', image: '/images/Wallpapers/IMG_5720.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-16', image: '/images/Wallpapers/IMG_5719.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-17', image: '/images/Wallpapers/IMG_5718.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-18', image: '/images/Wallpapers/IMG_5717.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-19', image: '/images/Wallpapers/IMG_5716.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-20', image: '/images/Wallpapers/IMG_5715.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-21', image: '/images/Wallpapers/IMG_5714.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-22', image: '/images/Wallpapers/IMG_5713.jpg', title: 'Wallpaper' },
    { id: 'Wallpapers-23', image: '/images/Wallpapers/dab33665-ff07-4616-9b68-a5389dcb42c7.JPG', title: 'Wallpaper' },
    { id: 'Wallpapers-24', image: '/images/Wallpapers/d1a54e6b-6cde-445c-a1f4-7724c5cf1923.JPG', title: 'Wallpaper' },
    { id: 'Wallpapers-25', image: '/images/Wallpapers/77219c95-45b7-4020-8568-04083b67f86a.JPG', title: 'Wallpaper' },
    { id: 'Wallpapers-26', image: '/images/Wallpapers/706ec41a-bdf2-461e-8f7d-7770a1c7e25f.JPG', title: 'Wallpaper' },
    { id: 'Wallpapers-27', image: '/images/Wallpapers/475aa0ac-8f44-43a2-a8ca-b12996a764d4.JPG', title: 'Wallpaper' }
  ]
};

const categories = [
  'Wallpapers',
  'F-doors',
  'Carpets',
  'F-consoles',
  'F-sofas',
  'Dinnerware',
  'F-kitchen',
  'Wooden',
  'Tiles'
];

// Map new short category names to folder names for image paths
const categoryFolderMap = {
  'Wallpapers': 'Wallpapers',
  'F-doors': 'Furniture-doors',
  'Carpets': 'Carpets',
  'F-consoles': 'Furniture-consoles',
  'F-sofas': 'Furniture-sofas',
  'Dinnerware': 'Dinnerware & Tableware',
  'F-kitchen': 'Furniture-kitchen',
  'Wooden': 'Wooden flooring',
  'Tiles': 'Tiles'
};

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
