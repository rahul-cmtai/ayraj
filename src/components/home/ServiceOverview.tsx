import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import servicesData from '@/data/servicesData';

const ServiceOverview = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  // Function to truncate description to 10 words
  const truncateDescription = (description: string) => {
    const words = description.split(' ');
    if (words.length <= 10) return description;
    return words.slice(0, 10).join(' ') + '...';
  };

  // Utility to detect mobile
  const isMobile = () => window.innerWidth < 768;

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.6
      }
    }
  };

  const cardVariants = (index: number) => ({
    hidden: { 
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, // Alternate between left and right
      y: 20,
      scale: 0.9,
      rotateY: index % 2 === 0 ? -10 : 10 // Slight rotation based on direction
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        mass: 0.8,
        delay: index * 0.1 // Stagger the animations
      }
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  });

  const imageVariants = {
    hover: {
      scale: 1.15,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { 
      opacity: 0,
      x: -10
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2
      }
    },
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
        delay: 0.1
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
        delay: 0.2
      }
    }
  };

  // Wave animation variants
  const waveVariants = {
    animate: (i: number) => ({
      y: [0, -20, 0],
      x: [0, i % 2 === 0 ? 30 : -30, 0],
      rotate: [0, i % 2 === 0 ? 5 : -5, 0],
      transition: {
        duration: 8 + i,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2
      }
    })
  };

  // Glowing orb variants
  const orbVariants = {
    animate: (i: number) => ({
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.4, 0.2],
      x: [0, i % 2 === 0 ? 50 : -50, 0],
      y: [0, -50, 0],
      transition: {
        duration: 6 + i,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3
      }
    })
  };

  // Generate waves
  const waves = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    width: 300 + Math.random() * 200,
    height: 100 + Math.random() * 100,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: i % 2 === 0 ? 'rgba(255,215,0,0.15)' : 'rgba(255,215,0,0.1)'
  }));

  // Generate orbs
  const orbs = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: 50 + Math.random() * 100,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: i % 3 === 0 ? 'rgba(255,215,0,0.2)' : 'rgba(255,215,0,0.15)'
  }));

  return (
    <motion.section 
      style={{ opacity, scale }}
      className="py-16 md:py-20 overflow-hidden relative bg-gradient-to-b from-cream-light via-cream-light/95 to-cream-light"
    >
      {/* Animated waves */}
      {waves.map((wave) => (
        <motion.div
          key={`wave-${wave.id}`}
          className="absolute rounded-full blur-2xl"
          style={{
            width: wave.width,
            height: wave.height,
            left: `${wave.x}%`,
            top: `${wave.y}%`,
            background: wave.color,
            transform: 'translate(-50%, -50%)'
          }}
          variants={waveVariants}
          animate="animate"
          custom={wave.id}
        />
      ))}

      {/* Glowing orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          className="absolute rounded-full blur-xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            background: orb.color,
            transform: 'translate(-50%, -50%)'
          }}
          variants={orbVariants}
          animate="animate"
          custom={orb.id}
        />
      ))}

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 
            variants={titleVariants}
            className="section-title text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 relative"
          >
            <motion.span
              className="relative z-10"
              animate={{
                textShadow: [
                  '0 0 10px rgba(255,215,0,0.3)',
                  '0 0 20px rgba(255,215,0,0.5)',
                  '0 0 10px rgba(255,215,0,0.3)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Our Services
            </motion.span>
          </motion.h2>
          <motion.p 
            variants={subtitleVariants}
            className="section-subtitle text-lg md:text-xl text-gray-600"
          >
            Explore Our Premium Offerings
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants(index)}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              onHoverStart={() => setHoveredCardId(service.id)}
              onHoverEnd={() => setHoveredCardId(null)}
              onClick={() => {
                if (isMobile()) {
                  setActiveCardId(activeCardId === service.id ? null : service.id);
                }
              }}
              onMouseLeave={() => {
                if (isMobile()) return;
                setActiveCardId(null);
              }}
              className="service-card group relative h-[280px] md:h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer transform-gpu perspective-1000 bg-white/90 backdrop-blur-sm"
              style={{
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <motion.img
                variants={imageVariants}
                src={service.image}
                alt={service.title}
                className={`w-full h-full transition-all duration-300 bg-white ${
                  ['Furniture Doors', 'Furniture Consoles'].includes(service.title)
                    ? 'object-contain'
                    : 'object-cover'
                }`}
              />
              <AnimatePresence>
                {(activeCardId === service.id || hoveredCardId === service.id) && (
                  <motion.div
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"
                  >
                    <motion.div 
                      variants={contentVariants}
                      className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    >
                      <motion.h3 
                        className="text-xl md:text-2xl font-playfair font-medium text-white mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p 
                        className="text-cream/90 text-sm md:text-base mb-4 line-clamp-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {truncateDescription(service.description)}
                      </motion.p>
                      <motion.div
                        variants={linkVariants}
                        whileHover="hover"
                      >
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center text-gold hover:text-gold-light transition-colors font-medium"
                        >
                          Learn More
                          <motion.span 
                            className="ml-2"
                            animate={{ 
                              x: [0, 5, 0],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 1.5,
                              ease: "easeInOut"
                            }}
                          >
                            <ArrowRight size={18} />
                          </motion.span>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServiceOverview;
