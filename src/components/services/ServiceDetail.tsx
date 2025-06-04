import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
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
    // Debug viewport width
    console.log('Viewport width:', window.innerWidth);
  }, []);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

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
        <motion.section 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative h-[50vh] md:h-[70vh] flex items-center"
        >
          <div className="absolute inset-0 z-0">
            <motion.img 
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
          </div>
          
          <motion.div 
            className="container mx-auto px-4 z-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Link to="/services" className="inline-flex items-center text-white/90 mb-8 hover:text-gold transition-all duration-300 group">
                <ArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" size={18} />
                Back to Services
              </Link>
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 md:mb-6"
            >
              {service.title}
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-cream/90 max-w-2xl"
            >
              {truncateDescription(service.description)}
            </motion.p>
          </motion.div>
        </motion.section>
        
        {/* Service Details */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={slideInLeft} className="space-y-8 md:space-y-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-playfair text-olive mb-6 relative">
                    {service.title}
                    <span className="absolute -bottom-2 left-0 w-20 h-0.5 bg-gold"></span>
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
                    {service.description}
                  </p>
                </div>
                
                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-olive/5"
                >
                  <h3 className="text-xl md:text-2xl font-playfair text-olive mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-gold">
                      <path d="M2 20h20"></path>
                      <path d="M5 4h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"></path>
                      <path d="M6 10h12v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4z"></path>
                      <path d="M6 15h12"></path>
                    </svg>
                    Materials Used
                  </h3>
                  <motion.div 
                    className="flex flex-wrap gap-2 md:gap-3"
                    variants={staggerContainer}
                  >
                    {service.materials.map((material, index) => (
                      <motion.span 
                        key={index} 
                        variants={itemVariants}
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-cream-light text-olive rounded-full text-sm font-medium border border-olive/10 hover:bg-olive hover:text-white transition-colors duration-300 cursor-default"
                      >
                        {material}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-olive/5"
                >
                  <h3 className="text-xl md:text-2xl font-playfair text-olive mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-gold">
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
                      <path d="M12 11h4"></path>
                      <path d="M12 16h4"></path>
                      <path d="M8 11h.01"></path>
                      <path d="M8 16h.01"></path>
                    </svg>
                    Our Process
                  </h3>
                  <motion.div 
                    className="relative"
                    variants={staggerContainer}
                  >
                    <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-olive/10"></div>
                    <ol className="space-y-4 md:space-y-6">
                      {service.process.map((step, index) => (
                        <motion.li 
                          key={index} 
                          variants={itemVariants}
                          className="relative pl-10 md:pl-12"
                        >
                          <span className="absolute left-0 top-0 bg-olive text-white w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-sm font-medium shadow-md">
                            {index + 1}
                          </span>
                          <div className="bg-cream-light/50 rounded-lg p-3 md:p-4 border border-olive/5">
                            <span className="text-olive font-medium">{step}</span>
                          </div>
                        </motion.li>
                      ))}
                    </ol>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={slideInRight}
                className="grid grid-cols-2 gap-4 md:gap-6"
              >
                {service.galleryImages ? (
                  service.galleryImages.map((img, index) => (
                    <motion.div 
                      key={index} 
                      variants={itemVariants}
                      className={`group relative overflow-hidden rounded-xl shadow-lg ${index === 0 ? 'col-span-2' : ''}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.img
                        src={img}
                        alt={`${service.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.div>
                  ))
                ) : (
                  <>
                    <motion.div 
                      variants={itemVariants}
                      className="col-span-2 group relative overflow-hidden rounded-xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[300px] md:h-[400px] object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.div 
                      variants={itemVariants}
                      className="group relative overflow-hidden rounded-xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.img
                        src={`https://source.unsplash.com/random/600x400/?${service.title.toLowerCase().replace(/\s+/g, '-')}-detail-1`}
                        alt={`${service.title} Detail 1`}
                        className="w-full h-[200px] md:h-[250px] object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.div 
                      variants={itemVariants}
                      className="group relative overflow-hidden rounded-xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.img
                        src={`https://source.unsplash.com/random/600x400/?${service.title.toLowerCase().replace(/\s+/g, '-')}-detail-2`}
                        alt={`${service.title} Detail 2`}
                        className="w-full h-[200px] md:h-[250px] object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.div>
                  </>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <motion.section 
          className="py-16 md:py-20 bg-cream-light"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              variants={fadeInUp}
              className="max-w-3xl mx-auto bg-white rounded-xl p-8 md:p-12 text-center shadow-lg border border-olive/10"
            >
              <h2 className="text-2xl md:text-3xl font-playfair font-medium text-olive mb-4 md:mb-6">
                Ready to transform your space?
              </h2>
              
              <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto">
                Our experts are ready to help you create the perfect design for your home or office.
                Contact us for a free consultation.
              </p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4 md:gap-6"
                variants={staggerContainer}
              >
                <motion.div variants={itemVariants}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to="/contact" 
                      className="btn-primary px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium inline-flex items-center"
                    >
                      Get a Free Quote
                    </Link>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href="https://wa.me/919999979079"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium inline-flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Chat with Our Expert
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
      <StickyChat />
    </div>
  );
};

export default ServiceDetail;
