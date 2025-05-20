import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    title: 'Luxury Villa Renovation',
    category: 'Flooring',
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2574&auto=format&fit=crop',
    type: 'image'
  },
  {
    id: 2,
    title: 'Modern Apartment Design',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2574&auto=format&fit=crop',
    type: 'image'
  },
  {
    id: 3,
    title: 'Classic Home Makeover',
    category: 'Walls',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2574&auto=format&fit=crop',
    type: 'image'
  },
  {
    id: 4,
    title: 'Corporate Office Interiors',
    category: 'Decor',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2670&auto=format&fit=crop',
    type: 'image'
  },
  {
    id: 5,
    title: 'Boutique Hotel Suite',
    category: 'Flooring',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1974&auto=format&fit=crop',
    type: 'image'
  },
  {
    id: 6,
    title: 'Restaurant Interior Design',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2564&auto=format&fit=crop',
    type: 'image'
  }
];

const myWorkProjects = [
  {
    id: 1,
    title: 'Modern Living Room Design',
    category: 'Interior Design',
    image: '/images/my-work/IMG_8095.jpeg',
    type: 'image'
  },
  {
    id: 2,
    title: 'Elegant Dining Space',
    category: 'Interior Design',
    image: '/images/my-work/IMG_8085.jpeg',
    type: 'image'
  },
  {
    id: 3,
    title: 'Contemporary Kitchen',
    category: 'Kitchen Design',
    image: '/images/my-work/IMG_8093.jpeg',
    type: 'image'
  },
  {
    id: 4,
    title: 'Luxury Bedroom Suite',
    category: 'Interior Design',
    image: '/images/my-work/IMG_8097.jpeg',
    type: 'image'
  },
  {
    id: 5,
    title: 'Modern Bathroom Design',
    category: 'Bathroom Design',
    image: '/images/my-work/IMG_8083.jpeg',
    type: 'image'
  },
  {
    id: 6,
    title: 'Stylish Home Office',
    category: 'Interior Design',
    image: '/images/my-work/e3a50543-2907-4ef1-abf8-7434efb0d44e.jpeg',
    type: 'image'
  },
  {
    id: 7,
    title: 'Cozy Reading Corner',
    category: 'Interior Design',
    image: '/images/my-work/09d323ab-a630-4362-9103-2f9d504a2e88.jpeg',
    type: 'image'
  },
  {
    id: 8,
    title: 'Modern Hallway Design',
    category: 'Interior Design',
    image: '/images/my-work/9feb0480-dba2-4898-b2db-ce279ee25a46.jpeg',
    type: 'image'
  },
  {
    id: 9,
    title: 'Elegant Staircase Design',
    category: 'Interior Design',
    image: '/images/my-work/5d50b21a-adc6-451c-a410-c7a089074dae.jpeg',
    type: 'image'
  },
  {
    id: 10,
    title: 'Contemporary Living Space',
    category: 'Interior Design',
    image: '/images/my-work/f7b582a8-a48b-4c1f-ad59-5779ab056ac1.jpeg',
    type: 'image'
  },
  {
    id: 11,
    title: 'Modern Home Interior',
    category: 'Interior Design',
    image: '/images/my-work/25ceab74-b3d4-422f-b203-fd93de96614b (1).jpeg',
    type: 'image'
  }
];

const categories = ['All', 'Flooring', 'Furniture', 'Walls', 'Decor'];

const PortfolioPreview = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">Explore Our Recent Projects</p>
        </div>
        
        {/* Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="portfolio" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-white/50">
              <TabsTrigger value="portfolio" className="text-base px-6 py-3">Portfolio</TabsTrigger>
              <TabsTrigger value="mywork" className="text-base px-6 py-3">My Work</TabsTrigger>
            </TabsList>
            
            {/* Portfolio Tab Content */}
            <TabsContent value="portfolio">
              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-md transition-colors ${
                      activeCategory === category
                        ? 'bg-olive text-white'
                        : 'bg-white text-olive hover:bg-olive/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <div key={project.id} className="gallery-item">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="gallery-overlay">
                      <h3 className="text-white font-playfair text-xl font-medium">
                        {project.title}
                      </h3>
                      <p className="text-cream/80 text-sm">
                        {project.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* My Work Tab Content */}
            <TabsContent value="mywork">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myWorkProjects.map(project => (
                  <div key={project.id} className="gallery-item">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="gallery-overlay">
                      <h3 className="text-white font-playfair text-xl font-medium">
                        {project.title}
                      </h3>
                      <p className="text-cream/80 text-sm">
                        {project.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/gallery" className="btn-primary inline-flex">
            View Full Gallery <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
