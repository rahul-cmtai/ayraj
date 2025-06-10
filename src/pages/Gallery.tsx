import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StickyChat from '@/components/StickyChat';
import axios from 'axios';

// Define interfaces for type safety
interface ImageData {
  url: string;
  type: string;
  name: string;
  fileId?: string;
}

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image?: ImageData;
  images?: ImageData[];
  galleryItemNo: string;
  createdOn: number;
  updatedOn: number;
  isActive: boolean;
  description?: string;
}

// Add environment variables at the top of the file
const API_BASE_URL = import.meta.env.VITE_API_URL 
const GALLERY_ENDPOINT = `${API_BASE_URL}/gallery`

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log('Fetching gallery data from:', GALLERY_ENDPOINT);
      const response = await axios.get(GALLERY_ENDPOINT);
      console.log('API Response:', response.data);

      // Handle different response structures
      let items = [];
      if (response.data.data) {
        items = response.data.data;
      } else if (Array.isArray(response.data)) {
        items = response.data;
      }

      // Process and validate each item
      const processedItems = items.map((item: any) => ({
        id: item.id || item._id || String(Math.random()),
        title: item.title || "Untitled",
        category: item.category || "Uncategorized",
        image: item.image || null,
        images: item.images || null,
        galleryItemNo: item.galleryItemNo || '',
        createdOn: item.createdOn || Date.now(),
        updatedOn: item.updatedOn || Date.now(),
        isActive: item.isActive !== undefined ? item.isActive : true,
        description: item.description || ''
      }));

      console.log('Processed gallery items:', processedItems);
      setGalleryItems(processedItems);
    } catch (err: any) {
      console.error('Error fetching gallery data:', err);
      setError('Unable to load gallery items. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Filter gallery items based on active category
  const filteredGallery = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const displayedGallery = showAll ? filteredGallery : filteredGallery.slice(0, 9);
  const hasMoreImages = filteredGallery.length > 9;

  // Get unique categories from gallery items
  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-olive border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-2xl font-playfair text-olive">Loading Gallery...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="text-red-600 mb-4 text-5xl">⚠️</div>
            <p className="text-xl md:text-2xl font-playfair text-red-600 mb-4">{error}</p>
            <button 
              onClick={fetchGalleryData}
              className="px-6 py-3 bg-olive text-white rounded-md hover:bg-olive-dark transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
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
              Our Royal Creations
            </h1>
            <p className="text-xl text-cream/90 max-w-3xl mx-auto">
              Explore our portfolio of exquisite interior projects that showcase our commitment to luxury, quality, and exceptional design.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-2 md:flex md:flex-wrap md:justify-center md:gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setShowAll(false);
                  }}
                  className={`px-3 py-2 md:px-6 md:py-3 rounded-md transition-colors text-sm md:text-base ${
                    activeCategory === category
                      ? 'bg-olive text-white'
                      : 'bg-cream text-olive hover:bg-olive/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedGallery.map((item) => (
                <div 
                  key={item.id}
                  className={`gallery-item group relative overflow-hidden cursor-pointer ${
                    item.category === 'Majestic Door' ? 'md:col-span-1 lg:col-span-1' : ''
                  }`}
                  onClick={() => openModal(item)}
                >
                  {(item.image?.url || (item.images && item.images[0]?.url)) ? (
                    <img
                      src={item.image?.url || item.images?.[0].url}
                      alt={item.title}
                      className={`w-full object-contain transition-transform duration-300 group-hover:scale-110 ${
                        item.category === 'Majestic Door' 
                          ? 'h-[500px]' // Taller height for doors
                          : 'h-80' // Normal height for other items
                      }`}
                      onError={(e) => {
                        console.error("Image failed to load:", item.image?.url || item.images?.[0].url);
                        (e.target as HTMLImageElement).src = "/placeholder.svg?height=200&width=300&text=Image+Not+Found";
                      }}
                    />
                  ) : (
                    <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-cream/80 text-sm">
                      {item.category}
                    </p>
                    <h3 className="text-white font-playfair text-xl font-medium">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            
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
        
        <section className="bg-gradient-to-r from-olive to-olive-dark text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-6">
              Love our work? Let's transform your space!
            </h2>
            <p className="text-lg text-cream/90 max-w-2xl mx-auto mb-8">
              Contact us today to discuss your project and receive a personalized quotation. 
              Our team is ready to turn your dreams into reality.
            </p>
            <Link to="/contact" className="btn-secondary bg-white hover:bg-cream text-olive inline-flex">
              Get a Quote
            </Link>
          </div>
        </section>
      </main>
      
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeModal}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-cream"
            >
              ×
            </button>
                          <img
                src={selectedImage.image?.url || selectedImage.images?.[0]?.url || ''}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            <p className="text-white text-center mt-4 font-playfair">
              {selectedImage.title} - {selectedImage.category}
            </p>
          </div>
        </div>
      )}
      
      <Footer />
      <StickyChat />
    </div>
  );
};

export default Gallery;
