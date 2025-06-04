import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from 'framer-motion';

// --- CATEGORY AND IMAGE IMPORTS ---
const galleryCategories = [
  { key: 'Wallpapers', folder: 'Wallpapers' },
  { key: 'F-doors', folder: 'Furniture-doors' },
  { key: 'Carpets', folder: 'Carpets' },
  { key: 'F-consoles', folder: 'Furniture-consoles' },
  { key: 'F-sofas', folder: 'Furniture-sofas' },
  { key: 'Dinnerware', folder: 'Dinnerware & Tableware' },
  { key: 'F-kitchen', folder: 'Furniture-kitchen' },
  { key: 'Wooden', folder: 'Wooden flooring' },
  { key: 'Tiles', folder: 'Tiles' }
];

// Images for each category (first 6 only)
const galleryImages = {
  'Wallpapers': [
    '/images/Wallpapers/IMG_7907.JPG',
    '/images/Wallpapers/IMG_5733.jpg',
    '/images/Wallpapers/IMG_5732.jpg',
    '/images/Wallpapers/IMG_5731.jpg',
    '/images/Wallpapers/IMG_5730.jpg',
    '/images/Wallpapers/IMG_5729.jpg',
  ],
  'F-doors': [
    '/images/Furniture-doors/IMG_8395.JPG',
    '/images/Furniture-doors/IMG_8394.JPG',
    '/images/Furniture-doors/IMG_8393.JPG',
    '/images/Furniture-doors/IMG_8392.JPG',
    '/images/Furniture-doors/IMG_8391.JPG',
    '/images/Furniture-doors/IMG_8307.JPG',
  ],
  'Carpets': [
    '/images/Carpets/IMG_6807.JPG',
    '/images/Carpets/IMG_5125.JPG',
    '/images/Carpets/5eff7b7d-1ca0-474e-bd9c-7e9dd2788095.JPG',
    '/images/Carpets/41f4d41a-95ad-475b-8cde-4d957bd9c231.JPG',
    '/images/Carpets/2e79f3a6-e595-4f38-a17e-3f130e6b3b3b.JPG',
    '/images/Carpets/271c8130-8046-4c68-b79f-37edf746b3b1.JPG',
  ],
  'F-consoles': [
    '/images/Furniture-consoles/IMG_8386.JPG',
    '/images/Furniture-consoles/IMG_8396.JPG',
    '/images/Furniture-consoles/IMG_8390.JPG',
    '/images/Furniture-consoles/IMG_8389.JPG',
    '/images/Furniture-consoles/IMG_8388.JPG',
    '/images/Furniture-consoles/IMG_8387.JPG',
  ],
  'F-sofas': [
    '/images/Furniture-sofas/PHOTO-2025-04-17-15-38-42.JPG',
    '/images/Furniture-sofas/PHOTO-2025-04-17-15-38-42 4.JPG',
    '/images/Furniture-sofas/IMG_8385.JPG',
    '/images/Furniture-sofas/IMG_8383.JPG',
    '/images/Furniture-sofas/IMG_8382.JPG',
    '/images/Furniture-sofas/IMG_8377.JPG',
  ],
  'Dinnerware': [
    '/images/Dinnerware & Tableware/IMG_5978.jpg',
    '/images/Dinnerware & Tableware/IMG_5977.jpg',
    '/images/Dinnerware & Tableware/IMG_5975.jpg',
    '/images/Dinnerware & Tableware/IMG_5973.jpg',
    '/images/Dinnerware & Tableware/IMG_5972.jpg',
    '/images/Dinnerware & Tableware/IMG_5970.jpg',
  ],
  'F-kitchen': [
    '/images/Furniture-kitchen/PHOTO-2025-04-17-15-38-42 3.JPG',
    '/images/Furniture-kitchen/PHOTO-2025-04-17-15-38-41.JPG',
    '/images/Furniture-kitchen/IMG_8376.JPG',
    '/images/Furniture-kitchen/IMG_8375.JPG',
    '/images/Furniture-kitchen/IMG_8374.JPG',
    '/images/Furniture-kitchen/IMG_8373.JPG',
  ],
  'Wooden': [
    '/images/Wooden flooring/IMG_6397.JPG',
    '/images/Wooden flooring/IMG_6396.JPG',
    '/images/Wooden flooring/IMG_5818.JPG',
    '/images/Wooden flooring/IMG_5815.JPG',
    '/images/Wooden flooring/IMG_5071.JPG',
    '/images/Wooden flooring/IMG_2169.JPG',
  ],
  'Tiles': [
    '/images/Tiles/PHOTO-2025-04-19-15-22-18.jpg',
    '/images/Tiles/PHOTO-2025-04-19-15-22-18 8.JPG',
    '/images/Tiles/PHOTO-2025-04-19-15-22-18 7.JPG',
    '/images/Tiles/PHOTO-2025-04-19-15-22-18 6.JPG',
    '/images/Tiles/PHOTO-2025-04-19-15-22-18 5.JPG',
    '/images/Tiles/PHOTO-2025-04-19-15-22-18 4.jpg',
  ]
};

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

const PortfolioPreview = () => {
  const [activeCategory, setActiveCategory] = useState(galleryCategories[0].key);

  const filteredProjects = galleryImages[activeCategory]
    ? galleryImages[activeCategory].map((img, idx) => ({
        id: `${activeCategory}-${idx}`,
        title: `${activeCategory.replace(/-/g, ' ')} #${idx + 1}`,
        category: activeCategory,
        image: img
      }))
    : [];

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.6,0.01,0.05,0.95] } }
  };
  const subtitleVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.2, ease: [0.6,0.01,0.05,0.95] } }
  };
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.08, boxShadow: "0 4px 20px rgba(212,175,55,0.15)", transition: { type: "spring", stiffness: 400, damping: 15 } },
    active: { scale: 0.97 }
  };
  const galleryItemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: 0.1 * i, duration: 0.7, type: "spring", stiffness: 80 } })
  };

  return (
    <section className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="section-title"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            style={{ textShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
          >
            Our Portfolio
          </motion.h2>
          <motion.p
            className="section-subtitle"
            variants={subtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            style={{ textShadow: "0 2px 8px rgba(212,175,55,0.08)" }}
          >
            Explore Our Recent Projects
          </motion.p>
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
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {galleryCategories.map(cat => (
                  <motion.button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`flex-grow text-center px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold/40 ${
                      activeCategory === cat.key
                        ? 'bg-olive text-white shadow-lg'
                        : 'bg-white text-olive hover:bg-olive/10'
                    } w-1/3 max-w-[calc(33.33%-8px)] md:w-auto md:max-w-none`}
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="active"
                  >
                    {cat.key}
                  </motion.button>
                ))}
              </div>
              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredProjects.slice(0, 6).map((project, i) => (
                    <motion.div
                      key={project.id}
                      className="gallery-item relative overflow-hidden rounded-xl shadow-lg group bg-white"
                      custom={i}
                      variants={galleryItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(212,175,55,0.18)" }}
                      transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.6,0.01,0.05,0.95] }}
                      />
                      <motion.div
                        className="gallery-overlay absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="text-white font-playfair text-xl font-medium drop-shadow-lg">
                          {project.title}
                        </h3>
                        <p className="text-cream/80 text-sm drop-shadow">
                          {project.category}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </TabsContent>
            {/* My Work Tab Content */}
            <TabsContent value="mywork">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {myWorkProjects.map((project, i) => (
                    <motion.div
                      key={project.id}
                      className="gallery-item relative overflow-hidden rounded-xl shadow-lg group bg-white"
                      custom={i}
                      variants={galleryItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(212,175,55,0.18)" }}
                      transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.6,0.01,0.05,0.95] }}
                      />
                      <motion.div
                        className="gallery-overlay absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="text-white font-playfair text-xl font-medium drop-shadow-lg">
                          {project.title}
                        </h3>
                        <p className="text-cream/80 text-sm drop-shadow">
                          {project.category}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
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
